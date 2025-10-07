// app/who-we-are/page.tsx
import { Metadata } from "next";
import WhoWeAreContent from "../components/WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are | Meet the Founders of Spavia Franchise",
  description:
    "Meet the founders and leadership team behind Spavia Franchise. Discover our vision, passion, and commitment to redefining the spa industry.",
  alternates: {
    canonical: "https://spaviafranchise.com/who-we-are",
  },
};

export default function Page() {
  return <WhoWeAreContent />;
}
