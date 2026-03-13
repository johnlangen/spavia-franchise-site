"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blocks = [
  {
    heading: "A Proven Day Spa Franchise Model",
    content:
      "The U.S. spa industry generates over $19 billion annually, and consumer demand for wellness services continues to accelerate. Spavia day spa franchises are built on a membership-driven model that delivers predictable recurring revenue, strong guest retention, and multiple income streams — from massage therapy and facials to body treatments, waxing, and retail products. With 60+ locations nationwide, Spavia provides franchise owners with a turnkey system for entering one of the fastest-growing segments in health and wellness.",
  },
  {
    heading: "Spa Franchise Investment and Returns",
    content:
      "The initial investment to open a Spavia day spa franchise ranges from $496K to $796K, including build-out, equipment, and working capital. Spavia franchise locations average $1,146,952 in gross sales, with 1 in 2 owners achieving over $1 million in annual revenue. Financing options include SBA-eligible loans, and Spavia's franchise development team provides guidance throughout the funding process to help qualified candidates launch successfully.",
  },
  {
    heading: "Comprehensive Franchise Training & Support",
    content:
      "Spavia's franchise support system covers every phase of ownership — from site selection and lease negotiation to buildout management, pre-opening marketing, and ongoing operational coaching. New franchise owners complete an intensive training program that covers spa operations, team hiring and management, guest experience standards, and marketing strategy. Post-opening, Spavia provides dedicated field support, national marketing programs, and a network of experienced franchise owners to learn from.",
  },
  {
    heading: "Available Markets Nationwide",
    content:
      "Spavia is actively growing in markets across the United States, with territories available in major metros and high-growth suburban communities. Whether you're exploring franchise opportunities in your local market or looking to develop in a new region, Spavia's real estate team helps identify optimal locations based on demographics, traffic patterns, and competitive analysis. Multi-unit development agreements are also available for qualified candidates.",
  },
];

export default function SEOContentSection() {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-14"
        >
          Why Own a Spavia Day Spa Franchise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#C2A878] font-semibold text-lg mb-3">
                {block.heading}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
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

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C2A878] to-transparent" />
    </section>
  );
}
