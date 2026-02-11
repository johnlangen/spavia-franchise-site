import { Metadata } from "next";
import WhySpaviaContent from "../components/WhySpaviaContent";

export const metadata: Metadata = {
  title: "Why Spavia | Spa Franchise With Multiple Revenue Streams",
  description:
    "Discover why Spavia is the leading spa franchise. Redefining spa excellence with purpose, passion, and multiple revenue streams for proven success.",
  alternates: {
    canonical: "https://spaviafranchise.com/why-spavia",
  },
  openGraph: {
    title: "Why Spavia | Spa Franchise With Multiple Revenue Streams",
    description:
      "Discover why Spavia is the leading spa franchise. Redefining spa excellence with purpose, passion, and multiple revenue streams for proven success.",
    url: "https://spaviafranchise.com/why-spavia",
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
    title: "Why Spavia | Spa Franchise With Multiple Revenue Streams",
    description:
      "Discover why Spavia is the leading spa franchise. Redefining spa excellence with purpose, passion, and multiple revenue streams for proven success.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <WhySpaviaContent />
    </main>
  );
}
