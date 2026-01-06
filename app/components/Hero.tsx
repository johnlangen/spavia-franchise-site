"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  const handleStep1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      email,
      zip,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
    };

    const res = await fetch("/api/franchise-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/thank-you");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl w-full px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-3"
        >
          Own a Spavia Spa Franchise
        </motion.h1>

        <p className="text-center text-lg md:text-2xl mb-3">
          Join the $6 Trillion Wellness Industry
        </p>

        <p className="text-center text-sm md:text-base text-white/80 mb-6 max-w-3xl mx-auto">
          A premium day spa franchise with turnkey support, proven operations,
          and a nationally recognized brand.
        </p>

        {/* Glass form */}
        <div
          className={`mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${
            step === 1
              ? "max-w-2xl p-5"
              : "max-w-4xl p-6 md:p-8"
          }`}
        >
          {success ? (
            <p className="text-center text-lg font-semibold">
              Thank you! We’ll be in touch shortly.
            </p>
          ) : (
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.form
                  key="step1"
                  onSubmit={handleStep1}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-glass"
                  />

                  <input
                    placeholder="Zip code"
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="input-glass"
                  />

                  <div className="md:col-span-2">
                    <Button className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]">
                      Continue →
                    </Button>
                  </div>
                </motion.form>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.form
                  key="step2"
                  onSubmit={handleStep2}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
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
                    className="input-glass md:col-span-2"
                  />

                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]"
                    >
                      {loading ? "Submitting…" : "Get Franchise Info"}
                    </Button>

                    <p className="mt-3 text-xs text-center text-white/60 leading-relaxed">
                      By submitting this form, you agree that Spavia may contact
                      you by phone, email, or text regarding franchise
                      opportunities. Your information will only be used to
                      evaluate franchise candidacy. Message and data rates may
                      apply.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>

      <style jsx>{`
        .input-glass {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.5rem;
          padding: 0.65rem 0.9rem;
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
