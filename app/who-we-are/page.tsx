import { Metadata } from "next";
import WhoWeAreContent from "../components/WhoWeAreContent";

const whoWeAreFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who founded Spavia Day Spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia was co-founded by Marty Langenderfer (CEO) and Allison Langenderfer (President). Marty brings expertise in finance, marketing, and operations from his background at Cornell University, Travelocity, and DISH Network. Allison leads with passion in design, creativity, and spa retail, drawing on her experience at Macy's and in pharmaceutical sales.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Spavia been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia has been serving guests for over 20 years, bringing luxury spa treatments and amenities found at world-class resorts to local communities across America. The brand has built a network of Spavia Members who enjoy monthly treatments.",
      },
    },
    {
      "@type": "Question",
      name: "What is Spavia Cares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia Cares is the brand's community-focused initiative. With every new location, the team actively works to become part of the neighborhoods they serve through philanthropic efforts, small business relationships, and community engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What leadership and support team does Spavia have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia's support team includes a Chief Operating Officer with over 10 years of franchise operations experience, a Director of Franchise Development focused on recruitment and market growth, and a Director of Spa Services with over 15 years of franchise system experience specializing in market research for services, products, and equipment.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Meet the Founders of Spavia: 20 Years, 60+ Spa Locations",
  description:
    "Meet co-founders Marty and Allison Langenderfer — the couple behind Spavia's 60+ day spa locations and 20-year track record in wellness franchising.",
  alternates: {
    canonical: "https://spaviafranchise.com/who-we-are",
  },
  openGraph: {
    title: "Meet the Founders of Spavia: 20 Years, 60+ Spa Locations",
    description:
      "Meet co-founders Marty and Allison Langenderfer — the couple behind Spavia's 60+ day spa locations and 20-year track record in wellness franchising.",
    url: "https://spaviafranchise.com/who-we-are",
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
    title: "Meet the Founders of Spavia: 20 Years, 60+ Spa Locations",
    description:
      "Meet co-founders Marty and Allison Langenderfer — the couple behind Spavia's 60+ day spa locations and 20-year track record in wellness franchising.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whoWeAreFaqJsonLd) }}
      />
      <WhoWeAreContent />
    </>
  );
}
