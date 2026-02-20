import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("florida")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Florida | Spavia Day Spa | Orlando, Jacksonville, Clermont",
  description:
    "Explore Spavia day spa franchise opportunities in Florida. Data-driven market analysis for Orlando, Jacksonville, Lake County, and more. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/florida",
  },
  openGraph: {
    title: "Spa Franchise in Florida | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Florida. Data-driven market analysis for Orlando, Jacksonville, Lake County, and more. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/florida",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Florida | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Florida. Data-driven market analysis for Orlando, Jacksonville, Lake County, and more. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function FloridaPage() {
  return <StateMarketContent state={state} />;
}
