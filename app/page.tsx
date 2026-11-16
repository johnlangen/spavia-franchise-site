import { Metadata } from "next";
import AwardsSection from "./components/AwardsSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomepageStory from "./components/HomepageStory";
import NavBar from "./components/NavBar";
import TalkToFounderSection from "./components/TalkToFounderSection";
import { homepageFaqItems } from "./data/homepageFaq";
import { locationCounts } from "./data/locationStats";

const description = `Spavia is a proven day spa franchise with ${locationCounts.open} locations and $1.1M+ median gross sales (2026 FDD, Item 19). Explore investment, training, and open territories.`;

export const metadata: Metadata = {
  title: "Spavia Franchise: Own a Day Spa With $1.1M+ Median Revenue",
  description,
  alternates: {
    canonical: "https://spaviafranchise.com/",
  },
  openGraph: {
    title: "Spavia Franchise: Own a Day Spa With $1.1M+ Median Revenue",
    description,
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
    description,
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      <NavBar />
      <main id="main-content">
        <Hero />
        <HomepageStory />
        <AwardsSection />
        <TalkToFounderSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
