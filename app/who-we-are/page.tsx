import { Metadata } from "next";
import WhoWeAreContent from "../components/WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are | Spavia Franchise",
  description:
    "Vision, Passion & People. Meet our founders and leadership team committed to redefining the spa industry.",
};

export default function Page() {
  return <WhoWeAreContent />;
}
