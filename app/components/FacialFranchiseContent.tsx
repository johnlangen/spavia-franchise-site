"use client";
import FaqList from "./FaqList";

import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseeTestimonialsSection from "./FranchiseeTestimonialsSection";
import GoldBottomBanner from "./GoldBottomBanner";
import LandingHero from "./LandingHero";
import NavBar from "./NavBar";
import ProofSection from "./ProofSection";

const differentiators = [
  {
    "title": "Skincare alongside other spa services",
    "body": "Facials and skincare retail sit alongside massage, body treatments and waxing. Guests can choose different services within the Spavia experience. Owners manage that broader menu rather than operating a standalone facial bar."
  },
  {
    "title": "Memberships support regular visits",
    "body": "Spavia’s membership model encourages an ongoing relationship with guests. Availability, service consistency and the team’s guest care matter to retention; a membership offer by itself does not ensure recurring visits."
  },
  {
    "title": "An experience guests can return to",
    "body": "The day spa setting includes a retreat area and treatment rooms designed around relaxation. Compare the atmosphere, appointment length, menu and investment with the facial concepts you are considering."
  },
  {
    "title": "Training for the operating business",
    "body": "Support covers site selection, build-out guidance, training, marketing and day-to-day operations. Owners lead the business and hire service professionals with the qualifications required for the treatments offered."
  }
];

const faqs = [
  {
    "q": "How much does a Spavia facial franchise cost?",
    "a": "The Spavia opportunity is a full-service day spa, with a total estimated investment of $479,450–$885,450 (2026 FDD, Item 7). The range includes the $59,500 franchise fee. Candidates need $200,000 or more in liquid capital and $500,000 or more in net worth."
  },
  {
    "q": "Can I open a facial-only Spavia?",
    "a": "The franchise model presented here combines facials and skincare with massage, body treatments and retail. It is not a separate facial-only or express-service franchise. Discuss the current format and service standards with the franchise team."
  },
  {
    "q": "What should I compare with a facial bar franchise?",
    "a": "Compare the service menu, treatment space, staffing needs, initial investment, ongoing fees and owner responsibilities. Check each brand’s current disclosures rather than assuming a wider service menu produces higher profit."
  },
  {
    "q": "Do I need to be an esthetician to own a Spavia franchise?",
    "a": "You do not need to perform treatments yourself. Franchise owners operate the business and hire appropriately licensed estheticians, massage therapists and other team members. Treatment and facility requirements depend on the location and services."
  },
  {
    "q": "Where can I learn about training and available markets?",
    "a": "Review Spavia’s training and support overview and state market research, then request a conversation with Alisa. The team confirms territory availability and the next steps for your proposed location."
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
  serviceType: "Facial Spa Franchise Opportunity",
  name: "Spavia Facial Spa Franchise",
  provider: {
    "@type": "Organization",
    "@id": "https://spaviafranchise.com/#organization",
    name: "Spavia Franchise",
  },
  areaServed: "US",
  description:
    "Own a Spavia facial and skincare spa franchise — a full-service, membership-based day spa franchise pairing facials and advanced skincare with massage, body treatments, and retail.",
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

export default function FacialFranchiseContent() {
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
      <Breadcrumbs items={[{ label: "Facial Franchise" }]} />

      <main id="main-content">
      <LandingHero
        headlineFirst="A Facial & Skincare Franchise"
        headlineSecond=""
        headlineHighlight="Built for More Than Facials"
        subhead="Explore facial and skincare franchise ownership within Spavia’s full-service day spa, with massage, body treatments and retail alongside skincare and a recurring membership model."
        bullets={[
          "$1,110,481 median gross sales (2026 FDD, Item 19)",
          "Membership-driven recurring revenue",
          "Multi-service revenue: facials + massage + retail",
          "63 locations and growing",
          "10–14 month opening timeline",
        ]}
        leadSource="lp-facial-franchise"
      />

      <ProofSection />

      <section className="bg-white py-16 md:py-20 px-6 brand-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-recoleta)]">
            A facial franchise within a full-service day spa
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Spavia pairs skincare with massage and other spa services. Explore what that means for your team, investment and daily responsibilities as an owner.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="border-l-4 border-[#b38a5f] pl-5"
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

      <section className="bg-gray-50 py-16 px-6 brand-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-recoleta)]">What owning a skincare business involves</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div><h3 className="font-bold text-gray-900 mb-3">Lead a service team</h3><p className="text-gray-600 leading-relaxed">A skincare background can be useful, but ownership also involves hiring, scheduling, guest care and managing expenses. Consider whether you want to operate a multi-department spa or concentrate on one service category.</p></div>
            <div><h3 className="font-bold text-gray-900 mb-3">Match the investment to the format</h3><p className="text-gray-600 leading-relaxed">A facial studio and a full-service spa may have different room layouts, equipment and staffing plans. Spavia’s published investment covers its day spa format. Review the complete cost breakdown before comparing it with a smaller studio.</p></div>
            <div><h3 className="font-bold text-gray-900 mb-3">Understand repeat visits and retail</h3><p className="text-gray-600 leading-relaxed">Facials and skincare products give guests different ways to engage with the spa. Ask how the team supports service consistency, product education and ongoing guest relationships, without assuming any particular retail or membership result.</p></div>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li><Link href="/franchise-cost" className="text-[#705b31] underline underline-offset-4">Facial spa investment within the Spavia model</Link></li>
            <li><Link href="/day-spa-franchise" className="text-[#705b31] underline underline-offset-4">Explore the full-service day spa</Link></li>
            <li><Link href="/our-franchisees" className="text-[#705b31] underline underline-offset-4">Hear from Spavia franchise owners</Link></li>
          </ul>
        </div>
      </section>

      <FranchiseeTestimonialsSection />

      <section className="bg-white py-16 px-6 brand-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-[family-name:var(--font-recoleta)]">
            Facial Franchise FAQ
          </h2>
          <FaqList items={faqs.map(({q,a})=>({question:q,answer:a}))} />
        </div>
      </section>


      <section className="bg-black py-12 px-6 brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/franchise-cost"
              className="block p-4 rounded-sm border border-white/20 hover:border-[#b38a5f] transition-colors"
            >
              <p className="font-bold text-white text-sm">Franchise Cost</p>
              <p className="text-xs text-white/60">Full investment breakdown</p>
            </Link>
            <Link
              href="/your-spavia"
              className="block p-4 rounded-sm border border-white/20 hover:border-[#b38a5f] transition-colors"
            >
              <p className="font-bold text-white text-sm">The Spavia Model</p>
              <p className="text-xs text-white/60">Services, membership, revenue</p>
            </Link>
            <Link
              href="/our-franchisees"
              className="block p-4 rounded-sm border border-white/20 hover:border-[#b38a5f] transition-colors"
            >
              <p className="font-bold text-white text-sm">Our Franchisees</p>
              <p className="text-xs text-white/60">Real owners, real results</p>
            </Link>
          </div>
        </div>
      </section>

      <GoldBottomBanner />
      </main>
      <Footer />
    </>
  );
}
