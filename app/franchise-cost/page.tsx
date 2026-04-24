import { Metadata } from "next";
import FranchiseCostContent from "../components/FranchiseCostContent";

export const metadata: Metadata = {
  title: "Spa Franchise Cost: $496K–$796K to Open a Spavia Day Spa",
  description:
    "The full Spavia day spa franchise cost breakdown: $496K–$796K initial investment, $59,500 franchise fee, 6% royalty, SBA-friendly financing options.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-cost",
  },
  openGraph: {
    title: "Spa Franchise Cost: $496K–$796K to Open a Spavia Day Spa",
    description:
      "The full Spavia day spa franchise cost breakdown: $496K–$796K initial investment, $59,500 franchise fee, 6% royalty, SBA-friendly financing options.",
    url: "https://spaviafranchise.com/franchise-cost",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Day Spa Franchise Cost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise Cost: $496K–$796K to Open a Spavia Day Spa",
    description:
      "The full Spavia day spa franchise cost breakdown: $496K–$796K initial investment, $59,500 franchise fee, 6% royalty, SBA-friendly financing options.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseCostContent />;
}
