import { NextResponse } from "next/server";

// AC custom field IDs for first-touch attribution. Configure in .env.local once
// the corresponding custom fields are created in ActiveCampaign. Any field left
// unset is silently skipped — no error, just won't write that value to AC.
const AC_ATTRIBUTION_FIELDS: Record<string, string | undefined> = {
  utm_source: process.env.AC_FIELD_UTM_SOURCE,
  utm_medium: process.env.AC_FIELD_UTM_MEDIUM,
  utm_campaign: process.env.AC_FIELD_UTM_CAMPAIGN,
  utm_content: process.env.AC_FIELD_UTM_CONTENT,
  utm_term: process.env.AC_FIELD_UTM_TERM,
  referrer: process.env.AC_FIELD_REFERRER,
  landing_page: process.env.AC_FIELD_LANDING_PAGE,
};

function buildAttributionFieldValues(
  attribution: Record<string, string | undefined> | undefined
): { field: string; value: string }[] {
  if (!attribution) return [];
  return Object.entries(AC_ATTRIBUTION_FIELDS)
    .filter(([key, fieldId]) => fieldId && attribution[key])
    .map(([key, fieldId]) => ({
      field: fieldId as string,
      value: String(attribution[key]),
    }));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Server-side validation: backstop against junk/spam leads
    const email = String(body.email || "").trim();
    const phoneDigits = String(body.phone || "").replace(/\D/g, "");
    const zip = String(body.zip || "").trim();
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // US phone: 10 digits, or 11 digits starting with country code 1
    const phoneValid =
      phoneDigits.length === 10 ||
      (phoneDigits.length === 11 && phoneDigits.startsWith("1"));
    const zipValid = /^[0-9]{5}$/.test(zip);

    if (!emailValid || !phoneValid || !zipValid || !firstName || !lastName) {
      return NextResponse.json(
        {
          error:
            "Please provide your name, a valid email, a US phone number, and ZIP code.",
        },
        { status: 400 }
      );
    }

    // 1️⃣ Create / update contact (sync = upsert, won't fail on duplicates)
    const fieldValues = [
      ...(body.zip ? [{ field: "90", value: body.zip }] : []),
      ...buildAttributionFieldValues(body.attribution),
    ];

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
          contact: {
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
            fieldValues,
          },
        }),
      }
    );

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      console.error("AC contact sync failed:", contactData);
      return NextResponse.json(
        { error: "We couldn't process your request right now. Please try again shortly." },
        { status: 400 }
      );
    }

    const contactId = contactData?.contact?.id;
    if (!contactId) {
      console.error("No contact ID returned from AC:", contactData);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // 2️⃣ Subscribe to Organic Lead List (ID = 2)
    const listRes = await fetch(
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

    if (!listRes.ok) {
      const listData = await listRes.json();
      console.error("List subscribe failed:", listData);
      // Don't fail the whole submission for a list subscribe issue
    }

    // 3️⃣ Tag contact for campaign tracking (if leadSource provided)
    if (body.leadSource && contactId) {
      try {
        const tagName = body.leadSource.split("_")[0] + "_campaign"; // e.g. "arizona_campaign"
        // Search for existing tag
        const tagSearchRes = await fetch(
          `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/tags?search=${encodeURIComponent(tagName)}`,
          { headers: { "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY! } }
        );
        const tagSearchData = await tagSearchRes.json();
        let tagId = tagSearchData.tags?.find((t: { tag: string }) => t.tag === tagName)?.id;

        // Create tag if it doesn't exist
        if (!tagId) {
          const createTagRes = await fetch(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/tags`,
            {
              method: "POST",
              headers: {
                "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ tag: { tag: tagName, tagType: "contact" } }),
            }
          );
          const createTagData = await createTagRes.json();
          tagId = createTagData.tag?.id;
        }

        // Apply tag to contact
        if (tagId) {
          await fetch(
            `${process.env.ACTIVE_CAMPAIGN_API_URL}/api/3/contactTags`,
            {
              method: "POST",
              headers: {
                "Api-Token": process.env.ACTIVE_CAMPAIGN_API_KEY!,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ contactTag: { contact: contactId, tag: tagId } }),
            }
          );
        }
      } catch (err) {
        console.error("AC tag failed (non-fatal):", err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Franchise lead error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
