import { Metadata } from "next";
import StepsToOwnershipContent from "../components/StepsToOwnershipContent";

export const metadata: Metadata = {
  title: "Spa Ownership | Spavia Spa Franchise | Luxury Spa Franchises",
  description:
    "Learn the step by step process of spa ownership with Spavia and find answers to frequently asked questions.",
};

export default function Page() {
  return <StepsToOwnershipContent />;
}
