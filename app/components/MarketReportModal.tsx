"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import type { CountyMarket } from "../data/markets";

interface MarketReportModalProps {
  county: CountyMarket | null;
  onClose: () => void;
}

export default function MarketReportModal({
  county,
  onClose,
}: MarketReportModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!county) return null;

  const leadSource = `market_report_${county.stateAbbr.toLowerCase()}_${county.countyName.toLowerCase().replace(/\s+/g, "-")}`;
  const marketLabel = `${county.countyName}, ${county.stateAbbr} (${county.areas.join(", ")})`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Save to Supabase
      await fetch("/api/franchise-lead-short-db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          leadSource,
        }),
      });

      // Submit to ActiveCampaign
      await fetch("/api/franchise-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          leadSource,
        }),
      });

      // Fire GA4 event if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "market_report_request", {
          market: marketLabel,
          lead_source: leadSource,
        });
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            /* Success state */
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Your Market Report Is on Its Way
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                We&apos;ll send a detailed market analysis for{" "}
                <strong>{county.countyName}</strong> to your email shortly. A
                franchise advisor may follow up to discuss the opportunity.
              </p>
              <button
                onClick={onClose}
                className="bg-[#C2A878] hover:bg-[#b09668] text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form state */
            <>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Request Your Free Market Report
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Get a detailed analysis of the{" "}
                <strong>
                  {county.areas[0]}, {county.stateAbbr}
                </strong>{" "}
                market opportunity.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="mr-first"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="mr-first"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#C2A878] focus:border-[#C2A878] outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mr-last"
                      className="block text-xs font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="mr-last"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#C2A878] focus:border-[#C2A878] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mr-email"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="mr-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#C2A878] focus:border-[#C2A878] outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mr-phone"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="mr-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#C2A878] focus:border-[#C2A878] outline-none"
                  />
                </div>

                {/* Market interest (readonly) */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Market Interest
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={marketLabel}
                    className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-600"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C2A878] hover:bg-[#b09668] disabled:opacity-50 text-white font-semibold py-3 rounded-full transition-colors"
                >
                  {loading ? "Submitting..." : "Send My Report"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
