import { Metadata } from "next";
import PressContent from "../components/PressContent";

const pressJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Spavia Day Spa Press & Recognition",
  description:
    "Awards, press coverage, and industry recognition for Spavia Day Spa franchise, including Franchise Times Top 400, Inc. 5000, Entrepreneur Franchise 500, and more.",
  url: "https://spaviafranchise.com/press",
  isPartOf: {
    "@type": "WebSite",
    name: "Spavia Franchise",
    url: "https://spaviafranchise.com",
  },
  about: {
    "@type": "Organization",
    name: "Spavia Day Spa",
    url: "https://spaviafranchise.com",
  },
};

export const metadata: Metadata = {
  title: "Press & Recognition | Spavia Day Spa Franchise",
  description:
    "Spavia Day Spa franchise press coverage, awards, and industry recognition. Featured in Franchise Times Top 400, Inc. 5000, Entrepreneur Franchise 500, and more.",
  alternates: {
    canonical: "https://spaviafranchise.com/press",
  },
  openGraph: {
    title: "Press & Recognition | Spavia Day Spa Franchise",
    description:
      "Spavia Day Spa franchise press coverage, awards, and industry recognition. Featured in Franchise Times Top 400, Inc. 5000, Entrepreneur Franchise 500, and more.",
    url: "https://spaviafranchise.com/press",
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
    title: "Press & Recognition | Spavia Day Spa Franchise",
    description:
      "Spavia Day Spa franchise press coverage, awards, and industry recognition. Featured in Franchise Times Top 400, Inc. 5000, Entrepreneur Franchise 500, and more.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressJsonLd) }}
      />
      <PressContent />
    </>
  );
}
