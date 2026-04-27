"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, X } from "lucide-react";

/* ---------- TYPES ---------- */
interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ---------- PRESET QUESTIONS ---------- */
const PRESETS = [
  { label: "Investment Cost", question: "What does it cost to open a Spavia?" },
  { label: "My Market", question: "Is my market available?" },
  { label: "Getting Started", question: "How do I get started?" },
  { label: "Next Step", question: "What's my next step?" },
];

/* ---------- COMPONENT ---------- */
export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [sessionId] = useState(() => {
    if (typeof window === "undefined") return "";
    const existing = sessionStorage.getItem("spavia-chat-section-session");
    if (existing) return existing;
    const id = crypto.randomUUID();
    sessionStorage.setItem("spavia-chat-section-session", id);
    return id;
  });

  const [userMessageCount, setUserMessageCount] = useState(0);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailDismissed, setEmailDismissed] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ---------- AUTO SCROLL (within container only, not page) ---------- */
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  /* ---------- EMAIL CAPTURE TRIGGER ----------
     Trigger after the FIRST assistant response finishes streaming.
     98% of users send only one message, so waiting for 3 means we never capture anyone. */
  useEffect(() => {
    if (
      userMessageCount >= 1 &&
      !isStreaming &&
      !emailSubmitted &&
      !emailDismissed
    ) {
      setShowEmailCapture(true);
    }
  }, [userMessageCount, isStreaming, emailSubmitted, emailDismissed]);

  /* ---------- EMAIL SUBMIT ---------- */
  const submitEmail = async () => {
    if (!emailInput.trim()) return;
    try {
      await fetch("/api/chat", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, email: emailInput.trim() }),
      });
      setEmailSubmitted(true);
      setShowEmailCapture(false);
    } catch {
      // Silent fail
    }
  };

  /* ---------- SEND MESSAGE ---------- */
  const sendMessage = async (text: string) => {
    if (!text.trim() || isStreaming) return;

    setHasStarted(true);
    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);
    setUserMessageCount((c) => c + 1);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "chatbot_message_sent", {
        event_category: "engagement",
        event_label: "homepage_chat_section",
      });
    }

    setMessages([...newMessages, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          sessionId,
          pageUrl: "/",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get response");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 px-6" style={{ scrollSnapAlign: "none" }}>
      <div className="max-w-4xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#C2A878]/10 px-4 py-2 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#C2A878]" />
              <span className="text-sm font-semibold text-[#C2A878] tracking-wide uppercase">
                Ask Spavia
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Have Questions? Get Answers Instantly
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Our franchise advisor can help you learn about investment,
              training, territories, and more.
            </p>
          </motion.div>
        </div>

        {/* --- CHAT AREA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#FAFAF8] rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
        >
          {/* Content area — always shows welcome + messages, chips before first send */}
          <div
            ref={messagesContainerRef}
            className="min-h-[320px] max-h-[60vh] md:max-h-[460px] overflow-y-auto
                       p-5 md:p-8 space-y-4"
            style={{ overscrollBehavior: "contain" }}
          >
            {/* Welcome bubble — always visible */}
            <div className="flex justify-start">
              <div className="max-w-[88%] md:max-w-[75%] px-5 py-3.5 text-sm leading-relaxed
                              bg-white text-gray-800 rounded-2xl rounded-bl-sm
                              border border-gray-100 shadow-sm">
                Hi! Ask me anything about the Spavia franchise — investment,
                training, territories, or how to get started.
              </div>
            </div>

            {/* Preset chips — only before first message */}
            {!hasStarted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => sendMessage(p.question)}
                    className="text-sm px-4 py-2.5 rounded-full
                               border border-[#C2A878]/40 bg-white text-[#8B7355]
                               hover:bg-[#C2A878]/10 hover:border-[#C2A878]
                               active:scale-95 transition-all duration-150
                               font-medium whitespace-nowrap"
                  >
                    {p.label}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Messages */}
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[75%] px-5 py-3.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#C2A878] text-white rounded-2xl rounded-br-sm"
                      : "bg-white text-gray-800 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm"
                  }`}
                >
                  {msg.content ? (
                    <LinkifyText text={msg.content} isUser={msg.role === "user"} />
                  ) : (
                    isStreaming && i === messages.length - 1 ? (
                      <TypingDots />
                    ) : null
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Email Capture */}
          <AnimatePresence>
            {showEmailCapture && !emailSubmitted && !emailDismissed && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-gray-200"
              >
                <div className="px-4 md:px-8 py-3 bg-[#FAFAF7] flex items-center gap-2">
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    enterKeyHint="send"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Your email for follow-up"
                    className="flex-1 min-w-0 text-base md:text-sm px-3 py-2.5 rounded-lg border border-gray-200
                               focus:outline-none focus:border-[#C2A878] bg-white text-gray-900 placeholder:text-gray-400"
                    onKeyDown={(e) => e.key === "Enter" && submitEmail()}
                  />
                  <button
                    onClick={submitEmail}
                    className="text-sm font-semibold px-4 py-2.5 rounded-lg shrink-0
                               bg-[#C2A878] text-white hover:bg-[#B09868] transition-colors
                               active:scale-95"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => setEmailDismissed(true)}
                    className="text-gray-400 hover:text-gray-600 p-2 shrink-0"
                    aria-label="Dismiss"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {emailSubmitted && (
            <div className="px-4 md:px-8 py-2 bg-[#FAFAF7] border-t border-gray-200">
              <p className="text-xs text-[#C2A878] font-medium text-center">
                Thanks! Our team may follow up with you.
              </p>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 p-3 md:p-4 md:px-8 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 md:gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                inputMode="text"
                autoComplete="off"
                enterKeyHint="send"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the Spavia franchise..."
                disabled={isStreaming}
                className="flex-1 min-w-0 text-base md:text-sm px-4 md:px-5 py-3 rounded-xl border border-gray-200
                           focus:outline-none focus:border-[#C2A878]
                           disabled:opacity-50 bg-gray-50 text-gray-900
                           placeholder:text-gray-400"
                maxLength={1000}
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="w-12 h-12 md:w-11 md:h-11 flex items-center justify-center rounded-xl bg-[#C2A878] text-white
                           hover:bg-[#B09868] transition-all
                           disabled:opacity-40 disabled:cursor-not-allowed
                           active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Subtle disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-4">
          AI-powered assistant. For detailed information, connect with our
          franchise development team.
        </p>
      </div>
    </section>
  );
}

/* ---------- LINKIFY TEXT ---------- */
function LinkifyText({ text, isUser }: { text: string; isUser: boolean }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return (
    <>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline break-all ${isUser ? "text-white/90" : "text-[#C2A878]"}`}
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* ---------- TYPING DOTS ---------- */
function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </span>
  );
}

/* ---------- GTAG TYPE ---------- */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
