"use client";

import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function FranchiseLongForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.currentTarget);
  
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      zip: formData.get("zip"),
      state: formData.get("state"),
      primaryGoal: formData.get("primaryGoal"),
      liquidAssets: formData.get("liquidAssets"),
      netWorth: formData.get("netWorth"),
      creditScore: formData.get("creditScore"),
    };
  
    /* 1️⃣ SUPABASE (DB ONLY — DO NOT BLOCK) */
    fetch("/api/franchise-lead-long-db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error("Supabase long form save failed:", err);
    });
  
    /* 2️⃣ ACTIVE CAMPAIGN (UNCHANGED) */
    const res = await fetch("/api/franchise-lead-long", {
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
    <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8">

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* First Name */}
        <div>
          <label className="form-label">First Name</label>
          <input
            name="firstName"
            required
            placeholder="John"
            className="form-input"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="form-label">Last Name</label>
          <input
            name="lastName"
            required
            placeholder="Doe"
            className="form-input"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="form-input"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="form-label">Phone</label>
          <input
            name="phone"
            required
            placeholder="555-123-4567"
            className="form-input"
          />
        </div>

        {/* Zip */}
        <div>
          <label className="form-label">Zip Code</label>
          <input
            name="zip"
            required
            placeholder="80202"
            className="form-input"
          />
        </div>

        {/* State */}
        <div>
          <label className="form-label">State</label>
          <select name="state" required className="form-select">

          <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>

        {/* Primary Goal */}
        <div>
          <label className="form-label">Primary Goal</label>
          <select name="primaryGoal" required className="form-select">
          <option value="">Select Goal</option>
          <option value="Financial Return">Financial Return</option>
          <option value="Freedom of Schedule">Freedom of Schedule</option>
          <option value="Portfolio Diversification">Portfolio Diversification</option>
          <option value="More Meaningful Career">More Meaningful Career</option>
          </select>
        </div>

        {/* Liquid Assets */}
        <div>
          <label className="form-label">Liquid Assets</label>
          <select name="liquidAssets" required className="form-select">
            <option value="">Select range</option>
            <option value="$0 - $200K">$0 – $200K</option>
            <option value="$200K - $500K">$200K – $500K</option>
            <option value="$500K - $1MM">$500K – $1MM</option>
            <option value="$1MM+">$1MM+</option>
          </select>
        </div>

        {/* Net Worth */}
        <div>
          <label className="form-label">Estimated Net Worth</label>
          <select name="netWorth" required className="form-select">
            <option value="">Select range</option>
            <option value="$0 - $150K">$0 – $150K</option>
            <option value="$150K - $350K">$150K – $350K</option>
            <option value="$350K - $500K">$350K – $500K</option>
            <option value="$500K - $700K">$500K – $700K</option>
          </select>
        </div>

        {/* Credit Score */}
        <div className="md:col-span-2">
          <label className="form-label">Credit Score</label>
          <select name="creditScore" required className="form-select">
            <option value="">Select score</option>
            <option value="<620">&lt;620</option>
            <option value="620-679">620 – 679</option>
            <option value="680-719">680 – 719</option>
            <option value="720+">720+</option>
          </select>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 pt-2">
          <Button
            disabled={loading}
            className="w-full bg-[#C2A878] text-white hover:bg-[#b09466]"
          >
            {loading ? "Submitting…" : "Submit Request"}
          </Button>

          <p className="mt-2 text-xs text-center text-gray-500">
            Confidential inquiry. No obligation.
          </p>
        </div>
      </form>

      <style jsx>{`
        .form-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.25rem;
          display: block;
        }

        .form-input,
        .form-select {
          width: 100%;
          background: #ffffff;
          border: 1px solid #d6d3c8;
          border-radius: 0.5rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #1f2937;
        }

        .form-input::placeholder {
          color: #9ca3af;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: #c2a878;
          box-shadow: 0 0 0 1px rgba(194, 168, 120, 0.35);
        }
      `}</style>
    </div>
  );
}
