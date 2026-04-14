import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "@/lib/supabaseServer";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chatSystemPrompt";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/* ---------- RATE LIMITING ---------- */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

/* ---------- TYPES ---------- */
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/* ---------- HANDLER ---------- */
export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many messages. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const { messages, sessionId, pageUrl } = await req.json();

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (messages.length > 50) {
      return new Response(
        JSON.stringify({ error: "Conversation too long" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const lastMessage = messages[messages.length - 1];
    if (
      lastMessage.role !== "user" ||
      typeof lastMessage.content !== "string" ||
      lastMessage.content.length > 1000
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid message" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Stream response from Claude
    const stream = anthropic.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 150,
      temperature: 0.7,
      system: CHAT_SYSTEM_PROMPT,
      messages: messages.map((m: ChatMessage) => ({
        role: m.role,
        content: m.content,
      })),
    });

    // Collect full response for DB storage
    let fullResponse = "";

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const text = event.delta.text;
              fullResponse += text;
              controller.enqueue(new TextEncoder().encode(text));
            }
          }
          controller.close();

          // Save conversation to Supabase with retry
          if (sessionId) {
            const allMessages = [
              ...messages,
              { role: "assistant", content: fullResponse },
            ];
            const saveData = {
              session_id: sessionId,
              messages: allMessages,
              page_url: pageUrl || null,
              updated_at: new Date().toISOString(),
            };

            for (let attempt = 0; attempt < 3; attempt++) {
              const { error } = await supabase
                .from("chat_conversations")
                .upsert(saveData, { onConflict: "session_id" });
              if (!error) break;
              console.error(`Chat save attempt ${attempt + 1} failed:`, error);
              if (attempt < 2) await new Promise((r) => setTimeout(r, 500));
            }
          }
        } catch (err) {
          console.error("Stream error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

/* ---------- EMAIL CAPTURE + ACTIVECAMPAIGN ---------- */
export async function PATCH(req: Request) {
  try {
    const { sessionId, email } = await req.json();

    if (!sessionId || !email) {
      return new Response(
        JSON.stringify({ error: "Missing sessionId or email" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Save email to Supabase
    const { error } = await supabase
      .from("chat_conversations")
      .update({ user_email: email, updated_at: new Date().toISOString() })
      .eq("session_id", sessionId);

    if (error) {
      console.error("Email save error:", error);
    }

    // 2. Push to ActiveCampaign (fire-and-forget)
    try {
      // Create/update contact
      const contactRes = await fetch(
        `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contact/sync`,
        {
          method: "POST",
          headers: {
            "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            contact: { email },
          }),
        }
      );

      const contactData = await contactRes.json();
      const contactId = contactData?.contact?.id;

      if (contactId) {
        // Subscribe to Organic Lead List (ID = 2)
        await fetch(
          `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactLists`,
          {
            method: "POST",
            headers: {
              "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              contactList: {
                list: "2",
                contact: contactId,
                status: 1,
              },
            }),
          }
        );

        // Tag as chatbot_lead
        const tagName = "chatbot_lead";
        const tagSearchRes = await fetch(
          `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/tags?search=${encodeURIComponent(tagName)}`,
          { headers: { "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY! } }
        );
        const tagSearchData = await tagSearchRes.json();
        let tagId = tagSearchData.tags?.find(
          (t: { tag: string }) => t.tag === tagName
        )?.id;

        if (!tagId) {
          const createTagRes = await fetch(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/tags`,
            {
              method: "POST",
              headers: {
                "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tag: { tag: tagName, tagType: "contact" },
              }),
            }
          );
          const createTagData = await createTagRes.json();
          tagId = createTagData.tag?.id;
        }

        if (tagId) {
          await fetch(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactTags`,
            {
              method: "POST",
              headers: {
                "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                contactTag: { contact: contactId, tag: tagId },
              }),
            }
          );
        }
      }
    } catch (acErr) {
      console.error("AC chatbot lead error (non-fatal):", acErr);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email capture error:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
