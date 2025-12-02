import { Metadata } from "next";
import GetStartedContent from "../components/GetStartedContent";

export const metadata: Metadata = {
  title: "Spa Franchise Opportunities | Get Started With Spavia",
  description:
    "Join the $6.3 Trillion wellness industry with Spavia franchise opportunities. Proven spa model, membership revenue, and full training & support. Get started today.",
  alternates: {
    canonical: "https://spaviafranchise.com/get-started",
  },
  openGraph: {
    title: "Spa Franchise Opportunities | Get Started With Spavia",
    description:
      "Learn how to open a Spavia Day Spa. Explore our proven franchise model, membership revenue system, and full training & support.",
    url: "https://spaviafranchise.com/get-started",
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
    title: "Spa Franchise Opportunities | Get Started With Spavia",
    description:
      "Learn how to open a Spavia Day Spa. Explore our proven franchise model, membership revenue system, and training & support.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Get Started With Spavia",
      url: "https://spaviafranchise.com/get-started",
      description:
        "Join the $6.3 Trillion wellness industry with Spavia franchise opportunities. Proven spa model, membership revenue, and full training & support.",
    }),
  },
};

export default function Page() {
  return <GetStartedContent />;
}
