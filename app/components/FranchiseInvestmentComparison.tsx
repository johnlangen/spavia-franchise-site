import Link from "next/link";
import { franchiseComparisons } from "../data/franchiseComparisons";

export default function FranchiseInvestmentComparison() {
  return (
    <div>
      <div className="overflow-x-auto rounded-sm border border-gray-200">
        <table className="w-full min-w-[600px] text-left text-sm">
          <caption className="bg-gray-50 px-5 py-4 text-left font-semibold text-gray-900 brand-light">
            Published initial investment for a single location
          </caption>
          <thead className="bg-gray-900 text-white brand-dark">
            <tr><th scope="col" className="p-4">Brand</th><th scope="col" className="p-4">Initial investment</th><th scope="col" className="p-4">Service model</th></tr>
          </thead>
          <tbody>
            {franchiseComparisons.map((brand) => (
              <tr key={brand.name} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
                <th scope="row" className="p-4 font-semibold text-gray-900">{brand.name}</th>
                <td className="p-4 whitespace-nowrap text-gray-700">{brand.investment}</td>
                <td className="p-4 text-gray-700">{brand.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        Checked October 2, 2026. These are each brand’s published ranges, not identical build-out quotes.
        Site size, construction, lease terms and included working capital differ. Review the current FDD
        and its assumptions for each brand. Initial investment is separate from liquid capital requirements.
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {franchiseComparisons.map((brand) => (
          <li key={brand.name}><Link href={brand.source} className="text-[#705b31] underline underline-offset-4">{brand.sourceLabel}</Link></li>
        ))}
      </ul>
    </div>
  );
}
