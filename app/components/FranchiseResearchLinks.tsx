import Link from "next/link";

export default function FranchiseResearchLinks() {
  return (
    <aside aria-label="Continue your franchise research" className="my-10 rounded-xl border border-[#C2A878]/40 bg-[#C2A878]/5 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-3">Explore ownership with Spavia</h2>
      <p className="text-gray-600 mb-4">Connect your research to the costs, services and markets that fit your plans.</p>
      <ul className="grid sm:grid-cols-2 gap-3 text-sm">
        {[
          ["/franchise-cost", "Spavia franchise costs and fees"],
          ["/day-spa-franchise", "The full-service day spa franchise model"],
          ["/franchise-opportunities", "Explore franchise markets by state"],
          ["/get-started", "Talk with Alisa about your plans"],
        ].map(([href, label]) => <li key={href}><Link href={href} className="text-[#705b31] underline underline-offset-4">{label}</Link></li>)}
      </ul>
    </aside>
  );
}
