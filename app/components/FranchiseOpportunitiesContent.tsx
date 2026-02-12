"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import { ThemeProvider } from "./ThemeProvider";
import { MapPin, TrendingUp, DollarSign, Users } from "lucide-react";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spavia Franchise Opportunities by State",
  description:
    "Explore Spavia day spa franchise opportunities across the United States. Find available territories and learn about opening a Spavia franchise in your state.",
  url: "https://spaviafranchise.com/franchise-opportunities",
  publisher: {
    "@id": "https://spaviafranchise.com/#organization",
  },
};

const states = [
  {
    name: "Arizona",
    slug: "arizona",
    cities: "Scottsdale, Phoenix, Mesa, Tempe",
    status: "Now Expanding",
  },
  {
    name: "Georgia",
    slug: "georgia",
    cities: "Atlanta, Savannah, Alpharetta, Marietta",
    status: "Now Expanding",
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    cities: "Charlotte, Raleigh, Asheville, Durham",
    status: "Now Expanding",
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    cities: "Charleston, Greenville, Columbia, Myrtle Beach",
    status: "Now Expanding",
  },
  {
    name: "Tennessee",
    slug: "tennessee",
    cities: "Nashville, Memphis, Knoxville, Chattanooga",
    status: "Now Expanding",
  },
];

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

export default function FranchiseOpportunitiesContent() {
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
              Spavia is actively expanding into new markets. Explore available
              territories and find the right location for your day spa franchise.
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

        {/* ═══════ STATE CARDS ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Explore Hot Markets
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Click on a state to see available territories, market data, and
              request franchise information for that region.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {states.map((state) => (
                <Link
                  key={state.slug}
                  href={`/franchise-opportunities/${state.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#C2A878] transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#C2A878]" />
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C2A878] transition-colors">
                      {state.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{state.cities}</p>
                  <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    {state.status}
                  </span>
                </Link>
              ))}

              {/* Other markets card */}
              <Link
                href="/get-started"
                className="group bg-gray-100 rounded-xl border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-[#C2A878] transition-all"
              >
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-[#C2A878] mb-2 transition-colors" />
                <p className="font-semibold text-gray-500 group-hover:text-[#C2A878] transition-colors">Don&apos;t See Your State?</p>
                <p className="text-sm text-gray-400 mt-1">
                  We have many more markets available — request info to learn more
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
