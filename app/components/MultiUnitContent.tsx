"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingHero from "./LandingHero";
import ProofSection from "./ProofSection";
import FranchiseeTestimonialsSection from "./FranchiseeTestimonialsSection";
import ScheduleCallBanner from "./ScheduleCallBanner";
import GoldBottomBanner from "./GoldBottomBanner";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Shield, TrendingUp, Layers, Briefcase, Users } from "lucide-react";

const targetProfiles = [
  {
    icon: Building2,
    title: "Restaurant multi-unit operators",
    body:
      "You already understand service-business margins, hiring at scale, and local market dynamics. Spavia's per-unit AUV is comparable to a quick-service restaurant — at higher margins and with recurring membership revenue you don't get in QSR.",
  },
  {
    icon: TrendingUp,
    title: "Fitness franchise operators",
    body:
      "You've built a business around recurring monthly memberships. Spavia operates on the same membership economics with a complementary guest profile. Many fitness franchisees see Spavia as a natural diversification within wellness.",
  },
  {
    icon: Briefcase,
    title: "Real estate, finance & corporate executives",
    body:
      "You're looking for a passive-to-semi-passive investment that can scale into a regional portfolio. Spavia's model is built for absentee or semi-absentee ownership with a strong operational team in place.",
  },
  {
    icon: Users,
    title: "Hospitality & service business owners",
    body:
      "Your background in guest experience, staffing, and reputation management translates directly. Spavia's resort-inspired guest experience is built on the same principles that make hotels and high-end service businesses successful.",
  },
];

const multiUnitAdvantages = [
  {
    title: "Territory protection",
    body:
      "Development agreements include exclusive market rights — you secure the territory you'll grow into and keep competitors out.",
  },
  {
    title: "Phased opening schedule",
    body:
      "You commit to a multi-unit roadmap (typically 2-5 units over 3-5 years) without opening them all at once. First unit ramps, then second, then third — operational learnings compound.",
  },
  {
    title: "Reduced franchise fees per unit",
    body:
      "Multi-unit development agreements include franchise fee discounts on subsequent units, lowering per-unit entry cost as you scale.",
  },
  {
    title: "Shared overhead at scale",
    body:
      "Marketing, admin, regional management, and back-office costs spread across multiple units. Per-unit operating margin typically improves as you add units 2, 3, 4+.",
  },
  {
    title: "Brand recognition compounding",
    body:
      "Each new Spavia location reinforces brand recognition in the broader market, making unit 3 and 4 easier to ramp than unit 1.",
  },
  {
    title: "Stronger membership economics",
    body:
      "Multi-unit owners can offer members access across all their locations — increasing membership value and retention vs. single-unit competitors.",
  },
];

