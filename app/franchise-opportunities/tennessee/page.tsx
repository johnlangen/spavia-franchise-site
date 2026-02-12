import { Metadata } from "next";
import TennesseeContent from "../../components/TennesseeContent";

export const metadata: Metadata = {
  title: "Spa Franchise in Tennessee | Spavia Day Spa | Nashville & Knoxville",
  description:
    "Own a Spavia day spa franchise in Tennessee. Explore franchise opportunities in Nashville, Memphis, Knoxville, and Chattanooga. Proven model, full support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/tennessee",
  },
  openGraph: {
    title: "Spa Franchise in Tennessee | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Nashville, Memphis, or Knoxville. Proven business model with $1M+ average revenue potential.",
    url: "https://spaviafranchise.com/franchise-opportunities/tennessee",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise - Now Expanding to Tennessee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Tennessee | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Nashville, Memphis, or Knoxville. Proven business model with $1M+ average revenue potential.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <TennesseeContent />;
}
