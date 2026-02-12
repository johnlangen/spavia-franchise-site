"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import FranchiseLongForm from "./FranchiseLongForm";
import CallToAction from "./CallToAction";
import Section from "./Section";
import { ThemeProvider } from "./ThemeProvider";
import { DollarSign, TrendingUp, Shield, Clock, Check } from "lucide-react";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Spavia day spa franchise cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total initial investment to open a Spavia Day Spa franchise ranges from $496,450 to $796,650. This includes the franchise fee, build-out, equipment, signage, initial inventory, and working capital.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Spavia franchise fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Spavia franchise fee is $59,500. This one-time fee is paid when you sign your franchise agreement and grants you the rights to operate under the Spavia brand with full training and support.",
      },
    },
    {
      "@type": "Question",
      name: "What are the ongoing fees for a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia charges a 6% royalty fee on gross revenue and a 1% national marketing fund contribution. These fees support ongoing brand development, national advertising, technology platforms, and franchisee support services.",
      },
    },
    {
      "@type": "Question",
      name: "Is SBA financing available for a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spavia is listed on the SBA Franchise Directory, making franchisees eligible for SBA-backed loans. Many franchise owners use SBA 7(a) loans, which offer favorable terms including lower down payments and longer repayment periods.",
      },
    },
    {
      "@type": "Question",
      name: "How much revenue does a Spavia franchise generate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia franchise locations average over $1.1 million in gross annual sales, with 1 in 2 franchise owners achieving $1M+ in revenue. Results vary by location — see the Franchise Disclosure Document (FDD) Item 19 for details.",
      },
    },
  ],
};

const costBreakdown = [
  { item: "Franchise Fee", range: "$59,500" },
  { item: "Real Estate & Build-Out", range: "$250,000 – $400,000" },
  { item: "Equipment & Fixtures", range: "$60,000 – $100,000" },
  { item: "Signage", range: "$10,000 – $25,000" },
  { item: "Initial Inventory & Supplies", range: "$15,000 – $25,000" },
  { item: "Grand Opening Marketing", range: "$15,000 – $25,000" },
  { item: "Technology & POS", range: "$10,000 – $20,000" },
  { item: "Working Capital (3–6 months)", range: "$75,000 – $140,000" },
];

