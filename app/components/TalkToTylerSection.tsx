"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Mail } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TalkToTylerSection() {
  const trackScheduleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "schedule_call_clicked", {
        event_category: "engagement",
        event_label: "homepage_tyler_section",
      });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#C2A878]/10 px-4 py-2 rounded-full mb-4">
            <Phone className="w-4 h-4 text-[#C2A878]" />
            <span className="text-sm font-semibold text-[#C2A878] tracking-wide uppercase">
              Talk to Tyler
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The Fastest Way to Real Answers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most candidates have specific questions about market availability,
            financing, and timing &mdash; the kind of answers that don&apos;t
            fit in a form. A 15-minute intro call with our Director of Franchise
            Development gets you there.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-10 items-center
                     bg-gradient-to-br from-gray-50 to-white border border-gray-200
                     rounded-2xl p-8 md:p-10 shadow-sm"
        >
          {/* Tyler */}
          <div className="text-center md:text-left">
            <div className="w-32 h-32 md:w-36 md:h-36 mx-auto md:mx-0 rounded-full
                           bg-[#C2A878]/15 border-2 border-[#C2A878]/30
                           flex items-center justify-center mb-4 overflow-hidden">
              <span className="text-5xl font-bold text-[#C2A878] font-[family-name:var(--font-recoleta)]">
                TW
              </span>
            </div>
            <p className="text-gray-900 font-bold text-lg">Tyler Woodard</p>
            <p className="text-sm text-gray-600">Director of Franchise Development</p>
          </div>

          {/* Right: copy + CTAs */}
          <div>
            <ul className="space-y-3 mb-7">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C2A878]/15 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="text-[#C2A878] text-xs font-bold">1</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">15-minute intro call.</span>{" "}
                  No pressure, no commitment &mdash; just a conversation about whether Spavia
                  fits your goals.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C2A878]/15 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="text-[#C2A878] text-xs font-bold">2</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Specific market data.</span>{" "}
                  Tyler reviews availability and pricing for your target territory before the call.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C2A878]/15 flex items-center justify-center mt-0.5 shrink-0">
                  <span className="text-[#C2A878] text-xs font-bold">3</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Honest answers.</span>{" "}
                  Financing, timeline, what owners actually earn, why some candidates aren&apos;t a fit
                  &mdash; we&apos;d rather find out early.
                </p>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/tyler-spaviadayspa/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackScheduleClick}
                className="inline-flex items-center justify-center gap-2
                           bg-[#C2A878] hover:bg-[#b09466] text-white font-semibold
                           px-6 py-3.5 rounded-lg transition shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call with Tyler
              </a>
              <a
                href="mailto:tyler@spaviadayspa.com"
                className="inline-flex items-center justify-center gap-2
                           bg-white hover:bg-gray-50 text-gray-900 font-semibold
                           px-6 py-3.5 rounded-lg transition border border-gray-300"
              >
                <Mail className="w-4 h-4" />
                Email Tyler
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Prefer to ask a quick question first? The chat widget is in the bottom-right corner.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
