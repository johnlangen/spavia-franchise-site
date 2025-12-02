import { Metadata } from "next";
import YourSpaviaContent from "../components/YourSpaviaContent";

export const metadata: Metadata = {
  title: "Your Spavia | Spa Franchise Investment Opportunities",
  description:
    "Discover how Spavia delivers financial success through wellness. Learn about financial requirements, recurring revenue streams, industry growth, and available markets.",
  alternates: {
    canonical: "https://spaviafranchise.com/your-spavia",
  },
  openGraph: {
    title: "Your Spavia | Spa Franchise Investment Opportunities",
    description:
      "Discover how Spavia delivers financial success through wellness. Learn about financial requirements, recurring revenue streams, industry growth, and available markets.",
    url: "https://spaviafranchise.com/your-spavia",
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
    title: "Your Spavia | Spa Franchise Investment Opportunities",
    description:
      "Discover how Spavia delivers financial success through wellness. Learn about financial requirements, recurring revenue streams, industry growth, and available markets.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Your Spavia",
      url: "https://spaviafranchise.com/your-spavia",
      description:
        "Discover how Spavia delivers financial success through wellness. Learn about financial requirements, recurring revenue streams, industry growth, and available markets.",
    }),
  },
};

export default function Page() {
  return <YourSpaviaContent />;
}
