"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import FranchiseLongForm from "./FranchiseLongForm";
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
        text: "The total estimated initial investment to open a Spavia Day Spa franchise ranges from $479,450 to $885,450, per the 2026 FDD, Item 7. This includes the franchise fee, training fee, build-out, equipment, signage, technology, and three months of additional funds.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Spavia franchise fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Spavia initial franchise fee is $59,500, per the 2026 FDD, Item 5. This one-time fee is paid upon execution of the franchise agreement and grants you the rights to operate under the Spavia brand. An additional Initial Training Fee of $5,000 is also paid at that time.",
      },
    },
    {
      "@type": "Question",
      name: "What are the ongoing fees for a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia charges a 6% royalty fee on Gross Sales and a 1% Brand Fund contribution on Gross Sales, per the 2026 FDD, Item 6. These fees support ongoing brand development, national marketing, technology platforms, and franchisee support services.",
      },
    },
    {
      "@type": "Question",
      name: "Is SBA financing available for a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia does not offer in-house financing, but the brand is listed on the SBA Franchise Directory. This means franchisees can apply for SBA-backed loans through third-party lenders, including SBA 7(a) loans with favorable terms such as lower down payments and longer repayment periods.",
      },
    },
    {
      "@type": "Question",
      name: "How much revenue does a Spavia franchise generate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per the 2026 FDD, Item 19, Part III, the median annual revenue (cash receipts) for the 44 reporting Spavia franchised locations was $1,110,481, with median cash flow from operations of $199,773 and a median operating margin of 18.4%. Per the 2026 FDD, Item 19, Part II, 29 of 59 disclosed locations exceeded $1M in gross sales for the 2025 measurement period — roughly 1 in 2 owners. Results vary by location.",
      },
    },
    {
      "@type": "Question",
      name: "Can I finance a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia does not offer in-house financing, but the brand is listed on the SBA Franchise Directory. This means you can apply for SBA 7(a) loans through third-party lenders with favorable terms. Many franchise owners combine SBA financing with personal capital.",
      },
    },
    {
      "@type": "Question",
      name: "How long until a Spavia franchise breaks even?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by location and market, but Spavia's membership-driven model is designed to build recurring revenue from day one. Per the 2026 FDD, Item 19, Part II, 29 of 59 disclosed locations exceeded $1M in annual gross sales — roughly 1 in 2 owners. Request the franchise overview for detailed financial projections.",
      },
    },
    {
      "@type": "Question",
      name: "Are there multi-unit discount opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spavia offers multi-unit development agreements for qualified candidates who want to open multiple locations. Contact the franchise team to discuss multi-unit pricing and territory availability.",
      },
    },
    {
      "@type": "Question",
      name: "What is the royalty fee for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 6% royalty fee funds ongoing franchise support including technology platforms, training programs, operational guidance, vendor partnerships, and continuous brand development.",
      },
    },
  ],
};

