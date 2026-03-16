"use client";

import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Schedule A Call",
    description:
      "Too excited to wait? Take the initiative and schedule a call with our franchise development team today.",
    cta: {
      label: "Schedule A Call",
      href: "https://calendly.com/tyler-spaviadayspa/new-meeting",
    },
  },
  {
    number: "2",
    title: "Explore The Opportunity",
    description:
      "Through presentations and calls, we'll help you discover everything you need to know about Spavia ownership.",
  },
  {
    number: "3",
    title: "Submit An Application",
    description:
      "When you're ready, you'll submit an application and we'll guide you through every step of the process.",
  },
];

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

        {/* ── Section 1: Thank You (white) ── */}
        <section className="bg-white px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#C2A878]/10"
            >
              <Check className="h-10 w-10 text-[#C2A878]" strokeWidth={3} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)] mb-6"
            >
              Thank You for Reaching Out
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto"
            >
              We&apos;re excited to share more about Spavia&apos;s
              differentiated model and superior guest experience with you. We
              look forward to getting in touch soon. In the meantime, head to
              our{" "}
              <Link
                href="https://spaviadayspa.com"
                className="text-[#C2A878] font-medium hover:underline"
              >
                website
              </Link>{" "}
              to discover more about Spavia, or{" "}
              <Link
                href="https://spaviadayspa.com/location"
                className="text-[#C2A878] font-medium hover:underline"
              >
                visit one of our many locations
              </Link>{" "}
              to experience a treatment for yourself.
            </motion.p>
          </div>
        </section>

        {/* ── Section 2: Next Steps (black) ── */}
        <section className="bg-black px-6 py-16 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 font-[family-name:var(--font-recoleta)]">
              Here Are Your Next Steps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex flex-row md:flex-col items-start gap-4 md:gap-0 md:text-center"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-[#C2A878] flex items-center justify-center md:mx-auto md:mb-5">
                    <span className="text-[#C2A878] text-xl md:text-2xl font-bold font-[family-name:var(--font-recoleta)]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {step.cta && (
                      <Link
                        href={step.cta.href}
                        target="_blank"
                        className="inline-block bg-[#C2A878] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#b09466] transition w-full md:w-auto text-center"
                      >
                        {step.cta.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
