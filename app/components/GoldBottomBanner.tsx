"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GoldBottomBanner() {
  return (
    <section className="bg-[#C2A878] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Start Your Spa Franchise Journey Today
        </motion.h2>
        <p className="text-white/85 text-sm md:text-base mb-8 max-w-2xl mx-auto">
          Join 60+ Spavia franchise owners building thriving wellness businesses
          in communities across the country. Request your free franchise overview
          or schedule a call with our development team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-started"
            className="bg-white text-[#C2A878] font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition shadow-md"
          >
            Request Franchise Info
          </Link>
          <a
            href="https://calendly.com/tyler-spaviadayspa/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
