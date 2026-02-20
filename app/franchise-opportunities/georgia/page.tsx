import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("georgia")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Georgia | Spavia Day Spa | Atlanta & Cumming",
  description:
    "Explore Spavia day spa franchise opportunities in Georgia. Data-driven market analysis for Forsyth County, Cherokee County, and the Atlanta metro. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/georgia",
  },
  openGraph: {
    title: "Spa Franchise in Georgia | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Georgia. Data-driven market analysis for Forsyth County, Cherokee County, and the Atlanta metro.",
    url: "https://spaviafranchise.com/franchise-opportunities/georgia",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Georgia | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Georgia. Data-driven market analysis for Forsyth County, Cherokee County, and the Atlanta metro.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function GeorgiaPage() {
  return <StateMarketContent state={state} />;
}