// 2026 FDD, Item 7 — Estimated Initial Investment (Franchise Agreement)
const costBreakdown = [
  { item: "Initial Franchise Fee", range: "$59,500" },
  { item: "Initial Training Fee", range: "$5,000" },
  { item: "Travel & Living Expenses (Initial Training)", range: "$1,000 – $2,000" },
  { item: "Site Selection", range: "$0 – $2,000" },
  { item: "Security Deposits (Lease & Utilities)", range: "$5,000 – $15,000" },
  { item: "Business Licenses & Permits", range: "$1,000 – $11,000" },
  { item: "Professional Fees", range: "$1,000 – $5,500" },
  { item: "Pre-Construction, Architectural & Engineering", range: "$20,000 – $32,000" },
  { item: "Leasehold Improvements", range: "$288,000 – $545,000" },
  { item: "Signage & Graphics", range: "$12,000 – $22,000" },
  { item: "Equipment & Supplies", range: "$70,000 – $100,000" },
  { item: "Technology Fee (Pre-Opening)", range: "$1,950" },
  { item: "Additional Funds (3 Months)", range: "$40,000 – $80,000" },
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
        <section className="relative overflow-hidden pt-28 pb-20 text-center text-white px-4 sm:px-6">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/media/front-desk-wide.webp"
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
          </div>

          <div className="relative max-w-4xl mx-auto">
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
              <div className="rounded-lg border border-[#C2A878]/40 bg-black/40 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$479K – $885K</p>
                <p className="text-xs text-white/70">Total Initial Investment*</p>
              </div>
              <div className="rounded-lg border border-[#C2A878]/40 bg-black/40 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$59,500</p>
                <p className="text-xs text-white/70">Initial Franchise Fee*</p>
              </div>
              <div className="rounded-lg border border-[#C2A878]/40 bg-black/40 backdrop-blur-md px-4 py-4">
                <p className="text-xl font-bold">$1,110,481</p>
                <p className="text-xs text-white/70">Median Gross Sales**</p>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-white/50">
              *Source: 2026 Spavia FDD, Item 7 &amp; Item 5. **Source: 2026 Spavia FDD, Item 19, Part III. Results vary by location.
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
              Day Spa franchise. All figures are estimated ranges from the
              2026 Franchise Disclosure Document (FDD), Item 7.
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
                <div className="px-6 py-4 font-bold text-gray-900">Total Estimated Initial Investment</div>
                <div className="px-6 py-4 text-right font-bold text-gray-900">$479,450 – $885,450</div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Source: 2026 Spavia Franchise Disclosure Document, Item 7. See the FDD for full notes and assumptions.
            </p>
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
                  Percentage of Gross Sales (2026 FDD, Item 6), supporting ongoing training, technology, and operations
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">1%</p>
                <p className="text-sm text-gray-600 mt-1">Brand Fund Contribution</p>
                <p className="text-xs text-gray-500 mt-2">
                  Percentage of Gross Sales (2026 FDD, Item 6) — funds national brand development, marketing, and PR
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 text-[#C2A878]" />
                <p className="text-2xl font-bold text-gray-900">SBA Listed</p>
                <p className="text-sm text-gray-600 mt-1">Third-Party Financing</p>
                <p className="text-xs text-gray-500 mt-2">
                  On the SBA Franchise Directory — eligible for SBA-backed loans through third-party lenders
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
                <div className="px-4 py-3 text-center font-semibold text-gray-900">$479K – $885K</div>
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

        {/* ═══════ COST COMPARISON BY SPA CATEGORY ═══════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              How Spa Franchise Costs Compare by Category
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Total investment varies widely across the spa and wellness franchise
              category. Here's how Spavia compares to massage franchises, med spa
              franchises, and other spa formats.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse bg-white rounded-xl shadow-sm">
                <thead>
                  <tr className="bg-[#C2A878]/10 border-b border-[#C2A878]/30">
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">
                      Franchise Category
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">
                      Typical Investment Range
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">
                      Key Difference
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200 bg-[#C2A878]/5">
                    <td className="px-4 py-3 font-semibold">
                      Spavia Day Spa Franchise
                    </td>
                    <td className="px-4 py-3">$479K – $885K</td>
                    <td className="px-4 py-3">
                      Full-service: massage, facials, body treatments, retail
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Massage franchise</td>
                    <td className="px-4 py-3">$250K – $700K</td>
                    <td className="px-4 py-3">
                      Single-service category; lower ceiling per guest visit
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-medium">Facial franchise</td>
                    <td className="px-4 py-3">$400K – $750K</td>
                    <td className="px-4 py-3">
                      Skin-care focused; narrower service mix
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Med spa franchise</td>
                    <td className="px-4 py-3">$800K – $2M+</td>
                    <td className="px-4 py-3">
                      Requires physician medical director and clinical equipment
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-3">
                Ranges represent typical industry totals across published 2024-2026
                FDDs in each category. Specific brand costs vary; consult each
                brand's FDD for exact figures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Massage Franchise Cost
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Single-service massage franchises typically range $250K–$700K
                  to open. Spavia delivers comparable membership economics with a
                  broader revenue mix — massage plus facials, body treatments,
                  and retail — for a higher average ticket per visit.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Med Spa Franchise Cost
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Med spa franchises typically run $800K–$2M+ to open because
                  they require clinical equipment, a physician medical director,
                  and additional licensing. Spavia's day spa model has
                  significantly lower initial investment and faster ramp without
                  the medical-procedure regulatory overhead.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Facial Franchise Cost
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Skin-care-focused franchises typically open at $400K–$750K.
                  Spavia's investment is in a similar range, but with massage,
                  body treatments, and waxing alongside facials — diversifying
                  revenue and smoothing seasonality.
                </p>
              </div>
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
                  Spavia does not offer in-house financing, but the brand is listed on
                  the SBA Franchise Directory. This means you can apply for SBA 7(a)
                  loans through third-party lenders with favorable terms. Many franchise
                  owners combine SBA financing with personal capital.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  How long until a Spavia franchise breaks even?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Timelines vary by location and market, but Spavia&apos;s
                  membership-driven model is designed to build recurring revenue from
                  day one. Per the 2026 FDD, Item 19, Part II, 29 of 59 disclosed
                  locations exceeded $1M in annual gross sales — roughly 1 in 2 owners.
                  Request the franchise overview for detailed financial projections.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Are there multi-unit discount opportunities?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Spavia offers multi-unit Development Agreements for qualified
                  candidates. Per the 2026 FDD, Item 5, the Development Fee is
                  $150,000 for the right to develop 3 Day Spas, plus an additional
                  $50,000 for each unit up to 5. Reduced per-unit fees apply for
                  larger Development Schedules ($45,000 per unit for 6 to 9 units).
                  No additional initial franchise fee is charged on each unit opened
                  under a Development Agreement.{" "}
                  <Link
                    href="/multi-unit"
                    className="text-[#9c814f] font-semibold hover:underline"
                  >
                    See the multi-unit development page →
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  What is the royalty fee for?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The 6% royalty fee on Gross Sales (2026 FDD, Item 6) funds ongoing
                  franchise support including technology platforms, training programs,
                  operational guidance, vendor partnerships, and continuous brand
                  development.
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
        <section className="bg-gray-50 py-20 px-6">
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
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
