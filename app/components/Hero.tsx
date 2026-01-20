"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  /* ---------------- METRICS ---------------- */
  const metrics = [
    { v: "$1,080,829", l: "Avg Gross Sales*" },
    { v: "$496K – $796K", l: "Initial Investment*" },
    { v: "1 in 2 Owners", l: "Achieve $1M+ Revenue*" },
  ];

  const [metricIndex, setMetricIndex] = useState(0);

  const prevMetric = () =>
    setMetricIndex((i) => (i === 0 ? metrics.length - 1 : i - 1));

  const nextMetric = () =>
    setMetricIndex((i) => (i === metrics.length - 1 ? 0 : i + 1));

  /* ---------------- STEP 1 ---------------- */
  const handleStep1 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/franchise-lead-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.error("Step 1 DB save failed", err);
    }

    setStep(2);
  };

  /* ---------------- STEP 2 ---------------- */
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      email,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
    };

    try {
      await fetch("/api/franchise-lead-short-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Short form DB save failed", err);
    }

    const res = await fetch("/api/franchise-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (res.ok) router.push("/thank-you");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 text-white">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[28px] leading-tight sm:text-3xl md:text-5xl font-bold text-center mb-2"
        >
          Explore the Spavia Spa Franchise Opportunity
        </motion.h1>

        <p className="text-center text-base sm:text-lg md:text-2xl mb-2 text-white/90">
          View investment range, unit economics, and expansion options.
        </p>

        <p className="hidden sm:block text-center text-sm md:text-base text-white/80 mb-4 max-w-3xl mx-auto">
          Get the Spavia Franchise Overview and see what it takes to open a premium,
          resort-inspired day spa in your market.
        </p>

        {/* ---------------- METRICS ---------------- */}
        <div className="mx-auto max-w-4xl mb-4">
          {/* Desktop */}
          <div className="hidden sm:grid grid-cols-3 gap-4">
            {metrics.map((x) => (
              <div
                key={x.l}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-center"
              >
                <p className="text-lg font-semibold">{x.v}</p>
                <p className="text-xs text-white/75">{x.l}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex items-center justify-center gap-3">
            <button
              onClick={prevMetric}
              aria-label="Previous metric"
              className="h-9 w-9 rounded-full border border-white/30 text-white/80 hover:text-white"
            >
              ‹
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={metricIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="min-w-[240px] rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-center"
              >
                <p className="text-lg font-semibold">
                  {metrics[metricIndex].v}
                </p>
                <p className="text-xs text-white/75">
                  {metrics[metricIndex].l}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextMetric}
              aria-label="Next metric"
              className="h-9 w-9 rounded-full border border-white/30 text-white/80 hover:text-white"
            >
              ›
            </button>
          </div>

          <p className="text-center text-[10px] text-white/55 mt-2">
            *Results vary. See FDD Item 19 and financial requirements.
          </p>
        </div>

        {/* ---------------- FORM ---------------- */}
        <div
          className={`mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${
            step === 1 ? "max-w-lg p-4 sm:p-5" : "max-w-2xl p-4 sm:p-6"
          }`}
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                onSubmit={handleStep1}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 gap-3"
              >
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass"
                />

                <Button className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]">
                  Get Franchise Overview
                </Button>

                <p className="text-[11px] text-center text-white/60">
                  No spam. We will send the overview and next steps.
                </p>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                onSubmit={handleStep2}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <input
                  name="firstName"
                  placeholder="First name"
                  required
                  className="input-glass"
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  required
                  className="input-glass"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  className="input-glass sm:col-span-2"
                />
                <input
                  name="zip"
                  placeholder="ZIP code"
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="input-glass sm:col-span-2"
                />

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]"
                  >
                    {loading ? "Submitting..." : "Send Me the Overview"}
                  </Button>

                  <p className="mt-2 text-[11px] text-center text-white/60">
                    By submitting, you agree Spavia may contact you by email, phone,
                    or text regarding franchise opportunities.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .input-glass {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          color: white;
        }
        .input-glass::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .input-glass:focus {
          outline: none;
          border-color: #c2a878;
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
