import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("iowa")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Iowa | Spavia Day Spa | West Des Moines, Waukee, Clive",
  description:
    "Explore Spavia day spa franchise opportunities in Iowa. Data-driven market analysis for the Des Moines metro area. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/iowa",
  },
  openGraph: {
    title: "Spa Franchise in Iowa | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Iowa. Data-driven market analysis for the Des Moines metro area. Proven model, recurring revenue, full training & support.",
    url: "https://spaviafranchise.com/franchise-opportunities/iowa",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Iowa | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Iowa. Data-driven market analysis for the Des Moines metro area. Proven model, recurring revenue, full training & support.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function IowaPage() {
  return <StateMarketContent state={state} />;
}
