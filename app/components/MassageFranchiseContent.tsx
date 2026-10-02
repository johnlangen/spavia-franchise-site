"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import LandingHero from "./LandingHero";
import Breadcrumbs from "./Breadcrumbs";
import ProofSection from "./ProofSection";
import FranchiseeTestimonialsSection from "./FranchiseeTestimonialsSection";
import ScheduleCallBanner from "./ScheduleCallBanner";
import GoldBottomBanner from "./GoldBottomBanner";
import Link from "next/link";

const differentiators = [
  {
    "title": "A service mix built around regular visits",
    "body": "Spavia offers massage, facials, body treatments, waxing and retail within one day spa. Members can build a routine around more than one service. The mix gives owners several departments to manage and develop within one guest experience."
  },
  {
    "title": "Memberships and the guest experience",
    "body": "The monthly membership model supports repeat visits. Owners still need to earn renewals through service quality, appointment availability and guest care. A consistent guest experience and local marketing help the team build those relationships."
  },
  {
    "title": "A resort-inspired setting",
    "body": "Spavia combines treatment rooms with a retreat area and a focus on the guest experience. Compare the space, build-out requirements and service menu with each franchise you research, rather than assuming all massage brands use the same format."
  },
  {
    "title": "Support for the business you operate",
    "body": "Franchise support covers site selection, build-out guidance, training, marketing and ongoing operations. The owner remains responsible for building a team, managing the business and applying the operating standards in the local market."
  }
];

const faqs = [
  {
    "q": "How much does it cost to open a Spavia massage franchise?",
    "a": "Spavia’s full-service day spa requires an estimated $479,450–$885,450 initial investment, including the $59,500 franchise fee (2026 FDD, Items 5 and 7). Candidates need at least $200,000 in liquid capital and $500,000 net worth. Liquid capital is a qualification requirement, not the total cost to open."
  },
  {
    "q": "Is Spavia a massage-only franchise?",
    "a": "No. Massage is one core service within a Spavia day spa, alongside facials, body treatments, waxing and retail. This is one full-service franchise opportunity, not a separate massage-only format."
  },
  {
    "q": "How does Spavia compare with Massage Envy and Hand & Stone?",
    "a": "All three offer massage and skincare services, so service breadth alone does not distinguish them. Compare investment requirements, guest experience, ownership structure, territory availability, training and the current FDD for each. Spavia is a family-owned, founder-led day spa brand with a membership model."
  },
  {
    "q": "Do I need to be a massage therapist to own a Spavia?",
    "a": "You do not need to personally provide treatments. Owners manage the business and hire appropriately licensed service professionals. Recruiting, scheduling, team development and guest service are central operating responsibilities."
  },
  {
    "q": "What revenue does Spavia disclose?",
    "a": "The 2026 FDD, Item 19, Part III reports median annual revenue (cash receipts) of $1,110,481 among 44 reporting franchised locations for 2025. This is revenue, not owner income or a forecast. Review the reporting criteria and full financial disclosure; individual results vary."
  }
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

const franchiseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Massage Spa Franchise Opportunity",
  name: "Spavia Massage Spa Franchise",
  provider: {
    "@type": "Organization",
    "@id": "https://spaviafranchise.com/#organization",
    name: "Spavia Franchise",
  },
  areaServed: "US",
  description:
    "Own a Spavia massage spa franchise — a full-service, membership-based day spa franchise pairing massage with facials, body treatments, and retail for multiple revenue lines.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: 479450,
      maxPrice: 885450,
    },
  },
};

export default function MassageFranchiseContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(franchiseJsonLd) }}
      />
      <NavBar />
      <Breadcrumbs items={[{ label: "Massage Franchise" }]} />

      <LandingHero
        headlineFirst="A Massage Franchise"
        headlineSecond=""
        headlineHighlight="Within a Full-Service Spa"
        subhead="Explore massage franchise ownership with Spavia: a full-service day spa combining massage, facials, body treatments and retail with a recurring membership model."
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
            What to compare in a massage franchise
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Massage is a core service at Spavia. The ownership opportunity is a full-service day spa, with facials, body treatments and retail alongside massage.
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

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-recoleta)]">From massage franchise research to an ownership plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div><h3 className="font-bold text-gray-900 mb-3">Plan for the people who deliver treatments</h3><p className="text-gray-600 leading-relaxed">Ask how therapist recruiting, scheduling and retention fit the local labor market. A room produces no service revenue when it is unstaffed. Evaluate the support available and the time you can devote to leading the team.</p></div>
            <div><h3 className="font-bold text-gray-900 mb-3">Compare the whole opening budget</h3><p className="text-gray-600 leading-relaxed">Separate the franchise fee, total initial investment and liquid capital requirement. Build-out, equipment and working capital are different needs. Compare the same FDD items across brands before treating one headline price as a like-for-like quote.</p></div>
            <div><h3 className="font-bold text-gray-900 mb-3">Look beyond the sales figure</h3><p className="text-gray-600 leading-relaxed">Review the sample, measurement period and expenses behind Item 19. A median is not an average, and neither is a promise about a new location. Alisa can walk you through Spavia’s model and connect your questions to the next step.</p></div>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li><Link href="/franchise-cost" className="text-[#705b31] underline underline-offset-4">Massage spa investment and fees</Link></li>
            <li><Link href="/training-and-support" className="text-[#705b31] underline underline-offset-4">Training and operating support</Link></li>
            <li><Link href="/franchise-opportunities" className="text-[#705b31] underline underline-offset-4">Explore Spavia markets</Link></li>
          </ul>
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
