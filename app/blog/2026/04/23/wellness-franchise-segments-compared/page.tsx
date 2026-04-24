import { Metadata } from "next";
import NavBar from "../../../../../components/NavBar";
import Footer from "../../../../../components/Footer";
import Link from "next/link";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { getRelatedPosts } from "../../../../blogData";

export const metadata: Metadata = {
  title:
    "Wellness Franchise Segments Compared: Which Fits Your Investment Goals? (2026) | Spavia",
  description:
    "Compare day spa, med spa, fitness, massage, recovery, and nutrition franchise segments side by side — investment range, growth rate, and revenue model. A franchise director's guide.",
  alternates: {
    canonical:
      "https://spaviafranchise.com/blog/2026/04/23/wellness-franchise-segments-compared",
  },
  openGraph: {
    title:
      "Which Wellness Franchise Segment Is Right for You? A Side-by-Side Comparison",
    description:
      "Compare day spa, med spa, fitness, massage, recovery, and nutrition franchise segments side by side — investment, growth rate, and revenue model.",
    url: "https://spaviafranchise.com/blog/2026/04/23/wellness-franchise-segments-compared",
    type: "article",
    images: [
      {
        url: "https://spaviafranchise.com/blog/blog28.png",
        width: 1200,
        height: 675,
        alt: "Wellness franchise segments compared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Which Wellness Franchise Segment Is Right for You? A Side-by-Side Comparison",
    description:
      "Compare day spa, med spa, fitness, massage, recovery, and nutrition franchise segments side by side.",
    images: ["https://spaviafranchise.com/blog/blog28.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Which Wellness Franchise Segment Is Right for You? A Side-by-Side Comparison",
      description:
        "Compare day spa, med spa, fitness, massage, recovery, and nutrition franchise segments side by side — investment range, growth rate, revenue model, and who each one fits.",
      image: "https://spaviafranchise.com/blog/blog28.png",
      datePublished: "2026-04-23",
      dateModified: "2026-04-23",
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
          "https://spaviafranchise.com/blog/2026/04/23/wellness-franchise-segments-compared",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the main wellness franchise segments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The major wellness franchise segments are day spa, med spa, massage therapy, fitness/gym, recovery (cryotherapy, float, IV hydration), and nutrition/juice. Each segment has a different investment range, growth trajectory, and revenue model. Day spa franchises typically require $496K–$796K, while med spa franchises range from $500K to $1.5M+.",
          },
        },
        {
          "@type": "Question",
          name: "Which wellness franchise segment has the best unit economics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unit economics vary by brand, not just segment. Day spa franchises built on a membership-driven model tend to deliver strong operating margins and predictable recurring revenue. Med spa franchises can generate higher absolute revenue per visit but carry higher investment, licensing complexity, and regulatory exposure. Always compare Item 19 of each brand's FDD rather than industry averages.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need industry experience to own a wellness franchise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Most successful wellness franchise owners come from backgrounds in corporate leadership, sales, healthcare, finance, or hospitality. Franchise systems provide training in operations, service delivery, and business management. What matters is leadership ability, people management, and willingness to execute a proven business system.",
          },
        },
        {
          "@type": "Question",
          name: "Is the wellness industry still growing in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Global Wellness Institute reports the global wellness economy reached $6.8 trillion in 2024, growing 7.9% year over year, and projects it will approach $10 trillion by 2029. In the United States, McKinsey found that 82% of consumers now consider personal health and well-being a top priority in their daily lives.",
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
              "Which Wellness Franchise Segment Is Right for You?",
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

          <h1 className="text-4xl font-bold mb-6">
            Which Wellness Franchise Segment Is Right for You? A Side-by-Side
            Comparison
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Published April 23, 2026 &middot; By Tyler Woodard, Director of
            Franchise Development
          </p>

          {/* ── Intro ── */}
          <p className="text-lg mb-6 leading-relaxed">
            Most prospects I speak with come to the franchise conversation with
            two ideas: they want to invest in wellness, and they&apos;ve heard
            the industry is growing. Both are true. The Global Wellness
            Institute reports the global wellness economy reached{" "}
            <strong>$6.8 trillion in 2024</strong>, growing 7.9% year over year,
            and projects it will approach{" "}
            <strong>$10 trillion by 2029</strong>. McKinsey found that{" "}
            <strong>82% of U.S. consumers</strong> now consider personal health
            and well-being a top priority in their daily lives.
          </p>

          <p className="mb-10 leading-relaxed">
            What most prospects don&apos;t realize on day one is that
            &quot;wellness franchise&quot; is not a single category. It&apos;s
            six or seven distinct segments, each with its own investment
            profile, growth trajectory, and business model. Choosing the right
            segment is the single most consequential decision you&apos;ll make
            in this process &mdash; bigger than brand selection, bigger than
            territory. This guide breaks the segments down side by side, with
            the same framework I use when talking through options with
            prospective Spavia owners.
          </p>

          {/* ── At a Glance ── */}
          <h2 className="text-2xl font-semibold mb-4">
            The Six Wellness Franchise Segments at a Glance
          </h2>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Segment</th>
                  <th className="px-4 py-3 text-center">Investment Range</th>
                  <th className="px-4 py-3 text-center">Growth Rate</th>
                  <th className="px-4 py-3 text-center">Revenue Model</th>
                  <th className="px-4 py-3 text-center">Market Maturity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3 font-medium">Fitness / Gym</td>
                  <td className="px-4 py-3 text-center">$200K &ndash; $1M+</td>
                  <td className="px-4 py-3 text-center">3&ndash;5%</td>
                  <td className="px-4 py-3 text-center">Membership</td>
                  <td className="px-4 py-3 text-center">Mature</td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3 font-medium">Massage Therapy</td>
                  <td className="px-4 py-3 text-center">$400K &ndash; $1M</td>
                  <td className="px-4 py-3 text-center">5&ndash;7%</td>
                  <td className="px-4 py-3 text-center">Membership</td>
                  <td className="px-4 py-3 text-center">Established</td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3 font-medium">Day Spa</td>
                  <td className="px-4 py-3 text-center font-semibold">
                    $496K &ndash; $796K
                  </td>
                  <td className="px-4 py-3 text-center">8&ndash;10%</td>
                  <td className="px-4 py-3 text-center">Membership</td>
                  <td className="px-4 py-3 text-center">High Growth</td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3 font-medium">Recovery / Cryo</td>
                  <td className="px-4 py-3 text-center">$300K &ndash; $800K</td>
                  <td className="px-4 py-3 text-center">10&ndash;15%</td>
                  <td className="px-4 py-3 text-center">
                    Membership + Drop-in
                  </td>
                  <td className="px-4 py-3 text-center">Emerging</td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3 font-medium">Med Spa</td>
                  <td className="px-4 py-3 text-center">$500K &ndash; $1.5M+</td>
                  <td className="px-4 py-3 text-center">12&ndash;19%</td>
                  <td className="px-4 py-3 text-center">
                    Transaction + Membership
                  </td>
                  <td className="px-4 py-3 text-center">Growing</td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3 font-medium">Nutrition / Juice</td>
                  <td className="px-4 py-3 text-center">$150K &ndash; $500K</td>
                  <td className="px-4 py-3 text-center">6&ndash;8%</td>
                  <td className="px-4 py-3 text-center">Transaction</td>
                  <td className="px-4 py-3 text-center">Growing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-10">
            Investment ranges and growth rates are approximate and vary by
            brand and market. Always review Item 19 of each brand&apos;s
            Franchise Disclosure Document (FDD) for the financial performance
            representations that apply to a specific brand.
          </p>

          {/* ── Segment: Day Spa ── */}
          <h2 className="text-2xl font-semibold mb-3">
            Day Spa: High Growth, Membership-Driven, Mid-Range Investment
          </h2>
          <p className="mb-4 leading-relaxed">
            Day spa is the segment Spavia operates in, so I&apos;ll lead with
            it. The typical investment runs <strong>$496K to $796K</strong>,
            placing it between low-overhead concepts like nutrition and the
            capital-heavy med spa category. The model combines massage, facials,
            body treatments, waxing, and a curated retail boutique under one
            roof &mdash; which means guests can address multiple wellness goals
            in one place and owners capture a wider share of each visit.
          </p>
          <p className="mb-4 leading-relaxed">
            The revenue model is membership-driven. Most day spa franchises
            offer tiered monthly memberships that include a set number of
            services plus discounts, which creates predictable recurring
            revenue and smooths out seasonal fluctuations. Spavia&apos;s
            three-tier membership is the foundation of our{" "}
            <strong>$1,146,952 average unit volume</strong> and{" "}
            <strong>20.6% operating margins</strong>
            <span className="text-xs">*</span>.
          </p>
          <p className="mb-10 leading-relaxed">
            Who it fits: owners who want a premium but accessible wellness
            brand, predictable cash flow, and moderate capital exposure. Less
            of a fit for owners who want a lower-capital concept under $300K or
            who want the higher revenue ceiling of a med spa (with the
            regulatory complexity that comes with it).
          </p>

          {/* ── Segment: Med Spa ── */}
          <h2 className="text-2xl font-semibold mb-3">
            Med Spa: High Revenue Ceiling, High Capital, Higher Complexity
          </h2>
          <p className="mb-4 leading-relaxed">
            Med spas blend spa services with medical aesthetics &mdash;
            injectables, laser treatments, body contouring, IV therapy. The
            growth rates are the highest in wellness (12&ndash;19% annually),
            and per-visit revenue is significantly higher than a day spa.
          </p>
          <p className="mb-10 leading-relaxed">
            The trade-offs are real: investment starts around $500K and can
            exceed $1.5M, and the model depends on licensed medical oversight,
            which means higher labor costs, stricter state regulations, and
            more exposure to malpractice insurance. Med spa is the right fit
            for owners who are comfortable operating in a medically-regulated
            environment or partnering with a medical director. For a deeper
            comparison, see our{" "}
            <Link
              href="/blog/2026/02/11/day-spa-vs-med-spa-franchise"
              className="text-[#C2A878] hover:underline"
            >
              day spa vs. med spa franchise breakdown
            </Link>
            .
          </p>

          {/* ── Segment: Massage ── */}
          <h2 className="text-2xl font-semibold mb-3">
            Massage Therapy: Proven but Saturated
          </h2>
          <p className="mb-10 leading-relaxed">
            Massage-only concepts (Massage Envy, Hand &amp; Stone, Elements)
            pioneered the membership model in wellness franchising and have
            strong unit economics. The challenge in 2026 is saturation &mdash;
            prime territories in most major metros are already claimed. If
            you&apos;re evaluating this segment, territory availability should
            be your first question before brand selection.
          </p>

          {/* ── Segment: Fitness ── */}
          <h2 className="text-2xl font-semibold mb-3">
            Fitness / Gym: The Most Mature Segment
          </h2>
          <p className="mb-10 leading-relaxed">
            Fitness franchising is the most mature segment in wellness, which
            is both a feature and a warning. Feature: proven models, deep
            operator experience, established vendor networks. Warning: the
            largest metros are saturated, growth has cooled to 3&ndash;5%
            annually, and differentiation is difficult. If you&apos;re looking
            at a fitness franchise in 2026, I&apos;d weight territory
            availability and local market fit above everything else.
          </p>

          {/* ── Segment: Recovery ── */}
          <h2 className="text-2xl font-semibold mb-3">
            Recovery / Cryotherapy: Emerging, Fastest-Growing, Highest Risk
          </h2>
          <p className="mb-10 leading-relaxed">
            Recovery concepts (cryotherapy, infrared sauna, float therapy, IV
            hydration) are the fastest-growing wellness segment at
            10&ndash;15% annually. They also carry the highest risk profile:
            brands are younger, models are less proven, and consumer
            behavior is still being established. Great for investors who want
            to ride an emerging category and can tolerate more uncertainty.
            Not a fit for first-time owners who need a battle-tested model.
          </p>

          {/* ── Segment: Nutrition ── */}
          <h2 className="text-2xl font-semibold mb-3">
            Nutrition / Juice: Low Capital, Transaction-Driven
          </h2>
          <p className="mb-10 leading-relaxed">
            Juice bars, smoothie concepts, and nutrition franchises are the
            lowest-capital wellness entry points ($150K&ndash;$500K) but
            depend on foot traffic and per-transaction revenue rather than
            recurring membership. Margins are typically lower than
            service-based wellness, and the model is more sensitive to local
            foot traffic patterns than a destination concept like a day spa.
          </p>

          {/* ── Due Diligence Checklist ── */}
          <h2 className="text-2xl font-semibold mb-4">
            Six Questions I Tell Prospects to Ask Every Franchisor
          </h2>
          <p className="mb-6 leading-relaxed">
            Once you&apos;ve narrowed the segment, the next step is comparing
            brands. Here&apos;s the framework I walk prospects through. If a
            franchisor can&apos;t answer all six clearly, that&apos;s
            important information.
          </p>

          <div className="space-y-6 mb-10">
            <div className="border-l-4 border-[#C2A878] pl-4">
              <h3 className="font-semibold text-lg mb-1">
                1. What does your membership-to-revenue ratio look like?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Recurring revenue is the most valuable kind of wellness
                revenue. The higher the membership percentage, the more
                predictable the business. If a brand can&apos;t tell you this
                number, the business is probably more transaction-dependent
                than advertised.
              </p>
            </div>

            <div className="border-l-4 border-[#C2A878] pl-4">
              <h3 className="font-semibold text-lg mb-1">
                2. What does your Item 19 actually say?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Item 19 of the FDD is the financial performance
                representation. Look at average unit volume, operating margins,
                and owner cash flow &mdash; not just top performers. If the
                franchisor doesn&apos;t publish an Item 19, that in itself is
                a signal.
              </p>
            </div>

            <div className="border-l-4 border-[#C2A878] pl-4">
              <h3 className="font-semibold text-lg mb-1">
                3. Which territories are available in the markets I care
                about?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The best business model in the world doesn&apos;t matter if
                the territories you want are already taken. Ask for a
                territory map, not a reassurance. See our{" "}
                <Link
                  href="/franchise-opportunities"
                  className="text-[#C2A878] hover:underline"
                >
                  current open territories
                </Link>
                .
              </p>
            </div>

            <div className="border-l-4 border-[#C2A878] pl-4">
              <h3 className="font-semibold text-lg mb-1">
                4. How does the franchisor support real estate and
                construction?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Site selection and build-out are the two places new owners
                most often get hurt. A strong franchisor has dedicated real
                estate and construction support, vendor relationships, and a
                history of opening on time and on budget.
              </p>
            </div>

            <div className="border-l-4 border-[#C2A878] pl-4">
              <h3 className="font-semibold text-lg mb-1">
                5. Can you put me in touch with multiple existing owners?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Validation calls with current franchisees are the single best
                due-diligence tool available to you. A franchisor who
                hesitates to connect you with owners &mdash; or who only
                offers one or two curated references &mdash; is telling you
                something.
              </p>
            </div>

            <div className="border-l-4 border-[#C2A878] pl-4">
              <h3 className="font-semibold text-lg mb-1">
                6. What does ongoing support actually look like month to
                month?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Training at opening is table stakes. What matters is what
                happens in year two and year five. Ask about dedicated
                business coaches, weekly calls, on-site visits, and how the
                brand evolves operationally over time.
              </p>
            </div>
          </div>

          {/* ── Where Spavia Fits ── */}
          <h2 className="text-2xl font-semibold mb-3">Where Spavia Fits</h2>
          <p className="mb-6 leading-relaxed">
            Spavia sits in the day spa segment with a deliberate positioning:
            premium experience at accessible price points, a
            membership-driven recurring revenue model, and 2,200&ndash;3,000
            square foot footprints that keep build-out and operating costs
            lower than the full-luxury competitors. We&apos;ve been
            franchising for nearly 20 years, we have{" "}
            <strong>over 60 locations</strong> across the country, and our
            FDD Item 19 reports an average unit volume of{" "}
            <strong>$1,146,952</strong>, average owner cash flow of{" "}
            <strong>$236,208</strong>, and operating margins of{" "}
            <strong>20.6%</strong>
            <span className="text-xs">*</span>. For a detailed breakdown, see{" "}
            <Link
              href="/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise"
              className="text-[#C2A878] hover:underline"
            >
              our head-to-head with Woodhouse
            </Link>{" "}
            and the{" "}
            <Link
              href="/blog/2026/03/10/how-to-open-a-spa-franchise"
              className="text-[#C2A878] hover:underline"
            >
              step-by-step opening timeline
            </Link>
            .
          </p>

          <p className="text-xs text-gray-500 mb-10">
            *Per our FDD Item 19, Part III. Individual results vary by market,
            ownership model, and operator.
          </p>

          {/* ── Sources & FDD References ── */}
          <h2 className="text-2xl font-semibold mb-4">
            Sources &amp; FDD References
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Figure Cited</th>
                  <th className="px-4 py-3 text-left">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3">
                    Spavia total initial investment: $496,450 &ndash; $795,950
                  </td>
                  <td className="px-4 py-3">
                    Spavia Franchise Disclosure Document, Item 7
                  </td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3">
                    Spavia average unit volume: $1,146,952
                  </td>
                  <td className="px-4 py-3">
                    Spavia Franchise Disclosure Document, Item 19, Part III
                  </td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3">
                    Spavia average owner cash flow: $236,208
                  </td>
                  <td className="px-4 py-3">
                    Spavia Franchise Disclosure Document, Item 19, Part III
                  </td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3">
                    Spavia operating margin: 20.6%
                  </td>
                  <td className="px-4 py-3">
                    Spavia Franchise Disclosure Document, Item 19, Part III
                  </td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3">
                    Global wellness economy: $6.8T (2024), 7.9% YoY growth,
                    projected ~$10T by 2029
                  </td>
                  <td className="px-4 py-3">
                    Global Wellness Institute, 2024 Global Wellness Economy
                    Monitor
                  </td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-4 py-3">
                    82% of U.S. consumers prioritize personal health &amp;
                    well-being
                  </td>
                  <td className="px-4 py-3">
                    McKinsey &amp; Company, &quot;Still feeling good: The US
                    wellness market continues to boom&quot; (2024)
                  </td>
                </tr>
                <tr className="bg-white border-t">
                  <td className="px-4 py-3">
                    Segment investment ranges &amp; growth rates (Fitness,
                    Massage, Recovery, Med Spa, Nutrition)
                  </td>
                  <td className="px-4 py-3">
                    Industry estimates compiled from IBISWorld, Franchise
                    Business Review, and segment-leading franchisor FDDs
                    (approximations; always verify with each brand&apos;s
                    current FDD)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-10">
            Financial performance representations for Spavia are sourced from
            Item 19 of our current Franchise Disclosure Document. Individual
            results vary by market, ownership model, and operator. This article
            does not constitute an offer to sell or a solicitation to buy a
            franchise. Offerings are made only by an FDD delivered in
            compliance with applicable state and federal law.
          </p>

          {/* ── CTA ── */}
          <div className="bg-gray-50 rounded-xl p-8 text-center mb-10 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3">
              Still Deciding Which Segment Fits You?
            </h2>
            <p className="text-gray-600 mb-6">
              Schedule a discovery call with me and I&apos;ll walk you through
              how Spavia compares to other segments for your specific
              financial profile and market.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-[#C2A878] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b09466] transition"
            >
              Schedule a Discovery Call
            </Link>
          </div>

          {/* ── Related Articles ── */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-3">
              {getRelatedPosts(
                "/blog/2026/04/23/wellness-franchise-segments-compared"
              ).map((rp) => (
                <li key={rp.href}>
                  <Link
                    href={rp.href}
                    className="text-[#C2A878] hover:underline"
                  >
                    {rp.title} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Author Bio ── */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#C2A878] flex items-center justify-center text-white font-bold text-lg shrink-0">
              TW
            </div>
            <div>
              <p className="font-semibold text-gray-900">Tyler Woodard</p>
              <p className="text-sm text-gray-500 mb-1">
                Director of Franchise Development
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tyler guides prospective franchise owners through every step
                of the Spavia discovery process, from initial inquiry through
                grand opening. He has worked with hundreds of candidates
                evaluating wellness franchise opportunities across the United
                States.
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
