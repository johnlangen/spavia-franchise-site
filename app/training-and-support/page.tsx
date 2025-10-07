// app/training-and-support/page.tsx
import { Metadata } from "next";
import TrainingAndSupportContent from "../components/TrainingAndSupportContent";

export const metadata: Metadata = {
  title: "Spa Franchise Training and Support | Spavia Spa Franchises",
  description:
    "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
  alternates: {
    canonical: "https://spaviafranchise.com/training-and-support",
  },
};

export default function Page() {
  return <TrainingAndSupportContent />;
}
