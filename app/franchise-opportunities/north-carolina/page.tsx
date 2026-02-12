import { Metadata } from "next";
import NorthCarolinaContent from "../../components/NorthCarolinaContent";

export const metadata: Metadata = {
  title: "Spa Franchise in North Carolina | Spavia Day Spa | Charlotte & Raleigh",
  description:
    "Own a Spavia day spa franchise in North Carolina. Explore franchise opportunities in Charlotte, Raleigh, Asheville, and Durham. Proven model, full support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
  },
  openGraph: {
    title: "Spa Franchise in North Carolina | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Charlotte, Raleigh, or Asheville. Proven business model with $1M+ average revenue potential.",
    url: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise - Now Expanding to North Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in North Carolina | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Charlotte, Raleigh, or Asheville. Proven business model with $1M+ average revenue potential.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <NorthCarolinaContent />;
}
