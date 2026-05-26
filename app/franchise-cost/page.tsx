import { Metadata } from "next";
import FranchiseCostContent from "../components/FranchiseCostContent";

export const metadata: Metadata = {
  title: "Spa Franchise Cost: $479K–$885K | Spavia Day Spa, Massage & Med Spa Comparison",
  description:
    "Spavia day spa franchise cost: $479K–$885K (2026 FDD). Compare against massage franchise cost, med spa franchise cost, and facial franchise cost. 6% royalty, SBA financing.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-cost",
  },
  openGraph: {
    title: "Spa Franchise Cost: $479K–$885K | Spavia vs Massage & Med Spa",
    description:
      "Spavia day spa franchise cost: $479K–$885K (2026 FDD). Compare against massage franchise cost, med spa franchise cost, and facial franchise cost. 6% royalty, SBA financing.",
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
    title: "Spa Franchise Cost: $479K–$885K | Spavia vs Massage & Med Spa",
    description:
      "Spavia day spa franchise cost: $479K–$885K (2026 FDD). Compare against massage franchise cost, med spa franchise cost, and facial franchise cost.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseCostContent />;
}
