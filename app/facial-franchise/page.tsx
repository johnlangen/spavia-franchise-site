import { Metadata } from "next";
import FacialFranchiseContent from "../components/FacialFranchiseContent";

export const metadata: Metadata = {
  title: "Facial & Skincare Franchise Opportunities | Spavia",
  description: "Explore a facial and skincare franchise within a full-service Spavia day spa. Compare the service model, $479K–$885K investment and owner responsibilities.",
  alternates: {
    canonical: "https://spaviafranchise.com/facial-franchise",
  },
  openGraph: {
    title: "Facial & Skincare Franchise Opportunities | Spavia",
    description: "Explore a facial and skincare franchise within a full-service Spavia day spa. Compare the service model, $479K–$885K investment and owner responsibilities.",
    url: "https://spaviafranchise.com/facial-franchise",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Facial Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facial & Skincare Franchise Opportunities | Spavia",
    description: "Explore a facial and skincare franchise within a full-service Spavia day spa. Compare the service model, $479K–$885K investment and owner responsibilities.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FacialFranchiseContent />;
}
