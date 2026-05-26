import { Metadata } from "next";
import WellnessFranchiseContent from "../components/WellnessFranchiseContent";

export const metadata: Metadata = {
  title: "Wellness Franchise Opportunity | Spavia | $1.1M+ Median Revenue",
  description:
    "Spavia is a full-service wellness franchise with $1.1M+ median gross sales (2026 FDD). $479K–$885K investment, recurring membership model, 63 locations, multi-service revenue mix.",
  alternates: {
    canonical: "https://spaviafranchise.com/wellness-franchise",
  },
  openGraph: {
    title: "Wellness Franchise Opportunity | Spavia",
    description:
      "Spavia is a full-service wellness franchise with $1.1M+ median gross sales (2026 FDD). $479K–$885K investment, recurring membership model, 63 locations.",
    url: "https://spaviafranchise.com/wellness-franchise",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Wellness Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Franchise Opportunity | Spavia",
    description:
      "Spavia is a full-service wellness franchise with $1.1M+ median gross sales (2026 FDD). $479K–$885K investment, recurring membership model, 63 locations.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <WellnessFranchiseContent />;
}
