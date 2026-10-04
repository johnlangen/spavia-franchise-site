"use client";

import { useState, useRef, useEffect, useId } from "react";
import { useRouter } from "next/navigation";
import { getAttribution } from "../lib/attribution";

interface Props {
  leadSource?: string;
  formType?: "hero" | "landing" | "intro";
  compact?: boolean;
}

/** Shared email-first lead flow, with a compact entry for the homepage hero. */
export default function FranchiseOverviewForm({
  leadSource,
  formType = "intro",
  compact = false,
}: Props) {
  const router = useRouter();
  const id = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  // Preserve each existing form's reporting dimensions when sharing its UI.
  const eventSource =
    formType === "hero"
      ? {}
      : {
          leadSource:
            leadSource || (formType === "intro" ? "unspecified" : undefined),
        };
  /* ---------------- FORM STATE ---------------- */
  const [step, setStep] = useState<1 | 2>(1);
  const [savingEmail, setSavingEmail] = useState(false);
  const savingEmailRef = useRef(false);
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
    if (savingEmailRef.current) return;
    savingEmailRef.current = true;
    setSavingEmail(true);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_step1_submitted", {
        form: formType,
        ...eventSource,
      });
    }
    try {
      await fetch("/api/franchise-lead-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          leadSource: leadSource,
          attribution: getAttribution(),
        }),
      });
    } catch (err) {
      console.error("Step 1 DB save failed", err);
    }
    setStep(2);
    setSavingEmail(false);
    savingEmailRef.current = false;
  };

  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const attribution = getAttribution();
    const liquidTier = String(formData.get("liquidTier") || "");
    const phoneDigits = String(formData.get("phone") || "").replace(/\D/g, "");
    if (!(
      phoneDigits.length === 10 ||
      (phoneDigits.length === 11 && phoneDigits.startsWith("1"))
    )) {
      setError(
        "Please enter a valid 10-digit US phone number, including area code.",
      );
      setLoading(false);
      phoneRef.current?.focus();
      return;
    }

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_step2_submitted", {
        form: formType,
        liquidTier,
        ...eventSource,
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
        body: JSON.stringify({
          ...payload,
          leadSource: leadSource,
          attribution,
        }),
      }).catch(() => {});

      const res = await fetch("/api/franchise-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          leadSource: leadSource,
          attribution,
        }),
      });

      if (res.ok) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-944657062/OhOICIf4y_cbEKalucID",
            value: 1.0,
            currency: "USD",
          });
          const qualified =
            liquidTier === "$200K - $500K" ||
            liquidTier === "$500K - $1MM" ||
            liquidTier === "$1MM+";
          if (qualified) {
            window.gtag("event", "qualified_lead_submitted", {
              liquidTier,
              ...(formType === "landing" ? { leadSource } : {}),
            });
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
      setError(
        "Unable to connect. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (step === 2) firstNameRef.current?.focus();
  }, [step]);

  const compactEmail = compact && step === 1;
  const qualification = (
    <p className={compactEmail ? "hero-form-qualification" : "form-qualification"}>
      Candidates need <strong>$200K+ liquid capital</strong> and{" "}
      <strong>$500K+ net worth.</strong>
    </p>
  );

  return (
    <div
      className={`overview-form${compact ? " overview-form-compact" : ""}`}
      data-section="overview_form"
    >
      {!compactEmail && (
        <>
          <div className="form-heading">
            <p className="eyebrow">Your next chapter</p>
            <h2>Get the franchise overview</h2>
            <p>Explore the investment, the model and your market with Alisa.</p>
          </div>
          {qualification}
        </>
      )}
      <p className={compactEmail ? "sr-only" : "form-progress"} role="status">
        Step {step} of 2 <span aria-hidden="true">—</span>{" "}
        {step === 1 ? "Your email" : "A little about you"}
      </p>
      {step === 1 ? (
        <form onSubmit={handleStep1} className="lead-fields">
          <div>
            <label htmlFor={`${id}-email`}>Email address</label>
            <input
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            disabled={savingEmail}
            className="button button-primary w-full"
          >
            {savingEmail ? "Continuing…" : "Get the Franchise Overview"}{" "}
            <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">
            {compactEmail
              ? "Step 1 of 2. No obligation."
              : "No obligation. Complete the next step so we can follow up."}
          </p>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="lead-fields">
          <div className="form-name-row">
            <div>
              <label htmlFor={`${id}-first`}>First name</label>
              <input
                ref={firstNameRef}
                id={`${id}-first`}
                name="firstName"
                autoComplete="given-name"
                required
              />
            </div>
            <div>
              <label htmlFor={`${id}-last`}>Last name</label>
              <input
                id={`${id}-last`}
                name="lastName"
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor={`${id}-phone`}>Phone number</label>
            <input
              ref={phoneRef}
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              pattern="[0-9\s\-\(\)\+\.]{7,}"
              title="Please enter a valid phone number"
            />
          </div>
          <div>
            <label htmlFor={`${id}-zip`}>ZIP code</label>
            <input
              id={`${id}-zip`}
              name="zip"
              autoComplete="postal-code"
              inputMode="numeric"
              pattern="[0-9]{5}"
              maxLength={5}
              required
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
                if (zipError) validateZip(e.target.value);
              }}
              onBlur={(e) => validateZip(e.target.value)}
              aria-invalid={!!zipError}
              aria-describedby={zipError ? `${id}-zip-error` : undefined}
            />
            {zipError && (
              <p id={`${id}-zip-error`} className="form-error">
                {zipError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor={`${id}-capital`}>
              Liquid capital available to invest
            </label>
            <select
              id={`${id}-capital`}
              name="liquidTier"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select a range
              </option>
              <option value="$0 - $200K">$0 – $200K</option>
              <option value="$200K - $500K">$200K – $500K</option>
              <option value="$500K - $1MM">$500K – $1MM</option>
              <option value="$1MM+">$1MM+</option>
            </select>
          </div>
          {error && (
            <div role="alert" className="form-error">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="button button-primary w-full"
          >
            {loading ? "Submitting…" : error ? "Try Again" : "Request Info"}
          </button>
          <p className="form-note">
            By submitting, you agree Spavia may contact you by email, phone, or
            text regarding franchise opportunities.
          </p>
        </form>
      )}
      {compactEmail && qualification}
    </div>
  );
}
