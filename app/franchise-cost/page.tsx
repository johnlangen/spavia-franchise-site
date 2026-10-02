import { Metadata } from "next";
import FranchiseCostContent from "../components/FranchiseCostContent";

export const metadata: Metadata = {
  title: "Spavia Franchise Cost & Fees: $479K–$885K (2026)",
  description: "See Spavia franchise costs, the $59,500 franchise fee, ongoing fees and $200K liquid capital requirement. Explore the 2026 FDD investment breakdown.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-cost",
  },
  openGraph: {
    title: "Spavia Franchise Cost & Fees: $479K–$885K (2026)",
    description: "See Spavia franchise costs, the $59,500 franchise fee, ongoing fees and $200K liquid capital requirement. Explore the 2026 FDD investment breakdown.",
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
    title: "Spavia Franchise Cost & Fees: $479K–$885K (2026)",
    description: "See Spavia franchise costs, the $59,500 franchise fee, ongoing fees and $200K liquid capital requirement. Explore the 2026 FDD investment breakdown.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseCostContent />;
}
