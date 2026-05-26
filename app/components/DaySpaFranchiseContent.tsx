"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import FranchiseIntroForm from "./FranchiseIntroForm";
import ProofSection from "./ProofSection";
import FranchiseeTestimonialsSection from "./FranchiseeTestimonialsSection";
import ScheduleCallBanner from "./ScheduleCallBanner";
import GoldBottomBanner from "./GoldBottomBanner";
import FloatingButton from "./FloatingButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const differentiators = [
  {
    title: "Membership-driven recurring revenue",
    body:
      "Spavia's day spa model is built around recurring monthly memberships, not transactional walk-ins. The average Spavia owner builds a predictable membership base that drives consistent monthly revenue independent of foot traffic.",
  },
  {
    title: "Multi-service revenue streams",
    body:
      "Massage, facials, body treatments, waxing, lash & brow, and retail. Multiple revenue lines smooth seasonality and let a single guest visit produce $150+ in average ticket.",
  },
  {
    title: "Resort-inspired guest experience",
    body:
      "Spavia is positioned in the 'accessible luxury' segment of the day spa market — premium enough to command membership pricing, broad enough to convert mainstream wellness consumers.",
  },
  {
    title: "Full operational support",
    body:
      "Site selection, lease negotiation, build-out management, hiring and training, marketing systems, vendor relationships. You're not figuring this out alone.",
  },
];

const faqs = [
  {
    q: "How much does it cost to open a Spavia day spa franchise?",
    a: "The total estimated initial investment ranges from $479,450 to $885,450 (2026 FDD, Item 7). This includes the $59,500 franchise fee, build-out, equipment, signage, technology, and three months of additional funds. SBA-eligible financing options are available.",
  },
  {
    q: "What revenue can a Spavia day spa franchise generate?",
    a: "Spavia franchisees reported median gross sales of $1,110,481 in 2025, with 1 in 2 reporting locations exceeding $1M (2026 FDD, Item 19, 44 reporting locations).",
  },
  {
    q: "Do I need spa industry experience to open a Spavia day spa?",
    a: "No prior spa industry experience is required. Spavia's training program covers operations, service delivery, marketing, hiring, and financial management. Many of our most successful franchisees come from corporate, finance, healthcare, and entrepreneurial backgrounds.",
  },
  {
    q: "How long does it take to open a Spavia day spa?",
    a: "Typical timeline from signing the franchise agreement to grand opening is 10 to 14 months, including site selection, lease negotiation, build-out, equipment installation, hiring, and training.",
  },
  {
    q: "What's the difference between a day spa franchise and a med spa franchise?",
    a: "A day spa franchise like Spavia offers wellness, beauty, and relaxation services (massage, facials, body treatments, waxing) without medical procedures. Med spa franchises offer procedures like injectables, laser, and microneedling — which require a physician medical director and different licensing. Day spa franchises typically have lower initial investment and faster ramp.",
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

export default function DaySpaFranchiseContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />
      <Breadcrumbs items={[{ label: "Day Spa Franchise" }]} />

      {/* Hero with form */}
      <section className="bg-black text-white py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-recoleta)] leading-tight"
            >
              Own a Day Spa Franchise With{" "}
              <span className="text-[#C2A878]">$1.1M+ Median Revenue</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 text-lg mb-6 leading-relaxed"
            >
              Spavia is a proven day spa franchise opportunity with 63 locations,
              a recurring-revenue membership model, and full operational support
              from site selection to grand opening.
            </motion.p>
            <ul className="space-y-3 text-white/90 mb-6">
              {[
                "$479K – $885K total initial investment",
                "$1,110,481 median gross sales (2026 FDD, Item 19)",
                "1 in 2 owners achieve $1M+ revenue",
                "10–14 month opening timeline",
                "SBA-eligible financing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#C2A878] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50">
              Source: 2026 Spavia FDD, Items 7 & 19. Results vary by location.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl">
            <FranchiseIntroForm leadSource="lp-day-spa-franchise" />
          </div>
        </div>
      </section>

      <ProofSection />

      {/* Differentiators */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            What Makes Spavia Different
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            The day spa franchise category has grown crowded. Here's why
            Spavia owners outperform.
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

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-[family-name:var(--font-recoleta)]">
            Day Spa Franchise FAQ
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

      {/* Cross-link to related pages — keeps non-converters engaged */}
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
      <FloatingButton />
    </>
  );
}
