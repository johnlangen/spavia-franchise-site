import { Metadata } from "next";
import MassageFranchiseContent from "../components/MassageFranchiseContent";

export const metadata: Metadata = {
  title: "Massage Franchise Opportunity | Spavia Day Spa | $1.1M+ Revenue",
  description:
    "Looking at massage franchise opportunities? Spavia's full-service model — massage, facials, body treatments — generates $1.1M+ median gross sales. $479K–$885K to open. 63 locations.",
  alternates: {
    canonical: "https://spaviafranchise.com/massage-franchise",
  },
  openGraph: {
    title: "Massage Franchise Opportunity | Spavia Day Spa",
    description:
      "Looking at massage franchise opportunities? Spavia's full-service model — massage, facials, body treatments — generates $1.1M+ median gross sales. $479K–$885K to open.",
    url: "https://spaviafranchise.com/massage-franchise",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Massage Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Franchise Opportunity | Spavia Day Spa",
    description:
      "Looking at massage franchise opportunities? Spavia's full-service model — massage, facials, body treatments — generates $1.1M+ median gross sales.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <MassageFranchiseContent />;
}
