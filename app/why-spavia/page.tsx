import { Metadata } from "next";
import WhySpaviaContent from "../components/WhySpaviaContent";

const whySpaviaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What revenue streams does a Spavia franchise offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia franchisees benefit from multiple revenue streams including a multi-treatment spa concept with result-driven treatments, a retail boutique for at-home wellness products, gift card sales that boost revenue during holidays and special occasions, and a three-tier membership model that caters to diverse guest needs and budgets.",
      },
    },
    {
      "@type": "Question",
      name: "What technology and systems does Spavia provide to franchisees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia provides a comprehensive suite of technology including a world-class applicant tracking system, 100% cloud-based operations, a fully integrated marketing and POS system, a robust Spavia app for online scheduling on iOS and Android, coordinated team member management, an integrated payroll system, effortless inventory management, instant analytics with over 150 reports, and guest capture technology with AI.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Spavia been in the spa franchise industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia opened its doors on September 25, 2005, with a mission and vision of making a positive difference in the world one guest at a time. The brand has over 20 years of experience delivering exceptional service and result-driven treatments.",
      },
    },
    {
      "@type": "Question",
      name: "What makes the Spavia guest experience different from other spa franchises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia is focused on creating an exceptional experience where guests can turn off the stresses of everyday life. Spavia listens to guests, measures success based on every experience, takes feedback to heart, and strives to improve each and every day. This commitment to guest care drives word-of-mouth referrals and positive reviews.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Why Spavia? 60+ Locations, $1.1M Avg Revenue, 20 Years",
  description:
    "Why prospective franchisees choose Spavia: 60+ spa locations, $1.1M average gross sales, 50%+ membership revenue, and a 20-year proven model.",
  alternates: {
    canonical: "https://spaviafranchise.com/why-spavia",
  },
  openGraph: {
    title: "Why Spavia? 60+ Locations, $1.1M Avg Revenue, 20 Years",
    description:
      "Why prospective franchisees choose Spavia: 60+ spa locations, $1.1M average gross sales, 50%+ membership revenue, and a 20-year proven model.",
    url: "https://spaviafranchise.com/why-spavia",
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
    title: "Why Spavia? 60+ Locations, $1.1M Avg Revenue, 20 Years",
    description:
      "Why prospective franchisees choose Spavia: 60+ spa locations, $1.1M average gross sales, 50%+ membership revenue, and a 20-year proven model.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whySpaviaFaqJsonLd) }}
      />
      <main className="bg-white text-gray-900">
        <WhySpaviaContent />
      </main>
    </>
  );
}
