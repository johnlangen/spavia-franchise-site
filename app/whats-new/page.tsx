import { Metadata } from "next";
import WhatsNewContent from "../components/WhatsNewContent";

export const metadata: Metadata = {
  title: "What's New at Spavia | Sway, Recovery Suites & Design Concepts",
  description:
    "Spavia is becoming a wellness platform: Sway by Spavia is open and growing, robotic massage and recovery suites are heading into pilot, and new design concepts are rolling out.",
  alternates: {
    canonical: "https://spaviafranchise.com/whats-new",
  },
  openGraph: {
    title: "What's New at Spavia | Sway, Recovery Suites & Design Concepts",
    description:
      "A second brand open and growing, robotic massage and recovery suites heading into pilot, and new design concepts. See where the Spavia platform is going.",
    url: "https://spaviafranchise.com/whats-new",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/media/sway-storefront.webp",
        width: 1600,
        height: 1176,
        alt: "Sway by Spavia storefront in Denver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's New at Spavia",
    description:
      "A second brand open and growing, robotic massage and recovery suites heading into pilot, and new design concepts.",
    images: ["https://spaviafranchise.com/media/sway-storefront.webp"],
  },
};

export default function Page() {
  return <WhatsNewContent />;
}
