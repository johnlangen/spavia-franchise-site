import { Metadata } from "next";
import DaySpaFranchiseContent from "../components/DaySpaFranchiseContent";

export const metadata: Metadata = {
  title: "Day Spa Franchise: Investment, Services & Support | Spavia",
  description: "Explore a full-service day spa franchise with massage, facials and memberships. Review Spavia’s $479K–$885K investment, owner support and available markets.",
  alternates: {
    canonical: "https://spaviafranchise.com/day-spa-franchise",
  },
  openGraph: {
    title: "Day Spa Franchise: Investment, Services & Support | Spavia",
    description: "Explore a full-service day spa franchise with massage, facials and memberships. Review Spavia’s $479K–$885K investment, owner support and available markets.",
    url: "https://spaviafranchise.com/day-spa-franchise",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Day Spa Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Spa Franchise: Investment, Services & Support | Spavia",
    description: "Explore a full-service day spa franchise with massage, facials and memberships. Review Spavia’s $479K–$885K investment, owner support and available markets.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <DaySpaFranchiseContent />;
}
