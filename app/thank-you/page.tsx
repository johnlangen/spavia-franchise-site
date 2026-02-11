import { Metadata } from "next";
import ThankYouContent from "../components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Spavia Franchise",
  description:
    "Thank you for contacting Spavia. Our franchise development team will be in touch shortly.",
  alternates: {
    canonical: "https://spaviafranchise.com/thank-you",
  },
  openGraph: {
    title: "Thank You | Spavia Franchise",
    description:
      "Thank you for contacting Spavia. Our franchise development team will be in touch shortly.",
    url: "https://spaviafranchise.com/thank-you",
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
    title: "Thank You | Spavia Franchise",
    description:
      "Thank you for contacting Spavia. Our franchise development team will be in touch shortly.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <ThankYouContent />;
}
