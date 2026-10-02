import { Metadata } from "next";
import MassageFranchiseContent from "../components/MassageFranchiseContent";

export const metadata: Metadata = {
  title: "Massage Franchise Opportunities, Costs & Support | Spavia",
  description: "Considering a massage franchise? Explore Spavia’s massage and facial spa model, $479K–$885K investment, staffing responsibilities and franchise support.",
  alternates: {
    canonical: "https://spaviafranchise.com/massage-franchise",
  },
  openGraph: {
    title: "Massage Franchise Opportunities, Costs & Support | Spavia",
    description: "Considering a massage franchise? Explore Spavia’s massage and facial spa model, $479K–$885K investment, staffing responsibilities and franchise support.",
    url: "https://spaviafranchise.com/massage-franchise",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Massage Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Franchise Opportunities, Costs & Support | Spavia",
    description: "Considering a massage franchise? Explore Spavia’s massage and facial spa model, $479K–$885K investment, staffing responsibilities and franchise support.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <MassageFranchiseContent />;
}
