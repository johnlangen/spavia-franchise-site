import { Metadata } from "next";
import OurFranchiseesContent from "../components/OurFranchiseesContent";

const ourFranchiseesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What qualities does Spavia look for in franchise candidates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia seeks natural leaders with a drive to succeed, a genuine passion for the spa and wellness industry, and a commitment to being highly engaged within the franchise system. Ideal candidates demonstrate resilience, a results-oriented mindset, and dedication to contributing to the overall effectiveness of Spavia.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior spa or wellness experience to own a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Spavia welcomes entrepreneurs from all backgrounds. For example, one franchise owner came from 25 years in the banking industry with no prior spa experience. Spavia's comprehensive training programs prepare owners regardless of their previous industry experience.",
      },
    },
    {
      "@type": "Question",
      name: "Where do Spavia franchise owners operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia franchise owners operate across the United States, including locations in markets like Chicago, IL; Centennial, CO; Fredericksburg, VA; and Orlando, FL, among others.",
      },
    },
    {
      "@type": "Question",
      name: "What do current Spavia franchise owners say about the experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia franchise owners consistently highlight the strong support from the national team, the brand's passion and knowledge, and the rewarding experience of building a wellness business. Owners describe Spavia as more than just a business — it's a network of passionate, caring individuals making a difference in the lives of guests and team members.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Meet Spavia Franchise Owners: Revenue, Stories, Lessons",
  description:
    "Hear from Spavia day spa franchise owners across the U.S. — why they chose Spavia, what they earn, and what daily ownership actually looks like.",
  alternates: {
    canonical: "https://spaviafranchise.com/our-franchisees",
  },
  openGraph: {
    title: "Meet Spavia Franchise Owners: Revenue, Stories, Lessons",
    description:
      "Hear from Spavia day spa franchise owners across the U.S. — why they chose Spavia, what they earn, and what daily ownership actually looks like.",
    url: "https://spaviafranchise.com/our-franchisees",
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
    title: "Meet Spavia Franchise Owners: Revenue, Stories, Lessons",
    description:
      "Hear from Spavia day spa franchise owners across the U.S. — why they chose Spavia, what they earn, and what daily ownership actually looks like.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ourFranchiseesFaqJsonLd) }}
      />
      <OurFranchiseesContent />
    </>
  );
}
