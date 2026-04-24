import { Metadata } from "next";
import YourSpaviaContent from "../components/YourSpaviaContent";

const yourSpaviaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the financial requirements to open a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia requires a minimum net worth of $500,000 and liquid capital of $200,000. The estimated initial investment ranges from $496,450 to $795,950, which includes build-out, equipment, and initial operating capital.",
      },
    },
    {
      "@type": "Question",
      name: "How does Spavia generate recurring revenue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recurring revenue is the cornerstone of the Spavia model. Membership accounts for over 50% of revenue with a fiercely loyal following. Additional revenue comes from multiple streams including massage, skin care, retail, body treatments, beauty services, and gift cards.",
      },
    },
    {
      "@type": "Question",
      name: "How big is the spa and wellness industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The global wellness market is expected to reach $8.5 trillion by 2027, with 22% of wellness growth attributed to the spa segment. The global day spa market is expected to reach $57 billion by 2033.",
      },
    },
    {
      "@type": "Question",
      name: "How does Spavia help with finding a location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finding a great location for your Spavia requires collaboration between the franchise partner, Spavia National, and their real estate partner, JLL. This partnership ensures you find the right site for your market.",
      },
    },
    {
      "@type": "Question",
      name: "Which markets are available for Spavia franchise development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia is available in most U.S. states. Limited markets include Colorado, North Dakota, South Dakota, Alaska, Hawaii, Maryland, New Jersey, and Rhode Island. Click on the interactive map on the Your Spavia page for territory details.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Spavia Franchise Investment: $496K–$796K to Own a Day Spa",
  description:
    "Spavia franchise investment: $496K–$796K to open, $200K liquid required. 50%+ recurring membership revenue. See financial requirements and open markets.",
  alternates: {
    canonical: "https://spaviafranchise.com/your-spavia",
  },
  openGraph: {
    title: "Spavia Franchise Investment: $496K–$796K to Own a Day Spa",
    description:
      "Spavia franchise investment: $496K–$796K to open, $200K liquid required. 50%+ recurring membership revenue. See financial requirements and open markets.",
    url: "https://spaviafranchise.com/your-spavia",
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
    title: "Spavia Franchise Investment: $496K–$796K to Own a Day Spa",
    description:
      "Spavia franchise investment: $496K–$796K to open, $200K liquid required. 50%+ recurring membership revenue. See financial requirements and open markets.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(yourSpaviaFaqJsonLd) }}
      />
      <YourSpaviaContent />
    </>
  );
}
