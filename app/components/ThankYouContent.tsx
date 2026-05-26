"use client";

import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/tyler-spaviadayspa/new-meeting";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackScheduleClick(location: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "schedule_call_clicked", { location });
  }
}

export default function ThankYouContent() {
  return (
    <ThemeProvider>
      <main className="flex flex-col min-h-screen">
        <div className="bg-black">
          <NavBar />
        </div>
        <div className="bg-white">
          <Breadcrumbs items={[{ label: "Thank You" }]} />
        </div>

        {/* ── Section 1: Thank You + immediate CTA (white) ── */}
        <section className="bg-white px-6 pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C2A878]/10"
            >
              <Check className="h-8 w-8 text-[#C2A878]" strokeWidth={3} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)] mb-4"
            >
              You're In — Now Pick a Time
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto mb-6"
            >
              The fastest path forward is a 15-minute intro call with Tyler, our
              Director of Franchise Development. Most candidates know within
              minutes whether Spavia is the right fit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScheduleClick("hero_cta")}
                className="inline-block bg-[#C2A878] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#b09466] transition text-lg shadow-lg"
              >
                Schedule My 15-Minute Call →
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Or pick a time directly on Tyler's calendar below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Section 2: Embedded Calendly (white) ── */}
        <section className="bg-white px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src={CALENDLY_URL + "?hide_gdpr_banner=1&primary_color=c2a878"}
                width="100%"
                height="720"
                frameBorder="0"
                title="Schedule a call with Tyler"
                className="block"
              />
            </div>
          </div>
        </section>

        {/* ── Section 3: What to expect (black) ── */}
        <section className="bg-black px-6 py-14 md:py-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3 font-[family-name:var(--font-recoleta)]">
              What Happens Next
            </h2>
            <p className="text-white/60 text-center mb-10 max-w-xl mx-auto">
              We've already received your information. Here's what to expect from here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {[
                {
                  number: "1",
                  title: "Intro Call",
                  description:
                    "A 15-minute conversation with Tyler. He'll learn about your goals and walk you through Spavia's franchise model.",
                },
                {
                  number: "2",
                  title: "Discovery Sessions",
                  description:
                    "Two deeper sessions covering culture, design, support systems, marketing, operations, and unit economics.",
                },
                {
                  number: "3",
                  title: "Meet the Team Day",
                  description:
                    "Visit Spavia HQ in Denver, meet leadership and current franchise partners, then we mutually decide on a franchise award.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex flex-row md:flex-col items-start gap-4 md:gap-0 md:text-center"
                >
                  <div className="flex-shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-[#C2A878] flex items-center justify-center md:mx-auto md:mb-5">
                    <span className="text-[#C2A878] text-xl md:text-2xl font-bold font-[family-name:var(--font-recoleta)]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScheduleClick("bottom_cta")}
                className="inline-block bg-[#C2A878] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#b09466] transition"
              >
                Schedule Your Call Now
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
