"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import Breadcrumbs from "./Breadcrumbs";
import ThemeSelector from "./ThemeSelector";
import ThemeGallery from "./ThemeGallery";
import SpaviaCaresSection from "./SpaviaCaresSection";

export default function WhatsNewContent() {
  return (
    <>
      <NavBar />
      <main className="bg-white">
        {/* HEADER */}
        <section className="bg-black text-white pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
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
                a year, and the first franchisees have already signed.
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

        {/* INNOVATION PIPELINE */}
        <section className="bg-[#faf8f4] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
                The innovation pipeline
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Robotic massage and recovery suites
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The next chapter of spa economics is service that doesn&apos;t
                depend entirely on therapist hiring. Robotic massage and
                self-guided recovery suites are preparing for pilot within the
                Spavia family — starting with Sway, and potentially Spavia
                locations in the future. They complement our therapists rather
                than replace them, and open revenue that runs even when the
                schedule is full.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <figure className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/media/aescape-robot-massage.webp"
                  alt="Aescape robotic massage table"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                  Robotic massage · heading into pilot
                </figcaption>
              </figure>
              <figure className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/media/sway-recovery-suite.webp"
                  alt="Recovery suite design concept with cold plunge and sauna"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
                  Recovery suite · design concept
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
            <ThemeSelector />
            <ThemeGallery />
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
