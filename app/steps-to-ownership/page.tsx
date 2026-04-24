import { Metadata } from "next";
import StepsToOwnershipContent from "../components/StepsToOwnershipContent";

const stepsToOwnershipFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can I make as a Spavia franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal trade commission and state franchise sales regulations do not allow franchisors to provide profit projections. However, if you become a qualified candidate, Spavia would be happy to share the franchise disclosure document (FDD), which highlights historical sales from franchised locations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need experience in the spa industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While it can't hurt to have experience in the spa industry, it is not required. Spavia is looking for individuals who share a dedication to providing an exceptional experience. Spavia can teach you and your team the rest.",
      },
    },
    {
      "@type": "Question",
      name: "How much are the royalties and other annual fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The current initial franchise fee is $59,500. The royalty fee is 6 percent of gross sales. The marketing fee is up to 1 percent of gross sales.",
      },
    },
    {
      "@type": "Question",
      name: "Does Spavia offer financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you will be responsible for financing. Spavia would be happy to introduce you to lenders and financing brokers who are familiar with the business.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to open a Spavia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each location is different, but the most time-consuming steps tend to be site selection, lease negotiation, build-out (including permitting) requirements, and training. However, it typically takes approximately 9 to 12 months from signing your lease to opening day.",
      },
    },
    {
      "@type": "Question",
      name: "What are the real estate specifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia prefers locations in shopping centers that have anchor retailers, female-oriented retailers, wellness-oriented retailers, and other national retailers. These types of retailers provide the best synergies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the term of the franchise agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The term is 10 years, with a renewal option for an additional 10 years.",
      },
    },
    {
      "@type": "Question",
      name: "Can I own multiple Spavia locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you are able to own multiple locations. In fact, many Spavia owners have chosen to purchase 3 or more.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard design space of a Spavia development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal square footage for a Spavia spa is between 2,800 and 3,200 square feet.",
      },
    },
    {
      "@type": "Question",
      name: "What type of training will I receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will receive comprehensive on-site and classroom training. Spavia also provides 24/7 support through online access to training and support tools.",
      },
    },
    {
      "@type": "Question",
      name: "What are the next steps in the process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once you have filled out the form, the next step is a 15-minute introductory call to learn more about whether or not Spavia is an excellent fit.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Steps to Spa Franchise Ownership: Your 10-14 Month Path",
  description:
    "Inquiry to grand opening in 10–14 months. See the full Spavia franchise process: discovery calls, Meet the Team Day, site selection, and launch.",
  alternates: {
    canonical: "https://spaviafranchise.com/steps-to-ownership",
  },
  openGraph: {
    title: "Steps to Spa Franchise Ownership: Your 10-14 Month Path",
    description:
      "Inquiry to grand opening in 10–14 months. See the full Spavia franchise process: discovery calls, Meet the Team Day, site selection, and launch.",
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
      "Inquiry to grand opening in 10–14 months. See the full Spavia franchise process: discovery calls, Meet the Team Day, site selection, and launch.",
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
