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
import MultiStepForm from "./components/MultiStepForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
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

          <CallToAction />
        </Section>

        {/* FAQ */}
        <FAQ />

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
