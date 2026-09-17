import { Metadata } from "next";
import NavBar from "../../../../../components/NavBar";
import Footer from "../../../../../components/Footer";
import Link from "next/link";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import Image from "next/image";
import { getRelatedPosts } from "../../../../blogData";

const URL =
  "https://spaviafranchise.com/blog/2026/09/17/spavia-2026-awards-how-to-read-franchise-rankings";
const HERO = "https://spaviafranchise.com/blog/spavia-2026-recognition-hero.jpg";

export const metadata: Metadata = {
  title: "How to Read Franchise Awards: Spavia's 2026 Inc. 5000 and Newsweek Wins",
  description:
    "Spavia climbed 1,690 spots on the 2026 Inc. 5000 and was named a Newsweek Readers' Choice Top 10 Best Massage Chain. Here's what each award actually measures, and what a franchise buyer should verify instead.",
  alternates: { canonical: URL },
  openGraph: {
    title: "How to Read Franchise Awards: Spavia's 2026 Inc. 5000 and Newsweek Wins",
    description:
      "What an Inc. 5000 climb and a Newsweek Readers' Choice win tell a prospective franchise owner, and what they don't.",
    url: URL,
    type: "article",
    images: [
      {
        url: HERO,
        width: 1600,
        height: 900,
        alt: "A guest checking in at the front desk of a Spavia day spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Read Franchise Awards: Spavia's 2026 Inc. 5000 and Newsweek Wins",
    description:
      "What an Inc. 5000 climb and a Newsweek Readers' Choice win tell a prospective franchise owner, and what they don't.",
    images: [HERO],
  },
};

const faqs = [
  {
    q: "What awards has Spavia won in 2026?",
    a: "In 2026 Spavia ranked No. 3,221 on the Inc. 5000 list of America's fastest-growing private companies, with 92% three-year revenue growth, up 1,690 spots from No. 4,911 in 2024. Spavia was also named a 2026 Newsweek Readers' Choice Awards winner in the Best Massage Chain category (Top 10), and a 2026 FranServe Fran-tastic Brand.",
  },
  {
    q: "Is the Inc. 5000 a good signal when choosing a franchise?",
    a: "It's a useful signal about the franchisor's own momentum, because Inc. ranks companies by percentage revenue growth over three years. It does not measure how individual franchise locations perform. For unit-level results, read Item 19 of the franchise disclosure document (FDD) and talk to current owners.",
  },
  {
    q: "What is the Newsweek Readers' Choice Award?",
    a: "Newsweek's Readers' Choice Awards are consumer-voted. An expert panel nominates brands, Newsweek editors finalize the field, and readers vote once per category per day during the voting window. The 2026 Best Massage Chain winners were announced on September 16, 2026.",
  },
  {
    q: "What should a franchise buyer look at besides awards?",
    a: "Awards show direction, not detail. Before you invest, review FDD Item 19 (financial performance), Item 20 (openings, closures, and transfers, plus contact information for current and former owners), and Item 3 (litigation). Then call several franchisees, confirm your territory is available, and meet the leadership team you would be working with.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "How to Read Franchise Awards: What Spavia's 2026 Inc. 5000 and Newsweek Wins Actually Mean",
      description:
        "What an Inc. 5000 climb and a Newsweek Readers' Choice win tell a prospective spa franchise owner, how different franchise awards are decided, and what to verify instead.",
      image: HERO,
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: {
        "@type": "Organization",
        name: "Spavia Franchise Team",
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
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// Inc. 5000 ranks run from 5,000 (left) to 1 (right)
const rankToPct = (rank: number) => ((5000 - rank) / 5000) * 100;
const INC_2024 = 4911;
const INC_2026 = 3221;

const decoder = [
  {
    type: "Growth rankings",
    example: "Inc. 5000",
    decides: "Three years of company revenue",
    measures: "The franchisor's momentum",
    misses: "How individual spas perform",
    spavia: "No. 3,221 in 2026",
  },
  {
    type: "Size rankings",
    example: "Franchise Times Top 400",
    decides: "Systemwide sales",
    measures: "Scale of the whole system",
    misses: "Whether that scale is profitable for owners",
    spavia: "No. 394 in 2025",
  },
  {
    type: "Editorial formulas",
    example: "Entrepreneur Franchise 500",
    decides: "Franchisor data, scored by editors",
    measures: "Costs, support, growth, stability",
    misses: "How owners feel day to day",
    spavia: "No. 109 in 2021",
  },
  {
    type: "Reader-voted awards",
    example: "Newsweek Readers' Choice",
    decides: "Guests and fans, voting daily",
    measures: "Brand loyalty and guest affection",
    misses: "Operating economics",
    spavia: "Top 10 Best Massage Chain, 2026",
  },
];

const timeline = [
  { year: "2020", items: ["Entrepreneur Franchise 500 debut, No. 258"] },
  { year: "2021", items: ["Entrepreneur Franchise 500, up to No. 109"] },
  { year: "2023", items: ["Franchise Times Top 400 debut, No. 437"] },
  {
    year: "2024",
    items: ["Inc. 5000, No. 4,911", "Franchise Times Top 400, No. 425"],
  },
  {
    year: "2025",
    items: [
      "Franchise Times Top 400, No. 394",
      "Franchise Innovation Awards, Cause Marketing Champion",
    ],
  },
  {
    year: "2026",
    items: [
      "FranServe Fran-tastic Brand",
      "Inc. 5000, No. 3,221",
      "Newsweek Readers' Choice, Top 10 Best Massage Chain",
    ],
    current: true,
  },
];

const verify = [
  {
    item: "FDD Item 19",
    what: "Financial performance of actual locations. This is where unit-level revenue lives, not in a ranking.",
  },
  {
    item: "FDD Item 20",
    what: "Openings, closures, and transfers over three years, plus contact info for current and former owners.",
  },
  {
    item: "FDD Item 3",
    what: "Litigation history. Short is good. Explained is fine. Missing context is a question to ask.",
  },
  {
    item: "Owner calls",
    what: "Call five or more franchisees, including a few you pick yourself from the Item 20 list.",
  },
  {
    item: "The people",
    what: "Meet the leadership team you'll work with for the next decade, and ask who owns the brand.",
  },
];

export default function Page() {
  return (
    <>
      <NavBar />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Read Franchise Awards: Spavia's 2026 Recognition" },
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

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c814f] mb-3">
            2026 Recognition
          </p>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            How to Read Franchise Awards: What Spavia&apos;s 2026 Inc. 5000 and
            Newsweek Wins Actually Mean
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Published September 17, 2026
          </p>

          <Image
            src="/blog/spavia-2026-recognition-hero.jpg"
            alt="A guest checking in at the front desk of a Spavia day spa"
            width={1600}
            height={900}
            priority
            className="w-full rounded mb-8 aspect-[16/9] object-cover"
          />

          {/* ── Founder pull-quote ── */}
          <figure className="border-l-4 border-[#C2A878] bg-[#faf7f2] rounded-r-xl px-7 py-6 mb-10">
            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-[family-name:var(--font-recoleta)] italic">
              &ldquo;Growth you can measure and guests who show up to vote for
              you. Those are the two things I&apos;d want to see if I were
              buying a franchise today.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-600">
              Allison Langenderfer, Co-Founder and President, Spavia
            </figcaption>
          </figure>

          {/* ── Intro ── */}
          <p className="text-lg mb-6 leading-relaxed">
            This summer brought Spavia two very different kinds of recognition.
            One is built on revenue data. The other was voted on by guests.
            We&apos;re proud of both, but if you&apos;re evaluating a franchise,
            pride isn&apos;t the useful part.
          </p>

          <p className="mb-8 leading-relaxed">
            Franchise marketing is full of badges, and they don&apos;t all mean
            the same thing. So here&apos;s what we won, how each award is
            actually decided, and the homework no award can do for you.
          </p>

          {/* ── The Short Version ── */}
          <div className="rounded-2xl bg-gray-900 text-white px-7 py-7 mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A878] mb-4">
              The Short Version
            </p>
            <ul className="divide-y divide-white/10">
              <li className="py-3 first:pt-0">
                <span className="font-semibold">Inc. 5000, No. 3,221.</span>{" "}
                <span className="text-gray-300">
                  92% three-year revenue growth, up 1,690 spots since 2024.
                </span>
              </li>
              <li className="py-3">
                <span className="font-semibold">
                  Newsweek Readers&apos; Choice, Top 10 Best Massage Chain.
                </span>{" "}
                <span className="text-gray-300">
                  Voted by guests, against national brands many times our size.
                </span>
              </li>
              <li className="py-3 last:pb-0">
                <span className="font-semibold">What it means for you:</span>{" "}
                <span className="text-gray-300">
                  a growing franchisor and a brand guests choose. Verify the
                  rest in the FDD and on{" "}
                  <a href="#verify" className="text-[#C2A878] underline">
                    owner calls
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          {/* ── Award 1: Inc. 5000 ── */}
          <h2 className="text-2xl font-semibold mb-4">
            Inc. 5000: Measured in Revenue, Not Opinions
          </h2>

          <p className="mb-6 leading-relaxed">
            Inc. ranks America&apos;s fastest-growing private companies by
            percentage revenue growth over three years. Nobody votes. Spavia
            first made the list in 2024 at No. 4,911. In 2026 we came back at
            No. 3,221, with 92% three-year growth.
          </p>

          <div className="rounded-2xl border border-gray-200 px-6 py-7 mb-6">
            <div className="flex items-baseline justify-between mb-6">
              <p className="text-sm font-semibold text-gray-900">
                Inc. 5000 rank
              </p>
              <p className="text-sm font-semibold text-[#9c814f]">
                +1,690 spots
              </p>
            </div>

            <div className="relative h-24">
              {/* track */}
              <div className="absolute left-0 right-0 top-10 h-2 rounded-full bg-gray-100" />
              {/* climb */}
              <div
                className="absolute top-10 h-2 rounded-full bg-gradient-to-r from-[#e8dcc4] to-[#C2A878]"
                style={{
                  left: `${rankToPct(INC_2024)}%`,
                  width: `${rankToPct(INC_2026) - rankToPct(INC_2024)}%`,
                }}
              />
              {/* 2024 marker */}
              {/* No. 4,911 sits under 2% from the left edge, so anchor it left instead of centering */}
              <div className="absolute top-0 left-0 flex flex-col items-start">
                <span className="text-[11px] text-gray-500 mb-1">2024</span>
                <span className="mt-1 h-5 w-5 rounded-full border-2 border-[#C2A878] bg-white" />
                <span className="mt-2 text-sm font-semibold text-gray-700 whitespace-nowrap">
                  No. 4,911
                </span>
              </div>
              {/* 2026 marker */}
              <div
                className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                style={{ left: `${rankToPct(INC_2026)}%` }}
              >
                <span className="text-[11px] text-[#9c814f] font-semibold mb-1">
                  2026
                </span>
                <span className="mt-1 h-5 w-5 rounded-full bg-[#C2A878] ring-4 ring-[#C2A878]/25" />
                <span className="mt-2 text-sm font-bold text-gray-900 whitespace-nowrap">
                  No. 3,221
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[11px] uppercase tracking-wide text-gray-400 mt-2">
              <span>Rank 5,000</span>
              <span>Rank 1</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-gray-900">92%</p>
                <p className="text-sm text-gray-500">three-year revenue growth</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">2nd</p>
                <p className="text-sm text-gray-500">
                  appearance on the list (2024, 2026)
                </p>
              </div>
            </div>
          </div>

          <p className="mb-14 leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">
              What it tells you:
            </span>{" "}
            the company behind the brand is growing, which usually means
            investment in support, marketing, and people.{" "}
            <span className="font-semibold text-gray-900">
              What it doesn&apos;t:
            </span>{" "}
            how any single spa performs. That&apos;s a different number, in a
            different document.
          </p>

          {/* ── Award 2: Newsweek ── */}
          <h2 className="text-2xl font-semibold mb-4">
            Newsweek Readers&apos; Choice: Decided by Guests
          </h2>

          <p className="mb-6 leading-relaxed">
            On September 16, Newsweek named Spavia a 2026 Readers&apos; Choice
            Awards winner in the Best Massage Chain category. This one works
            the opposite way from Inc. Experts build the field, and then the
            public decides.
          </p>

          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {[
              { step: "Experts nominate", detail: "A panel builds the list" },
              { step: "Editors finalize", detail: "Newsweek sets the field" },
              { step: "Guests vote", detail: "Once a day, for weeks" },
              { step: "Top 10 named", detail: "September 16, 2026", gold: true },
            ].map((s, i) => (
              <li
                key={s.step}
                className={`relative rounded-xl px-4 py-4 ${
                  s.gold
                    ? "bg-[#C2A878] text-white"
                    : "bg-[#faf7f2] text-gray-900"
                }`}
              >
                <span
                  className={`block text-[11px] font-semibold mb-1 ${
                    s.gold ? "text-white/80" : "text-[#9c814f]"
                  }`}
                >
                  Step {i + 1}
                </span>
                <span className="block font-semibold text-sm leading-snug">
                  {s.step}
                </span>
                <span
                  className={`block text-xs mt-1 ${
                    s.gold ? "text-white/85" : "text-gray-500"
                  }`}
                >
                  {s.detail}
                </span>
                {i < 3 && (
                  <span
                    aria-hidden
                    className="hidden sm:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 h-5 w-5 items-center justify-center rounded-full bg-white text-[#C2A878] text-xs shadow"
                  >
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="mb-6 leading-relaxed">
            The category was full of national chains, several with hundreds of
            locations. Spavia has 63. Making the Top 10 in that company comes
            down to one thing: people who love their spa enough to vote for it,
            day after day.
          </p>

          <p className="mb-14 leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">
              What it tells you:
            </span>{" "}
            guests feel real loyalty to the brand, and a membership business
            runs on loyalty.{" "}
            <span className="font-semibold text-gray-900">
              What it doesn&apos;t:
            </span>{" "}
            margins, rent, or labor costs. Guests vote on the experience, not
            the P&amp;L.
          </p>

          {/* ── Decoder ── */}
          <h2 className="text-2xl font-semibold mb-4">
            A Buyer&apos;s Decoder for Franchise Awards
          </h2>

          <p className="mb-6 leading-relaxed">
            Most franchise awards fall into one of four types. Before you give
            any badge weight, ask who decided it and what they were actually
            looking at.
          </p>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-4">
            <div className="hidden md:grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-4 bg-[#faf7f2] px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              <span>Award type</span>
              <span>Who decides</span>
              <span>What it measures</span>
              <span>What it can&apos;t tell you</span>
            </div>
            <div className="divide-y divide-gray-100">
              {decoder.map((d) => (
                <div
                  key={d.type}
                  className="grid md:grid-cols-[1.1fr_1fr_1fr_1fr] gap-x-4 gap-y-2 px-5 py-4"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{d.type}</p>
                    <p className="text-xs text-gray-500">{d.example}</p>
                    <span className="inline-block mt-2 rounded-full bg-[#C2A878]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#9c814f]">
                      Spavia: {d.spavia}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="md:hidden font-semibold text-gray-500">
                      Who decides:{" "}
                    </span>
                    {d.decides}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="md:hidden font-semibold text-gray-500">
                      Measures:{" "}
                    </span>
                    {d.measures}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="md:hidden font-semibold">
                      Can&apos;t tell you:{" "}
                    </span>
                    {d.misses}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#faf7f2] border-l-4 border-[#C2A878] px-6 py-5 mb-14">
            <p className="font-semibold text-gray-900 mb-1">
              One more type to watch for:
            </p>
            <p className="leading-relaxed text-gray-700">
              Awards where the entry fee effectively buys the win. If a brand
              has dozens of honors you&apos;ve never heard of, ask how each one
              was decided. A good franchisor will be glad you asked.
            </p>
          </div>

          {/* ── Timeline ── */}
          <h2 className="text-2xl font-semibold mb-4">
            One Award Is a Headline. A Pattern Is a Signal.
          </h2>

          <p className="mb-8 leading-relaxed">
            Any brand can have a good year. What&apos;s worth looking for is
            recognition that repeats, from different kinds of judges, over
            time. Here&apos;s ours since 2020.
          </p>

          <ol className="relative mb-14 ml-3 border-l-2 border-dotted border-[#C2A878]/60">
            {timeline.map((t) => (
              <li key={t.year} className="relative pl-8 pb-7 last:pb-0">
                <span
                  className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full ${
                    t.current
                      ? "bg-[#C2A878] ring-4 ring-[#C2A878]/25"
                      : "bg-white border-2 border-[#C2A878]"
                  }`}
                />
                <p
                  className={`text-sm font-bold mb-2 ${
                    t.current ? "text-[#9c814f]" : "text-gray-900"
                  }`}
                >
                  {t.year}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1 text-sm ${
                        t.current
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <p className="mb-14 -mt-6 text-sm text-gray-500">
            Full list with links on our{" "}
            <Link href="/press" className="text-[#C2A878] underline">
              press and awards page
            </Link>
            .
          </p>

          {/* ── What awards can't tell you ── */}
          <h2 id="verify" className="text-2xl font-semibold mb-4 scroll-mt-28">
            The Homework No Award Can Do for You
          </h2>

          <p className="mb-6 leading-relaxed">
            Awards point you in a direction. The decision still comes down to
            documents and conversations. Whatever brand you&apos;re considering,
            including ours, check these before you sign.
          </p>

          <div className="rounded-2xl border border-gray-200 divide-y divide-gray-100 mb-6">
            {verify.map((v, i) => (
              <div key={v.item} className="flex items-start gap-4 px-5 py-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2A878] text-white text-xs font-bold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{v.item}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.what}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-14 leading-relaxed">
            Not sure where to start? Our{" "}
            <Link
              href="/steps-to-ownership"
              className="text-[#C2A878] underline"
            >
              steps to ownership
            </Link>{" "}
            walk through the whole process, and our post on{" "}
            <Link
              href="/blog/2026/06/16/spa-franchise-ownership-private-equity-vs-founder-led"
              className="text-[#C2A878] underline"
            >
              who owns the major spa franchises
            </Link>{" "}
            covers the ownership question in depth.
          </p>

          {/* ── CTA ── */}
          <div className="rounded-2xl bg-gray-900 text-white px-8 py-10 text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">
              Look Past the Badges With Us
            </h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto leading-relaxed">
              We&apos;ll walk you through the FDD, connect you with owners, and
              answer the hard questions. Start with a short conversation.
            </p>
            <a
              href="/get-started"
              className="inline-block bg-[#C2A878] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b09466] transition-colors text-lg"
            >
              Book a Call with Our Franchise Team &rarr;
            </a>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 mb-10 overflow-hidden">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {f.q}
                  <span className="ml-4 text-[#C2A878] transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          {/* ── Sources ── */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Sources
            </h3>
            <ul className="text-xs text-gray-500 space-y-1 leading-relaxed">
              <li>
                <a
                  href="https://www.inc.com/profile/spavia-day-spa"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inc., Spavia Day Spa, 2026 Inc. 5000 honoree
                </a>
              </li>
              <li>
                <a
                  href="https://www.newsweek.com/readerschoice/best-massage-chain-2026"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newsweek, Readers&apos; Choice Awards 2026, Best Massage Chain
                </a>
              </li>
              <li>
                <a
                  href="https://www.franchisetimes.com/top-400-2025/394-spavia-day-spa/article_569dbaf7-28af-4dad-969d-8536cd0fcb68.html"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Franchise Times, 2025 Top 400
                </a>
              </li>
              <li>
                <a
                  href="https://www.entrepreneur.com/franchises/directory/spavia-day-spa/334955"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrepreneur, Franchise 500 directory
                </a>
              </li>
              <li>
                Federal Trade Commission, Franchise Rule disclosure items
                (Items 3, 19, and 20)
              </li>
            </ul>
          </div>

          {/* Permalink */}
          <p className="text-sm text-gray-500 break-all">
            Permalink:{" "}
            <a href={URL} className="underline">
              {URL}
            </a>
          </p>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-3">
              {getRelatedPosts(
                "/blog/2026/09/17/spavia-2026-awards-how-to-read-franchise-rankings"
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

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#C2A878] flex items-center justify-center text-white font-bold text-lg shrink-0">
              S
            </div>
            <div>
              <p className="font-semibold text-gray-900">Spavia Franchise Team</p>
              <p className="text-sm text-gray-500 mb-1">
                Founder-Led Franchise Development
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our founder-led team guides prospective franchise owners through
                every step of the Spavia discovery process, from initial inquiry
                to grand opening.
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
