import { Metadata } from "next";
import GetStartedContent from "../components/GetStartedContent";

export const metadata: Metadata = {
  title: "Spa Franchise Opportunities | Get Started With Spavia",
  description:
    "Join the $6.3 Trillion wellness industry with Spavia franchise opportunities. Proven spa model, membership revenue, and full training & support. Get started today.",
  alternates: {
    canonical: "https://spaviafranchise.com/get-started",
  },
};

export default function Page() {
  return <GetStartedContent />;
}
