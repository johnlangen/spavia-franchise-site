import { Metadata } from "next";
import DaySpaFranchiseContent from "../components/DaySpaFranchiseContent";

export const metadata: Metadata = {
  title: "Day Spa Franchise Opportunity | $1.1M+ Median Revenue | Spavia",
  description:
    "Own a day spa franchise with proven $1.1M+ median gross sales (2026 FDD). $479K–$885K investment, recurring membership model, 63 locations, SBA-friendly financing.",
  alternates: {
    canonical: "https://spaviafranchise.com/day-spa-franchise",
  },
  openGraph: {
    title: "Day Spa Franchise Opportunity | $1.1M+ Median Revenue | Spavia",
    description:
      "Own a day spa franchise with proven $1.1M+ median gross sales (2026 FDD). $479K–$885K investment, recurring membership model, 63 locations, SBA-friendly financing.",
    url: "https://spaviafranchise.com/day-spa-franchise",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Day Spa Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Spa Franchise Opportunity | $1.1M+ Median Revenue | Spavia",
    description:
      "Own a day spa franchise with proven $1.1M+ median gross sales (2026 FDD). $479K–$885K investment, recurring membership model, 63 locations.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <DaySpaFranchiseContent />;
}