const faqs = [
  {
    q: "How many units can I commit to upfront?",
    a: "Most Spavia multi-unit development agreements are 2-5 units over 3-5 years. Larger commitments (5+ units) are available for qualified candidates with proven multi-unit operating experience.",
  },
  {
    q: "What's a development agreement?",
    a: "A development agreement is a contract that grants you exclusive rights to open Spavia franchises in a defined territory, with a committed schedule for opening each location. It locks in your territory and pricing while giving you flexibility on exact timing within the agreed window.",
  },
  {
    q: "What's the timeline for opening multiple locations?",
    a: "Typical Spavia opening timeline is 10-14 months per location from agreement to grand opening. Most multi-unit operators open their first location, achieve operational stability (6-12 months), then begin site selection on unit two while unit one continues to mature.",
  },
  {
    q: "Do you offer multi-unit franchise fee discounts?",
    a: "Yes. Multi-unit development agreements include reduced franchise fees on units beyond the first. Specific discount structures are detailed in the Spavia Franchise Disclosure Document (FDD) and discussed during the discovery process.",
  },
  {
    q: "Can I start with one unit and add more later?",
    a: "Yes. Many Spavia owners began with a single location and added units later as the first matured. Multi-unit development agreements offer better territory protection and fee structures, but single-unit owners with proven operational success have a clear path to expansion.",
  },
  {
    q: "Do I need spa industry experience to qualify?",
    a: "No prior spa industry experience is required. Spavia's training program covers all operational aspects. The vast majority of our multi-unit operators come from outside the spa industry — restaurant, fitness, real estate, hospitality, and corporate executive backgrounds are most common.",
  },
  {
    q: "What's the financial requirement for multi-unit development?",
    a: "Per-unit financial requirements remain the same as single-unit ($200K+ liquid, $500K+ net worth). Multi-unit operators should plan for these requirements scaled to their development commitment, plus additional working capital reserves for the phased rollout. Specifics discussed during qualification.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MultiUnitContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />

      <LandingHero
        headlineFirst="Build a Spavia"
        headlineSecond="Portfolio —"
        headlineHighlight="Multi-Unit Development"
        subhead="Spavia's multi-unit development program is built for experienced operators ready to scale a recurring-revenue wellness business across a region. Territory protection, phased rollout, and reduced franchise fees on every additional unit."
        bullets={[
          "Exclusive territory development rights",
          "Phased opening schedule (typically 2-5 units over 3-5 years)",
          "Reduced franchise fees on units 2+",
          "$1,110,481 median per-unit gross sales (2026 FDD, Item 19)",
          "Built for semi-absentee ownership at scale",
        ]}
        leadSource="lp-multi-unit"
      />

      <ProofSection />

      {/* Who this is for */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            Built for Operators Who Already Scale Service Businesses
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The most successful Spavia multi-unit operators come from outside
            the spa industry. They bring proven competencies in scaling
            service businesses — and apply them to a higher-margin, recurring-
            revenue category.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {targetProfiles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <div className="h-12 w-12 rounded-full bg-[#C2A878]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-[#C2A878]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Multi-Unit Math */}
      <section className="bg-gray-50 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            The Multi-Unit Math
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Per-unit economics scale up, not down. Here's how multi-unit
            ownership compounds value.
          </p>

          {/* Scale Math */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
              <p className="text-[#C2A878] text-xs uppercase tracking-widest font-semibold mb-2">
                Single Unit
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)] mb-2">
                $1.11M
              </p>
              <p className="text-gray-500 text-sm">Median annual gross sales*</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-[#C2A878] p-6 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C2A878] text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                Common Goal
              </span>
              <p className="text-[#C2A878] text-xs uppercase tracking-widest font-semibold mb-2">
                3-Unit Portfolio
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)] mb-2">
                $3.3M+
              </p>
              <p className="text-gray-500 text-sm">
                Combined annual gross sales (illustrative)
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
              <p className="text-[#C2A878] text-xs uppercase tracking-widest font-semibold mb-2">
                5-Unit Portfolio
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)] mb-2">
                $5.5M+
              </p>
              <p className="text-gray-500 text-sm">
                Combined annual gross sales (illustrative)
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto mb-12">
            *Source: 2026 Spavia FDD, Item 19, Part III. Portfolio illustrations
            assume per-unit performance at the 2025 reporting median. Actual
            results vary by location, market, and operational execution. See
            FDD for full disclosures.
          </p>

          {/* Multi-unit advantages */}
          <div className="grid md:grid-cols-2 gap-6">
            {multiUnitAdvantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl border border-gray-200 p-5"
              >
                <div className="flex items-start gap-3">
                  <Layers className="h-5 w-5 text-[#C2A878] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {a.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {a.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phased rollout */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            A Typical Multi-Unit Rollout
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Most Spavia multi-unit owners follow a phased opening cadence.
            Open one, stabilize, then expand.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: "Year 1",
                title: "Open Unit One",
                body: "Site selection, build-out, hiring, and grand opening. Full Spavia operational support. Typical timeline: 10-14 months from agreement to opening.",
              },
              {
                phase: "Year 2",
                title: "Stabilize + Plan Unit Two",
                body: "Unit one reaches operational maturity. Membership base builds. Begin site selection on unit two with operational learnings from unit one applied.",
              },
              {
                phase: "Years 3-5",
                title: "Scale to 3-5 Units",
                body: "Open units two through five on phased schedule. Per-unit ramp accelerates as brand recognition compounds in the regional market.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border-2 border-[#C2A878] text-[#C2A878] font-bold mb-4 font-[family-name:var(--font-recoleta)]">
                  {i + 1}
                </div>
                <p className="text-[#C2A878] text-xs uppercase tracking-widest font-semibold mb-1">
                  {p.phase}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FranchiseeTestimonialsSection />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-[family-name:var(--font-recoleta)]">
            Multi-Unit Development FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-gray-200 pb-4"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900 text-lg hover:text-[#C2A878]">
                  {f.q}
                  <span className="text-2xl text-gray-400 group-open:rotate-180 transition-transform">
                    ⌃
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ScheduleCallBanner />

      {/* Explore More */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/franchise-cost"
              className="block p-4 rounded-xl border border-white/20 hover:border-[#C2A878] transition-colors"
            >
              <p className="font-bold text-white text-sm">Franchise Cost</p>
              <p className="text-xs text-white/60">Full investment breakdown</p>
            </Link>
            <Link
              href="/your-spavia"
              className="block p-4 rounded-xl border border-white/20 hover:border-[#C2A878] transition-colors"
            >
              <p className="font-bold text-white text-sm">The Spavia Model</p>
              <p className="text-xs text-white/60">
                Services, membership, revenue
              </p>
            </Link>
            <Link
              href="/our-franchisees"
              className="block p-4 rounded-xl border border-white/20 hover:border-[#C2A878] transition-colors"
            >
              <p className="font-bold text-white text-sm">Our Franchisees</p>
              <p className="text-xs text-white/60">Real owners, real results</p>
            </Link>
          </div>
        </div>
      </section>

      <GoldBottomBanner />
      <Footer />
    </>
  );
}
