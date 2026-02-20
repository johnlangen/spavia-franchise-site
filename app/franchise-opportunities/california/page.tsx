import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("california")!;

export const metadata: Metadata = {
  title: "Spa Franchise in California | Spavia Day Spa | San Diego, Camarillo, Sacramento",
  description:
    "Explore Spavia day spa franchise opportunities in California. Data-driven market analysis for San Diego, Ventura County, Sacramento, and more. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/california",
  },
  openGraph: {
    title: "Spa Franchise in California | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in California. Data-driven market analysis for San Diego, Ventura County, Sacramento, and more. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/california",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in California | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in California. Data-driven market analysis for San Diego, Ventura County, Sacramento, and more. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function CaliforniaPage() {
  return <StateMarketContent state={state} />;
}
