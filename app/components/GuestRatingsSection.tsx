"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GuestRatingsSection() {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white mb-8"
        >
          Our Day Spa Guests Love Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#C2A878] text-6xl md:text-7xl font-bold font-[family-name:var(--font-recoleta)]">
            4.8
          </p>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-7 h-7 fill-[#C2A878] text-[#C2A878]"
              />
            ))}
          </div>

          <p className="text-white/70 text-sm mt-1">
            Based on <span className="font-semibold text-white">30,976 Google reviews</span> across 62 locations
          </p>
        </motion.div>

        <p className="text-white/60 text-sm md:text-base mt-8 max-w-2xl mx-auto leading-relaxed">
          Spavia day spa franchise locations consistently earn top guest ratings
          for massage therapy, facials, and wellness services. Our membership
          model and focus on the guest experience drive industry-leading retention
          and satisfaction across every market we serve.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />
    </section>
  );
}
