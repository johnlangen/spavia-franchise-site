import { Metadata } from "next";
import WellnessFranchiseContent from "../components/WellnessFranchiseContent";

export const metadata: Metadata = {
  title: "Wellness Franchise Opportunities: The Spavia Spa Model",
  description: "Compare wellness franchise models and explore Spavia’s membership-based day spa. See investment requirements, services, owner responsibilities and support.",
  alternates: {
    canonical: "https://spaviafranchise.com/wellness-franchise",
  },
  openGraph: {
    title: "Wellness Franchise Opportunities: The Spavia Spa Model",
    description: "Compare wellness franchise models and explore Spavia’s membership-based day spa. See investment requirements, services, owner responsibilities and support.",
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
    title: "Wellness Franchise Opportunities: The Spavia Spa Model",
    description: "Compare wellness franchise models and explore Spavia’s membership-based day spa. See investment requirements, services, owner responsibilities and support.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <WellnessFranchiseContent />;
}
