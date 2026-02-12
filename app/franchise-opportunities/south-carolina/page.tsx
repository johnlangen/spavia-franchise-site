import { Metadata } from "next";
import SouthCarolinaContent from "../../components/SouthCarolinaContent";

export const metadata: Metadata = {
  title: "Spa Franchise in South Carolina | Spavia Day Spa | Charleston & Greenville",
  description:
    "Own a Spavia day spa franchise in South Carolina. Explore franchise opportunities in Charleston, Greenville, Columbia, and Myrtle Beach. Proven model, full support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/south-carolina",
  },
  openGraph: {
    title: "Spa Franchise in South Carolina | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Charleston, Greenville, or Columbia. Proven business model with $1M+ average revenue potential.",
    url: "https://spaviafranchise.com/franchise-opportunities/south-carolina",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise - Now Expanding to South Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in South Carolina | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Charleston, Greenville, or Columbia. Proven business model with $1M+ average revenue potential.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <SouthCarolinaContent />;
}
