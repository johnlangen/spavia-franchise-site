"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "$479K–$885K", label: "To open (2026 FDD, Item 7)" },
  { value: "$1.1M", label: "Median unit revenue, 44 locations" },
  { value: "63", label: "Locations open nationwide" },
  { value: "~1 in 2", label: "Owners over $1M gross sales" },
];

const blocks = [
  {
    heading: "A proven model",
    content:
      "A membership-driven day spa with recurring revenue across massage, facials, body treatments, waxing, and retail.",
  },
  {
    heading: "Investment & returns",
    content:
      "Open for $479K–$885K, with SBA-eligible financing through third-party lenders. Results vary by location.",
  },
  {
    heading: "Training & support",
    content:
      "Site selection, lease and buildout, pre-opening marketing, intensive onboarding, and ongoing field support.",
  },
  {
    heading: "Markets nationwide",
    content:
      "Territories in major metros and growth suburbs, with multi-unit development for qualified owners.",
  },
];

export default function SEOContentSection() {
  return (
    <section className="relative bg-[#f5f1ea] py-20 md:py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A878]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C2A878] font-semibold mb-4">
            The Opportunity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)]">
            Why Own a Spavia Day Spa Franchise
          </h2>
        </motion.div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 border-y border-[#C2A878]/30 py-8"
        >
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#9c814f] font-[family-name:var(--font-recoleta)]">
                {s.value}
              </p>
              <p className="text-xs text-gray-600 mt-1 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-gray-200 p-6"
            >
              <h3 className="text-[#9c814f] font-semibold text-base mb-2 font-[family-name:var(--font-recoleta)]">
                {block.heading}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {block.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/get-started"
            className="inline-block bg-[#C2A878] hover:bg-[#b09466] text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Request Franchise Information
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A878]/40 to-transparent" />
    </section>
  );
}
