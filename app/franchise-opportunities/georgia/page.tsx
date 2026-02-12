import { Metadata } from "next";
import GeorgiaContent from "../../components/GeorgiaContent";

export const metadata: Metadata = {
  title: "Spa Franchise in Georgia | Spavia Day Spa | Atlanta & Savannah",
  description:
    "Own a Spavia day spa franchise in Georgia. Explore franchise opportunities in Atlanta, Savannah, Alpharetta, and Marietta. Proven model, full support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/georgia",
  },
  openGraph: {
    title: "Spa Franchise in Georgia | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Atlanta, Savannah, or Alpharetta. Proven business model with $1M+ average revenue potential.",
    url: "https://spaviafranchise.com/franchise-opportunities/georgia",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise - Now Expanding to Georgia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Georgia | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Atlanta, Savannah, or Alpharetta. Proven business model with $1M+ average revenue potential.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <GeorgiaContent />;
}
