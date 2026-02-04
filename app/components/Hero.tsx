"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  /* ---------------- METRICS ---------------- */
  const metrics = [
    { v: "$1,146,952", l: "Avg Gross Sales*" },
    { v: "1 in 2 Owners", l: "Achieve $1M+ Revenue*" },
    { v: "$496K – $796K", l: "Initial Investment*" },
  ];

  const [metricIndex, setMetricIndex] = useState(0);

  const prevMetric = () =>
    setMetricIndex((i) => (i === 0 ? metrics.length - 1 : i - 1));
  const nextMetric = () =>
    setMetricIndex((i) => (i === metrics.length - 1 ? 0 : i + 1));

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* ---------- BACKGROUND ---------- */}

      {/* Desktop video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Mobile image */}
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ---------- CONTENT ---------- */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 text-white text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            font-semibold leading-tight mb-3
            text-[26px]
            sm:text-3xl
            md:text-[42px]
          "
        >
          <span className="block">Own a Part of the Global Wellness</span>
          <span className="block">Economy</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mx-auto max-w-3xl
            text-sm
            sm:text-base
            md:text-lg
            text-white/85
            mb-8
          "
        >
          Join 60+ Spavia franchisees bringing affordable luxury wellness to their
          communities — with many locations exceeding $1M in annual sales.*
        </motion.p>

        {/* ---------- METRICS ---------- */}
        <div className="mx-auto max-w-4xl">
          {/* Desktop */}
          <div className="hidden sm:grid grid-cols-3 gap-3">
            {metrics.map((x) => (
              <div
                key={x.l}
                className="
                  rounded-lg
                  border border-white/20
                  bg-white/10
                  backdrop-blur-md
                  px-4 py-2.5
                "
              >
                <p className="text-base font-medium">{x.v}</p>
                <p className="text-[11px] text-white/70 mt-0.5">{x.l}</p>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="sm:hidden flex items-center justify-center gap-3">
            <button
              onClick={prevMetric}
              className="h-8 w-8 rounded-full border border-white/30 text-white/80"
              aria-label="Previous metric"
            >
              ‹
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={metricIndex}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
                className="
                  min-w-[220px]
                  rounded-lg
                  border border-white/20
                  bg-white/10
                  backdrop-blur-md
                  px-4 py-2.5
                "
              >
                <p className="text-base font-medium">
                  {metrics[metricIndex].v}
                </p>
                <p className="text-[11px] text-white/70 mt-0.5">
                  {metrics[metricIndex].l}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextMetric}
              className="h-8 w-8 rounded-full border border-white/30 text-white/80"
              aria-label="Next metric"
            >
              ›
            </button>
          </div>

          <p className="mt-4 text-[10px] text-white/60">
            *Results vary. See FDD Item 19 for details.
          </p>
        </div>

        {/* Scroll CTA */}
        <a
          href="#franchise-overview"
          className="
            mt-10
            inline-flex
            flex-col
            items-center
            gap-1
            text-sm
            text-white/75
            hover:text-white
            transition
          "
        >
          <span>Request the Franchise Overview</span>
          <span className="text-lg">↓</span>
        </a>
      </div>
    </section>
  );
}
