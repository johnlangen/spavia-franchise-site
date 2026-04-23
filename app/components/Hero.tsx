"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const router = useRouter();

  /* ---------------- METRICS ---------------- */
  const metrics = [
    { v: "$1,146,952", l: "Avg Gross Sales*" },
    { v: "1 in 2 Owners", l: "Achieve $1M+ Revenue*" },
    { v: "$496K \u2013 $796K", l: "Initial Investment*" },
  ];

  const [metricIndex, setMetricIndex] = useState(0);

  const prevMetric = () =>
    setMetricIndex((i) => (i === 0 ? metrics.length - 1 : i - 1));
  const nextMetric = () =>
    setMetricIndex((i) => (i === metrics.length - 1 ? 0 : i + 1));

  // Attempt autoplay \u2014 reveal on success, remove video entirely on failure
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setVideoReady(true))
        .catch(() => video.remove());
    }
  }, []);

  /* ---------------- FORM STATE ---------------- */
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleStep1 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/franchise-lead-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, leadSource: "homepage-hero" }),
      });
    } catch (err) {
      console.error("Step 1 DB save failed", err);
    }
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      email,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
    };

    try {
      fetch("/api/franchise-lead-short-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadSource: "homepage-hero" }),
      }).catch(() => {});

      const res = await fetch("/api/franchise-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadSource: "homepage-hero" }),
      });

      if (res.ok) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-944657062/OhOICIf4y_cbEKalucID",
            value: 1.0,
            currency: "USD",
          });
        }
        router.push("/thank-you");
        return;
      }

      const data = await res.json().catch(() => null);
      setError(data?.error || "Something went wrong. Please try again.");
    } catch {
      setError("Unable to connect. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = `
    w-full rounded-lg border border-white/30 bg-white/10 backdrop-blur-md
    px-4 py-2.5 text-white placeholder:text-white/60
    focus:outline-none focus:ring-2 focus:ring-[#C2A878]/60 focus:border-[#C2A878]
    text-sm
  `;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* ---------- BACKGROUND ---------- */}

      {/* Static fallback image (shown while video loads or if autoplay fails) */}
      <img
        src="/media/guest-robe-fireplace.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Video layer */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/guest-robe-fireplace.webp"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ---------- CONTENT: Split Layout ---------- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-0">
        <div className="grid md:grid-cols-[1fr_380px] gap-8 md:gap-12 items-center">
          {/* ── LEFT: Headline + Metrics ── */}
          <div className="text-white text-center md:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold leading-tight mb-3 text-[26px] sm:text-3xl md:text-[42px]"
            >
              <span className="block">Own a Day Spa Franchise</span>
              <span className="block">in the Wellness Industry</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-white/85 mb-6"
            >
              Join 60+ Spavia day spa franchise owners bringing affordable luxury
              wellness to their communities &mdash; with many locations exceeding
              $1M in annual sales.*
            </motion.p>

            {/* ---------- METRICS ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg mx-auto md:mx-0"
            >
              {/* Desktop */}
              <div className="hidden sm:grid grid-cols-3 gap-2.5">
                {metrics.map((x) => (
                  <div
                    key={x.l}
                    className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-3 py-2"
                  >
                    <p className="text-sm font-medium">{x.v}</p>
                    <p className="text-[10px] text-white/70 mt-0.5">{x.l}</p>
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
                  &lsaquo;
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={metricIndex}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="min-w-[220px] rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2.5"
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
                  &rsaquo;
                </button>
              </div>

              <p className="mt-3 text-[10px] text-white/50">
                *Results vary. See FDD Item 19 for details.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Lead Capture Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-white/20 bg-black/30 backdrop-blur-lg p-6"
          >
            <h2 className="text-white font-semibold text-lg mb-1">
              Get the Franchise Overview
            </h2>
            <p className="text-white/60 text-xs mb-4">
              Free info kit &mdash; no obligation
            </p>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-4 text-xs text-white/50">
              <div
                className={`h-5 w-5 rounded-full text-center leading-5 text-white text-[10px] ${
                  step >= 1 ? "bg-[#C2A878]" : "bg-white/20"
                }`}
              >
                1
              </div>
              <div className="h-px w-5 bg-white/20" />
              <div
                className={`h-5 w-5 rounded-full text-center leading-5 text-white text-[10px] ${
                  step === 2 ? "bg-[#C2A878]" : "bg-white/20"
                }`}
              >
                2
              </div>
              <span className="ml-1.5">Step {step} of 2</span>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.form
                  key="hero-step1"
                  onSubmit={handleStep1}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputStyle}
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#C2A878] hover:bg-[#b09466] text-white font-semibold py-2.5 rounded-lg transition text-sm cursor-pointer"
                  >
                    Get the Franchise Overview
                  </button>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form
                  key="hero-step2"
                  onSubmit={handleStep2}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="hero-firstName" className="sr-only">
                        First name
                      </label>
                      <input
                        id="hero-firstName"
                        name="firstName"
                        placeholder="First name"
                        autoComplete="given-name"
                        required
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-lastName" className="sr-only">
                        Last name
                      </label>
                      <input
                        id="hero-lastName"
                        name="lastName"
                        placeholder="Last name"
                        autoComplete="family-name"
                        required
                        className={inputStyle}
                      />
                    </div>
                  </div>
                  <label htmlFor="hero-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    autoComplete="tel"
                    pattern="[\d\s\-\(\)\+\.]{7,}"
                    title="Please enter a valid phone number"
                    className={inputStyle}
                  />
                  <label htmlFor="hero-zip" className="sr-only">
                    ZIP code
                  </label>
                  <input
                    id="hero-zip"
                    name="zip"
                    placeholder="ZIP code"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    title="Please enter a 5-digit ZIP code"
                    required
                    className={inputStyle}
                  />

                  {error && (
                    <div className="rounded-lg bg-red-500/20 border border-red-400/30 px-3 py-2 text-xs text-red-200">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C2A878] hover:bg-[#b09466] text-white font-semibold py-2.5 rounded-lg transition text-sm cursor-pointer disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Request Info"}
                  </button>

                  <p className="text-[10px] text-center text-white/40 mt-1">
                    By submitting, you agree Spavia may contact you by email,
                    phone, or text regarding franchise opportunities.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
