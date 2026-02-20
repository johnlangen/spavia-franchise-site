import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("north-carolina")!;

export const metadata: Metadata = {
  title: "Spa Franchise in North Carolina | Spavia Day Spa | Charlotte & Raleigh",
  description:
    "Explore Spavia day spa franchise opportunities in North Carolina. Data-driven market analysis for Charlotte, Raleigh, Chatham County, Iredell County, and more. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
  },
  openGraph: {
    title: "Spa Franchise in North Carolina | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in North Carolina. Data-driven market analysis for Charlotte, Raleigh, and the Research Triangle.",
    url: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in North Carolina | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in North Carolina. Data-driven market analysis for Charlotte, Raleigh, and the Research Triangle.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function NorthCarolinaPage() {
  return <StateMarketContent state={state} />;
}
