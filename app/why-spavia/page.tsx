// app/why-spavia/page.tsx
import { Metadata } from "next";
import WhySpaviaContent from "../components/WhySpaviaContent";

export const metadata: Metadata = {
  title: "Why Spavia | Luxury Spa Franchise",
  description:
    "Redefining Spa Excellence with Purpose and Passion. Spavia provides multiple streams of revenue and a proven system for success.",
};

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <WhySpaviaContent />
    </main>
  );
}
