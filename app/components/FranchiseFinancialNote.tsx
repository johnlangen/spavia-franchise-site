import Link from "next/link";
export default function FranchiseFinancialNote() {
  return <aside className="my-8 rounded-sm border border-[#b38a5f]/40 bg-[#b38a5f]/5 p-5 text-sm leading-relaxed text-gray-700">
    <p className="font-semibold mb-2">Spavia financial figures updated October 2, 2026</p>
    <p>The 2026 FDD, Item 7 estimates $479,450–$885,450 to open a single day spa. Item 19, Part III reports median annual revenue (cash receipts) of $1,110,481, median cash flow from operations of $199,773 and a median operating margin of 18.4% among 44 reporting franchised locations for 2025.</p>
    <p className="mt-2">Revenue and cash flow are not owner take-home income. Reported cash flow excludes owner salary or withdrawals, debt service, managerial expenses, depreciation and amortization, home office expenses, and business meals and travel. Results vary. Review the full FDD and its notes with the franchise team.</p>
    <Link href="/franchise-cost" className="inline-block mt-3 text-[#705b31] underline underline-offset-4">See current Spavia costs, fees and requirements</Link>
  </aside>;
}
