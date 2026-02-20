import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("new-mexico")!;

export const metadata: Metadata = {
  title: "Spa Franchise in New Mexico | Spavia Day Spa | Albuquerque, Rio Rancho, Corrales",
  description:
    "Explore Spavia day spa franchise opportunities in New Mexico. Data-driven market analysis for the Albuquerque metro. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/new-mexico",
  },
  openGraph: {
    title: "Spa Franchise in New Mexico | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in New Mexico. Data-driven market analysis for the Albuquerque metro. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/new-mexico",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in New Mexico | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in New Mexico. Data-driven market analysis for the Albuquerque metro. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function NewMexicoPage() {
  return <StateMarketContent state={state} />;
}
