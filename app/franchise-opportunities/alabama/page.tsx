import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("alabama")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Alabama | Spavia Day Spa | Daphne, Fairhope, Gulf Shores",
  description:
    "Explore Spavia day spa franchise opportunities in Alabama. Data-driven market analysis for Baldwin County and the Gulf Coast. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/alabama",
  },
  openGraph: {
    title: "Spa Franchise in Alabama | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Alabama. Data-driven market analysis for Baldwin County and the Gulf Coast. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/alabama",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Alabama | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Alabama. Data-driven market analysis for Baldwin County and the Gulf Coast. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function AlabamaPage() {
  return <StateMarketContent state={state} />;
}