export default function FranchiseCostContent() {
  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-gray-900 flex flex-col">
        <NavBar />
        <Breadcrumbs items={[{ label: "Franchise Cost" }]} />

        {/* ═══════ HERO ═══════ */}
        <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-28 pb-20 text-center text-white px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            >
              How Much Does a Spa Franchise Cost?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Everything you need to know about the Spavia Day Spa franchise investment,
              from initial fees to ongoing costs and financing options.
            </motion.p>

            {/* Key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$496K – $796K</p>
                <p className="text-xs text-white/70">Total Initial Investment*</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$59,500</p>
                <p className="text-xs text-white/70">Franchise Fee</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$1,146,952</p>
                <p className="text-xs text-white/70">Avg Gross Sales*</p>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-white/50">
              *Results vary. See FDD Item 19 for details.
            </p>
          </div>
        </section>

        {/* ═══════ COST BREAKDOWN ═══════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              Investment Breakdown
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Here&apos;s what your initial investment covers when you open a Spavia
              Day Spa franchise. All figures are estimated ranges from the Franchise
              Disclosure Document (FDD).
            </p>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-800 text-white text-sm font-semibold">
                <div className="px-6 py-3">Category</div>
                <div className="px-6 py-3 text-right">Estimated Range</div>
              </div>
              {costBreakdown.map((row, i) => (
                <div
                  key={row.item}
                  className={`grid grid-cols-2 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="px-6 py-3 font-medium text-gray-900">{row.item}</div>
                  <div className="px-6 py-3 text-right text-gray-700">{row.range}</div>
                </div>
              ))}
              <div className="grid grid-cols-2 bg-[#C2A878]/10 border-t-2 border-[#C2A878]">
                <div className="px-6 py-4 font-bold text-gray-900">Total Estimated Investment</div>
                <div className="px-6 py-4 text-right font-bold text-gray-900">$496,450 – $796,650</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ ONGOING FEES ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Ongoing Fees
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">6%</p>
                <p className="text-sm text-gray-600 mt-1">Royalty Fee</p>
                <p className="text-xs text-gray-500 mt-2">
                  Percentage of gross revenue, supporting ongoing training, technology, and operations
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">1%</p>
                <p className="text-sm text-gray-600 mt-1">National Marketing Fund</p>
                <p className="text-xs text-gray-500 mt-2">
                  Contributes to national brand campaigns, digital marketing, and PR
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">SBA Eligible</p>
                <p className="text-sm text-gray-600 mt-1">Financing Available</p>
                <p className="text-xs text-gray-500 mt-2">
                  Listed on the SBA Franchise Directory for favorable loan terms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FINANCIAL REQUIREMENTS ═══════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Financial Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Liquid Capital</h3>
                <p className="text-3xl font-bold text-[#C2A878]">$100K – $200K</p>
                <p className="text-sm text-gray-600 mt-2">
                  Cash or cash equivalents available for the initial investment and operating capital
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Net Worth</h3>
                <p className="text-3xl font-bold text-[#C2A878]">$500K+</p>
                <p className="text-sm text-gray-600 mt-2">
                  Total assets minus liabilities, demonstrating financial stability
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ HOW SPAVIA COMPARES ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              How Spavia Compares
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              See how Spavia&apos;s investment stacks up against other franchise models
              in the spa and wellness industry.
            </p>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-800 text-white text-sm font-semibold">
                <div className="px-4 py-3">Franchise Type</div>
                <div className="px-4 py-3 text-center">Investment Range</div>
                <div className="px-4 py-3 text-center">Liquid Capital</div>
              </div>
              <div className="grid grid-cols-3 bg-[#C2A878]/10 border-l-4 border-[#C2A878] text-sm">
                <div className="px-4 py-3 font-bold text-gray-900">Spavia Day Spa</div>
                <div className="px-4 py-3 text-center font-semibold text-gray-900">$496K – $796K</div>
                <div className="px-4 py-3 text-center text-gray-700">$100K – $200K</div>
              </div>
              <div className="grid grid-cols-3 bg-white text-sm">
                <div className="px-4 py-3 text-gray-700">Luxury Spa Franchises</div>
                <div className="px-4 py-3 text-center text-gray-700">$1.4M – $2.7M</div>
                <div className="px-4 py-3 text-center text-gray-700">$700K+</div>
              </div>
              <div className="grid grid-cols-3 bg-gray-50 text-sm">
                <div className="px-4 py-3 text-gray-700">Med Spa Franchises</div>
                <div className="px-4 py-3 text-center text-gray-700">$550K – $1.2M</div>
                <div className="px-4 py-3 text-center text-gray-700">$300K+</div>
              </div>
              <div className="grid grid-cols-3 bg-white text-sm">
                <div className="px-4 py-3 text-gray-700">Massage-Only Franchises</div>
                <div className="px-4 py-3 text-center text-gray-700">$300K – $600K</div>
                <div className="px-4 py-3 text-center text-gray-700">$100K+</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ WHAT YOU GET ═══════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              What Your Investment Includes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Exclusive territory rights",
                "Complete spa build-out guidance",
                "Initial and ongoing training programs",
                "Grand opening marketing support",
                "National brand campaigns and PR",
                "Proprietary POS and booking technology",
                "Vendor partnerships and buying power",
                "Ongoing operational support and coaching",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[#C2A878] mt-0.5 shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SHORT FORM ═══════ */}
        <FranchiseIntroForm />

        {/* ═══════ FAQ ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Frequently Asked Questions About Spa Franchise Costs
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Can I finance a Spavia franchise?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Spavia is listed on the SBA Franchise Directory, so franchisees
                  can apply for SBA 7(a) loans with favorable terms. Many franchise
                  owners combine SBA financing with personal capital. Our team can
                  connect you with lenders experienced in franchise financing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  How long until a Spavia franchise breaks even?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Timelines vary by location and market, but Spavia&apos;s
                  membership-driven model is designed to build recurring revenue from
                  day one. With 1 in 2 owners achieving $1M+ in annual revenue, the
                  model is built for sustainable, long-term returns. Request the
                  franchise overview for detailed financial projections.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Are there multi-unit discount opportunities?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Spavia offers multi-unit development agreements for qualified
                  candidates who want to open multiple locations. Contact our
                  franchise team to discuss multi-unit pricing and territory
                  availability.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  What is the royalty fee for?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The 6% royalty fee funds ongoing franchise support including
                  technology platforms, training programs, operational guidance,
                  vendor partnerships, and continuous brand development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ RELATED LINKS ═══════ */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Continue Exploring
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/franchise-opportunities"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Available Territories</p>
                <p className="text-sm text-gray-600">See franchise opportunities by state</p>
              </Link>
              <Link
                href="/why-spavia"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Why Spavia</p>
                <p className="text-sm text-gray-600">Discover what sets Spavia apart</p>
              </Link>
              <Link
                href="/steps-to-ownership"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Steps to Ownership</p>
                <p className="text-sm text-gray-600">Your path from inquiry to grand opening</p>
              </Link>
              <Link
                href="/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise"
                className="block p-5 rounded-xl border border-gray-200 hover:border-[#C2A878] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Spavia vs. Woodhouse</p>
                <p className="text-sm text-gray-600">Side-by-side franchise comparison</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════ LONG FORM ═══════ */}
        <Section className="bg-white py-20">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Ready to Learn More?
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Request the full franchise overview including detailed cost
              projections and available territories.
            </p>
            <FranchiseLongForm />
          </div>
          <CallToAction />
        </Section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
