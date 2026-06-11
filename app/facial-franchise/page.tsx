import { Metadata } from "next";
import FacialFranchiseContent from "../components/FacialFranchiseContent";

export const metadata: Metadata = {
  title: "Facial Franchise Opportunity | Spavia Day Spa | $1.1M+ Revenue",
  description:
    "Exploring facial franchise opportunities? Spavia's full-service model — facials, skincare, massage, body treatments — generates $1.1M+ median gross sales. $479K–$885K to open. 63 locations.",
  alternates: {
    canonical: "https://spaviafranchise.com/facial-franchise",
  },
  openGraph: {
    title: "Facial Franchise Opportunity | Spavia Day Spa",
    description:
      "Exploring facial franchise opportunities? Spavia's full-service model — facials, skincare, massage, body treatments — generates $1.1M+ median gross sales. $479K–$885K to open.",
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
    title: "Facial Franchise Opportunity | Spavia Day Spa",
    description:
      "Exploring facial franchise opportunities? Spavia's full-service model — facials, skincare, massage, body treatments — generates $1.1M+ median gross sales.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <FacialFranchiseContent />;
}
