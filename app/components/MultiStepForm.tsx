"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";


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

export default function MultiStepForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Submitted", formData, captcha);
      setShowSuccess(true); // show custom popup
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C2A878]";

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
        Start Your Spavia Journey
      </h2>
      <p className="text-center text-gray-700 mb-6">
        Complete the form below to learn more about the Spavia Day Spa franchise opportunity.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 1 */}
        {step === 1 && (
          <>
            <h3 className="text-lg font-semibold text-gray-900">Step 1 of 3</h3>
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

            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-[#C2A878] text-white py-2 rounded"
            >
              Next Step
            </button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h3 className="text-lg font-semibold text-gray-900">Step 2 of 3</h3>
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
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-300 rounded">
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-[#C2A878] text-white rounded"
              >
                Next Step
              </button>
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <h3 className="text-lg font-semibold text-gray-900">Step 3 of 3</h3>
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

            <div className="flex justify-between">
              <button type="button" onClick={handlePrev} className="px-4 py-2 bg-gray-300 rounded">
                Back
              </button>
              <button type="submit" className="px-4 py-2 bg-[#C2A878] text-white rounded">
                Submit
              </button>
            </div>
          </>
        )}
      </form>

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-xl text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowSuccess(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Form Submitted!</h2>
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
    </div>
  );
}
