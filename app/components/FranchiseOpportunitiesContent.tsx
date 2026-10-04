"use client";
import PageHero from "./PageHero";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { getAllStates } from "../data/markets";
import Breadcrumbs from "./Breadcrumbs";
import CustomMarketForm from "./CustomMarketForm";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import NavBar from "./NavBar";
import { ThemeProvider } from "./ThemeProvider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Spavia Franchise Opportunities by State",
  description:
    "Explore Spavia day spa franchise opportunities across 16 states. Research candidate markets, then confirm territory availability with the franchise development team.",
  url: "https://spaviafranchise.com/franchise-opportunities",
  publisher: {
    "@id": "https://spaviafranchise.com/#organization",
  },
};

// Arizona is a standalone page (not in markets.ts), add it manually
const arizonaCard = {
  name: "Arizona",
  slug: "arizona",
  cities: "Scottsdale, Phoenix, Mesa, Tempe",
  countyCount: 1,
  currentLocations: 0,
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
      currentLocations: s.currentLocations,
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

      <main id="main-content" className="bg-white text-gray-900 flex flex-col brand-light">
        <NavBar />
        <Breadcrumbs items={[{ label: "Franchise Opportunities" }]} />

        {/* ═══════ HERO ═══════ */}
        <PageHero eyebrow="A national brand. A local opportunity." title="Spa Franchise Opportunities Across the U.S." intro="Explore market research for your preferred state, then talk with Alisa about territory availability, investment and your plans for ownership." image="/media/exterior-storefront.webp" alt="A Spavia day spa serving its local community" action={{href:"#market-research",label:"Explore markets by state"}} />

        {/* ═══════ STATE CARDS BY REGION ═══════ */}
        <section className="bg-gray-50 py-20 px-6 brand-light">
          <div className="max-w-6xl mx-auto">
            <h2 id="market-research" className="text-3xl font-bold text-center mb-3 text-gray-900">
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
                      className="group bg-white rounded-sm border border-gray-200 p-6 hover:border-[#b38a5f] transition-all brand-light"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-[var(--accent-text)]" />
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-[var(--accent-text)] transition-colors">
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
                        {state.currentLocations > 0
                          ? `${state.currentLocations} Location${state.currentLocations !== 1 ? "s" : ""} & Growing`
                          : "Now Expanding"}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Don't see your state */}
            <div className="mt-12 max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Don&apos;t See Your State?
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We analyze any U.S. location. Enter your city and we&apos;ll
                run the numbers.
              </p>
              <CustomMarketForm />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6 brand-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">From market research to a Spavia franchise opportunity</h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-600 leading-relaxed">
              <div><h3 className="font-bold text-gray-900 mb-3">1. Explore the market</h3><p>Use the state pages to learn about candidate areas and bring your preferred city to the conversation. The franchise team confirms current territory availability; a market listing does not reserve a territory.</p></div>
              <div><h3 className="font-bold text-gray-900 mb-3">2. Review the model</h3><p>Spavia is a <Link href="/day-spa-franchise" className="text-[#705b31] underline">full-service day spa franchise</Link>. The estimated initial investment is $479,450–$885,450 under the 2026 FDD, Item 7. Review the <Link href="/franchise-cost" className="text-[#705b31] underline">costs and fees</Link> alongside the $200K liquid capital and $500K net worth requirements.</p></div>
              <div><h3 className="font-bold text-gray-900 mb-3">3. Talk with Alisa</h3><p>Alisa Anderson leads franchise development and can discuss your goals, timeline and next steps. Explore <Link href="/multi-unit" className="text-[#705b31] underline">multi-unit development</Link> if you are considering several locations, or see the <Link href="/steps-to-ownership" className="text-[#705b31] underline">path to ownership</Link>.</p></div>
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
