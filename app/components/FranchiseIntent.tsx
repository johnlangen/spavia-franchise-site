"use client";
import { useSearchParams } from "next/navigation";
const messages: Record<string, string> = {
  massage: "Explore a massage franchise with more to offer",
  wellness: "A wellness franchise built around your community",
  dayspa: "Explore full-service day spa ownership",
  brand: "Spavia franchise ownership",
};
export default function FranchiseIntent() {
  const params = useSearchParams();
  const intent = params
    .getAll("utm_content")
    .find((value) => Object.hasOwn(messages, value));
  return (
    <p className="eyebrow hero-intent">
      {intent ? messages[intent] : "Spavia franchise ownership"}
    </p>
  );
}
