"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CustomMarketForm() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [step, setStep] = useState<"city" | "email" | "details">("city");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const citySlug = city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const leadSource = `custom_analysis_${citySlug}`;

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C2A878]/40 focus:border-[#C2A878] text-sm";

  const handleCitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) setStep("email");
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/franchise-lead-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, leadSource }),
      });
    } catch (err) {
      console.error("Step 1 save failed", err);
    }

    setStep("details");
  };

  const handleDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      leadSource,
    };

    try {
      fetch("/api/franchise-lead-short-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      const res = await fetch("/api/franchise-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-944657062/OhOICIf4y_cbEKalucID",
            value: 1.0,
            currency: "USD",
          });
          window.gtag("event", "custom_market_request", {
            market_city: city,
            lead_source: leadSource,
          });
        }
        router.push("/thank-you");
        return;
      }

      const data = await res.json().catch(() => null);
      setError(data?.error || "Something went wrong. Please try again.");
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {step === "city" && (
          <motion.form
            key="city"
            onSubmit={handleCitySubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex gap-2"
          >
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your city or area"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className={`${inputStyle} pl-10`}
              />
            </div>
            <button
              type="submit"
              className="bg-[#C2A878] hover:bg-[#b09668] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
            >
              Analyze My Market
            </button>
          </motion.form>
        )}

        {step === "email" && (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">
                Analyzing: <strong>{city}</strong>
              </span>
              <button
                type="button"
                onClick={() => setStep("city")}
                className="text-xs text-[#C2A878] underline ml-1"
              >
                change
              </button>
            </div>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className={`${inputStyle} flex-1`}
              />
              <button
                type="submit"
                className="bg-[#C2A878] hover:bg-[#b09668] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
              >
                Continue
              </button>
            </form>
          </motion.div>
        )}

        {step === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">
                Market: <strong>{city}</strong>
              </span>
            </div>
            <form
              onSubmit={handleDetailsSubmit}
              className="grid grid-cols-2 gap-3"
            >
              <div>
                <label htmlFor="cm-firstName" className="sr-only">
                  First name
                </label>
                <input
                  id="cm-firstName"
                  name="firstName"
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                  className={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="cm-lastName" className="sr-only">
                  Last name
                </label>
                <input
                  id="cm-lastName"
                  name="lastName"
                  placeholder="Last name"
                  autoComplete="family-name"
                  required
                  className={inputStyle}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="cm-phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="cm-phone"
                  name="phone"
                  placeholder="Phone"
                  autoComplete="tel"
                  className={inputStyle}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="cm-zip" className="sr-only">
                  ZIP code
                </label>
                <input
                  id="cm-zip"
                  name="zip"
                  placeholder="ZIP code"
                  autoComplete="postal-code"
                  required
                  className={inputStyle}
                />
              </div>
              <div className="col-span-2">
                {error && (
                  <div className="mb-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C2A878] hover:bg-[#b09668] disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  {loading
                    ? "Submitting..."
                    : "Request My Custom Market Analysis"}
                </button>
                <p className="mt-2 text-[11px] text-center text-gray-500">
                  By submitting, you agree Spavia may contact you regarding
                  franchise opportunities.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
