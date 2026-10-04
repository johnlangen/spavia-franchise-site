import { Metadata } from "next";
import GetStartedContent from "../components/GetStartedContent";

import { getStartedFaqs } from "../data/getStartedFaq";
const getStartedFaqJsonLd = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:getStartedFaqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))};

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
