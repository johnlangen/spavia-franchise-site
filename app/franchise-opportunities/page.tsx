import { Metadata } from "next";
import FranchiseOpportunitiesContent from "../components/FranchiseOpportunitiesContent";

export const metadata: Metadata = {
  title: "Spa Franchise Territories by State | Open Markets 2026",
  description:
    "See open Spavia spa franchise territories across the U.S. — Arizona, Texas, Florida, North Carolina, Tennessee, and more. Limited markets available.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities",
  },
  openGraph: {
    title: "Spa Franchise Territories by State | Open Markets 2026",
    description:
      "See open Spavia spa franchise territories across the U.S. — Arizona, Texas, Florida, North Carolina, Tennessee, and more. Limited markets available.",
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
    title: "Spa Franchise Territories by State | Open Markets 2026",
    description:
      "See open Spavia spa franchise territories across the U.S. — Arizona, Texas, Florida, North Carolina, Tennessee, and more. Limited markets available.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseOpportunitiesContent />;
}
