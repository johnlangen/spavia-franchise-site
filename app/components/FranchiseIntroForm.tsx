"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

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
      // Save to DB (don't block on this)
      fetch("/api/franchise-lead-short-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadSource }),
      }).catch(() => {});

      const res = await fetch("/api/franchise-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadSource }),
      });

      if (res.ok) {
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
    focus:ring-[#C2A878]/40
    focus:border-[#C2A878]
  `;

  return (
    <section
      id="franchise-overview"
      className="bg-white pt-28 pb-24 border-t border-gray-100"
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

          <p className="mt-6 text-xs text-gray-500">
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
                    placeholder="Phone"
                    autoComplete="tel"
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
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className={inputStyle}
                  />
                </div>

                <div className="sm:col-span-2">
                  {error && (
                    <div className="mb-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]"
                  >
                    {loading ? "Submitting..." : "Request Info"}
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
