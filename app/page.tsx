import { Metadata } from "next";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Button from "./components/Button";
import FAQ from "./components/FAQ";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeSelector from "./components/ThemeSelector";
import ThemeGallery from "./components/ThemeGallery";
import ProofSection from "./components/ProofSection";
import AwardsSection from "./components/AwardsSection";
import SpaviaCaresSection from "./components/SpaviaCaresSection";
import ProcessSection from "./components/ProcessSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";
import FloatingButton from "./components/FloatingButton";
import FranchiseLongForm from "./components/FranchiseLongForm";
import FranchiseIntroForm from "./components/FranchiseIntroForm";


export const metadata: Metadata = {
  title: "Day Spa Franchise | Own a Spavia Wellness Spa Franchise",
  description:
    "Own a Spavia day spa franchise — a proven wellness franchise with avg gross sales over $1.1M. Explore startup costs, training, and support in the $19B spa industry.",
  alternates: {
    canonical: "https://spaviafranchise.com/",
  },
  openGraph: {
    title: "Day Spa Franchise | Own a Spavia Wellness Spa Franchise",
    description:
      "Own a Spavia day spa franchise — a proven wellness franchise with avg gross sales over $1.1M. Explore startup costs, training, and support in the $19B spa industry.",
    url: "https://spaviafranchise.com/",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise Storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Spa Franchise | Own a Spavia Wellness Spa Franchise",
    description:
      "Own a Spavia day spa franchise — a proven wellness franchise with avg gross sales over $1.1M. Explore startup costs, training, and support in the $19B spa industry.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of leadership experience does Spavia provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our national team offers over 100 years of combined spa experience, providing expert insights and guidance for our franchise owners. This knowledge equips you with the tools to navigate the competitive spa landscape and build a successful franchise while delivering exceptional guest experiences.",
      },
    },
    {
      "@type": "Question",
      name: "How can Spavia franchisees generate revenue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia generates revenue through diverse streams, including spa treatments, beauty services, and retail products. Multiple revenue streams are vital for stability and growth, enabling your business to thrive while successfully meeting guest needs and maximizing earning potential. Revenue streams include massage, facials/skin care, waxing, lash & brow treatments, body treatments, retail, gift cards, and spa packages.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Spavia franchisees so successful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Spavia, our dedicated franchisees are the heart of our success, committed to providing exceptional wellness experiences while building thriving businesses. Their focus on guest care and community impact positions Spavia as a trusted leader in the spa industry. Join us to become part of a network of passionate entrepreneurs invested in your success.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Spavia considered a leading spa franchise opportunity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia has built its reputation by delivering resort-inspired wellness experiences in communities across the U.S. With over 120 years of combined leadership expertise, franchisees benefit from proven systems, strong guest loyalty, and a business model designed for stability and growth.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to open a Spavia day spa franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The initial investment to open a Spavia day spa franchise ranges from $496K to $796K, which includes build-out, equipment, and initial operating capital. Spavia provides guidance on financing options and SBA-eligible loan programs to help qualified candidates get started. Request the franchise overview for a full breakdown of costs and expected returns.",
      },
    },
  ],
};

export default function Home() {
  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      <NavBar />
      <main className="flex flex-col">
        {/* HERO */}
        <Hero />
        <FranchiseIntroForm />
        

        {/* THEME SELECTION */}
        <Section className="bg-white pt-28 pb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2 scroll-mt-24">
            Choose Your Award Winning Spa Design
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Select a theme to see how your spa can look and feel.
          </p>
          <ThemeSelector />
          <ThemeGallery />
        </Section>

        {/* PROOF SECTION */}
        <ProofSection />

        {/* AWARDS SECTION */}
        <AwardsSection />

        {/* FRANCHISEE VIDEO */}
        <Section className="bg-gray-50 py-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Hear From Our Franchisees
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Franchise owners share what it&apos;s like to build a business with Spavia.
          </p>
          <video
            src="/our-franchisees/video1.mp4"
            controls
            preload="metadata"
            poster="/hero-bg.jpg"
            className="rounded-xl shadow-md w-full max-w-3xl mx-auto"
          />
        </Section>

        {/* SPAVIA CARES SECTION */}
        <SpaviaCaresSection />

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* ACTIVE CAMPAIGN FORM */}
        <Section id="franchise-form" className="bg-white py-20">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Request Franchise Information
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Learn more about opening a Spavia location in your community.
            </p>
            <FranchiseLongForm />
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-2">Prefer to talk first?</p>
            <a
              href="https://calendly.com/tyler-spaviadayspa/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#C2A878] font-semibold hover:underline"
            >
              Schedule a Call →
            </a>
          </div>
        </Section>

        {/* FAQ */}
        <FAQ />

        {/* EXPLORE LINKS */}
        <Section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Explore More
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/franchise-cost"
                className="block p-5 rounded-xl border border-gray-200 bg-white hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Franchise Cost</p>
                <p className="text-sm text-gray-600">Full investment breakdown</p>
              </Link>
              <Link
                href="/franchise-opportunities"
                className="block p-5 rounded-xl border border-gray-200 bg-white hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Available Markets</p>
                <p className="text-sm text-gray-600">Find territories by state</p>
              </Link>
              <Link
                href="/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise"
                className="block p-5 rounded-xl border border-gray-200 bg-white hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-gray-900 mb-1">Spavia vs. Woodhouse</p>
                <p className="text-sm text-gray-600">Side-by-side comparison</p>
              </Link>
            </div>
          </div>
        </Section>

        {/* CTA SECTION */}
        <Section className="bg-black">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Ready to Own a Spa Franchise?
          </h2>
          <div className="flex justify-center">
            <Link href="/get-started">
              <Button className="bg-[#C2A878] text-white hover:bg-[#b09466]">
                Get Started
              </Button>
            </Link>
          </div>
        </Section>

        <Footer />
      </main>

      {/* Floating Button */}
      <FloatingButton />
    </ThemeProvider>
  );
}
