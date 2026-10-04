"use client";
import GoldBottomBanner from "./GoldBottomBanner";
import PageHero from "./PageHero";

import { Check,DollarSign,Shield,TrendingUp } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseIntroForm from "./FranchiseIntroForm";
import FranchiseInvestmentComparison from "./FranchiseInvestmentComparison";
import NavBar from "./NavBar";
import { ThemeProvider } from "./ThemeProvider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
        text: "Timelines vary by location and market, but Spavia's membership-driven model is designed to build recurring revenue from day one. Per the 2026 FDD, Item 19, Part II, 33 of 59 disclosed locations exceeded $1M in annual gross sales — more than half of those locations. Review the full FDD and discuss the opening budget with the franchise team; historical sales do not establish a break-even date.",
      },
    },
    {
      "@type": "Question",
      name: "Are there multi-unit discount opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spavia offers multi-unit Development Agreements for qualified candidates. Per the 2026 FDD, Item 5, the Development Fee is $150,000 for the right to develop 3 Day Spas, plus an additional $50,000 for each unit up to 5. Reduced per-unit fees apply for larger Development Schedules ($45,000 per unit for 6 to 9 units). No additional initial franchise fee is charged on each unit opened under a Development Agreement.",
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

      <main id="main-content" className="bg-white text-gray-900 flex flex-col brand-light">
        <NavBar />
        <Breadcrumbs items={[{ label: "Franchise Cost" }]} />

        {/* ═══════ HERO ═══════ */}
        <PageHero eyebrow="The investment, in detail" title="How Much Does a Spa Franchise Cost?" intro="Plan for the whole business: your opening investment, ongoing fees and the capital to get started. Here is the Spavia cost breakdown from the 2026 Franchise Disclosure Document." action={{href:"#investment-breakdown",label:"See the investment breakdown"}}><dl><div><dt>Total estimated initial investment · Item 7</dt><dd>$479,450–$885,450</dd></div><div><dt>Initial franchise fee · Item 5</dt><dd>$59,500</dd></div></dl><p className="mt-5">Candidates need $200K+ liquid capital and $500K+ net worth. Investment requirements are discussed in detail with the franchise team.</p><Link href="/get-started" className="text-link mt-4">Talk through the investment →</Link></PageHero>

        {/* ═══════ COST BREAKDOWN ═══════ */}
        <section className="bg-white py-20 px-6 brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 id="investment-breakdown" className="text-3xl font-bold text-center mb-3 text-gray-900">
              Investment Breakdown
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Here&apos;s what your initial investment covers when you open a Spavia
              Day Spa franchise. All figures are estimated ranges from the
              2026 Franchise Disclosure Document (FDD), Item 7.
            </p>

            <div className="rounded-sm border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-800 text-white text-sm font-semibold brand-dark">
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
              <div className="grid grid-cols-2 bg-[#b38a5f]/10 border-t-2 border-[#b38a5f]">
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
        <section className="bg-gray-50 py-20 px-6 brand-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Ongoing Fees
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-sm p-6 border border-gray-100 text-center brand-light">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-[var(--accent-text)]" />
                <p className="text-2xl font-bold text-gray-900">6%</p>
                <p className="text-sm text-gray-600 mt-1">Royalty Fee</p>
                <p className="text-xs text-gray-500 mt-2">
                  Percentage of Gross Sales (2026 FDD, Item 6), supporting ongoing training, technology, and operations
                </p>
              </div>
              <div className="bg-white rounded-sm p-6 border border-gray-100 text-center brand-light">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-[var(--accent-text)]" />
                <p className="text-2xl font-bold text-gray-900">1%</p>
                <p className="text-sm text-gray-600 mt-1">Brand Fund Contribution</p>
                <p className="text-xs text-gray-500 mt-2">
                  Percentage of Gross Sales (2026 FDD, Item 6) — funds national brand development, marketing, and PR
                </p>
              </div>
              <div className="bg-white rounded-sm p-6 border border-gray-100 text-center brand-light">
                <Shield className="w-8 h-8 mx-auto mb-3 text-[var(--accent-text)]" />
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
        <section className="bg-white py-20 px-6 brand-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Financial Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-sm p-6 border border-gray-100 brand-light">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Liquid Capital</h3>
                <p className="text-3xl font-bold text-[var(--accent-text)]">$200K+</p>
                <p className="text-sm text-gray-600 mt-2">
                  Cash or cash equivalents available for the initial investment and operating capital
                </p>
              </div>
              <div className="bg-gray-50 rounded-sm p-6 border border-gray-100 brand-light">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Net Worth</h3>
                <p className="text-3xl font-bold text-[var(--accent-text)]">$500K+</p>
                <p className="text-sm text-gray-600 mt-2">
                  Total assets minus liabilities, demonstrating financial stability
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6 brand-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare spa franchise investment costs</h2>
            <p className="text-gray-600 mb-8">Compare named brands and their published investment ranges, then look at the services and support included in each model.</p>
            <FranchiseInvestmentComparison />
          </div>
        </section>

        {/* ═══════ WHAT YOU GET ═══════ */}
        <section className="bg-white py-20 px-6 brand-light">
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
                  <Check className="w-5 h-5 text-[var(--accent-text)] mt-0.5 shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6 brand-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">What changes the cost of opening a spa?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600 leading-relaxed">
              <div><h3 className="font-bold text-gray-900 mb-2">Your site and build-out</h3><p>Leasehold improvements are the largest range in Spavia’s Item 7 estimate. The condition of a space, local construction pricing and lease terms affect the budget. A territory conversation comes before a site-specific estimate.</p></div>
              <div><h3 className="font-bold text-gray-900 mb-2">Your service model</h3><p>A <Link href="/massage-franchise" className="text-[#705b31] underline">massage franchise</Link> and a <Link href="/facial-franchise" className="text-[#705b31] underline">facial franchise</Link> may share services but differ in rooms, equipment and staffing. Spavia combines both within a day spa; the published range covers that full model.</p></div>
              <div><h3 className="font-bold text-gray-900 mb-2">Your operating reserve</h3><p>Item 7 includes $40,000–$80,000 in additional funds for three months. That is an estimate, not a promise of break-even in three months. Financing terms and personal living costs also affect the capital you need.</p></div>
            </div>
            <p className="mt-6 text-gray-600">For a broader comparison, read the <Link href="/blog/2026/02/19/spa-franchise-opportunities-guide" className="text-[#705b31] underline">spa franchise buyer’s guide</Link> or explore <Link href="/franchise-opportunities" className="text-[#705b31] underline">markets by state</Link>.</p>
          </div>
        </section>

        <FranchiseIntroForm />

        {/* ═══════ FAQ ═══════ */}
        <section className="bg-gray-50 py-20 px-6 brand-light">
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
                  day one. Per the 2026 FDD, Item 19, Part II, 33 of 59 disclosed
                  locations exceeded $1M in annual gross sales — more than half of those locations.
                  Review the full FDD and discuss the opening budget with the franchise team; historical sales do not establish a break-even date.
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
                    className="text-[var(--accent-text)] font-semibold hover:underline"
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
        <section className="bg-white py-16 px-6 brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Continue Exploring
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/franchise-opportunities"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Available Territories</p>
                <p className="text-sm text-gray-600">See franchise opportunities by state</p>
              </Link>
              <Link
                href="/why-spavia"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Why Spavia</p>
                <p className="text-sm text-gray-600">Discover what sets Spavia apart</p>
              </Link>
              <Link
                href="/steps-to-ownership"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Steps to Ownership</p>
                <p className="text-sm text-gray-600">Your path from inquiry to grand opening</p>
              </Link>
              <Link
                href="/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise"
                className="block p-5 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors"
              >
                <p className="font-bold text-gray-900 mb-1">Spavia vs. Woodhouse</p>
                <p className="text-sm text-gray-600">Side-by-side franchise comparison</p>
              </Link>
            </div>
          </div>
        </section>

        <GoldBottomBanner />

        <Footer />
      </main>
    </ThemeProvider>
  );
}
