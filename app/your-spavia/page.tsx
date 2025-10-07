import { Metadata } from "next";
import YourSpaviaContent from "../components/YourSpaviaContent";

export const metadata: Metadata = {
  title: "Your Spavia | Spa Franchise Investment Opportunities",
  description:
    "Discover how Spavia delivers financial success through wellness. Learn about financial requirements, recurring revenue streams, industry growth, and available markets.",
  alternates: {
    canonical: "https://spaviafranchise.com/your-spavia",
  },
};

export default function Page() {
  return <YourSpaviaContent />;
}
