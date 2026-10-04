"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$1,110,481", label: "Median Gross Sales*" },
  { value: "1 in 2", label: "Owners Achieve $1M+ Revenue*" },
  { value: "$479K – $885K", label: "Initial Investment**" },
];

export default function ProofSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden brand-light">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-14"
        >
          The Proof Is in the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-[var(--accent-text)] text-4xl md:text-5xl font-bold font-[family-name:var(--font-recoleta)] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-[10px] mt-10">
          *Source: 2026 Spavia FDD, Item 19, Part III (44 reporting locations, 2025 measurement period). **Source: 2026 Spavia FDD, Item 7. Results vary by location.
        </p>
      </div>
    </section>
  );
}
