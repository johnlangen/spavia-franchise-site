import { Metadata } from "next";
import OurFranchiseesContent from "../components/OurFranchiseesContent";

export const metadata: Metadata = {
  title: "Our Franchisees | Spavia Franchise",
  description:
    "Passionate Entrepreneurs, Thriving Communities. Meet the people who bring Spavia’s vision to life in communities nationwide.",
};

export default function Page() {
  return <OurFranchiseesContent />;
}
