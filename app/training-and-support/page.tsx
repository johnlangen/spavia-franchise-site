import { Metadata } from "next";
import TrainingAndSupportContent from "../components/TrainingAndSupportContent";

export const metadata: Metadata = {
  title: "Spa Franchise Training and Support | Spavia Spa Franchises",
  description:
    "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
  alternates: {
    canonical: "https://spaviafranchise.com/training-and-support",
  },
  openGraph: {
    title: "Spa Franchise Training and Support | Spavia Spa Franchises",
    description:
      "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
    url: "https://spaviafranchise.com/training-and-support",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise Storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise Training and Support | Spavia Spa Franchises",
    description:
      "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Spa Franchise Training and Support",
      url: "https://spaviafranchise.com/training-and-support",
      description:
        "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
    }),
  },
};

export default function Page() {
  return <TrainingAndSupportContent />;
}
