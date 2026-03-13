"use client";

import { motion } from "framer-motion";

export default function ScheduleCallBanner() {
  return (
    <section className="bg-[#C2A878] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          Ready to Explore Spa Franchise Ownership?
        </motion.h2>
        <p className="text-white/85 text-sm md:text-base mb-6 max-w-2xl mx-auto">
          Speak directly with our franchise development team about available
          markets, investment details, and what it takes to open a Spavia day spa.
        </p>
        <a
          href="https://calendly.com/tyler-spaviadayspa/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#C2A878] font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition shadow-md"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
