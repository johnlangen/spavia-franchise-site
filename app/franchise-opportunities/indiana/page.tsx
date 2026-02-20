import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("indiana")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Indiana | Spavia Day Spa | Carmel, Fishers, Westfield",
  description:
    "Explore Spavia day spa franchise opportunities in Indiana. Data-driven market analysis for the Indianapolis north metro. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/indiana",
  },
  openGraph: {
    title: "Spa Franchise in Indiana | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Indiana. Data-driven market analysis for the Indianapolis north metro. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/indiana",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Indiana | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Indiana. Data-driven market analysis for the Indianapolis north metro. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function IndianaPage() {
  return <StateMarketContent state={state} />;
}
