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


export const metadata: Metadata = {
  title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
  description:
    "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
  alternates: {
    canonical: "https://spaviafranchise.com/",
  },
  openGraph: {
    title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
    description:
      "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
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
    title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
    description:
      "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Spavia Franchise",
      url: "https://spaviafranchise.com/",
      description:
        "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
      logo: "https://spaviafranchise.com/logo.png",
      sameAs: [
        "https://www.facebook.com/SpaviaSpa",
        "https://www.instagram.com/spavia",
      ],
    }),
  },
};

export default function Home() {
  return (
    <ThemeProvider>
      <NavBar />
      <main className="flex flex-col">
        {/* HERO */}
        <Hero />
        

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
            Ready to Start Your Journey?
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
