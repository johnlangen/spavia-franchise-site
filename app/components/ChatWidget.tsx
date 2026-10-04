"use client";

import { AnimatePresence,motion } from "framer-motion";
import { ChevronDown,MessageCircle,Send,X } from "lucide-react";
import { useCallback,useEffect,useRef,useState } from "react";

/* ---------- TYPES ---------- */
interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ---------- PRESET QUESTIONS ----------
   "What does it cost?" intentionally removed — it was 84% of usage with 0% email capture.
   Remaining presets bias toward higher-intent, conversation-starting questions. */
const PRESETS = [
  "Is my market available?",
  "How do I get started?",
  "What's the timeline to open?",
  "Do I need spa industry experience?",
];

/* ---------- COMPONENT ---------- */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [sessionId] = useState(() => {
    if (typeof window === "undefined") return "";
    const existing = sessionStorage.getItem("spavia-chat-session");
    if (existing) return existing;
    const id = crypto.randomUUID();
    sessionStorage.setItem("spavia-chat-session", id);
    return id;
  });
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailDismissed, setEmailDismissed] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  /* ---------- AUTO SCROLL ---------- */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  /* Keep keyboard focus predictable without changing the chat request flow. */
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const timer = setTimeout(() => inputRef.current?.focus(), 300);
    return () => { clearTimeout(timer); previous?.focus(); };
  }, [isOpen]);

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

  /* ---------- SEND MESSAGE ---------- */
  const sendMessage = async (text: string) => {
    if (!text.trim() || isStreaming) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsStreaming(true);
    setUserMessageCount((c) => c + 1);

    // Fire analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "chatbot_message_sent");
    }

    // Add placeholder assistant message
    setMessages([...newMessages, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          sessionId,
          pageUrl: typeof window !== "undefined" ? window.location.pathname : "",
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
            "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or reach out to our team directly at alisa@spaviadayspa.com.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

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
      // Silent fail — don't disrupt chat
    }
  };

  /* ---------- OPEN / CLOSE ---------- */
  const toggleChat = () => {
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "chatbot_opened");
    }
  };

  /* ---------- RENDER ---------- */
  return (
    <>
      {/* ===== CHAT BUBBLE ===== */}
      <motion.button
        onClick={toggleChat}
        className="chat-launcher fixed z-[60] bottom-6 right-6 md:bottom-6 md:right-6
 w-14 h-14 rounded-full shadow-lg flex items-center justify-center
 transition-colors duration-200"
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ===== CHAT PANEL ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="Chat with Spavia"
            onKeyDown={event => { if (event.key === "Escape") setIsOpen(false); }}
            className="fixed z-[60]
 bottom-0 left-0 right-0 top-0
 md:bottom-24 md:right-6 md:left-auto md:top-auto
 md:w-[390px] md:h-[560px]
 bg-white md:rounded-sm md:shadow-2xl
 flex flex-col overflow-hidden
 border border-gray-200 brand-light"
          >
            {/* --- HEADER --- */}
            <div className="bg-black text-white px-5 py-4 flex items-center justify-between shrink-0 brand-dark">
              <div>
                <h3 className="font-semibold text-sm tracking-wide">
                  Chat with Spavia
                </h3>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Franchise Information
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* --- MESSAGES --- */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{ overscrollBehavior: "contain" }}
            >
              {/* Welcome message */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-[#f5f5f5] text-gray-800 rounded-sm rounded-bl-sm px-4 py-3 text-sm leading-relaxed brand-light">
                  Welcome! I&apos;m here to help you learn about the Spavia
                  franchise opportunity. What questions can I answer for you?
                </div>
              </div>

              {/* Preset questions (only before first message) */}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {PRESETS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs px-3 py-2 rounded-full border border-[#b38a5f]/40
 text-[var(--accent-text)] hover:bg-[#b38a5f]/10 transition-colors
 text-left leading-snug"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Conversation */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-[#b38a5f] text-black rounded-sm rounded-br-sm"
                        : "bg-[#f5f5f5] text-gray-800 rounded-sm rounded-bl-sm"
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
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* --- SCROLL TO BOTTOM BUTTON --- */}
            <ScrollToBottomButton
              containerRef={messagesContainerRef}
              onClick={scrollToBottom}
            />

            {/* --- EMAIL CAPTURE --- */}
            <AnimatePresence>
              {showEmailCapture && !emailSubmitted && !emailDismissed && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-gray-100"
                >
                  <div className="px-4 py-3 bg-[#f5f5f5] flex items-center gap-2 brand-light">
                    <input
                      type="email"
                      aria-label="Email for your chat follow-up"
                      inputMode="email"
                      autoComplete="email"
                      enterKeyHint="send"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Your email for follow-up"
                      className="flex-1 min-w-0 text-base md:text-sm px-3 py-2.5 rounded-sm border border-gray-200
 focus:outline-none focus:border-[#b38a5f] bg-white text-gray-900 placeholder:text-gray-400 brand-light"
                      onKeyDown={(e) => e.key === "Enter" && submitEmail()}
                    />
                    <button
                      onClick={submitEmail}
                      className="text-sm font-semibold px-4 py-2.5 rounded-sm shrink-0
 bg-[#b38a5f] text-black hover:bg-[#B09868] transition-colors
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
              <div className="px-4 py-2 bg-[#f5f5f5] border-t border-gray-100 brand-light">
                <p className="text-xs text-[var(--accent-text)] font-medium text-center">
                  Thanks! Our team may follow up with you.
                </p>
              </div>
            )}

            {/* --- INPUT --- */}
            <div className="border-t border-gray-100 px-4 py-3 bg-white shrink-0 brand-light">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  aria-label="Your franchise question"
                  inputMode="text"
                  autoComplete="off"
                  enterKeyHint="send"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Spavia franchise..."
                  disabled={isStreaming}
                  className="flex-1 min-w-0 text-base md:text-sm px-4 py-3 rounded-sm border border-gray-200
 focus:outline-none focus:border-[#b38a5f]
 disabled:opacity-50 bg-gray-50 text-gray-900
 placeholder:text-gray-400 brand-light"
                  maxLength={1000}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  className="w-11 h-11 flex items-center justify-center rounded-sm bg-[#b38a5f] text-black
 hover:bg-[#B09868] transition-all
 disabled:opacity-40 disabled:cursor-not-allowed
 active:scale-95 shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
            className={`underline break-all ${isUser ? "text-black" : "text-[var(--accent-text)]"}`}
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

/* ---------- SCROLL TO BOTTOM BUTTON ---------- */
function ScrollToBottomButton({
  containerRef,
  onClick,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onClick: () => void;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      setShow(distFromBottom > 100);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="absolute bottom-20 left-1/2 -translate-x-1/2
 w-8 h-8 rounded-full bg-white shadow-md border border-gray-200
 flex items-center justify-center hover:bg-gray-50 transition-colors z-10 brand-light"
      aria-label="Scroll to bottom"
    >
      <ChevronDown className="w-4 h-4 text-gray-500" />
    </button>
  );
}

/* ---------- GTAG TYPE ---------- */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
