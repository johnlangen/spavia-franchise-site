import { Metadata } from "next";
import YourSpaviaContent from "../components/YourSpaviaContent";

export const metadata: Metadata = {
  title: "Your Spavia | Spa Franchise Investment",
  description:
    "Discover how Spavia delivers financial success through wellness. Learn about financial requirements, revenue streams, industry growth, and available markets.",
};

export default function Page() {
  return <YourSpaviaContent />;
}
