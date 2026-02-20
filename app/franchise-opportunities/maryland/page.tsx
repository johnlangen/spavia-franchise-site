import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("maryland")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Maryland | Spavia Day Spa | Waldorf, La Plata, White Plains",
  description:
    "Explore Spavia day spa franchise opportunities in Maryland. Data-driven market analysis for the DC metro area. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/maryland",
  },
  openGraph: {
    title: "Spa Franchise in Maryland | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Maryland. Data-driven market analysis for the DC metro area. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/maryland",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Maryland | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Maryland. Data-driven market analysis for the DC metro area. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function MarylandPage() {
  return <StateMarketContent state={state} />;
}
