"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("franchise-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white pb-24 md:pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Own a Part of the $6 Trillion Wellness Industry at Spavia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8"
        >
          Build your legacy, be your own boss, and make a difference in your
          community
        </motion.p>

        {/* Metrics with stagger */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            { value: "$1,080,829", label: "Average Gross Sales" },
            { value: "53%", label: "of locations exceeded $1M" },
            { value: "$1,940,000", label: "Highest Gross Revenue" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="border border-white/30 rounded-lg p-4"
            >
              <h3 className="text-2xl font-bold font-sans">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            variant="primary"
            onClick={scrollToForm}
            className="hover:scale-105 transition"
          >
            Start Your Franchise Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
