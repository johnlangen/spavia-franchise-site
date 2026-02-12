import { Metadata } from "next";
import FranchiseCostContent from "../components/FranchiseCostContent";

export const metadata: Metadata = {
  title: "Spa Franchise Cost | How Much Does a Spavia Franchise Cost?",
  description:
    "Spavia day spa franchise costs range from $496K to $796K. Explore the full investment breakdown, franchise fees, ongoing royalties, and financing options.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-cost",
  },
  openGraph: {
    title: "Spa Franchise Cost | How Much Does a Spavia Franchise Cost?",
    description:
      "Spavia day spa franchise costs range from $496K to $796K. Explore the full investment breakdown, franchise fees, ongoing royalties, and financing options.",
    url: "https://spaviafranchise.com/franchise-cost",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Day Spa Franchise Cost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise Cost | How Much Does a Spavia Franchise Cost?",
    description:
      "Spavia day spa franchise costs range from $496K to $796K. Explore the full investment breakdown, franchise fees, ongoing royalties, and financing options.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FranchiseCostContent />;
}
