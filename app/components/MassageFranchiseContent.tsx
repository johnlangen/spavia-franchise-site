"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingHero from "./LandingHero";
import ProofSection from "./ProofSection";
import FranchiseeTestimonialsSection from "./FranchiseeTestimonialsSection";
import ScheduleCallBanner from "./ScheduleCallBanner";
import GoldBottomBanner from "./GoldBottomBanner";
import Link from "next/link";

const differentiators = [
  {
    title: "More than just massage — full-service spa revenue",
    body:
      "Massage-only franchise concepts limit your revenue ceiling. Spavia franchises offer massage alongside facials, body treatments, waxing, and lash & brow services — multiple revenue lines from a single guest visit, with average tickets significantly higher than single-service models.",
  },
  {
    title: "Membership model designed for retention",
    body:
      "Like the leading massage franchises, Spavia operates on a recurring monthly membership model. Unlike them, our members get access to a broader service menu — improving retention because guests aren't pigeonholed into a single service.",
  },
  {
    title: "Resort-inspired environment, not a clinical chain",
    body:
      "Spavia is positioned as 'accessible luxury' — a guest experience designed to feel like a resort spa, at membership-friendly pricing. This differentiates us from clinical-feeling massage chains and supports premium membership rates.",
  },
  {
    title: "Operational infrastructure, not just a logo",
    body:
      "Site selection, lease negotiation, build-out, hiring, training, marketing, vendor relationships — full franchisor support through opening and beyond. 120+ years of combined leadership spa experience.",
  },
];

const faqs = [
  {
    q: "How much does it cost to open a Spavia massage franchise?",
    a: "Total estimated initial investment ranges from $479,450 to $885,450 (2026 FDD, Item 7), including the $59,500 franchise fee, build-out, equipment, technology, and three months of operating reserves. SBA-eligible financing is available.",
  },
  {
    q: "What's the revenue potential of a Spavia franchise vs. a massage-only franchise?",
    a: "Spavia franchisees reported median gross sales of $1,110,481 in 2025 (2026 FDD, Item 19, 44 reporting locations). Our multi-service revenue model — massage, facials, body treatments, retail — typically generates higher per-visit revenue than single-service massage franchises.",
  },
  {
    q: "How does Spavia compare to massage-only franchises like Massage Envy or Hand & Stone?",
    a: "Massage Envy and Hand & Stone are massage-focused membership franchises. Spavia offers the same recurring-membership economics but with a broader service mix (facials, body treatments, waxing, lash & brow, retail), a more upscale guest experience, and resort-inspired design. The result: higher average ticket and stronger membership retention.",
  },
  {
    q: "Do I need to be a massage therapist to open a Spavia franchise?",
    a: "No. Spavia franchise owners are business operators, not service providers. You hire licensed massage therapists, estheticians, and other service professionals — most owners come from corporate, finance, healthcare, or entrepreneurial backgrounds.",
  },
  {
    q: "How long is the Spavia franchise training program?",
    a: "Spavia's training program covers operations, hiring, service delivery, marketing, financial management, and member retention. Training begins pre-opening and continues with ongoing support through field visits, regional managers, and franchisee community programs.",
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

export default function MassageFranchiseContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />

      <LandingHero
        headlineFirst="A Massage Franchise"
        headlineSecond=""
        headlineHighlight="Designed to Outperform"
        subhead="Spavia is a full-service spa franchise built on the membership model — with massage as a core service, complemented by facials, body treatments, and retail to drive higher per-visit revenue than massage-only chains."
        bullets={[
          "$1,110,481 median gross sales (2026 FDD, Item 19)",
          "Membership-driven recurring revenue",
          "Multi-service revenue: massage + facials + retail",
          "63 locations and growing",
          "10–14 month opening timeline",
        ]}
        leadSource="lp-massage-franchise"
      />

      <ProofSection />

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            Why Spavia Beats Massage-Only Franchises
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Single-service massage franchises cap your revenue ceiling at one
            type of guest visit. Spavia's full-service model unlocks more.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="border-l-4 border-[#C2A878] pl-5"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FranchiseeTestimonialsSection />

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-[family-name:var(--font-recoleta)]">
            Massage Franchise FAQ
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
              <p className="text-xs text-white/60">Services, membership, revenue</p>
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
