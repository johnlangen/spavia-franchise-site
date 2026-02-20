import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("tennessee")!;

export const metadata: Metadata = {
  title: "Spa Franchise in Tennessee | Spavia Day Spa | Nashville & Memphis",
  description:
    "Explore Spavia day spa franchise opportunities in Tennessee. Data-driven market analysis for Williamson County (Franklin/Brentwood) and Shelby County (Germantown/Collierville). Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/tennessee",
  },
  openGraph: {
    title: "Spa Franchise in Tennessee | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Tennessee. Data-driven market analysis for Nashville and Memphis metro areas.",
    url: "https://spaviafranchise.com/franchise-opportunities/tennessee",
    images: ["/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Tennessee | Spavia Day Spa",
    description:
      "Explore Spavia day spa franchise opportunities in Tennessee. Data-driven market analysis for Nashville and Memphis metro areas.",
    images: ["/og/spavia-franchise-og.jpg"],
  },
};

export default function TennesseePage() {
  return <StateMarketContent state={state} />;
}
