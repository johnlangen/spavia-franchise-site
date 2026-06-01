import { Metadata } from "next";
import MultiUnitContent from "../components/MultiUnitContent";

export const metadata: Metadata = {
  title: "Multi-Unit Spavia Franchise Development | Build a Spa Portfolio",
  description:
    "Spavia multi-unit development for experienced operators. Territory protection, phased rollout, reduced franchise fees on each additional unit. $1.1M+ per-unit AUV with recurring membership economics.",
  alternates: {
    canonical: "https://spaviafranchise.com/multi-unit",
  },
  openGraph: {
    title: "Multi-Unit Spavia Franchise Development | Build a Spa Portfolio",
    description:
      "Multi-unit Spavia development for experienced operators. Territory protection, phased rollout, reduced franchise fees per additional unit. $1.1M+ per-unit AUV.",
    url: "https://spaviafranchise.com/multi-unit",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Multi-Unit Franchise Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Unit Spavia Franchise Development",
    description:
      "Multi-unit Spavia development for experienced operators. Territory protection, phased rollout, reduced fees per unit.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return <MultiUnitContent />;
}
