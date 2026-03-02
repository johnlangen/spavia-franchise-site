import { Metadata } from "next";
import GetStartedContent from "../components/GetStartedContent";

const getStartedFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started with a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete the franchise inquiry form on the Get Started page to receive the Spavia Franchise Information Kit. A Spavia representative will contact you within 24\u201348 hours to discuss the opportunity.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I submit the franchise inquiry form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After submitting the form, a Spavia representative will reach out within 24\u201348 hours. The first step is typically a 15-minute introductory call to learn more about each other and determine if Spavia is the right fit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the franchise ownership process at Spavia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Spavia franchise process includes an introductory call, two discovery sessions covering culture, design, support systems, marketing, operations, and economics, meetings with franchise partners and executives, a Meet the Team Day in Denver, Colorado, and then franchise award.",
      },
    },
    {
      "@type": "Question",
      name: "How large is the wellness industry opportunity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The global wellness industry is a $6.3 trillion market. Spavia franchise owners bring resort-like spa experiences to local communities, tapping into the growing demand for affordable luxury wellness services.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Spa Franchise Opportunities | Get Started With Spavia",
  description:
    "Join the $6.3 Trillion wellness industry with Spavia franchise opportunities. Proven spa model, membership revenue, and full training & support. Get started today.",
  alternates: {
    canonical: "https://spaviafranchise.com/get-started",
  },
  openGraph: {
    title: "Spa Franchise Opportunities | Get Started With Spavia",
    description:
      "Learn how to open a Spavia Day Spa. Explore our proven franchise model, membership revenue system, and full training & support.",
    url: "https://spaviafranchise.com/get-started",
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
    title: "Spa Franchise Opportunities | Get Started With Spavia",
    description:
      "Learn how to open a Spavia Day Spa. Explore our proven franchise model, membership revenue system, and training & support.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getStartedFaqJsonLd) }}
      />
      <GetStartedContent />
    </>
  );
}
