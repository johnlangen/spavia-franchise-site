import { Metadata } from "next";
import ArizonaContent from "../../components/ArizonaContent";

export const metadata: Metadata = {
  title: "Spa Franchise in Arizona | Spavia Day Spa | Scottsdale & Phoenix",
  description:
    "Spavia is expanding to Arizona. Own a luxury day spa franchise in Scottsdale, Phoenix, Mesa, Tempe, Chandler, or Gilbert. Proven model, recurring revenue, full training & support.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/arizona",
  },
  openGraph: {
    title: "Spa Franchise in Arizona | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Scottsdale, Phoenix, or Mesa. Proven business model with $1M+ average revenue potential.",
    url: "https://spaviafranchise.com/franchise-opportunities/arizona",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise - Now Expanding to Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise in Arizona | Spavia Day Spa | Now Expanding",
    description:
      "Own a Spavia Day Spa franchise in Scottsdale, Phoenix, or Mesa. Proven business model with $1M+ average revenue potential.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <ArizonaContent />;
}
