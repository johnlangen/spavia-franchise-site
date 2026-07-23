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
        text: "Complete the franchise inquiry form on the Get Started page to receive the Spavia Franchise Information Kit. Our founding team will contact you within one business day to discuss the opportunity.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I submit the franchise inquiry form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After you submit the form, our founding team reviews your information within one business day. Qualified candidates book a 45-minute discovery call directly with Allison Langenderfer, Spavia's co-founder and president.",
      },
    },
    {
      "@type": "Question",
      name: "What is the franchise ownership process at Spavia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Spavia franchise process starts with a discovery call with our co-founder, followed by deeper sessions covering culture, design, support systems, marketing, operations, and economics, validation with current owners, a Meet the Team Day in Denver, Colorado, and then franchise award.",
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
  title: "Get Started With Spavia: Request Your Franchise Overview",
  description:
    "Request the Spavia franchise overview — investment breakdown, open territories, and next steps. A Spavia team member responds within 24–48 hours.",
  alternates: {
    canonical: "https://spaviafranchise.com/get-started",
  },
  openGraph: {
    title: "Get Started With Spavia: Request Your Franchise Overview",
    description:
      "Request the Spavia franchise overview — investment breakdown, open territories, and next steps. A Spavia team member responds within 24–48 hours.",
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
    title: "Get Started With Spavia: Request Your Franchise Overview",
    description:
      "Request the Spavia franchise overview — investment breakdown, open territories, and next steps. Responses within 24–48 hours.",
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
