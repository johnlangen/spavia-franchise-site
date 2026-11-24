import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import Footer from "../../../../../components/Footer";
import NavBar from "../../../../../components/NavBar";
import { locationCounts } from "../../../../../data/locationStats";
import { getRelatedPosts } from "../../../../blogData";

// Evergreen owner's view of the holidays (John, 11/24/2026). Built to the Sway blog bar: each section takes
// the shape of its content. Every claim traces to the 2026 FDD, the Spavia website's gift card checkout and
// holiday offer code (~/spavia-website: src/lib/gift-faq.ts, src/lib/holiday-bonus.ts), or the NRF survey.
// No unpublished performance figures: the only financial number is Item 19, Part III, with its disclaimer.

const PATH = "/blog/2026/11/24/day-spa-gift-card-season-franchise-owners";
const URL = `https://spaviafranchise.com${PATH}`;
const SHARE = "https://spaviafranchise.com/blog/gift-season/gift-season-share.jpg";
const IMG = "/blog/gift-season";
const TITLE = "The Gift Card Season: How the Holidays Work for a Day Spa Owner";
const DESCRIPTION =
  "Spa visits aren't seasonal, but gift buying is. How holiday gift cards work for a Spavia franchise owner: the sale and the visit, one card across every spa, and how a gift turns into a member.";

const spaviaSpas = locationCounts.spavia.open;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description:
      "Spa visits aren't seasonal, but gift buying is. What the holidays mean for a day spa owner, and how Spavia runs them.",
    url: URL,
    type: "article",
    images: [
      {
        url: SHARE,
        width: 1600,
        height: 900,
        alt: "Three Spavia holiday gift card designs fanned out on a dark background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Spa visits aren't seasonal, but gift buying is. What the holidays mean for a day spa owner.",
    images: [SHARE],
  },
};

