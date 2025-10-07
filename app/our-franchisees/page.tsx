// app/our-franchisees/page.tsx
import { Metadata } from "next";
import OurFranchiseesContent from "../components/OurFranchiseesContent";

export const metadata: Metadata = {
  title: "Our Franchisees | Spavia Spa Franchise Owners",
  description:
    "Meet Spavia spa franchise owners – passionate entrepreneurs building thriving communities and delivering exceptional wellness experiences nationwide.",
  alternates: {
    canonical: "https://spaviafranchise.com/our-franchisees",
  },
};

export default function Page() {
  return <OurFranchiseesContent />;
}
