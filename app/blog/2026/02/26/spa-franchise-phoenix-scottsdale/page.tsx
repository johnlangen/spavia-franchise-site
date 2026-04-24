import { Metadata } from "next";
import NavBar from "../../../../../components/NavBar";
import Footer from "../../../../../components/Footer";
import Link from "next/link";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import Image from "next/image";
import { getRelatedPosts, blogPosts } from "../../../../blogData";

export const metadata: Metadata = {
  title: "Phoenix & Scottsdale Spa Franchise: Open Territories 2026",
  description:
    "Phoenix and Scottsdale are two of the hottest spa franchise markets in 2026. Wellness demographics, Spavia territories available, and why now.",
  alternates: {
    canonical:
      "https://spaviafranchise.com/blog/2026/02/26/spa-franchise-phoenix-scottsdale",
  },
  openGraph: {
    title: "Phoenix & Scottsdale Spa Franchise: Open Territories 2026",
    description:
      "Phoenix and Scottsdale are two of the hottest spa franchise markets in 2026. Wellness demographics, Spavia territories available, and why now.",
    url: "https://spaviafranchise.com/blog/2026/02/26/spa-franchise-phoenix-scottsdale",
    type: "article",
    images: [
      {
        url: "https://spaviafranchise.com/blog/blog23.jpg",
        width: 1200,
        height: 675,
        alt: "Spavia day spa franchise location in Phoenix Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix & Scottsdale Spa Franchise: Open Territories 2026",
    description:
      "Phoenix and Scottsdale are two of the hottest spa franchise markets in 2026. Spavia territories available now.",
    images: ["https://spaviafranchise.com/blog/blog23.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Why Phoenix & Scottsdale Are the Hottest Markets for a Spa Franchise in 2026",
      description:
        "Phoenix and Scottsdale are two of the hottest spa franchise markets in 2026. Wellness demographics, Spavia territories available, and why now.",
      image: "https://spaviafranchise.com/blog/blog23.jpg",
      datePublished: "2026-02-26",
      dateModified: "2026-02-26",
      author: {
        "@type": "Person",
        name: "Tyler Woodard",
        jobTitle: "Director of Franchise Development",
        url: "https://spaviafranchise.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Spavia Franchise",
        url: "https://spaviafranchise.com",
        logo: {
          "@type": "ImageObject",
          url: "https://spaviafranchise.com/spavia-logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://spaviafranchise.com/blog/2026/02/26/spa-franchise-phoenix-scottsdale",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to open a spa franchise in Phoenix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The initial investment for a Spavia Day Spa franchise ranges from $496,000 to $796,000, which includes the franchise fee, buildout, equipment, initial marketing, and working capital. Costs can vary based on the specific Phoenix-area location and lease terms.",
          },
        },
        {
          "@type": "Question",
          name: "Is Phoenix a good market for a spa franchise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Phoenix is one of the strongest markets in the country for spa franchise investment. With 5.1 million+ metro residents, above-average household incomes (especially in Scottsdale), and a wellness-oriented population, the demand for recurring spa services is high and growing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I own a spa franchise in Phoenix without spa experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spavia provides comprehensive training and ongoing support for all franchise owners, regardless of prior spa industry experience. Many of our most successful owners come from corporate, healthcare, military, or other professional backgrounds.",
          },
        },
        {
          "@type": "Question",
          name: "Are there spa franchise territories available in Scottsdale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spavia currently has limited territories available in both Scottsdale and the greater Phoenix metro area. Territories are protected and allocated on a first-come, first-served basis. Contact us to check current availability.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Spavia different from other spa franchises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spavia combines accessible luxury positioning with a membership-driven revenue model, award-winning spa design, semi-absentee ownership options, and 20+ years of franchise expertise. The result is a day spa experience that's premium but scalable — designed for franchise investors, not just spa enthusiasts.",
          },
        },
        {
          "@type": "Question",
          name: "Is a spa franchise a profitable business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spavia franchise locations average $1,146,952 in gross sales, with 1 in 2 owners achieving $1M+ in revenue. The membership model provides recurring, predictable cash flow that supports strong unit economics. See our FDD Item 19 for detailed financial performance data.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <NavBar />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          {
            label:
              "Why Phoenix & Scottsdale Are the Hottest Markets for a Spa Franchise in 2026",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-gray-900 py-20 px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-block mb-8 text-[#C2A878] hover:underline font-medium"
          >
            &larr; Back to Blog
          </Link>

          {/* ── Badge & Date ── */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block bg-amber-900/10 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Local Market Guide
            </span>
            <span className="inline-block bg-[#C2A878]/10 text-[#C2A878] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Phoenix / Scottsdale
            </span>
            <span className="text-sm text-gray-500">
              Published February 26, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Phoenix &amp; Scottsdale Are the Hottest Markets for a Spa
            Franchise in 2026
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Population booming. Disposable income rising. A consumer base
            deeply invested in wellness. Here&apos;s why the Valley of the Sun
            is a top-tier market for spa franchise investment &mdash; and why
            Spavia territories are going fast.
          </p>

          <Image
            src="/blog/blog23.jpg"
            alt="Spavia day spa franchise location in Phoenix Arizona"
            width={1200}
            height={675}
            className="w-full rounded-xl mb-10"
            priority
          />

          {/* ── Table of Contents ── */}
          <nav className="bg-gradient-to-br from-gray-50 to-amber-50/40 rounded-xl p-6 mb-12 border border-[#C2A878]/20">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              In This Guide
            </h2>
            <ol className="space-y-2 text-sm">
              {[
                { label: "The Phoenix Metro: A Wellness Market on the Rise", id: "market-rise" },
                { label: "The Scottsdale Factor", id: "scottsdale-factor" },
                { label: "Why a Spa Franchise — and Why Now?", id: "why-now" },
                { label: "Why Spavia Is the Right Fit for Phoenix", id: "why-spavia" },
                { label: "Available Territories", id: "territories" },
                { label: "Who Is the Ideal Franchise Owner?", id: "ideal-owner" },
                { label: "Steps to Ownership in Phoenix", id: "steps" },
                { label: "FAQ", id: "faq" },
              ].map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-700 hover:text-[#C2A878] transition-colors"
                  >
                    <span className="text-[#C2A878] font-semibold mr-2">
                      {i + 1}.
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── Intro ── */}
          <p className="text-lg mb-6 leading-relaxed">
            If you&apos;ve been exploring franchise opportunities in the Phoenix
            metro area, you&apos;re looking at one of the fastest-growing
            wellness markets in the country. With a population that&apos;s
            surging, disposable income that&apos;s rising, and a consumer base
            that&apos;s deeply invested in health and self-care, the Valley of
            the Sun is positioning itself as a top-tier market for spa franchise
            investment.
          </p>

          <p className="mb-10 leading-relaxed">
            And if you&apos;re specifically searching for a spa franchise in
            Phoenix or Scottsdale, the timing couldn&apos;t be better. Spavia
            Day Spa is actively expanding into the Phoenix metro &mdash; with
            limited territories now available in both Phoenix and Scottsdale.
            This guide breaks down why these markets are ideal, what makes
            Spavia&apos;s model uniquely suited for this region, and how you can
            get started.
          </p>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 1 — Phoenix Metro Market */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="market-rise"
            className="text-2xl font-semibold mb-4 scroll-mt-24"
          >
            The Phoenix Metro: A Wellness Market on the Rise
          </h2>

          <p className="mb-6 leading-relaxed">
            Phoenix isn&apos;t just growing &mdash; it&apos;s booming. The
            greater Phoenix metropolitan area now exceeds 5 million residents,
            making it the fifth-largest metro in the United States. More
            importantly for franchise investors, the growth trajectory shows no
            signs of slowing.
          </p>

          {/* ── Phoenix Stats — Desert-inspired gradient cards ── */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                stat: "5.1M+",
                label: "Metro Population",
                detail: "Phoenix MSA, 2025 Census estimate",
              },
              {
                stat: "$98K+",
                label: "Scottsdale Median Income",
                detail: "Well above the $75K national median",
              },
              {
                stat: "Top 5",
                label: "U.S. Job Growth Metro",
                detail: "Driven by tech, healthcare & finance",
              },
              {
                stat: "55K+",
                label: "Net New Residents / Year",
                detail: "Consistent annual population influx",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-xl border border-[#C2A878]/20 p-5 bg-gradient-to-br from-white to-amber-50/60"
              >
                <p className="text-3xl font-bold text-[#C2A878] mb-1">
                  {s.stat}
                </p>
                <p className="font-semibold text-gray-900 text-sm">
                  {s.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">{s.detail}</p>
              </div>
            ))}
          </div>

          <p className="mb-10 leading-relaxed">
            This population growth directly translates to demand for recurring
            personal services &mdash; particularly massage, facial treatments,
            and wellness memberships. When more people are moving in with
            disposable income, they&apos;re looking for exactly the kinds of
            services a day spa franchise provides.
          </p>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 2 — The Scottsdale Factor */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="scottsdale-factor"
            className="text-2xl font-semibold mb-4 scroll-mt-24"
          >
            The Scottsdale Factor
          </h2>

          <p className="mb-6 leading-relaxed">
            Scottsdale is one of the most affluent and wellness-conscious
            communities in the country. It&apos;s consistently ranked among the
            top cities for health-conscious consumers, with a dense
            concentration of yoga studios, wellness retreats, fitness centers,
            and luxury spas.
          </p>

          <p className="mb-6 leading-relaxed">
            For a spa franchise owner, Scottsdale represents a highly qualified
            consumer base: high income, wellness-oriented, and accustomed to
            spending on recurring self-care services. This is exactly the
            demographic that converts into long-term spa memberships.
          </p>

          {/* ── Reach callout ── */}
          <div className="rounded-xl bg-gray-900 text-white px-6 py-6 mb-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                Combined Metro Audience
              </p>
              <p className="text-4xl font-bold">
                ~12<span className="text-[#C2A878]">M</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                consumer reach for a targeted spa franchise campaign
              </p>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">10.7M</p>
                <p className="text-xs text-gray-400">Phoenix reach</p>
              </div>
              <div className="text-2xl font-bold text-gray-600">+</div>
              <div>
                <p className="text-2xl font-bold">1.1M</p>
                <p className="text-xs text-gray-400">Scottsdale reach</p>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 3 — Why Now */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="why-now"
            className="text-2xl font-semibold mb-4 scroll-mt-24"
          >
            Why a Spa Franchise &mdash; and Why Now?
          </h2>

          <p className="mb-6 leading-relaxed">
            The wellness industry is one of the most resilient sectors in
            franchising. The global wellness economy has grown to over $6
            trillion, and consumer spending on spa and wellness services in the
            U.S. continues to outpace most retail categories. Here&apos;s what
            makes a spa franchise in Phoenix particularly compelling right now:
          </p>

          {/* ── Three pillars — unique alternating layout ── */}
          <div className="space-y-6 mb-10">
            {/* Pillar 1 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-[#C2A878] px-5 py-2.5">
                <h3 className="text-white font-semibold">
                  Demand Is Outpacing Supply
                </h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 leading-relaxed">
                  Despite Phoenix&apos;s rapid growth, the day spa franchise
                  landscape in the Valley remains underpenetrated relative to
                  population density. Major competitors like Massage Envy and
                  Hand &amp; Stone have established locations, but the premium,
                  accessible-luxury segment that Spavia occupies has significant
                  white space in Phoenix and Scottsdale.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 px-5 py-2.5">
                <h3 className="text-white font-semibold">
                  Membership Models Drive Recurring Revenue
                </h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 leading-relaxed">
                  Modern spa franchises aren&apos;t built on one-time visits
                  &mdash; they&apos;re built on memberships. Spavia&apos;s
                  membership-based model generates{" "}
                  <strong>65%+ of revenue from recurring monthly memberships</strong>,
                  creating predictable cash flow that many other franchise
                  categories can&apos;t match. For an investor looking at
                  franchise opportunities in Phoenix, that recurring revenue
                  model is a significant de-risk factor.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-[#C2A878] px-5 py-2.5">
                <h3 className="text-white font-semibold">
                  Multiple Revenue Streams
                </h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 leading-relaxed">
                  A well-run day spa franchise doesn&apos;t rely on a single
                  service. Spavia locations generate revenue from massage,
                  facials, body treatments, retail products, and gift card sales.
                  This diversification provides stability through seasonal
                  fluctuations and economic cycles &mdash; something Phoenix
                  franchise investors should prioritize.
                </p>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 4 — Why Spavia */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="why-spavia"
            className="text-2xl font-semibold mb-4 scroll-mt-24"
          >
            Why Spavia Is the Right Spa Franchise for Phoenix &amp; Scottsdale
          </h2>

          <p className="mb-6 leading-relaxed">
            Not all spa franchises are built the same. Here&apos;s what sets
            Spavia apart as the ideal franchise model for the Phoenix market:
          </p>

          {/* ── Feature cards — two-column with icon-style headers ── */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Accessible Luxury",
                desc: "Spavia sits in the sweet spot between budget massage chains and high-end resort spas. The brand delivers a luxury experience at an accessible price \u2014 exactly what Phoenix and Scottsdale consumers demand for their regular wellness routine.",
              },
              {
                title: "Award-Winning Design",
                desc: "Four distinct spa interior themes \u2014 Coastal, Vineyard, Mountain, and Sway (Urban) \u2014 create resort-inspired atmospheres. The Mountain and Coastal themes resonate particularly well with the Arizona lifestyle.",
              },
              {
                title: "Semi-Absentee Ownership",
                desc: "For investors who don\u2019t want to be behind the front desk every day, Spavia\u2019s Spa Director management structure allows for a flexible lifestyle while maintaining strong operational performance.",
              },
              {
                title: "20+ Years of Expertise",
                desc: "From site selection to grand opening to ongoing marketing support, Spavia\u2019s corporate team provides comprehensive training and systems designed to help owners succeed \u2014 even without prior spa experience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-5 hover:border-[#C2A878]/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C2A878] text-white text-xs font-bold">
                    &#10003;
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Financial Performance — standout box ── */}
          <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white px-8 py-8 mb-10">
            <h3 className="text-lg font-semibold mb-5 text-center">
              Proven Financial Performance
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 rounded-xl p-5 text-center backdrop-blur">
                <p className="text-sm text-gray-300 mb-1">
                  Avg. Gross Sales*
                </p>
                <p className="text-3xl font-bold">$1,146,952</p>
              </div>
              <div className="bg-white/10 rounded-xl p-5 text-center backdrop-blur">
                <p className="text-sm text-gray-300 mb-1">
                  Initial Investment*
                </p>
                <p className="text-3xl font-bold text-[#C2A878]">
                  $496K &ndash; $796K
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center">
              *Results vary. See FDD Item 19 for details.
            </p>
          </div>

          {/* ── Mid-Article CTA ── */}
          <div className="rounded-xl bg-[#faf7f2] border border-[#C2A878]/30 px-6 py-6 mb-12 text-center">
            <p className="font-semibold text-gray-900 text-lg mb-1">
              Interested in the Phoenix &amp; Scottsdale market?
            </p>
            <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
              Explore how Spavia compares to other franchise models and see
              what makes the Arizona opportunity unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/blog/2026/02/11/day-spa-vs-med-spa-franchise"
                className="inline-block bg-white border border-[#C2A878] text-[#C2A878] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#C2A878] hover:text-white transition-colors text-sm"
              >
                Day Spa vs. Med Spa &rarr;
              </Link>
              <Link
                href="/blog/2026/02/19/spa-franchise-opportunities-guide"
                className="inline-block bg-white border border-[#C2A878] text-[#C2A878] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#C2A878] hover:text-white transition-colors text-sm"
              >
                Full Franchise Guide &rarr;
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 5 — Available Territories */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="territories"
            className="text-2xl font-semibold mb-4 scroll-mt-24"
          >
            Available Territories: Phoenix &amp; Scottsdale
          </h2>

          {/* ── Urgency banner ── */}
          <div className="rounded-lg bg-amber-50 border-l-4 border-[#C2A878] px-5 py-3 mb-6">
            <p className="font-semibold text-amber-900 text-sm">
              Limited territories are now available in the Phoenix and
              Scottsdale markets. Early movers secure the strongest trade areas.
            </p>
          </div>

          <p className="mb-6 leading-relaxed">
            Spavia is actively seeking franchise partners for the greater
            Phoenix metropolitan area, including prime territories in:
          </p>

          {/* ── Territory list — visually distinct cards ── */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              {
                area: "Phoenix Proper",
                desc: "Multiple high-traffic corridors and suburban growth areas",
              },
              {
                area: "Scottsdale",
                desc: "Premium trade areas with high household income and wellness-oriented demographics",
              },
              {
                area: "East Valley",
                desc: "Gilbert, Chandler, Mesa \u2014 fast-growing communities with strong family demographics",
              },
              {
                area: "North Phoenix / Paradise Valley",
                desc: "Affluent neighborhoods with established consumer spending on wellness",
              },
              {
                area: "West Valley",
                desc: "Goodyear, Surprise, Buckeye \u2014 rapidly expanding suburban markets with limited spa competition",
              },
            ].map((t, i) => (
              <div
                key={t.area}
                className={`rounded-xl border border-gray-200 p-4 ${
                  i === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2A878]/10 text-[#C2A878] text-xs font-bold">
                    {String.fromCharCode(9679)}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{t.area}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-10 leading-relaxed">
            Each territory is protected, meaning you won&apos;t compete with
            another Spavia location in your designated area. Territory selection
            is guided by Spavia&apos;s corporate real estate team using
            demographic analysis, traffic data, and competitive mapping to
            ensure the strongest possible launch position.
          </p>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 6 — Ideal Owner */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="ideal-owner"
            className="text-2xl font-semibold mb-4 scroll-mt-24"
          >
            Who Is the Ideal Spavia Franchise Owner?
          </h2>

          <p className="mb-6 leading-relaxed">
            Spavia franchise partners come from a wide range of backgrounds. You
            don&apos;t need to be a spa professional or have healthcare
            experience. The most successful Spavia owners tend to share a few
            common traits:
          </p>

          <div className="space-y-3 mb-10">
            {[
              {
                trait: "Entrepreneurial Mindset",
                detail:
                  "A passion for building a team and delivering exceptional guest experiences",
              },
              {
                trait: "Leadership Experience",
                detail:
                  "Managing people from corporate, military, healthcare, or other professional backgrounds",
              },
              {
                trait: "Community-Oriented",
                detail:
                  "Interested in building a business embedded in the local Phoenix/Scottsdale community",
              },
              {
                trait: "Women Entrepreneurs",
                detail:
                  "Especially well-represented in Spavia\u2019s franchise system, drawn to the brand\u2019s wellness mission and community impact",
              },
            ].map((item) => (
              <div
                key={item.trait}
                className="flex items-start gap-4 rounded-xl border border-gray-200 p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2A878] text-white text-xs font-bold">
                  &#10003;
                </span>
                <div>
                  <h3 className="font-semibold mb-0.5">{item.trait}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 7 — Steps to Ownership */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="steps"
            className="text-2xl font-semibold mb-6 scroll-mt-24"
          >
            How to Get Started: Steps to Spa Franchise Ownership in Phoenix
          </h2>

          <div className="relative space-y-0 mb-10">
            {[
              {
                step: "1",
                title: "Request the Franchise Overview",
                desc: "Get the full brand package including the FDD, financial performance data, and territory availability.",
              },
              {
                step: "2",
                title: "Schedule a Discovery Call",
                desc: "Speak directly with our franchise development team to discuss the Phoenix market and your goals.",
              },
              {
                step: "3",
                title: "Review the FDD",
                desc: "Dive into the financials, talk to existing franchise owners, and evaluate the opportunity.",
              },
              {
                step: "4",
                title: "Attend Meet the Team Day",
                desc: "Visit Spavia HQ, meet the leadership team, and experience the brand firsthand.",
              },
              {
                step: "5",
                title: "Secure Your Territory & Launch",
                desc: "From franchise agreement to grand opening, Spavia\u2019s team supports you every step of the way.",
              },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex items-stretch gap-4">
                {/* ── Timeline connector ── */}
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C2A878] text-white font-bold text-sm z-10">
                    {item.step}
                  </span>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#C2A878]/20" />
                  )}
                </div>
                {/* ── Content ── */}
                <div className="pb-6">
                  <h3 className="font-semibold mb-0.5">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Primary CTA ── */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white px-8 py-10 text-center mb-12">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C2A878]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C2A878]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3">
                Ready to Explore a Spa Franchise in Phoenix?
              </h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto leading-relaxed">
                Limited territories are available in Phoenix and Scottsdale.
                Get the full franchise overview including financials, territory
                maps, and next steps.
              </p>
              <Link
                href="/get-started"
                className="inline-block bg-[#C2A878] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b09466] transition-colors text-lg"
              >
                Request the Franchise Overview &rarr;
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SECTION 8 — FAQ */}
          {/* ════════════════════════════════════════════════════════════ */}
          <h2
            id="faq"
            className="text-2xl font-semibold mb-6 scroll-mt-24"
          >
            Frequently Asked Questions: Spa Franchise in Phoenix
          </h2>

          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 mb-10 overflow-hidden">
            {[
              {
                q: "How much does it cost to open a spa franchise in Phoenix?",
                a: "The initial investment for a Spavia Day Spa franchise ranges from $496,000 to $796,000, which includes the franchise fee, buildout, equipment, initial marketing, and working capital. Costs can vary based on the specific Phoenix-area location and lease terms.",
              },
              {
                q: "Is Phoenix a good market for a spa franchise?",
                a: "Phoenix is one of the strongest markets in the country for spa franchise investment. With 5.1 million+ metro residents, above-average household incomes (especially in Scottsdale), and a wellness-oriented population, the demand for recurring spa services is high and growing.",
              },
              {
                q: "Can I own a spa franchise in Phoenix without spa experience?",
                a: "Yes. Spavia provides comprehensive training and ongoing support for all franchise owners, regardless of prior spa industry experience. Many of our most successful owners come from corporate, healthcare, military, or other professional backgrounds.",
              },
              {
                q: "Are there spa franchise territories available in Scottsdale?",
                a: "Yes. Spavia currently has limited territories available in both Scottsdale and the greater Phoenix metro area. Territories are protected and allocated on a first-come, first-served basis. Contact us to check current availability.",
              },
              {
                q: "What makes Spavia different from other spa franchises?",
                a: "Spavia combines accessible luxury positioning with a membership-driven revenue model, award-winning spa design, semi-absentee ownership options, and 20+ years of franchise expertise. The result is a day spa experience that\u2019s premium but scalable \u2014 designed for franchise investors, not just spa enthusiasts.",
              },
              {
                q: "Is a spa franchise a profitable business?",
                a: "Spavia franchise locations average $1,146,952 in gross sales, with 1 in 2 owners achieving $1M+ in revenue. The membership model provides recurring, predictable cash flow that supports strong unit economics. See our FDD Item 19 for detailed financial performance data.",
              },
            ].map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {item.q}
                  <span className="ml-4 text-[#C2A878] transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {/* ── Related Articles ── */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-3">
              {getRelatedPosts("/blog/2026/02/26/spa-franchise-phoenix-scottsdale").map((rp) => (
                <li key={rp.href}>
                  <Link href={rp.href} className="text-[#C2A878] hover:underline">
                    {rp.title} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Permalink ── */}
          <p className="text-sm text-gray-500 mt-8">
            Permalink:{" "}
            <a
              href="https://spaviafranchise.com/blog/2026/02/26/spa-franchise-phoenix-scottsdale"
              className="underline"
            >
              https://spaviafranchise.com/blog/2026/02/26/spa-franchise-phoenix-scottsdale
            </a>
          </p>
          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#C2A878] flex items-center justify-center text-white font-bold text-lg shrink-0">
              TW
            </div>
            <div>
              <p className="font-semibold text-gray-900">Tyler Woodard</p>
              <p className="text-sm text-gray-500 mb-1">Director of Franchise Development</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tyler guides prospective franchise owners through every step of the Spavia discovery process, from initial inquiry to grand opening.
              </p>
            </div>
          </div>


          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-block text-[#C2A878] hover:underline font-medium"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
