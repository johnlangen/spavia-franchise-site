import { Metadata } from "next";
import FranchiseOpportunitiesContent from "../components/FranchiseOpportunitiesContent";

export const metadata: Metadata = {
  title: "Spa Franchise Opportunities by State | Spavia Day Spa Franchise",
  description:
    "Explore Spavia day spa franchise opportunities across the U.S. Find available territories in Arizona, Georgia, North Carolina, South Carolina, Tennessee, and more.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities",
  },
  openGraph: {
    title: "Spa Franchise Opportunities by State | Spavia Day Spa Franchise",
    description:
      "Explore Spavia day spa franchise opportunities across the U.S. Find available territories in Arizona, Georgia, North Carolina, South Carolina, Tennessee, and more.",
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
    title: "Spa Franchise Opportunities by State | Spavia Day Spa Franchise",
    description:
      "Explore Spavia day spa franchise opportunities across the U.S. Find available territories in Arizona, Georgia, North Carolina, South Carolina, Tennessee, and more.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseOpportunitiesContent />;
}
