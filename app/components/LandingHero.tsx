"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { getAttribution } from "../lib/attribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface LandingHeroProps {
  breadcrumbLabel?: string;
  headlineFirst: string;
  headlineSecond: string;
  headlineHighlight: string;
  subhead: string;
  bullets: string[];
  sourceLine?: string;
  leadSource: string;
}

export default function LandingHero({
  headlineFirst,
  headlineSecond,
  headlineHighlight,
  subhead,
  bullets,
  sourceLine = "Source: 2026 Spavia FDD, Items 7 & 19. Results vary by location.",
  leadSource,
}: LandingHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const router = useRouter();

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

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");

  const validateZip = (value: string) => {
    if (value && !/^[0-9]{5}$/.test(value)) {
      setZipError("Please enter a 5-digit ZIP code");
    } else {
      setZipError("");
    }
  };

  const handleStep1 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_step1_submitted", { form: "landing", leadSource });
    }
    try {
      await fetch("/api/franchise-lead-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, leadSource }),
      });
    } catch (err) {
      console.error("Step 1 DB save failed", err);
    }
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const attribution = getAttribution();
    const liquidTier = String(formData.get("liquidTier") || "");

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_step2_submitted", {
        form: "landing",
        liquidTier,
        leadSource,
      });
    }

    const payload = {
      email,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
      liquidTier,
    };

    try {
      fetch("/api/franchise-lead-short-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadSource, attribution }),
      }).catch(() => {});

      const res = await fetch("/api/franchise-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadSource, attribution }),
      });

      if (res.ok) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-944657062/OhOICIf4y_cbEKalucID",
            value: 1.0,
            currency: "USD",
          });
          const qualified = liquidTier === "$200K - $500K" ||
            liquidTier === "$500K - $1MM" ||
            liquidTier === "$1MM+";
          if (qualified) {
            window.gtag("event", "qualified_lead_submitted", { liquidTier, leadSource });
            window.gtag("event", "conversion", {
              send_to: "AW-944657062/lfH3CPHQ3rMcEKalucID",
              value: 100.0,
              currency: "USD",
            });
          }
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
    w-full rounded-lg border border-white/40 bg-white/15 backdrop-blur-md
    px-4 py-2.5 text-white placeholder:text-white/70
    focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-[#C2A878] focus:bg-white/20
    text-base
  `;

  return (
    <section
      id="landing-hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <img
        src="/media/guest-robe-fireplace.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/guest-robe-fireplace.webp"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-0">
        <div className="grid md:grid-cols-[1fr_400px] gap-8 md:gap-12 items-center">
          {/* LEFT */}
          <div className="text-white text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold leading-tight mb-4 text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-recoleta)]"
            >
              <span className="block">{headlineFirst}</span>
              <span className="block">
                {headlineSecond}{" "}
                <span className="text-[#C2A878]">{headlineHighlight}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-white/85 mb-6"
            >
              {subhead}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2.5 text-white/90 text-sm sm:text-base max-w-lg mx-auto md:mx-0 mb-5 text-left"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#C2A878] mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] text-white/50"
            >
              {sourceLine}
            </motion.p>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-white/20 bg-black/30 backdrop-blur-lg p-6"
          >
            <h2 className="text-white font-semibold text-lg mb-1">
              Get the Franchise Overview
            </h2>
            <p className="text-white/60 text-xs mb-3">
              Free info kit &mdash; no obligation
            </p>

            <div className="mb-4 rounded-lg border border-[#C2A878]/40 bg-[#C2A878]/10 px-3 py-2">
              <p className="text-[11px] text-white/85 leading-relaxed">
                <span className="font-semibold text-[#C2A878]">
                  Spavia partners need $200K+ in liquid capital and $500K+ net worth.
                </span>{" "}
                Typical total investment: $479K&ndash;$885K.
              </p>
            </div>

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
                  key="lh-step1"
                  onSubmit={handleStep1}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <label htmlFor="lh-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="lh-email"
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
                  key="lh-step2"
                  onSubmit={handleStep2}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label htmlFor="lh-firstName" className="sr-only">
                        First name
                      </label>
                      <input
                        id="lh-firstName"
                        name="firstName"
                        placeholder="First name"
                        autoComplete="given-name"
                        required
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="lh-lastName" className="sr-only">
                        Last name
                      </label>
                      <input
                        id="lh-lastName"
                        name="lastName"
                        placeholder="Last name"
                        autoComplete="family-name"
                        required
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <label htmlFor="lh-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="lh-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    autoComplete="tel"
                    pattern="[\d\s\-\(\)\+\.]{7,}"
                    title="Please enter a valid phone number"
                    className={inputStyle}
                  />

                  <label htmlFor="lh-zip" className="sr-only">
                    ZIP code
                  </label>
                  <input
                    id="lh-zip"
                    name="zip"
                    placeholder="ZIP code"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    required
                    value={zip}
                    onChange={(e) => {
                      const val = e.target.value;
                      setZip(val);
                      if (zipError) validateZip(val);
                    }}
                    onBlur={(e) => validateZip(e.target.value)}
                    aria-invalid={!!zipError}
                    aria-describedby={zipError ? "lh-zip-error" : undefined}
                    className={inputStyle}
                  />
                  {zipError && (
                    <p id="lh-zip-error" className="text-[11px] text-red-200">
                      {zipError}
                    </p>
                  )}

                  <label htmlFor="lh-liquidTier" className="sr-only">
                    Liquid capital available
                  </label>
                  <select
                    id="lh-liquidTier"
                    name="liquidTier"
                    required
                    defaultValue=""
                    className={`${inputStyle} appearance-none`}
                  >
                    <option value="" disabled className="text-gray-900">
                      Liquid capital available to invest
                    </option>
                    <option value="$0 - $200K" className="text-gray-900">
                      $0 &ndash; $200K
                    </option>
                    <option value="$200K - $500K" className="text-gray-900">
                      $200K &ndash; $500K
                    </option>
                    <option value="$500K - $1MM" className="text-gray-900">
                      $500K &ndash; $1MM
                    </option>
                    <option value="$1MM+" className="text-gray-900">
                      $1MM+
                    </option>
                  </select>

                  {error && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="rounded-lg bg-red-500/20 border border-red-400/30 px-3 py-2 text-xs text-red-200"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C2A878] hover:bg-[#b09466] text-white font-semibold py-2.5 rounded-lg transition text-sm cursor-pointer disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : error ? "Try Again" : "Request Info"}
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
