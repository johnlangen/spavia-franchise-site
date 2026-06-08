"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingHero from "./LandingHero";
import ProofSection from "./ProofSection";
import FranchiseeTestimonialsSection from "./FranchiseeTestimonialsSection";
import ScheduleCallBanner from "./ScheduleCallBanner";
import GoldBottomBanner from "./GoldBottomBanner";
import FloatingButton from "./FloatingButton";
import Link from "next/link";

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
  {
    q: "Are day spa franchises a good investment?",
    a: "Day spa franchises tend to perform best when they're built on recurring revenue rather than one-off visits. Spavia's membership model produced median gross sales of $1,110,481 in 2025 (2026 FDD, Item 19), with 1 in 2 reporting locations exceeding $1M. As with any franchise, results vary by owner, market, and execution, and the FDD provides the full financial picture so you can evaluate the opportunity with real numbers.",
  },
  {
    q: "What makes Spavia one of the best day spa franchise opportunities?",
    a: "Spavia pairs a 20-year operating history and 63 locations with a recurring-membership model, multiple in-demand service lines, and end-to-end owner support. It sits in the 'accessible luxury' segment: premium enough to command membership pricing, yet broad enough to attract mainstream wellness guests. That positioning is what separates it from single-service and purely transactional spa concepts.",
  },
  {
    q: "Where can I open a Spavia day spa franchise?",
    a: "Spavia is actively awarding territories across the United States, with availability in many growing suburban and metro markets. During the discovery process we'll review open territories near you and help identify a site that fits the model.",
  },
];

const independentPath = [
  "Build brand awareness from zero in your market",
  "Design operations, pricing, and service menus by trial and error",
  "Negotiate equipment and product pricing on your own",
  "Solve hiring, training, and retention without a playbook",
  "A longer, riskier path to consistent profitability",
];

const franchisePath = [
  "Launch under a trusted brand with 20 years and 63 locations",
  "A proven membership model and department-by-department playbooks",
  "National vendor pricing and an established supply chain",
  "Full training in operations, service, marketing, and hiring",
  "Guided support from site selection through grand opening",
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

      <LandingHero
        headlineFirst="Own a Day Spa Franchise"
        headlineSecond="With"
        headlineHighlight="$1.1M+ Median Revenue"
        subhead="Spavia is a proven day spa franchise opportunity with 63 locations, a recurring-revenue membership model, and full operational support from site selection to grand opening."
        bullets={[
          "$479K – $885K total initial investment",
          "$1,110,481 median gross sales (2026 FDD, Item 19)",
          "1 in 2 owners achieve $1M+ revenue",
          "10–14 month opening timeline",
          "SBA-eligible financing",
        ]}
        leadSource="lp-day-spa-franchise"
      />

      <ProofSection />

      {/* What is a day spa franchise — topical overview */}
      <section className="bg-[#FAF8F5] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#C2A878] font-semibold mb-3 text-center">
            The Opportunity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6 font-[family-name:var(--font-recoleta)]">
            What Is a Day Spa Franchise?
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              A day spa franchise lets you open and run a full-service spa under
              an established brand, with the training, systems, and buying power
              of a national network behind you, instead of building every part of
              the business from scratch. For many owners, it&apos;s the difference
              between learning the industry the hard way and stepping into a model
              that already works.
            </p>
            <p>
              Spavia is a day spa franchise built around{" "}
              <span className="text-gray-900 font-semibold">
                recurring memberships
              </span>{" "}
              rather than one-off appointments. Guests join for monthly massage,
              facial, and body treatments, giving owners predictable revenue that
              doesn&apos;t rise and fall with walk-in traffic. A single visit can
              span several services like massage, facials, waxing, lash &amp; brow,
              and retail, which lifts average ticket and smooths seasonality.
            </p>
            <p>
              Since 2005, Spavia has grown to 63 locations and now ranks among the
              most established day spa franchise opportunities in the
              accessible-luxury segment. Owners come from corporate, finance,
              healthcare, and entrepreneurial backgrounds, and no prior spa
              experience is required.
            </p>
          </div>
        </div>
      </section>

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

      {/* Franchise vs. independent comparison */}
      <section className="bg-[#FAF8F5] py-16 md:py-20 px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            Day Spa Franchise vs. Going It Alone
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            First-time owners often weigh opening an independent day spa against
            joining a proven franchise. Here&apos;s how the two paths compare.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-7">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Opening an Independent Day Spa
              </h3>
              <ul className="space-y-3">
                {independentPath.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="text-gray-300 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl bg-white border-2 border-[#C2A878] p-7 shadow-sm">
              <span className="absolute -top-3 left-7 bg-[#C2A878] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Spavia
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-5 mt-1">
                A Spavia Day Spa Franchise
              </h3>
              <ul className="space-y-3">
                {franchisePath.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-gray-700 leading-relaxed"
                  >
                    <span className="text-[#C2A878] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
