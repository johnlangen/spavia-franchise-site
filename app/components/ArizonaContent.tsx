"use client";
import PageHero from "./PageHero";

import { Check,MapPin,Sun,TrendingUp,Users } from "lucide-react";
import Link from "next/link";
import AwardsSection from "./AwardsSection";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import FranchiseLongForm from "./FranchiseLongForm";
import NavBar from "./NavBar";
import ProofSection from "./ProofSection";
import { ThemeProvider } from "./ThemeProvider";

const arizonaJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spavia Franchise Opportunities in Arizona",
  description:
    "Spavia is expanding to Arizona. Own a luxury day spa franchise in Scottsdale, Phoenix, Mesa, Tempe, Chandler, or Gilbert.",
  url: "https://spaviafranchise.com/franchise-opportunities/arizona",
  publisher: {
    "@id": "https://spaviafranchise.com/#organization",
  },
  about: {
    "@type": "Franchise",
    name: "Spavia Day Spa",
    areaServed: [
      "Scottsdale, Arizona",
      "Phoenix, Arizona",
      "Mesa, Arizona",
      "Tempe, Arizona",
      "Chandler, Arizona",
      "Gilbert, Arizona",
    ],
  },
};

const cities = ["Scottsdale", "Phoenix", "Mesa", "Tempe", "Chandler", "Gilbert"];

const marketStats = [
  {
    icon: Sun,
    stat: "7.4M+",
    label: "Arizona Population",
  },
  {
    icon: TrendingUp,
    stat: "#1",
    label: "Fastest Growing State",
  },
  {
    icon: Users,
    stat: "$62K+",
    label: "Median Household Income",
  },
  {
    icon: MapPin,
    stat: "0",
    label: "Current Spavia Locations",
  },
];

export default function ArizonaContent() {
  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arizonaJsonLd) }}
      />

      <main id="main-content" className="bg-white text-gray-900 flex flex-col brand-light">
        <NavBar />
        <Breadcrumbs
          items={[{ label: "Franchise Opportunities", href: "/franchise-opportunities" }, { label: "Arizona" }]}
        />

        {/* ═══════ HERO ═══════ */}
        <PageHero eyebrow="Build in the Arizona communities you know" title="Own a Spavia Day Spa Franchise in Arizona" intro="Explore the Phoenix and Scottsdale market opportunity, review the investment and discuss your preferred territory with Alisa." image="/media/exterior-storefront.webp" alt="A Spavia day spa storefront" action={{href:"#arizona-form",label:"Discuss your Arizona market"}} />

        {/* ═══════ SHORT FORM ═══════ */}
        <FranchiseIntroForm leadSource="arizona_short" />

        {/* ═══════ WHY ARIZONA ═══════ */}
        <section className="bg-gray-50 py-20 px-6 brand-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Why Arizona Is the Perfect Market for Spavia
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Arizona&apos;s booming population, high disposable income, and
              wellness-first culture make it an ideal market for a Spavia Day Spa
              franchise.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {marketStats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-sm border border-gray-100 p-6 text-center brand-light"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--accent-text)]" />
                  <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ PRIME TERRITORIES ═══════ */}
        <section className="bg-white py-20 px-6 brand-light">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Prime Territories Available
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Be the first to bring Spavia to these high-demand Arizona markets.
              All territories are currently available.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 rounded-sm p-5 border border-gray-100 hover:border-[#b38a5f] transition-colors brand-light"
                >
                  <MapPin className="w-5 h-5 text-[var(--accent-text)] mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{city}</p>
                  <p className="text-xs text-green-600 font-medium mt-1">
                    Territory Available
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ WHY SPAVIA (value props) ═══════ */}
        <section className="bg-gray-50 py-20 px-6 brand-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Franchise Owners Choose Spavia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Membership-Driven Recurring Revenue",
                  desc: "Our three-tier membership model creates predictable monthly income, with members visiting regularly for massage, facials, and body treatments.",
                },
                {
                  title: "Multiple Revenue Streams",
                  desc: "Beyond treatments, earn from retail products, gift cards, spa packages, and add-on services. Diversified income means a more resilient business.",
                },
                {
                  title: "Full Training & Grand Opening Support",
                  desc: "From site selection to hiring to your grand opening, our national team provides hands-on support at every step. No spa experience required.",
                },
                {
                  title: "Award-Winning Brand Recognition",
                  desc: "Spavia has been recognized by Franchise Times Top 400, Entrepreneur Franchise 500, and more. You benefit from 20 years of brand equity.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-sm p-6 border border-gray-100 brand-light"
                >
                  <div className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[var(--accent-text)] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ PROOF SECTION (reused) ═══════ */}
        <ProofSection />

        {/* ═══════ AWARDS (reused) ═══════ */}
        <AwardsSection />

        {/* ═══════ EXPLORE MORE ═══════ */}
        <section className="bg-white py-16 px-6 brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Continue Exploring
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/franchise-cost"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Franchise Cost</p>
                <p className="text-sm text-gray-600">Full investment breakdown</p>
              </Link>
              <Link
                href="/franchise-opportunities"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">All Markets</p>
                <p className="text-sm text-gray-600">See all available states</p>
              </Link>
              <Link
                href="/why-spavia"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Why Spavia</p>
                <p className="text-sm text-gray-600">What sets us apart</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ LONG FORM ═══════ */}
        <section id="arizona-form" className="bg-gray-50 py-20 px-6 brand-light">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-sm border border-gray-200 brand-light">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Request Arizona Franchise Information
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Learn more about opening a Spavia location in Arizona.
            </p>
            <FranchiseLongForm leadSource="arizona_long" />
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
