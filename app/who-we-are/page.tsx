import { Metadata } from "next";
import WhoWeAreContent from "../components/WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are | Meet the Founders of Spavia Franchise",
  description:
    "Meet the founders and leadership team behind Spavia Franchise. Discover our vision, passion, and commitment to redefining the spa industry.",
  alternates: {
    canonical: "https://spaviafranchise.com/who-we-are",
  },
  openGraph: {
    title: "Who We Are | Meet the Founders of Spavia Franchise",
    description:
      "Meet the founders and leadership team behind Spavia Franchise. Discover our vision, passion, and commitment to redefining the spa industry.",
    url: "https://spaviafranchise.com/who-we-are",
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
    title: "Who We Are | Meet the Founders of Spavia Franchise",
    description:
      "Meet the founders and leadership team behind Spavia Franchise. Discover our vision, passion, and commitment to redefining the spa industry.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Spavia Franchise",
      url: "https://spaviafranchise.com/who-we-are",
      description:
        "Meet the founders and leadership team behind Spavia Franchise. Discover our vision, passion, and commitment to redefining the spa industry.",
      sameAs: [
        "https://www.facebook.com/SpaviaSpa",
        "https://www.instagram.com/spavia",
      ],
    }),
  },
};

export default function Page() {
  return <WhoWeAreContent />;
}
