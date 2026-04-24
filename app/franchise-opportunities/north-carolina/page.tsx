import { Metadata } from "next";
import StateMarketContent from "../../components/StateMarketContent";
import { getStateBySlug } from "../../data/markets";

const state = getStateBySlug("north-carolina")!;

export const metadata: Metadata = {
  title: "North Carolina Spa Franchise: Charlotte & Raleigh Open",
  description:
    "Spavia spa franchise in North Carolina — Charlotte, Raleigh, and surrounding metros. Market data, open territories, and how to get started.",
  alternates: {
    canonical: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
  },
  openGraph: {
    title: "North Carolina Spa Franchise: Charlotte & Raleigh Open",
    description:
      "Spavia spa franchise in North Carolina — Charlotte, Raleigh, and surrounding metros. Market data, open territories, and how to get started.",
    url: "https://spaviafranchise.com/franchise-opportunities/north-carolina",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Carolina Spa Franchise: Charlotte & Raleigh Open",
    description:
      "Spavia spa franchise in North Carolina — Charlotte, Raleigh, and surrounding metros. Market data, open territories, and how to get started.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function NorthCarolinaPage() {
  return <StateMarketContent state={state} />;
}
