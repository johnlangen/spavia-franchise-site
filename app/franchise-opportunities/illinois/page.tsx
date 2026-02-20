import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("illinois")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Illinois | Spavia Day Spa | O'Fallon, Shiloh, Belleville",
  description:
    "Explore Spavia day spa franchise opportunities in Illinois. Data-driven market analysis for the Metro East St. Louis area. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/illinois",
  },
  openGraph: {
    title: "Spa Franchise in Illinois | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Illinois. Data-driven market analysis for the Metro East St. Louis area. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/illinois",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Illinois | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Illinois. Data-driven market analysis for the Metro East St. Louis area. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function IllinoisPage() {
  return <StateMarketContent state={state} />;
}
