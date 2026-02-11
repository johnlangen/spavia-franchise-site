import { Metadata } from "next";
import StepsToOwnershipContent from "../components/StepsToOwnershipContent";

export const metadata: Metadata = {
  title: "Spa Ownership | Spavia Spa Franchise | Luxury Spa Franchises",
  description:
    "Learn the step by step process of spa ownership with Spavia and find answers to frequently asked questions.",
  alternates: {
    canonical: "https://spaviafranchise.com/steps-to-ownership",
  },
  openGraph: {
    title: "Spa Ownership | Spavia Spa Franchise | Luxury Spa Franchises",
    description:
      "Learn the step by step process of spa ownership with Spavia and find answers to frequently asked questions.",
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
    title: "Spa Ownership | Spavia Spa Franchise | Luxury Spa Franchises",
    description:
      "Learn the step by step process of spa ownership with Spavia and find answers to frequently asked questions.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <StepsToOwnershipContent />;
}
