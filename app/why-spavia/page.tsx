// app/why-spavia/page.tsx
import { Metadata } from "next";
import WhySpaviaContent from "../components/WhySpaviaContent";

export const metadata: Metadata = {
  title: "Why Spavia | Spa Franchise With Multiple Revenue Streams",
  description:
    "Discover why Spavia is the leading spa franchise. Redefining spa excellence with purpose, passion, and multiple revenue streams for proven success.",
  alternates: {
    canonical: "https://spaviafranchise.com/why-spavia",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <WhySpaviaContent />
    </main>
  );
}
