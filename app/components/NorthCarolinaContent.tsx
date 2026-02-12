"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import FranchiseLongForm from "./FranchiseLongForm";
import AwardsSection from "./AwardsSection";
import ProofSection from "./ProofSection";
import CallToAction from "./CallToAction";
import Section from "./Section";
import { ThemeProvider } from "./ThemeProvider";
import { Check, MapPin, TrendingUp, Users, Sun } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spavia Franchise Opportunities in North Carolina",
  description:
    "Spavia is expanding to North Carolina. Own a luxury day spa franchise in Charlotte, Raleigh, Asheville, Durham, Greensboro, or Wilmington.",
  url: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
  publisher: {
    "@id": "https://spaviafranchise.com/#organization",
  },
  about: {
    "@type": "Franchise",
    name: "Spavia Day Spa",
    areaServed: [
      "Charlotte, North Carolina",
      "Raleigh, North Carolina",
      "Asheville, North Carolina",
      "Durham, North Carolina",
      "Greensboro, North Carolina",
      "Wilmington, North Carolina",
    ],
  },
};

const cities = ["Charlotte", "Raleigh", "Asheville", "Durham", "Greensboro", "Wilmington"];

const marketStats = [
  {
    icon: Sun,
    stat: "10.8M+",
    label: "North Carolina Population",
  },
  {
    icon: TrendingUp,
    stat: "Top 5",
    label: "Fastest Growing State",
  },
  {
    icon: Users,
    stat: "$61K+",
    label: "Median Household Income",
  },
  {
    icon: MapPin,
    stat: "0",
    label: "Current Spavia Locations",
  },
];

export default function NorthCarolinaContent() {
  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-gray-900 flex flex-col">
        <NavBar />
        <Breadcrumbs
          items={[{ label: "Franchise Opportunities" }, { label: "North Carolina" }]}
        />

        {/* ═══════ HERO ═══════ */}
        <section className="relative overflow-hidden pt-28 pb-20 text-center text-white px-4 sm:px-6 bg-gradient-to-br from-[#1a1a2e] via-[#21273d] to-[#0f2460]">
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#C2A878] text-black text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide"
            >
              Now Expanding to North Carolina
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            >
              Own a Spavia Day Spa Franchise in North Carolina
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
            >
              Bring affordable luxury wellness to Charlotte, Raleigh, Asheville, Durham, Greensboro, and Wilmington with a proven franchise model.
            </motion.p>

            {/* Key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto"
            >
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$1,146,952</p>
                <p className="text-xs text-white/70">Avg Gross Sales*</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">1 in 2 Owners</p>
                <p className="text-xs text-white/70">Achieve $1M+ Revenue*</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$496K - $796K</p>
                <p className="text-xs text-white/70">Initial Investment*</p>
              </div>
            </motion.div>
            <p className="mt-3 text-[10px] text-white/50">
              *Results vary. See FDD Item 19 for details.
            </p>

            {/* Scroll CTA */}
            <a
              href="#north-carolina-form"
              className="mt-8 inline-flex flex-col items-center gap-1 text-sm text-white/75 hover:text-white transition"
            >
              <span>Request the Franchise Overview</span>
              <span className="text-lg animate-bounce">&#8595;</span>
            </a>
          </div>
        </section>

        {/* ═══════ SHORT FORM ═══════ */}
        <FranchiseIntroForm leadSource="north_carolina_short" />

        {/* ═══════ WHY STATE ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Why North Carolina Is the Perfect Market for Spavia
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              North Carolina's booming population, vibrant metro areas, and wellness-driven culture make it an ideal market for a Spavia Day Spa franchise.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {marketStats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                  <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ PRIME TERRITORIES ═══════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Prime Territories Available
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Be the first to bring Spavia to these high-demand North Carolina markets. All territories are currently available.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:border-[#C2A878] transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#C2A878] mx-auto mb-2" />
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
        <section className="bg-gray-50 py-20 px-6">
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
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#C2A878] mt-0.5 shrink-0" />
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

        {/* ═══════ LONG FORM ═══════ */}
        <Section id="north-carolina-form" className="bg-white py-20">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Request North Carolina Franchise Information
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Learn more about opening a Spavia location in North Carolina.
            </p>
            <FranchiseLongForm leadSource="north_carolina_long" />
          </div>
          <CallToAction />
        </Section>

        {/* ═══════ FINAL CTA ═══════ */}
        <section className="bg-black py-16 text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Bring Spavia to North Carolina?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Territories are limited. Secure your market in Charlotte, Raleigh, or one of the other available North Carolina locations today.
          </p>
          <a
            href="#north-carolina-form"
            className="inline-block bg-[#C2A878] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b09466] transition text-lg"
          >
            Request Franchise Info
          </a>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
