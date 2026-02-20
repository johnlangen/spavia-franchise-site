import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("new-hampshire")!;

export const metadata: Metadata = {
  title: "Spa Franchise in New Hampshire | Spavia Day Spa | Exeter, Londonderry, Derry",
  description:
    "Explore Spavia day spa franchise opportunities in New Hampshire. Data-driven market analysis for southern NH and the Boston exurbs. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/new-hampshire",
  },
  openGraph: {
    title: "Spa Franchise in New Hampshire | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in New Hampshire. Data-driven market analysis for southern NH and the Boston exurbs. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/new-hampshire",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in New Hampshire | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in New Hampshire. Data-driven market analysis for southern NH and the Boston exurbs. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function NewHampshirePage() {
  return <StateMarketContent state={state} />;
}
