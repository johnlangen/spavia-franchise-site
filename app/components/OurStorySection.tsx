"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OurStorySection() {
  return (
    <section className="relative bg-[#f5f1ea] py-20 md:py-28 px-6 overflow-hidden">
      {/* subtle gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A878]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C2A878] font-semibold mb-4">
            Our Story
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] font-[family-name:var(--font-recoleta)] max-w-3xl mx-auto">
            Twenty years of building a different kind of day spa.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg"
          >
            <p>
              In <span className="font-semibold text-gray-900">2005</span>,
              Allison and Marty Langenderfer opened the first Spavia in Denver.
              They had spent years inside the spa industry and saw what nobody
              was building: a place between the mass-market massage chains and
              the unreachable luxury resort spas.
            </p>
            <p>
              Most guests wanted resort-level experience without resort-level
              prices. Most prospective owners wanted real economics without
              the operational complexity of a clinical med spa or the ceiling
              of single-service massage. The market had a clear middle, and
              nobody was occupying it well.
            </p>
            <p>
              Spavia became that middle. Accessible luxury. Full-service depth.
              A membership model built for recurring revenue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative pull-quote panel */}
            <div className="relative rounded-2xl bg-white border border-[#C2A878]/30 p-7 md:p-9 shadow-sm">
              <span
                className="absolute -top-3 -left-2 text-7xl text-[#C2A878]/30 font-[family-name:var(--font-recoleta)] leading-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-[family-name:var(--font-recoleta)] italic mb-4">
                We never wanted to build a chain. We wanted to build a brand
                people would drive across town for, and owners would build
                their lives around.
              </p>
              <p className="text-sm text-gray-600">
                Allison Langenderfer, Co-Founder
              </p>
            </div>
          </motion.div>
        </div>

        {/* Today line + light timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#C2A878]/30 pt-10"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C2A878] font-semibold mb-2">
                2005
              </p>
              <p className="text-sm md:text-base text-gray-700">
                First Spavia opens in Denver
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C2A878] font-semibold mb-2">
                2007
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Franchising launches
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#C2A878] font-semibold mb-2">
                Today
              </p>
              <p className="text-sm md:text-base text-gray-700">
                63 locations across the U.S.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/who-we-are"
              className="inline-block text-sm font-semibold text-[#9c814f] hover:text-[#C2A878] transition-colors border-b border-[#C2A878]/40 hover:border-[#C2A878] pb-0.5"
            >
              Read the full Spavia story &rarr;
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2A878]/40 to-transparent" />
    </section>
  );
}
