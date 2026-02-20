import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("colorado")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Colorado | Spavia Day Spa | Centennial, Southlands, Aurora",
  description:
    "Explore Spavia day spa franchise opportunities in Colorado. Data-driven market analysis for the Denver metro area. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/colorado",
  },
  openGraph: {
    title: "Spa Franchise in Colorado | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Colorado. Data-driven market analysis for the Denver metro area. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/colorado",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Colorado | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Colorado. Data-driven market analysis for the Denver metro area. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function ColoradoPage() {
  return <StateMarketContent state={state} />;
}