const faqs = [
  {
    q: "Is a day spa franchise a seasonal business?",
    a: "Not at its core. Spavia's 2026 Franchise Disclosure Document states that its products and services are not seasonal in nature, and the membership model brings members in every month. Gift buying is the seasonal part: the holidays and Mother's Day are when people buy spa visits for someone else.",
  },
  {
    q: "Can a Spavia gift card be used at any location?",
    a: `Yes. Spavia gift cards are redeemable at all ${spaviaSpas} Spavia Day Spa locations. When a card sold at one spa is redeemed at another, the revenue is allocated between the two spas under Spavia's policy, as described in Item 12 of the 2026 FDD.`,
  },
  {
    q: "Who sells Spavia gift cards online?",
    a: "Each spa sells its own, and the Spavia brand website sells them too. Guests can choose an amount and a design, add a message, and send the card right away or on a date up to 29 days ahead. The franchise agreement requires every spa to honor cards sold through the website, by the spa, or by another Spavia.",
  },
  {
    q: "Are gift card sales included in Spavia's Item 19?",
    a: "Yes. In Item 19, Part III of the 2026 FDD, Cash Receipts include all revenue from the sale and provision of gift cards. The 44 reporting locations had median 2025 Cash Receipts of $1,110,481. The FDD does not break gift card sales out on their own. Some locations have sold these amounts; individual results may differ.",
  },
  {
    q: "Does Spavia run holiday marketing for its spas?",
    a: "Yes. Spavia's brand team provides seasonal campaigns, signage and marketing templates, and the brand website runs the gift card checkout. For the 2026 holidays, spas could opt into a system-wide gift card offer, and 49 did.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      image: SHARE,
      datePublished: "2026-11-24",
      dateModified: "2026-11-24",
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

// Three real designs from the Spavia gift card checkout's holiday set, fanned like cards in a hand
const CARDS = [
  {
    src: `${IMG}/holiday-happy-holidays-storefront.jpg`,
    alt: "Spavia gift card design: a Spavia storefront dressed in garland and lights, reading Happy Holidays",
    tilt: "-rotate-[8deg] translate-x-5 translate-y-4",
  },
  {
    src: `${IMG}/holiday-card-on-gold-wrapped-gift.jpg`,
    alt: "Spavia gift card design: a black Spavia gift card on a gold-wrapped present",
    tilt: "z-10",
  },
  {
    src: `${IMG}/holiday-merry-christmas-ornament.jpg`,
    alt: "Spavia gift card design: a glass ornament on a lit tree, reading Merry Christmas",
    tilt: "rotate-[8deg] -translate-x-5 translate-y-4",
  },
];

// The 2026-27 holiday offer on a Nov-May calendar. Positions are days into the strip (Nov 1 = 0).
// Nov 30 + Dec 31 + Jan 31 + Feb 28 + Mar 31 + Apr 30 + May 31 = 212 days.
const MONTHS = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
const STRIP_DAYS = 212;
const pct = (day: number) => `${(day / STRIP_DAYS) * 100}%`;
const SALE = { from: 25, to: 55 }; // Nov 26 to Dec 25
const VISITS = { from: 61, to: 181 }; // Jan 1 to Apr 30
const MOTHERS_DAY = 189; // Sunday, May 9, 2027

export default function Page() {
  return (
    <>
      <NavBar />
      <Breadcrumbs
        items={[{ label: "Blog", href: "/blog" }, { label: "The Gift Card Season" }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="bg-white text-gray-900 brand-light">
        <article className="franchise-article">
          {/* ===== OPENING: the title beside three real holiday gift card designs ===== */}
          <header className="relative overflow-hidden bg-[#0e0d0c] text-white brand-dark">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[760px] -translate-y-1/2 rounded-full bg-[#b38a5f]/20 blur-[140px]"
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-24">
              <div className="lg:col-span-5">
                <Link
                  href="/blog"
                  className="inline-block mb-8 text-sm text-white/60 hover:text-white transition-colors"
                >
                  &larr; Back to Blog
                </Link>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-text)] mb-5">
                  Owner&apos;s Guide &middot; Operations
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] mb-6">
                  The Gift Card Season
                </h1>
                <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">
                  Spa visits aren&apos;t seasonal. Gift buying is. Here&apos;s what the
                  holidays look like from the owner&apos;s side of the front desk.
                </p>
                <p className="mt-8 text-sm text-white/50">
                  November 24, 2026 &middot; Spavia Franchise Team &middot; 6 min read
                </p>
              </div>

              <div
                className="flex justify-center lg:col-span-7 lg:justify-end lg:pr-4"
                aria-label="Three Spavia holiday gift card designs"
                role="group"
              >
                {CARDS.map((c) => (
                  <Image
                    key={c.src}
                    src={c.src}
                    alt={c.alt}
                    width={640}
                    height={640}
                    priority
                    sizes="(min-width: 1024px) 210px, 31vw"
                    className={`relative w-[31vw] max-w-[210px] rounded-2xl ring-4 ring-white shadow-[0_28px_60px_-24px_rgba(0,0,0,0.9)] ${c.tilt}`}
                  />
                ))}
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 pt-16 pb-2">
            {/* ── Founder pull-quote ── */}
            <figure className="border-l-4 border-[#b38a5f] bg-[#f5f5f5] rounded-r-xl px-7 py-6 mb-12 brand-light">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-[family-name:var(--font-recoleta)] italic">
                &ldquo;Every gift card is a guest who loves us introducing us to
                someone who has never been. My favorite part of the holidays is
                meeting those people in January.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                Allison Langenderfer, Co-Founder and President, Spavia
              </figcaption>
            </figure>

            {/* ── Intro ── */}
            <p className="text-lg mb-6 leading-relaxed">
              Ask a retailer about December and you&apos;ll hear about the make-or-break
              month. A day spa is different. Spavia&apos;s Franchise Disclosure Document
              says it plainly: its services are &ldquo;not seasonal in nature.&rdquo;
              Members come in every month, whatever the weather.
            </p>
            <p className="mb-10 leading-relaxed">
              What changes in late November is who&apos;s buying. A new kind of guest
              shows up, online and at the desk: someone buying a spa visit for somebody
              else. In the National Retail Federation&apos;s 2025 holiday survey, gift
              cards topped the list of gifts people wanted, named by half of the 8,247
              adults surveyed. Here&apos;s how that season works for an owner.
            </p>

            {/* ── The Short Version ── */}
            <div className="rounded-2xl bg-[#111] text-white px-7 py-8 mb-16 brand-dark" data-motion="rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)] mb-5">
                The Short Version
              </p>
              <ul className="space-y-4">
                {[
                  ["Spa visits aren't seasonal.", "Gift buying is, around the holidays and Mother's Day."],
                  ["A gift card has two moments.", "The sale happens now. The visit happens later."],
                  ["Every card brings someone new.", "The recipient didn't choose Spavia themselves. Their first visit does the selling."],
                  ["One card, every Spavia.", `It works at all ${spaviaSpas} Spavia day spas, and the brand website sells them for you.`],
                  ["The brand builds the campaign.", "Seasonal creative, signage and the online checkout come from the brand team."],
                ].map(([lead, rest]) => (
                  <li key={lead} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b38a5f]" />
                    <span className="text-white/75">
                      <strong className="font-semibold text-white">{lead}</strong> {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== Two moments ===== */}
            <h2 className="text-3xl mb-4">A Gift Card Has Two Moments</h2>
            <p className="mb-8 leading-relaxed">
              A spa gift card is sold on one day and used on another, sometimes months
              apart. Owners who do well with them plan for both.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6" data-motion="rise">
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)] mb-3">
                  Moment one &middot; December
                </p>
                <p className="font-[family-name:var(--font-recoleta)] text-2xl mb-3">The sale</p>
                <ul className="space-y-2 text-[15px] text-gray-700">
                  <li>Cash comes in before any treatment is given.</li>
                  <li>It&apos;s a promise of future treatment hours, not profit yet.</li>
                  <li>Buyers include members, who get member pricing on designated cards.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#111] text-white p-6 brand-dark">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)] mb-3">
                  Moment two &middot; January and beyond
                </p>
                <p className="font-[family-name:var(--font-recoleta)] text-2xl mb-3">The visit</p>
                <ul className="space-y-2 text-[15px] text-white/75">
                  <li>The recipient books, sometimes for the very first time.</li>
                  <li>Your therapists and estheticians deliver the treatment.</li>
                  <li>It&apos;s your one chance to turn a gift into a regular.</li>
                </ul>
              </div>
            </div>
            <p className="mb-16 text-[15px] leading-relaxed text-gray-600">
              Spavia&apos;s own audited statements treat unredeemed cards the same way:
              as a liability until they&apos;re redeemed, which is when the revenue is
              recognized. How you book them in your spa is a conversation for your
              accountant, but the principle holds. December cash is partly January&apos;s
              work.
            </p>

            {/* ===== The holiday offer, by design ===== */}
            <h2 className="text-3xl mb-4">This Year&apos;s Holiday Offer, by Design</h2>
            <p className="mb-8 leading-relaxed">
              For the 2026 holidays, a single gift card of $200 or more bought from
              November 26 to December 25 at a participating spa comes with a free
              30-minute express facial or massage. The details are where the owner
              thinking shows.
            </p>

            <div className="rounded-2xl border border-gray-200 px-5 sm:px-7 pt-7 pb-6 mb-6" data-motion="rise">
              <p className="text-sm font-semibold text-gray-900 mb-6">
                2026 holiday gift card offer
              </p>
              <div className="relative">
                <div className="grid grid-cols-7 text-[11px] uppercase tracking-wide text-gray-400 mb-2">
                  {MONTHS.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className="relative h-16 rounded-lg bg-[#f5f5f5] brand-light">
                  {MONTHS.slice(1).map((m, i) => (
                    <span
                      key={m}
                      aria-hidden
                      className="absolute top-0 bottom-0 border-l border-white"
                      style={{ left: `${((i + 1) / 7) * 100}%` }}
                    />
                  ))}
                  <span
                    className="absolute top-2.5 h-4 rounded-full bg-[#b38a5f]"
                    style={{ left: pct(SALE.from), width: pct(SALE.to - SALE.from) }}
                    aria-hidden
                  />
                  <span
                    className="absolute bottom-2.5 h-4 rounded-full bg-[#111]"
                    style={{ left: pct(VISITS.from), width: pct(VISITS.to - VISITS.from) }}
                    aria-hidden
                  />
                  <span
                    className="absolute -top-1 -bottom-1 w-0.5 bg-gray-400"
                    style={{ left: pct(MOTHERS_DAY) }}
                    aria-hidden
                  />
                </div>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3 text-sm">
                <li className="flex gap-2.5">
                  <span aria-hidden className="mt-1.5 h-2.5 w-5 shrink-0 rounded-full bg-[#b38a5f]" />
                  <span>
                    <strong className="block text-gray-900">Cards sold</strong>
                    <span className="text-gray-500">Nov 26 to Dec 25</span>
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden className="mt-1.5 h-2.5 w-5 shrink-0 rounded-full bg-[#111]" />
                  <span>
                    <strong className="block text-gray-900">Bonus treatments used</strong>
                    <span className="text-gray-500">Jan 1 to Apr 30</span>
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span aria-hidden className="mt-0.5 h-4 w-0.5 shrink-0 bg-gray-400 ml-2 mr-2.5" />
                  <span>
                    <strong className="block text-gray-900">Mother&apos;s Day</strong>
                    <span className="text-gray-500">The next gifting rush</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-6" data-motion="rise">
              {[
                {
                  n: "01",
                  title: "Free treatments wait for January",
                  text: "The bonus can't be used in December, when the book is busiest, and it ends before the Mother's Day rush.",
                },
                {
                  n: "02",
                  title: "It brings guests back to the spa that sold it",
                  text: "The bonus is redeemable only at the spa where the card was purchased, so the return visit lands with the owner who earned it.",
                },
                {
                  n: "03",
                  title: "Owners decide",
                  text: "Each spa chose whether to run it. For 2026, 49 spas opted in, and the website turned it on for exactly those spas.",
                },
              ].map((d) => (
                <div key={d.n} className="rounded-2xl bg-[#f5f5f5] p-5 brand-light">
                  <span className="block text-xs font-bold text-[var(--accent-text)] mb-2">{d.n}</span>
                  <span className="block font-semibold text-gray-900 leading-snug mb-2">{d.title}</span>
                  <span className="block text-sm text-gray-600 leading-relaxed">{d.text}</span>
                </div>
              ))}
            </div>
            <p className="mb-16 leading-relaxed">
              The brand team designed the creative. The Spavia website shows the offer
              on each participating spa&apos;s pages from November 26 through Christmas
              Day, in that spa&apos;s own time zone, then takes it down by itself. The
              owner&apos;s job is to sell the cards and deliver the visits.
            </p>

            {/* ===== Christmas Day ===== */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] text-white px-7 py-9 mb-16 brand-dark" data-motion="rise">
              <div aria-hidden className="pointer-events-none absolute -left-16 -top-24 h-64 w-64 rounded-full bg-[#b38a5f]/25 blur-[90px]" />
              <p className="relative font-[family-name:var(--font-recoleta)] text-2xl sm:text-3xl leading-snug mb-4">
                Your doors close on Christmas. Your gift card counter doesn&apos;t.
              </p>
              <p className="relative text-white/75 leading-relaxed mb-6">
                Spavia&apos;s online checkout emails a gift card within minutes, even on
                Christmas Eve or Christmas Day. Buyers can also schedule it to arrive at
                9 a.m. on any day up to 29 days ahead, add a message of up to 300
                characters, or print it to hand over in person.
              </p>
              <dl className="relative grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  ["Minutes", "to the recipient's inbox"],
                  ["29 days", "of scheduled delivery"],
                  ["No expiry", "on Spavia gift cards"],
                ].map(([big, small]) => (
                  <div key={big}>
                    <dt className="font-[family-name:var(--font-recoleta)] text-xl sm:text-2xl text-[var(--accent-text)]">{big}</dt>
                    <dd className="text-xs sm:text-sm text-white/60 mt-1">{small}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* ===== One system ===== */}
            <h2 className="text-3xl mb-4">One Card, Every Spavia</h2>
            <p className="mb-8 leading-relaxed">
              People buy gifts for family in other cities. A Spavia gift card works at
              all {spaviaSpas} Spavia day spas, so a sale in one market can become a
              first visit in another. The system is built so both owners are treated
              fairly.
            </p>

            <ol className="grid gap-3 sm:grid-cols-3 mb-6" data-motion="rise">
              {[
                { step: "A guest buys a card", detail: "At their own Spavia, or on the brand website." },
                { step: "The recipient books", detail: "At the Spavia nearest them, even states away." },
                { step: "Revenue is shared", detail: "Split between the two spas under Spavia's policy.", dark: true },
              ].map((s, i) => (
                <li
                  key={s.step}
                  className={`relative rounded-2xl px-5 py-5 ${s.dark ? "bg-[#111] text-white brand-dark" : "bg-[#f5f5f5] text-gray-900 brand-light"}`}
                >
                  <span className={`block text-[11px] font-semibold mb-1.5 ${s.dark ? "text-[var(--accent-text)]" : "text-[var(--accent-text)]"}`}>
                    Step {i + 1}
                  </span>
                  <span className="block font-semibold leading-snug">{s.step}</span>
                  <span className={`block text-sm mt-1 ${s.dark ? "text-white/70" : "text-gray-600"}`}>{s.detail}</span>
                  {i < 2 && (
                    <span
                      aria-hidden
                      className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-white text-[var(--accent-text)] text-xs shadow brand-light"
                    >
                      &rarr;
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className="mb-8 leading-relaxed text-gray-700">
              The franchise agreement requires every spa to honor Spavia gift cards,
              whether they were sold by the brand website, by that spa, or by another
              Spavia. Item 12 of the FDD describes how revenue from a card sold at one
              spa and redeemed at another is allocated between the two.
            </p>

            <Image
              src={`${IMG}/front-desk-checkin.webp`}
              alt="A guest checking in at the front desk of a Spavia day spa"
              width={1600}
              height={1067}
              sizes="(min-width: 768px) 720px, 100vw"
              className="w-full rounded-2xl mb-16 aspect-[3/2] object-cover"
              data-motion="photo"
            />

            {/* ===== From gift to member ===== */}
            <h2 className="text-3xl mb-4">From Gift to Member</h2>
            <p className="mb-8 leading-relaxed">
              Spavia is a membership business. Members pay a monthly fee that includes
              a massage or facial each month, plus member rates or discounts on certain
              other services, products and gift cards. The holidays feed that model from both sides.
            </p>
          </div>

          {/* Photographs, a little wider than the text */}
          <div className="mx-auto max-w-5xl px-6 mb-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <figure data-motion="photo">
                <Image
                  src={`${IMG}/gift-bag-doorway.webp`}
                  alt="A guest leaving a Spavia day spa with a Spavia gift bag"
                  width={1280}
                  height={1600}
                  sizes="(min-width: 1024px) 480px, 50vw"
                  className="w-full rounded-2xl aspect-[4/5] object-cover"
                />
                <figcaption className="mt-3 text-sm text-gray-500">
                  <strong className="text-gray-900">The buyer.</strong> Someone sharing a
                  place they already know.
                </figcaption>
              </figure>
              <figure data-motion="photo">
                <Image
                  src={`${IMG}/guest-robe-fireplace.webp`}
                  alt="A guest in a Spavia robe relaxing by the fireplace in the retreat room"
                  width={1067}
                  height={1600}
                  sizes="(min-width: 1024px) 480px, 50vw"
                  className="w-full rounded-2xl aspect-[4/5] object-cover"
                />
                <figcaption className="mt-3 text-sm text-gray-500">
                  <strong className="text-gray-900">The recipient.</strong> A first
                  visit they didn&apos;t have to talk themselves into.
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 pb-20">
            <ol className="relative mb-16" data-motion="rise">
              {[
                {
                  title: "A regular buys a gift",
                  text: "Members get member pricing on the gift cards Spavia designates, which gives your regulars a reason to buy their gifts from you.",
                },
                {
                  title: "Someone new walks in",
                  text: "The recipient arrives with the visit already paid for. There's no ad to click and no price to weigh.",
                },
                {
                  title: "The visit makes the case",
                  text: "A great first treatment, and a front desk that explains membership, turn a one-time gift into a monthly guest.",
                },
              ].map((s, i, all) => (
                <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < all.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-[19px] top-11 h-[calc(100%-2.75rem)] border-l-2 border-dotted border-[#b38a5f]/60"
                    />
                  )}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-xs font-bold text-white">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-900">{s.title}</span>
                    <span className="block text-[15px] text-gray-600 leading-relaxed">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>

            {/* ===== Item 19 ===== */}
            <h2 className="text-3xl mb-4">Where Gift Cards Show Up in the FDD</h2>
            <p className="mb-8 leading-relaxed">
              If you&apos;re reading Spavia&apos;s Item 19, gift cards are already in the
              revenue figure. Part III defines Cash Receipts to include all revenue from
              the sale and provision of gift cards. The FDD doesn&apos;t break them out
              on their own.
            </p>

            <div className="rounded-2xl border border-gray-200 overflow-hidden mb-4" data-motion="rise">
              <div className="grid sm:grid-cols-[1.1fr_1fr]">
                <div className="bg-[#111] text-white px-7 py-8 brand-dark">
                  <p className="font-[family-name:var(--font-recoleta)] text-4xl sm:text-5xl text-[var(--accent-text)] mb-2">
                    $1,110,481
                  </p>
                  <p className="text-sm text-white/70">
                    Median 2025 Cash Receipts, 44 reporting locations
                  </p>
                </div>
                <div className="px-7 py-8 text-[15px] text-gray-700 leading-relaxed">
                  Gift card sales count in this number, along with treatments, retail and
                  memberships. Revenue isn&apos;t owner income, and the same table lists
                  the costs behind it.
                </div>
              </div>
            </div>
            <p className="mb-6 text-xs text-gray-500 leading-relaxed">
              Source: 2026 Spavia Franchise Disclosure Document, Item 19, Part III. Some
              franchised locations have sold these amounts. Your individual results may
              differ. There is no assurance that you&apos;ll sell or earn as much.
            </p>
            <p className="mb-16">
              <Link
                href="/franchise-cost"
                data-track="cta_investment"
                className="font-semibold text-[var(--accent-text)] underline underline-offset-4 hover:no-underline"
              >
                See the full investment and Item 19 breakdown &rarr;
              </Link>
            </p>

            {/* ── CTA ── */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] text-white px-8 py-11 text-center mb-14 brand-dark">
              <div aria-hidden className="pointer-events-none absolute left-1/2 -top-32 h-64 w-[480px] -translate-x-1/2 rounded-full bg-[#b38a5f]/25 blur-[100px]" />
              <h2 className="relative text-3xl mb-3">See the Whole Year, Not Just December</h2>
              <p className="relative text-white/70 mb-7 max-w-lg mx-auto leading-relaxed">
                We&apos;ll walk you through the FDD, including how memberships and gift
                cards work across the system. Start with a short conversation.
              </p>
              <a
                href="/get-started"
                data-track="cta_blog_gift_season"
                className="relative inline-block bg-[#b38a5f] text-black font-semibold px-8 py-3.5 rounded-sm hover:bg-[#c49a6c] transition-colors text-lg"
              >
                Book a Call with Our Franchise Team &rarr;
              </a>
            </div>

            {/* ── FAQ ── */}
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 mb-10 overflow-hidden">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary
                    data-track="faq_open"
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {f.q}
                    <span className="ml-4 text-[var(--accent-text)] transition-transform group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed">{f.a}</div>
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
                  2026 Spavia Franchise Disclosure Document: Item 1 (membership
                  program, market and seasonality), Item 11 (seasonal marketing),
                  Item 12 (gift card revenue allocation), Item 16 (gift card
                  redemption), Item 19, Part III (Cash Receipts), the Franchise
                  Agreement (gift card policies), and the audited financial statements
                  (gift card liability).
                </li>
                <li>
                  Spavia gift card checkout and 2026 holiday offer terms, spaviadayspa.com.
                </li>
                <li>
                  <a
                    href="https://nrf.com/media-center/press-releases/consumers-to-spend-second-highest-amount-on-record-according-to-nrf-holiday-survey"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    National Retail Federation, 2025 holiday consumer survey (October 16,
                    2025), conducted by Prosper Insights &amp; Analytics
                  </a>
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
                {getRelatedPosts(PATH).map((rp) => (
                  <li key={rp.href}>
                    <Link href={rp.href} className="text-[var(--accent-text)] hover:underline">
                      {rp.title} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-[#b38a5f] flex items-center justify-center text-black font-bold text-lg shrink-0">
                S
              </div>
              <div>
                <p className="font-semibold text-gray-900">Spavia Franchise Team</p>
                <p className="text-sm text-gray-500 mb-1">Founder-Led Franchise Development</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our founder-led team guides prospective franchise owners through every
                  step of the Spavia discovery process, from initial inquiry to grand
                  opening.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-block text-[var(--accent-text)] hover:underline font-medium"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
