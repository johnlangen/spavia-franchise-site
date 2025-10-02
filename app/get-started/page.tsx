import { Metadata } from "next";
import GetStartedContent from "../components/GetStartedContent";

export const metadata: Metadata = {
  title: "Get Started | Spavia Franchise | Franchising Opportunity",
  description:
    "Let's discuss the benefits of bringing a resort spa experience to your neighborhood by opening a Spavia Franchise! Learn more about our spa franchising opportunity.",
};

export default function Page() {
  return <GetStartedContent />;
}
