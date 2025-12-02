import { Metadata } from "next";
import OurFranchiseesContent from "../components/OurFranchiseesContent";

export const metadata: Metadata = {
  title: "Our Franchisees | Spavia Spa Franchise Owners",
  description:
    "Meet Spavia spa franchise owners – passionate entrepreneurs building thriving communities and delivering exceptional wellness experiences nationwide.",
  alternates: {
    canonical: "https://spaviafranchise.com/our-franchisees",
  },
  openGraph: {
    title: "Our Franchisees | Spavia Spa Franchise Owners",
    description:
      "Meet Spavia spa franchise owners – passionate entrepreneurs building thriving communities and delivering exceptional wellness experiences nationwide.",
    url: "https://spaviafranchise.com/our-franchisees",
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
    title: "Our Franchisees | Spavia Spa Franchise Owners",
    description:
      "Meet Spavia spa franchise owners – passionate entrepreneurs building thriving communities and delivering exceptional wellness experiences nationwide.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Our Franchisees",
      url: "https://spaviafranchise.com/our-franchisees",
      description:
        "Meet Spavia spa franchise owners – passionate entrepreneurs building thriving communities and delivering exceptional wellness experiences nationwide.",
    }),
  },
};

export default function Page() {
  return <OurFranchiseesContent />;
}
