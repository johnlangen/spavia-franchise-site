import { Metadata } from "next";
import FranchiseOpportunitiesContent from "../components/FranchiseOpportunitiesContent";

export const metadata: Metadata = {
  title: "Spa Franchise Opportunities & Available Markets | Spavia",
  description: "Explore Spavia spa franchise opportunities by state. Review the investment, ownership requirements and market research, then discuss your territory with Alisa.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities",
  },
  openGraph: {
    title: "Spa Franchise Opportunities & Available Markets | Spavia",
    description: "Explore Spavia spa franchise opportunities by state. Review the investment, ownership requirements and market research, then discuss your territory with Alisa.",
    url: "https://spaviafranchise.com/franchise-opportunities",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Day Spa Franchise Opportunities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise Opportunities & Available Markets | Spavia",
    description: "Explore Spavia spa franchise opportunities by state. Review the investment, ownership requirements and market research, then discuss your territory with Alisa.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseOpportunitiesContent />;
}
