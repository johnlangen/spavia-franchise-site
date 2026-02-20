import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("texas")!;

export const metadata: Metadata = {
  title: `Spa Franchise in Texas | Spavia Day Spa | Dallas, Austin, Houston`,
  description:
    "Explore Spavia day spa franchise opportunities in Texas. Data-driven market analysis for Dallas-Fort Worth, Austin, Houston, and more. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/texas",
  },
  openGraph: {
    title: "Spa Franchise in Texas | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Texas. Data-driven market analysis for Dallas-Fort Worth, Austin, Houston, and more.",
    url: "https://spaviafranchise.com/franchise-opportunities/texas",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Texas | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Texas. Data-driven market analysis for Dallas-Fort Worth, Austin, Houston, and more.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function TexasPage() {
  return <StateMarketContent state={state} />;
}
