"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const points = [
  {
    title: "Aligned interests",
    body:
      "Our success is tied to the long-term health of the brand and its owners, not to a fund hitting a return by a target date.",
  },
  {
    title: "No exit clock",
    body:
      "Private equity buys to sell, typically within three to seven years. We aren’t building Spavia toward a flip.",
  },
  {
    title: "Founders you can reach",
    body:
      "The family whose name is on the brand is still here, still building it, still answering the phone.",
  },
];

export default function FounderLedSection() {
  return (
    <section className="relative bg-[#14110d] text-white py-20 md:py-28 px-6 overflow-hidden">
      {/* gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A878]/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C2A878] font-semibold mb-4">
            Ownership Matters
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] font-[family-name:var(--font-recoleta)]">
            Founder-led. Independently held.
            <br className="hidden md:block" /> Built for the long run.
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
            Many of the biggest names in spa and massage franchising are now
            owned by private equity firms. Spavia isn&apos;t. Two decades in,
            we&apos;re still independently held and led by the family that
            started it in 2005, so the decisions get made for the
            long-term health of the brand and its owners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-[#C2A878]/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-[#C2A878] mb-3 font-[family-name:var(--font-recoleta)]">
                {p.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link
            href="/blog/2026/06/16/spa-franchise-ownership-private-equity-vs-founder-led"
            className="inline-block text-sm font-semibold text-[#C2A878] hover:text-white transition-colors border-b border-[#C2A878]/40 hover:border-white pb-0.5"
          >
            See who actually owns the big spa franchises &rarr;
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A878]/50 to-transparent" />
    </section>
  );
}
