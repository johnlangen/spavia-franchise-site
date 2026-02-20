"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import { ThemeProvider } from "./ThemeProvider";
import { MapPin, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import { getAllStates } from "../data/markets";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spavia Franchise Opportunities by State",
  description:
    "Explore Spavia day spa franchise opportunities across 16 states. Data-driven market analysis identifies top-scoring markets for spa franchise success.",
  url: "https://spaviafranchise.com/franchise-opportunities",
  publisher: {
    "@id": "https://spaviafranchise.com/#organization",
  },
};

const metrics = [
  {
    icon: DollarSign,
    stat: "$1,146,952",
    label: "Avg Gross Sales*",
  },
  {
    icon: Users,
    stat: "1 in 2 Owners",
    label: "Achieve $1M+ Revenue*",
  },
  {
    icon: TrendingUp,
    stat: "$496K – $796K",
    label: "Initial Investment*",
  },
  {
    icon: MapPin,
    stat: "60+",
    label: "Franchise Locations",
  },
];

// Arizona is a standalone page (not in markets.ts), add it manually
const arizonaCard = {
  name: "Arizona",
  slug: "arizona",
  cities: "Scottsdale, Phoenix, Mesa, Tempe",
  countyCount: 1,
  region: "Southwest" as const,
};

type Region = "Southeast" | "Southwest" | "West" | "Midwest" | "Northeast";

const REGION_ORDER: Region[] = ["Southeast", "Southwest", "West", "Midwest", "Northeast"];

const STATE_REGIONS: Record<string, Region> = {
  AL: "Southeast",
  FL: "Southeast",
  GA: "Southeast",
  NC: "Southeast",
  SC: "Southeast",
  TN: "Southeast",
  AZ: "Southwest",
  NM: "Southwest",
  TX: "Southwest",
  CA: "West",
  CO: "West",
  IA: "Midwest",
  IL: "Midwest",
  IN: "Midwest",
  MD: "Northeast",
  NH: "Northeast",
};

export default function FranchiseOpportunitiesContent() {
  const dataStates = getAllStates();

  // Build cards from data + Arizona
  const allCards = [
    arizonaCard,
    ...dataStates.map((s) => ({
      name: s.stateName,
      slug: s.stateSlug,
      cities: s.counties
        .flatMap((c) => c.areas.slice(0, 2))
        .slice(0, 4)
        .join(", "),
      countyCount: s.counties.length,
      region: STATE_REGIONS[s.stateAbbr] || ("Southeast" as Region),
    })),
  ];

  // Group by region
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    states: allCards.filter((s) => s.region === region),
  })).filter((g) => g.states.length > 0);

  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-gray-900 flex flex-col">
        <NavBar />
        <Breadcrumbs items={[{ label: "Franchise Opportunities" }]} />

        {/* ═══════ HERO ═══════ */}
        <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-28 pb-20 text-center text-white px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C2A878]/20 text-[#C2A878] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <BarChart3 className="w-4 h-4" />
              16 States · 33+ Markets
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            >
              Spa Franchise Opportunities Across the U.S.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Our data-driven approach identifies the best markets for spa
              franchise success. Explore our top-scoring opportunities by state.
            </motion.p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4 text-center"
                >
                  <item.icon className="w-5 h-5 mx-auto mb-2 text-[#C2A878]" />
                  <p className="text-xl font-bold">{item.stat}</p>
                  <p className="text-xs text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-white/50">
              *Results vary. See FDD Item 19 for details.
            </p>
          </div>
        </section>

        {/* ═══════ STATE CARDS BY REGION ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Explore Hot Markets
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Click on a state to see data-driven market analysis, available
              territories, and request a free market report.
            </p>

            {byRegion.map((group) => (
              <div key={group.region} className="mb-10 last:mb-0">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  {group.region}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.states.map((state) => (
                    <Link
                      key={state.slug}
                      href={`/franchise-opportunities/${state.slug}`}
                      className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#C2A878] transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-[#C2A878]" />
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#C2A878] transition-colors">
                            {state.name}
                          </h4>
                        </div>
                        <span className="text-xs font-medium text-gray-400">
                          {state.countyCount} market
                          {state.countyCount !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {state.cities}
                      </p>
                      <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                        Now Expanding
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Don't see your state */}
            <div className="mt-10">
              <Link
                href="/get-started"
                className="group block max-w-lg mx-auto bg-gray-100 rounded-xl border border-dashed border-gray-300 p-8 text-center hover:border-[#C2A878] transition-all"
              >
                <MapPin className="w-6 h-6 text-gray-400 group-hover:text-[#C2A878] mx-auto mb-3 transition-colors" />
                <p className="font-bold text-gray-600 group-hover:text-[#C2A878] text-lg transition-colors">
                  Don&apos;t See Your State?
                </p>
                <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto">
                  We analyze any U.S. location. Tell us where you&apos;re
                  interested and we&apos;ll run the numbers.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ SHORT FORM ═══════ */}
        <FranchiseIntroForm />

        <Footer />
      </main>
    </ThemeProvider>
  );
}
