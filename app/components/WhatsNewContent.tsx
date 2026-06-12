"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import Breadcrumbs from "./Breadcrumbs";
import DesignConcepts from "./DesignConcepts";
import SpaviaCaresSection from "./SpaviaCaresSection";

export default function WhatsNewContent() {
  return (
    <>
      <NavBar />
      <main className="bg-white">
        {/* HEADER */}
        <section className="bg-black text-white pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs items={[{ label: "What's New at Spavia" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              What&apos;s new at Spavia
            </h1>
            <p className="text-lg text-white/75 max-w-2xl">
              Spavia is becoming a wellness platform. A second brand is open and
              growing, new design concepts are rolling out, and the next
              generation of spa economics is heading into pilot. Here&apos;s
              what franchise candidates are asking about.
            </p>
          </div>
        </section>

        {/* SWAY */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/media/sway-storefront.webp"
                alt="Sway by Spavia storefront in Denver"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
                A second brand
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Sway by Spavia
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sway is Spavia&apos;s neighborhood wellness club — sauna, cold
                plunge, recovery, skincare, and modern massage in a design-forward
                space. Three corporate studios are open today, the first for over
                a year, the first franchisees have already signed, and Sway was
                voted #4 Best Day Spa in America by USA Today 10Best.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For franchise candidates, Sway means you&apos;re joining a
                platform, not a single concept: one leadership team, shared
                systems and support, and more than one way to grow in your
                market.
              </p>
              <Link
                href="/get-started"
                className="inline-block rounded-full bg-[#C2A878] px-7 py-3 font-semibold text-white hover:bg-[#a98e5e] transition-colors"
              >
                Talk to us about the platform
              </Link>
            </div>
          </div>
        </section>

        {/* LEADERSHIP + PRESS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center mb-14">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden mx-auto md:mx-0">
                <Image
                  src="/who-we-are/heather-holland.png"
                  alt="Heather Holland, Chief Operating Officer at Spavia"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
                  New leadership
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  Heather Holland named COO
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Spavia named Heather Holland — a former CorePower Yoga
                  executive who helped scale one of fitness&apos;s most loved
                  brands — as Chief Operating Officer, with a mandate to grow
                  the Spavia and Sway platform to 200 locations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The announcement was syndicated by 67 outlets including
                  Yahoo Finance, reaching 12M+ potential readers.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  outlet: "Athletech News",
                  headline: "Spavia Taps CorePower Exec to Scale Wellness Brands to 200 Locations",
                  href: "https://athletechnews.com/spavia-taps-corepower-exec-to-scale-wellness-brands-to-200-locations/",
                },
                {
                  outlet: "Skin Inc.",
                  headline: "Spavia Names Heather Holland COO to Support Next Phase of Growth",
                  href: "https://www.skininc.com/business/industry-news/news/22967876/spavia-names-heather-holland-coo-to-support-next-phase-of-growth-for-spavia",
                },
                {
                  outlet: "Yahoo Finance",
                  headline: "Spavia Names Heather Holland COO",
                  href: "https://finance.yahoo.com/sectors/healthcare/articles/spavia-names-heather-holland-coo-130000013.html",
                },
                {
                  outlet: "American Spa",
                  headline: "Success Stories: Spavia",
                  href: "https://www.americanspa.com/spa-business/success-stories-spavia",
                },
              ].map((p) => (
                <a
                  key={p.outlet}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-200 p-5 hover:border-[#C2A878] transition-colors"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#9c8457] mb-2">
                    {p.outlet}
                  </p>
                  <p className="font-semibold text-gray-900 text-sm leading-snug">
                    {p.headline}
                  </p>
                  <p className="text-xs text-gray-500 mt-3">Read the story →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INNOVATION PIPELINE */}
        <section className="bg-[#faf8f4] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
                The innovation pipeline
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Robotic massage and remedy rooms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The next chapter of spa economics is service that doesn&apos;t
                depend entirely on therapist hiring. Aescape robotic massage and
                self-guided remedy rooms are live and bookable at Sway today —
                and we&apos;re exploring bringing them to Spavia locations.
                They complement our therapists rather than replace them, and
                open revenue that runs even when the schedule is full.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <figure className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/media/aescape-robotic-table.webp"
                  alt="Aescape robotic massage table"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                  Aescape robotic massage · live at Sway
                </figcaption>
              </figure>
              <figure className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/media/sway-remedy-room.webp"
                  alt="Sway remedy room with red light therapy and cold plunge"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                  Remedy room · live at Sway
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* DESIGN CONCEPTS */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
                Design concepts
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pick a feeling. We build the spa around it.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Every Spavia is designed for its community. Explore the design
                directions a new location can take — including the Sway urban
                aesthetic.
              </p>
            </div>
            <DesignConcepts />
          </div>
        </section>

        {/* ATLAS */}
        <section className="bg-[#faf8f4] py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
                Smarter ownership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Atlas: your performance platform
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every Spavia owner gets Atlas, our in-house analytics platform
                powered by the latest AI models. A weekly scoreboard tracks the
                two numbers that drive a spa&apos;s growth, your front desk gets
                a daily prep list, and you can see exactly where you rank across
                the franchise — and what the top locations do differently.
              </p>
              <p className="text-gray-700 leading-relaxed">
                And you can simply ask it questions. Atlas&apos;s built-in
                intelligence knows your location&apos;s numbers and how the
                franchise works, and it gets smarter about your business over
                time. No spreadsheets, no guesswork — the kind of tooling
                single-location owners can&apos;t build for themselves.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Weekly scoreboard", detail: "The two numbers that compound" },
                { label: "Daily prep", detail: "Your team's morning list" },
                { label: "Franchise rankings", detail: "See where you stand" },
                { label: "Coaching built in", detail: "What top spas do differently" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-[#C2A878]/40 bg-white p-5"
                >
                  <p className="font-bold text-gray-900 mb-1">{f.label}</p>
                  <p className="text-sm text-gray-600">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPAVIA CARES */}
        <SpaviaCaresSection />

        {/* CTA */}
        <section className="bg-black text-white py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to see where this is going?
            </h2>
            <p className="text-white/70 mb-8">
              Get the franchise overview — investment range, available markets,
              and what the platform roadmap means for owners.
            </p>
            <Link
              href="/get-started"
              className="inline-block rounded-full bg-[#C2A878] px-8 py-4 font-semibold text-white hover:bg-[#a98e5e] transition-colors"
            >
              Get the franchise overview
            </Link>
          </div>
        </section>

        <Footer />
      </main>
      <FloatingButton />
    </>
  );
}
