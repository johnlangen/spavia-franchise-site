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
    title: "Built on the $6.3T global wellness market",
    body:
      "Wellness is now larger than the global pharmaceutical industry. Spavia is positioned in the highest-growth segment: in-person experiential wellness, where consumers spend an estimated $2,500+ annually on services they could otherwise skip.",
  },
  {
    title: "Membership model, not transactional",
    body:
      "Unlike fitness studios or boutique service brands, Spavia operates a recurring-membership model. Members visit monthly, generating predictable revenue independent of foot traffic or seasonality.",
  },
  {
    title: "Multi-service revenue, not single-vertical",
    body:
      "Most wellness franchises specialize in one thing — yoga, cryotherapy, IV drip, recovery, sauna. Spavia delivers a full menu of services (massage, facials, body treatments, waxing, retail) so members don't need to leave for an adjacent need.",
  },
  {
    title: "Resort-inspired guest experience",
    body:
      "Spavia is positioned as 'accessible luxury' — premium enough to command membership pricing, broad enough to convert mainstream wellness consumers in any market.",
  },
];

const faqs = [
  {
    q: "How much does a wellness franchise like Spavia cost?",
    a: "Spavia's total initial investment ranges from $479,450 to $885,450 (2026 FDD, Item 7). This is in line with most established wellness franchise opportunities and significantly less than med spa franchise concepts, which typically require $800K to $2M+ due to clinical equipment and physician requirements.",
  },
  {
    q: "How does Spavia compare to other wellness franchise opportunities?",
    a: "Most wellness franchises specialize in a single service vertical — yoga (CorePower, YogaSix), recovery (Restore, Sweathouz), cryotherapy, or IV therapy. Spavia delivers a full-service wellness experience: massage, facials, body treatments, waxing, lash & brow, and retail. The multi-service mix smooths seasonality and increases per-guest revenue, while the membership model creates recurring monthly income.",
  },
  {
    q: "What revenue do wellness franchise owners generate at Spavia?",
    a: "Spavia franchisees reported median gross sales of $1,110,481 in 2025 (2026 FDD, Item 19, 44 reporting locations). About 1 in 2 reporting locations exceeded $1M in annual gross sales — a strong benchmark in the wellness franchise category.",
  },
  {
    q: "Do I need prior wellness or spa experience to own a Spavia franchise?",
    a: "No. Spavia franchise owners are business operators, not service providers. You hire licensed massage therapists, estheticians, and other wellness professionals. Many of our most successful owners come from corporate, finance, healthcare, and entrepreneurial backgrounds.",
  },
  {
    q: "What support does Spavia provide to wellness franchise owners?",
    a: "Site selection, lease negotiation, build-out management, hiring and training programs, marketing systems, vendor relationships, ongoing operational coaching, and a community of 63+ existing franchise owners. Our leadership team brings 120+ years of combined spa and wellness experience.",
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

export default function WellnessFranchiseContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />

      <LandingHero
        headlineFirst="The Wellness Franchise"
        headlineSecond="Built for"
        headlineHighlight="Recurring Revenue"
        subhead="Spavia is a full-service wellness franchise operating in the accessible-luxury segment of the $6.3 trillion global wellness market — with a multi-service revenue model and recurring membership economics."
        bullets={[
          "$1,110,481 median gross sales (2026 FDD, Item 19)",
          "Membership-driven recurring revenue model",
          "Full service mix: massage, facials, body, waxing, retail",
          "63 locations across the United States",
          "$479K – $885K total investment",
        ]}
        leadSource="lp-wellness-franchise"
      />

      <ProofSection />

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            Why Wellness Franchise Buyers Choose Spavia
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Most wellness franchises specialize in one service. Spavia is the
            multi-service exception — designed for higher per-guest revenue
            and member retention.
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
            Wellness Franchise FAQ
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
      <FloatingButton />
    </>
  );
}
