"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import AwardsSection from "./AwardsSection";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
  "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming","District of Columbia"
];

export default function GetStartedContent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    investment: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }
    }

    if (step === 2) {
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "Select a state";
    }

    if (step === 3) {
      if (!formData.investment) newErrors.investment = "Select an investment range";
      if (!captcha) newErrors.captcha = "Please verify you’re not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setLoading(true);
      try {
        const res = await fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, captcha }),
        });

        const data = await res.json();
        if (data.success) {
          setShowSuccess(true);
          // reset form
          setStep(1);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            state: "",
            investment: "",
          });
          setCaptcha(null);
        } else {
          alert("Error: " + data.error);
        }
      } catch (err) {
        alert("Submission failed. Please try again.");
        console.error("❌ Submit error:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C2A878]";

  const buttonClass =
    "w-full bg-[#C2A878] text-black font-semibold py-3 rounded-md hover:bg-[#b09466] transition-colors disabled:opacity-50";

  return (
    <ThemeProvider>
      <main className="bg-black text-white flex flex-col">
        <NavBar />

        <section className="flex-grow flex flex-col items-center justify-start px-6 pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-6"
          >
            Get Started With Spavia – Your Spa Franchise Opportunity
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl font-semibold text-center text-[#C2A878] mb-6"
          >
            Build your future in the $6.3 Trillion wellness industry
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300 text-center max-w-2xl mb-12 leading-relaxed"
          >
            Let’s discuss the benefits of bringing a resort-like spa experience
            to your neighborhood. Fill out the form below to begin your
            franchise journey. Learn more about our{" "}
            <Link
              href="/steps-to-ownership"
              className="text-[#C2A878] underline hover:text-[#b09466]"
            >
              Steps to Ownership
            </Link>{" "}
            process.
          </motion.p>

          {/* Multi-step form (dark theme) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-black border border-gray-700 rounded-xl shadow-lg p-10 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-center mb-4">
              Start Your Spavia Journey
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <>
                  <p className="text-center text-[#C2A878] font-medium mb-2">
                    Step 1 of 3
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  <button type="button" onClick={handleNext} className={buttonClass}>
                    Next Step
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="text-center text-[#C2A878] font-medium mb-2">
                    Step 2 of 3
                  </p>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select State</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}

                  <div className="flex justify-between">
                    <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                      Back
                    </button>
                    <button type="button" onClick={handleNext} className="px-4 py-2 bg-[#C2A878] text-black rounded hover:bg-[#b09466]">
                      Next Step
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <p className="text-center text-[#C2A878] font-medium mb-2">
                    Step 3 of 3
                  </p>
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Liquid Asset Investment</option>
                    <option value="$0-$200k">$0 - $200K</option>
                    <option value="$200k-$500k">$200K - $500K</option>
                    <option value="$500k-$1MM">$500K - $1MM</option>
                    <option value="$1MM+">$1MM+</option>
                  </select>
                  {errors.investment && <p className="text-red-500 text-sm">{errors.investment}</p>}
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                    onChange={(value) => setCaptcha(value)}
                  />
                  {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}

                  <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="w-1/3 bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-2/3 bg-[#C2A878] text-black font-semibold py-2 rounded hover:bg-[#b09466] transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    </div>

                </>
              )}
            </form>
          </motion.div>
        </section>

        <section className="bg-gray-50">
          <AwardsSection />
        </section>
        <Footer />

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-xl text-center relative text-black">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                onClick={() => setShowSuccess(false)}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">Form Submitted!</h2>
              <p className="text-gray-700 mb-6">
                Thank you for your interest in Spavia! Our team will contact you soon.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#C2A878] text-white px-5 py-2 rounded-full hover:bg-[#b09466] transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </main>
    </ThemeProvider>
  );
}
