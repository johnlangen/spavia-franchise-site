import { Metadata } from "next";
import FranchiseCostContent from "../components/FranchiseCostContent";

export const metadata: Metadata = {
  title: "Spa Franchise Cost: $479K–$885K to Open a Spavia Day Spa",
  description:
    "The full Spavia day spa franchise cost breakdown per the 2026 FDD: $479K–$885K initial investment, $59,500 franchise fee, 6% royalty, SBA-friendly financing options.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-cost",
  },
  openGraph: {
    title: "Spa Franchise Cost: $479K–$885K to Open a Spavia Day Spa",
    description:
      "The full Spavia day spa franchise cost breakdown per the 2026 FDD: $479K–$885K initial investment, $59,500 franchise fee, 6% royalty, SBA-friendly financing options.",
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
    title: "Spa Franchise Cost: $479K–$885K to Open a Spavia Day Spa",
    description:
      "The full Spavia day spa franchise cost breakdown per the 2026 FDD: $479K–$885K initial investment, $59,500 franchise fee, 6% royalty, SBA-friendly financing options.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseCostContent />;
}
