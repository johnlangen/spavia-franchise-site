import { Metadata } from "next";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import AwardsSection from "./components/AwardsSection";
import GuestRatingsSection from "./components/GuestRatingsSection";
import FranchiseeTestimonialsSection from "./components/FranchiseeTestimonialsSection";
import GuestTestimonialsSection from "./components/GuestTestimonialsSection";
import SEOContentSection from "./components/SEOContentSection";
import GoldBottomBanner from "./components/GoldBottomBanner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Link from "next/link";
import Section from "./components/Section";
import TalkToTylerSection from "./components/TalkToTylerSection";
import HomepageQuickOverview from "./components/HomepageQuickOverview";
import OurStorySection from "./components/OurStorySection";
import PhotoStrip from "./components/PhotoStrip";
import ExperienceBand from "./components/ExperienceBand";

export const metadata: Metadata = {
  title: "Spavia Franchise: Own a Day Spa With $1.1M+ Median Revenue",
  description:
    "Spavia is a proven day spa franchise with 63 locations and $1.1M+ median gross sales (2026 FDD, Item 19). Explore investment, training, and open territories.",
  alternates: {
    canonical: "https://spaviafranchise.com/",
  },
  openGraph: {
    title: "Spavia Franchise: Own a Day Spa With $1.1M+ Median Revenue",
    description:
      "Spavia is a proven day spa franchise with 63 locations and $1.1M+ median gross sales (2026 FDD, Item 19). Explore investment, training, and open territories.",
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
    title: "Spavia Franchise: Own a Day Spa With $1.1M+ Median Revenue",
    description:
      "Spavia is a proven day spa franchise with 63 locations and $1.1M+ median gross sales (2026 FDD, Item 19). Explore investment, training, and open territories.",
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
        text: "The total estimated initial investment to open a Spavia day spa franchise ranges from $479,450 to $885,450, per the 2026 FDD, Item 7. This includes the franchise fee, build-out, equipment, signage, technology, and three months of additional funds. Spavia provides guidance on financing options and SBA-eligible loan programs to help qualified candidates get started. Request the franchise overview for a full breakdown of costs.",
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
        text: "Our national team offers over 120 years of combined spa experience, providing expert insights and guidance for our franchise owners. This knowledge equips you with the tools to navigate the competitive spa landscape and build a successful franchise while delivering exceptional guest experiences.",
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

        {/* 1.2. PHOTO STRIP — real interiors, Sway, and what's-next concepts */}
        <PhotoStrip />

        {/* 1.5. QUICK OVERVIEW — 90-second education to convert shallow visitors
            into informed scrollers. Three columns with deep-page click-paths. */}
        <HomepageQuickOverview />

        {/* 3. TALK TO TYLER — direct path to a real conversation */}
        <TalkToTylerSection />

        {/* 4. AWARDS — press / award logos */}
        <AwardsSection />

        {/* 5. OUR STORY — editorial founder narrative (no repeated stats) */}
        <OurStorySection />

        {/* 5.5. EXPERIENCE BAND — cinematic full-bleed brand photography */}
        <ExperienceBand />

        {/* 6. FRANCHISEE TESTIMONIALS — carousel */}
        <FranchiseeTestimonialsSection />

        {/* 7. GUEST RATINGS — 4.8 stars, 30K+ reviews */}
        <GuestRatingsSection />

        {/* 8. GUEST TESTIMONIALS — review cards on white */}
        <GuestTestimonialsSection />

        {/* 9. SEO CONTENT — keyword-rich content on black */}
        <SEOContentSection />

        {/* 10. FAQ — expanded with keyword questions */}
        <FAQ />

        {/* 11. GOLD BOTTOM BANNER — single final CTA */}
        <GoldBottomBanner />

        {/* 11. EXPLORE LINKS — keep non-converters on site */}
        <Section className="bg-black py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-2 text-white">
              Explore the Franchise Models
            </h2>
            <p className="text-center text-white/60 text-sm mb-8 max-w-xl mx-auto">
              Different intent, different fit. Find the Spavia path that
              matches your background and goals.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <Link
                href="/day-spa-franchise"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Day Spa Franchise</p>
                <p className="text-sm text-white/60">
                  Full-service day spa franchise opportunity
                </p>
              </Link>
              <Link
                href="/massage-franchise"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Massage Franchise</p>
                <p className="text-sm text-white/60">
                  Beyond single-service massage
                </p>
              </Link>
              <Link
                href="/facial-franchise"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Facial Franchise</p>
                <p className="text-sm text-white/60">
                  Beyond single-service facials
                </p>
              </Link>
              <Link
                href="/wellness-franchise"
                className="block p-5 rounded-xl border border-white/20 bg-white/5 hover:border-[#C2A878] transition-colors text-center"
              >
                <p className="font-bold text-white mb-1">Wellness Franchise</p>
                <p className="text-sm text-white/60">
                  Full-service wellness model
                </p>
              </Link>
              <Link
                href="/multi-unit"
                className="block p-5 rounded-xl border-2 border-[#C2A878] bg-[#C2A878]/10 hover:bg-[#C2A878]/20 transition-colors text-center"
              >
                <p className="font-bold text-[#C2A878] mb-1">Multi-Unit</p>
                <p className="text-sm text-white/80">
                  Build a regional portfolio
                </p>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid sm:grid-cols-4 gap-3 text-center">
              <Link
                href="/whats-new"
                className="text-sm text-white/70 hover:text-[#C2A878] transition-colors"
              >
                What&apos;s New at Spavia →
              </Link>
              <Link
                href="/franchise-cost"
                className="text-sm text-white/70 hover:text-[#C2A878] transition-colors"
              >
                Franchise Cost →
              </Link>
              <Link
                href="/franchise-opportunities"
                className="text-sm text-white/70 hover:text-[#C2A878] transition-colors"
              >
                Available Markets →
              </Link>
              <Link
                href="/blog/2026/02/11/day-spa-vs-med-spa-franchise"
                className="text-sm text-white/70 hover:text-[#C2A878] transition-colors"
              >
                Day Spa vs. Med Spa →
              </Link>
            </div>
          </div>
        </Section>

        <Footer />
      </main>

      {/* Floating Button */}
    </>
  );
}
