import { Metadata } from "next";
import StepsToOwnershipContent from "../components/StepsToOwnershipContent";
import { ownershipFaqItems } from "../data/ownershipFaq";

const stepsToOwnershipFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ownershipFaqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export const metadata: Metadata = {
  title: "Steps to Spa Franchise Ownership: Your 10-14 Month Path",
  description:
    "Inquiry to grand opening in 10–14 months. See the full Spavia franchise process: intro call, FDD review, Meet the Team Day, site selection, and launch.",
  alternates: {
    canonical: "https://spaviafranchise.com/steps-to-ownership",
  },
  openGraph: {
    title: "Steps to Spa Franchise Ownership: Your 10-14 Month Path",
    description:
      "Inquiry to grand opening in 10–14 months. See the full Spavia franchise process: intro call, FDD review, Meet the Team Day, site selection, and launch.",
    url: "https://spaviafranchise.com/steps-to-ownership",
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
    title: "Steps to Spa Franchise Ownership: Your 10-14 Month Path",
    description:
      "Inquiry to grand opening in 10–14 months. See the full Spavia franchise process: intro call, FDD review, Meet the Team Day, site selection, and launch.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stepsToOwnershipFaqJsonLd) }}
      />
      <StepsToOwnershipContent />
    </>
  );
}
