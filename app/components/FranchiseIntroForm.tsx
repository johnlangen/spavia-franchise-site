"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { getAttribution } from "../lib/attribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface FranchiseIntroFormProps {
  leadSource?: string;
}

export default function FranchiseIntroForm({ leadSource }: FranchiseIntroFormProps) {
  const router = useRouter();

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

  /* ---------------- STEP 1 ---------------- */
  const handleStep1 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  /* ---------------- STEP 2 ---------------- */
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const attribution = getAttribution();
    const liquidTier = String(formData.get("liquidTier") || "");

    const payload = {
      email,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
      liquidTier,
    };

    try {
      // Save to DB (don't block on this)
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
        // Fire Google Ads conversion
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
            window.gtag("event", "qualified_lead_submitted", { liquidTier });
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
      setError(
        data?.error ||
          "Something went wrong. Please try again."
      );
    } catch {
      setError(
        "Unable to connect. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = `
    w-full
    rounded-lg
    border border-gray-400
    px-4 py-3
    text-gray-900
    placeholder:text-gray-500
    focus:outline-none
    focus:ring-2
    focus:ring-[#C2A878]
    focus:ring-offset-1
    focus:border-[#C2A878]
  `;

  return (
    <section
      id="franchise-overview"
      className="bg-white pt-20 pb-16 border-t border-gray-100"
    >
      <div className="mx-auto max-w-6xl px-5 grid gap-14 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Request the Spavia Franchise Overview
          </h2>

          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-[#C2A878] mt-0.5" />
              Membership-based model designed for recurring revenue
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-[#C2A878] mt-0.5" />
              Multiple revenue streams: massage, facials, retail & gift cards
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 text-[#C2A878] mt-0.5" />
              Full-service support from site selection to grand opening
            </li>
          </ul>

          <div className="mt-6 rounded-lg border border-[#C2A878]/40 bg-[#C2A878]/5 px-4 py-3">
            <p className="text-sm text-gray-800 leading-relaxed">
              <span className="font-semibold text-[#9c814f]">Spavia partners need $200K+ in liquid capital and $500K+ net worth.</span> Typical total initial investment: $479K&ndash;$885K (2026 FDD, Item 7).
            </p>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            We respect your privacy. Your information is never shared.
          </p>
        </div>

        {/* RIGHT – FORM */}
        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
            <div
              className={`h-6 w-6 rounded-full text-center leading-6 text-white ${
                step >= 1 ? "bg-[#C2A878]" : "bg-gray-300"
              }`}
            >
              1
            </div>
            <div className="h-px w-8 bg-gray-300" />
            <div
              className={`h-6 w-6 rounded-full text-center leading-6 text-white ${
                step === 2 ? "bg-[#C2A878]" : "bg-gray-300"
              }`}
            >
              2
            </div>
            <span className="ml-2">Step {step} of 2</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                onSubmit={handleStep1}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <label htmlFor="intro-email" className="sr-only">Email address</label>
                <input
                  id="intro-email"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputStyle}
                />

                <Button className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]">
                  Get the Franchise Overview
                </Button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                onSubmit={handleStep2}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <div>
                  <label htmlFor="intro-firstName" className="sr-only">First name</label>
                  <input
                    id="intro-firstName"
                    name="firstName"
                    placeholder="First name"
                    autoComplete="given-name"
                    required
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="intro-lastName" className="sr-only">Last name</label>
                  <input
                    id="intro-lastName"
                    name="lastName"
                    placeholder="Last name"
                    autoComplete="family-name"
                    required
                    className={inputStyle}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="intro-phone" className="sr-only">Phone</label>
                  <input
                    id="intro-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    autoComplete="tel"
                    required
                    pattern="[\d\s\-\(\)\.]{10,14}"
                    title="Please enter a valid US phone number"
                    className={inputStyle}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="intro-zip" className="sr-only">ZIP code</label>
                  <input
                    id="intro-zip"
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
                    aria-describedby={zipError ? "intro-zip-error" : undefined}
                    className={inputStyle}
                  />
                  {zipError && (
                    <p id="intro-zip-error" className="mt-1 text-xs text-red-600">
                      {zipError}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="intro-liquidTier" className="sr-only">
                    Liquid capital available
                  </label>
                  <select
                    id="intro-liquidTier"
                    name="liquidTier"
                    required
                    defaultValue=""
                    className={`${inputStyle} bg-white`}
                  >
                    <option value="" disabled>
                      Liquid capital available to invest
                    </option>
                    <option value="$0 - $200K">$0 &ndash; $200K</option>
                    <option value="$200K - $500K">$200K &ndash; $500K</option>
                    <option value="$500K - $1MM">$500K &ndash; $1MM</option>
                    <option value="$1MM+">$1MM+</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  {error && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="mb-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]"
                  >
                    {loading ? "Submitting..." : error ? "Try Again" : "Request Info"}
                  </Button>

                  <p className="mt-2 text-[11px] text-center text-gray-500">
                    By submitting, you agree Spavia may contact you by email,
                    phone, or text regarding franchise opportunities.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
