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
    "title": "A clear place in the wellness category",
    "body": "Spavia offers non-medical spa services, including massage, facials, body treatments and retail. That is a different business from a fitness studio, recovery center or medical spa. Start with the services you want to operate and the guests you want to serve."
  },
  {
    "title": "A membership-based business",
    "body": "Monthly memberships support repeat guest relationships. Owners and their teams develop those relationships through consistent guest care, convenient appointment availability and local marketing."
  },
  {
    "title": "Several services under one roof",
    "body": "The service mix gives guests a choice between massage, facials and other treatments. It also means recruiting and scheduling different types of service professionals. Compare the operating responsibilities as carefully as the menu."
  },
  {
    "title": "Founder-led support",
    "body": "Spavia has remained family-owned and founder-led since 2005. Franchise support includes site selection, training, marketing and ongoing operations. Talk with the team about how that support applies to your experience and market."
  }
];

const faqs = [
  {
    "q": "How much does a wellness franchise like Spavia cost?",
    "a": "Spavia’s full-service day spa requires an estimated $479,450–$885,450 initial investment (2026 FDD, Item 7). The initial franchise fee is $59,500. Candidates need at least $200,000 liquid capital and $500,000 net worth. Other wellness formats have their own costs and qualification criteria."
  },
  {
    "q": "How is a day spa different from other wellness franchises?",
    "a": "A day spa is a service business centered on massage, skincare and relaxation. Fitness studios focus on exercise, while recovery and medical concepts offer different services and may have different equipment and professional oversight needs. Compare the specific brand, not just the wellness label."
  },
  {
    "q": "What revenue does Spavia disclose?",
    "a": "The 2026 FDD, Item 19, Part III reports median annual revenue (cash receipts) of $1,110,481 among 44 reporting franchised locations for 2025. Revenue is not owner income. Review the full disclosure and its reporting criteria; individual results vary."
  },
  {
    "q": "Do I need prior spa experience to own a Spavia franchise?",
    "a": "Owners do not need to personally deliver spa treatments. They lead the business and hire appropriately qualified professionals. Evaluate the role against your experience managing people, customer service and operating budgets."
  },
  {
    "q": "Can I develop multiple Spavia locations?",
    "a": "Spavia offers multi-unit development opportunities for qualified candidates. Opening several locations requires a plan for capital, local management and the development schedule. Discuss availability and agreement terms with the franchise team."
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

export default function WellnessFranchiseContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />
      <Breadcrumbs items={[{ label: "Wellness Franchise" }]} />

      <LandingHero
        headlineFirst="The Wellness Franchise"
        headlineSecond="Built for"
        headlineHighlight="Recurring Revenue"
        subhead="Explore a wellness franchise built around massage, skincare and relaxation. Spavia combines a full-service day spa with a membership model and support from a family-owned brand."
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
            Which wellness franchise model fits your goals?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Wellness includes very different businesses. Spavia is a membership-based day spa focused on massage, skincare and relaxation, with an operating model built around a local service team.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-recoleta)]">Compare wellness franchises on the decisions you will make</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div><h3 className="font-bold text-gray-900 mb-3">The service and staffing model</h3><p className="text-gray-600 leading-relaxed">List the professionals, treatment rooms and equipment each concept requires. A membership-based day spa, an exercise studio and a medical practice have different daily demands even when they all describe themselves as wellness businesses.</p></div>
            <div><h3 className="font-bold text-gray-900 mb-3">The full investment and ongoing obligations</h3><p className="text-gray-600 leading-relaxed">Read the franchise fee, build-out estimate, operating reserve and ongoing fees together. Financing does not erase these obligations. Spavia’s cost breakdown provides a starting point for comparing its model with a specific alternative.</p></div>
            <div><h3 className="font-bold text-gray-900 mb-3">The market and your ownership role</h3><p className="text-gray-600 leading-relaxed">Check whether the proposed territory is available, then consider demand, local competition, staffing and the site. Decide how you will lead the business and build a management team. A market score alone cannot establish that a location will succeed.</p></div>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li><Link href="/franchise-cost" className="text-[#705b31] underline underline-offset-4">Wellness spa costs and qualification</Link></li>
            <li><Link href="/multi-unit" className="text-[#705b31] underline underline-offset-4">Multi-unit development</Link></li>
            <li><Link href="/franchise-opportunities" className="text-[#705b31] underline underline-offset-4">Research franchise markets</Link></li>
          </ul>
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
    </>
  );
}
