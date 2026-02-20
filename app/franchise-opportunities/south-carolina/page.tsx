import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("south-carolina")!;

export const metadata: Metadata = {
  title: "Spa Franchise in South Carolina | Spavia Day Spa | Fort Mill & Charleston",
  description:
    "Explore Spavia day spa franchise opportunities in South Carolina. Data-driven market analysis for Lancaster County, Spartanburg, Richland County, Beaufort, and more. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/south-carolina",
  },
  openGraph: {
    title: "Spa Franchise in South Carolina | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in South Carolina. Data-driven market analysis for Fort Mill, Spartanburg, Columbia, and Hilton Head.",
    url: "https://spaviafranchise.com/franchise-opportunities/south-carolina",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in South Carolina | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in South Carolina. Data-driven market analysis for Fort Mill, Spartanburg, Columbia, and Hilton Head.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function SouthCarolinaPage() {
  return <StateMarketContent state={state} />;
}
