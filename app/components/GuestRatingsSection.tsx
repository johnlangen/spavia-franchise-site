"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GuestRatingsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
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
            4.7
          </p>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-7 h-7 fill-[#C2A878] text-[#C2A878]"
              />
            ))}
          </div>

          <p className="text-gray-600 text-sm mt-1">
            Based on <span className="font-semibold">134,662 verified reviews</span>
          </p>
          <p className="text-gray-400 text-xs">
            Powered by Frederick
          </p>
        </motion.div>

        <p className="text-gray-600 text-sm md:text-base mt-8 max-w-2xl mx-auto leading-relaxed">
          Spavia day spa franchise locations consistently earn top guest ratings
          for massage therapy, facials, and wellness services. Our membership
          model and focus on the guest experience drive industry-leading retention
          and satisfaction across every market we serve.
        </p>
      </div>
    </section>
  );
}
