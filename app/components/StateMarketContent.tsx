"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import FranchiseLongForm from "./FranchiseLongForm";
import AwardsSection from "./AwardsSection";
import ProofSection from "./ProofSection";
import MarketReportCard from "./MarketReportCard";
import MarketReportModal from "./MarketReportModal";
import { ThemeProvider } from "./ThemeProvider";
import { Check, MapPin, TrendingUp, Users, Sun, BarChart3 } from "lucide-react";
import Link from "next/link";
import type { StateMarket, CountyMarket } from "../data/markets";

const VALUE_PROPS = [
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
];

interface StateMarketContentProps {
  state: StateMarket;
}

export default function StateMarketContent({ state }: StateMarketContentProps) {
  const [reportCounty, setReportCounty] = useState<CountyMarket | null>(null);

  const allAreas = state.counties.flatMap((c) => c.areas.slice(0, 2));
  const topAreas = allAreas.slice(0, 4).join(", ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Spavia Franchise Opportunities in ${state.stateName}`,
    description: `Explore Spavia day spa franchise opportunities in ${state.stateName}. Data-driven market analysis for ${state.counties.map((c) => c.countyName).join(", ")}. Proven model, $1M+ revenue potential.`,
    url: `https://spaviafranchise.com/franchise-opportunities/${state.stateSlug}`,
    publisher: { "@id": "https://spaviafranchise.com/#organization" },
    about: {
      "@type": "Franchise",
      name: "Spavia Day Spa",
      areaServed: state.counties.flatMap((c) =>
        c.areas.map((a) => `${a}, ${state.stateName}`)
      ),
    },
  };

  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-gray-900 flex flex-col">
        <NavBar />
        <Breadcrumbs
          items={[
            { label: "Franchise Opportunities" },
            { label: state.stateName },
          ]}
        />

        {/* ═══════ HERO ═══════ */}
        <section
          className={`relative overflow-hidden pt-28 pb-20 text-center text-white px-4 sm:px-6 bg-gradient-to-br ${state.heroGradient}`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#C2A878] text-black text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide"
            >
              Now Expanding to {state.stateName}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            >
              Own a Spavia Day Spa Franchise in {state.stateName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
            >
              Bring affordable luxury wellness to {topAreas} and more with a
              proven franchise model backed by data-driven market intelligence.
            </motion.p>

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

            <a
              href={`#${state.stateSlug}-form`}
              className="mt-8 inline-flex flex-col items-center gap-1 text-sm text-white/75 hover:text-white transition"
            >
              <span>Request the Franchise Overview</span>
              <span className="text-lg animate-bounce">&#8595;</span>
            </a>
          </div>
        </section>

        {/* ═══════ SHORT FORM ═══════ */}
        <FranchiseIntroForm leadSource={`${state.stateSlug}_short`} />

        {/* ═══════ WHY [STATE] ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Why {state.stateName} Is the Perfect Market for Spavia
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our data-driven analysis identified {state.counties.length}{" "}
              high-scoring market{state.counties.length !== 1 ? "s" : ""} in{" "}
              {state.stateName} — here&apos;s what makes this state stand out.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <Sun className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">
                  {state.population}
                </p>
                <p className="text-sm text-gray-600">
                  {state.stateName} Population
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">
                  {state.growthRanking}
                </p>
                <p className="text-sm text-gray-600">Growth Status</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">
                  {state.medianIncome}
                </p>
                <p className="text-sm text-gray-600">Median Household Income</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">
                  {state.currentLocations}
                </p>
                <p className="text-sm text-gray-600">Current Spavia Locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ MARKET OPPORTUNITY CARDS ═══════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C2A878]/10 text-[#C2A878] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <BarChart3 className="w-4 h-4" />
                Data-Driven Market Intelligence
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Top-Scoring Markets in {state.stateName}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our proprietary algorithm analyzes demographics, competition,
                and market viability to identify the best opportunities.
                Request a full report to see the complete analysis.
              </p>
            </div>

            <div
              className={`grid gap-6 ${state.counties.length === 1 ? "max-w-lg mx-auto" : state.counties.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}
            >
              {state.counties.map((county) => (
                <MarketReportCard
                  key={county.countyFips}
                  county={county}
                  onRequestReport={setReportCounty}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ DON'T SEE YOUR MARKET ═══════ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              We Analyze Any U.S. Location
            </h2>
            <p className="text-gray-600 mb-8">
              These markets represent our highest-scoring opportunities in{" "}
              {state.stateName}, but Spavia is open to franchising anywhere in
              the United States. Tell us where you&apos;re interested and
              we&apos;ll run the numbers.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-[#C2A878] hover:bg-[#b09668] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Request a Custom Market Analysis
            </Link>
          </div>
        </section>

        {/* ═══════ WHY SPAVIA (value props) ═══════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Franchise Owners Choose Spavia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {VALUE_PROPS.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm"
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

        {/* ═══════ PROOF + AWARDS ═══════ */}
        <ProofSection />
        <AwardsSection />

        {/* ═══════ EXPLORE MORE ═══════ */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Continue Exploring
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/franchise-cost"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Franchise Cost</p>
                <p className="text-sm text-gray-600">Full investment breakdown</p>
              </Link>
              <Link
                href="/franchise-opportunities"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">All Markets</p>
                <p className="text-sm text-gray-600">See all available states</p>
              </Link>
              <Link
                href="/why-spavia"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Why Spavia</p>
                <p className="text-sm text-gray-600">What sets us apart</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ LONG FORM ═══════ */}
        <section id={`${state.stateSlug}-form`} className="bg-gray-50 py-20 px-6">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Request {state.stateName} Franchise Information
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Complete the form below and a franchise advisor will reach out
              within 24 hours.
            </p>
            <FranchiseLongForm leadSource={`${state.stateSlug}_long`} />
          </div>
        </section>

        <Footer />
      </main>

      {/* ═══════ REPORT MODAL ═══════ */}
      {reportCounty && (
        <MarketReportModal
          county={reportCounty}
          onClose={() => setReportCounty(null)}
        />
      )}
    </ThemeProvider>
  );
}
