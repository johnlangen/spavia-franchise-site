import { Metadata } from "next";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import ProofSection from "./components/ProofSection";
import AwardsSection from "./components/AwardsSection";
import ScheduleCallBanner from "./components/ScheduleCallBanner";
import GuestRatingsSection from "./components/GuestRatingsSection";
import FranchiseeTestimonialsSection from "./components/FranchiseeTestimonialsSection";
import GuestTestimonialsSection from "./components/GuestTestimonialsSection";
import SEOContentSection from "./components/SEOContentSection";
import GoldBottomBanner from "./components/GoldBottomBanner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";
import FloatingButton from "./components/FloatingButton";
import Section from "./components/Section";

export const metadata: Metadata = {
  title: "Day Spa Franchise | Own a Spavia Wellness Spa Franchise",
  description:
    "Own a Spavia day spa franchise — a proven wellness franchise with avg gross sales over $1.1M. Explore spa franchise costs, training, support, and available markets in the $19B spa industry.",
  alternates: {
    canonical: "https://spaviafranchise.com/",
  },
  openGraph: {
    title: "Day Spa Franchise | Own a Spavia Wellness Spa Franchise",
    description:
      "Own a Spavia day spa franchise — a proven wellness franchise with avg gross sales over $1.1M. Explore spa franchise costs, training, support, and available markets in the $19B spa industry.",
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
      "Own a Spavia day spa franchise — a proven wellness franchise with avg gross sales over $1.1M. Explore spa franchise costs, training, support, and available markets in the $19B spa industry.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

const homepageVideoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Hear From Our Franchisees — Spavia Day Spa",
  description:
    "Spavia franchise owners share what it's like to build a business with Spavia Day Spa. Learn about the ownership experience, training, support, and community impact.",
  thumbnailUrl: "https://spaviafranchise.com/hero-bg.jpg",
  uploadDate: "2025-01-01",
  contentUrl: "https://spaviafranchise.com/our-franchisees/video1.mp4",
  embedUrl: "https://spaviafranchise.com/our-franchisees/video1.mp4",
  publisher: {
    "@type": "Organization",
    name: "Spavia Day Spa",
    logo: {
      "@type": "ImageObject",
      url: "https://spaviafranchise.com/spavia-logo.png",
    },
  },
};

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to open a Spavia day spa franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The initial investment to open a Spavia day spa franchise ranges from $496K to $796K, which includes build-out, equipment, and initial operating capital. Spavia provides guidance on financing options and SBA-eligible loan programs to help qualified candidates get started. Request the franchise overview for a full breakdown of costs and expected returns.",
      },
    },
    {
      "@type": "Question",
      name: "What spa services does a Spavia franchise offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia day spas offer a full menu of resort-inspired wellness services including massage therapy (Swedish, deep tissue, hot stone), facials and advanced skin care, body treatments, waxing, lash and brow services, and retail products. This diverse service mix creates multiple revenue streams and drives strong guest retention through membership programs.",
      },
    },
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
      name: "What financing options are available for a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia franchise candidates have access to several financing options, including SBA-eligible loan programs, which are among the most popular financing routes for franchise investments. The Spavia team provides guidance throughout the financing process and can connect you with franchise-friendly lenders. Candidates typically need a minimum net worth and liquid capital to qualify.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to open a Spavia day spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The typical timeline from signing a franchise agreement to opening day is approximately 10 to 14 months. This includes site selection, lease negotiation, buildout and construction, equipment installation, staff hiring, and comprehensive training. Spavia's experienced real estate and construction teams support you through every stage of the process.",
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
      name: "Do I need spa industry experience to own a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior spa or wellness industry experience is required. Spavia's comprehensive training program covers everything from spa operations and service delivery to marketing, hiring, and financial management. Many successful Spavia franchise owners come from backgrounds in corporate management, finance, healthcare, and other industries.",
      },
    },
  ],
};

const aggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spavia Day Spa",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "30976",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageVideoJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingJsonLd),
        }}
      />
      <NavBar />
      <main className="flex flex-col">
        {/* 1. HERO — video bg + embedded lead capture form */}
        <Hero />

        {/* 2. PROOF — bold gold numbers on black */}
        <ProofSection />

        {/* 3. SCHEDULE CALL — gold banner CTA */}
        <ScheduleCallBanner />

        {/* 4. AWARDS — trust logos on black */}
        <AwardsSection />

        {/* 5. GUEST RATINGS — 4.7 stars, 134K reviews */}
        <GuestRatingsSection />

        {/* 6. FRANCHISEE TESTIMONIALS — carousel on black */}
        <FranchiseeTestimonialsSection />

        {/* 7. GUEST TESTIMONIALS — review cards on white */}
        <GuestTestimonialsSection />

        {/* 8. SEO CONTENT — keyword-rich content on black */}
        <SEOContentSection />

        {/* 9. FAQ — expanded with keyword questions */}
        <FAQ />

        {/* 10. GOLD BOTTOM BANNER — dual CTA */}
        <GoldBottomBanner />

        {/* 11. EXPLORE LINKS — keep non-converters on site */}
        <Section className="bg-black py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">
              Explore More
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/franchise-cost"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Franchise Cost</p>
                <p className="text-sm text-white/60">Full investment breakdown</p>
              </Link>
              <Link
                href="/franchise-opportunities"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Available Markets</p>
                <p className="text-sm text-white/60">Find territories by state</p>
              </Link>
              <Link
                href="/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Spavia vs. Woodhouse</p>
                <p className="text-sm text-white/60">Side-by-side comparison</p>
              </Link>
            </div>
          </div>
        </Section>

        <Footer />
      </main>

      {/* Floating Button */}
      <FloatingButton />
    </>
  );
}
