"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Full-bleed cinematic band — a single hero-grade photo with a short line of
// copy. Breaks up the text sections and lets the new brand photography carry
// the emotional register a lead-capture page usually lacks.
export default function ExperienceBand() {
  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
      <Image
        src="/media/spavia-massage-candlelit.webp"
        alt="A candlelit massage at Spavia"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="max-w-6xl mx-auto px-6 pb-14 md:pb-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-[#d8c39a] mb-3">
              The Spavia experience
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              People don&apos;t forget how a Spavia makes them feel
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-6">
              That feeling is what keeps members coming back — and what makes a
              Spavia franchise a business worth owning.
            </p>
            <Link
              href="/why-spavia"
              className="inline-block rounded-full bg-[#C2A878] px-7 py-3 font-semibold text-white hover:bg-[#a98e5e] transition-colors"
            >
              Why Spavia works
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
