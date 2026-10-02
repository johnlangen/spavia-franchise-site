import type { Metadata } from "next";
import Link from "next/link";
import FranchiseGuideArticle from "../../../../../components/FranchiseGuideArticle";

const title = "Spavia vs. Woodhouse Spa Franchise: Costs & Ownership";
const description = "Compare Spavia and Woodhouse investment ranges, capital requirements, spa formats and support using current published sources.";
const path = "/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise";
export const metadata: Metadata = {
  title, description, alternates: { canonical: `https://spaviafranchise.com${path}` },
  openGraph: { title, description, url: `https://spaviafranchise.com${path}`, type: "article", publishedTime: "2026-02-12", modifiedTime: "2026-10-02", images: [{ url: "https://spaviafranchise.com/blog/blog21.jpg", width: 1200, height: 675, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["https://spaviafranchise.com/blog/blog21.jpg"] },
};
const faqs = [
  {
    "q": "How much does a Spavia franchise cost compared with Woodhouse?",
    "a": "Spavia’s 2026 FDD estimates $479,450–$885,450 for a single day spa. Woodhouse publishes $1,482,439–$2,697,879. The ranges reflect different formats and assumptions and should be reviewed with each brand’s current FDD."
  },
  {
    "q": "What liquid capital is required?",
    "a": "Spavia’s candidate requirement is at least $200,000 liquid capital and $500,000 net worth. Woodhouse’s published requirements are $700,000 liquid assets and $1,000,000 net worth. These are qualification criteria, not the full initial investment."
  },
  {
    "q": "Do both brands offer massage and facials?",
    "a": "Yes. Both are day spa concepts offering massage, facials and body treatments. Compare the guest experience, local menu, facility requirements and franchise support rather than assuming one brand is massage-only."
  },
  {
    "q": "Which spa franchise is the better fit?",
    "a": "That depends on your capital, market, preferred format and ownership plans. Spavia offers a membership-based, resort-inspired day spa at its published investment range. Talk with each brand and review its current disclosures before deciding."
  }
];
export default function Page() {
  return <FranchiseGuideArticle title={title} description={description} path={path} image="/blog/blog21.jpg" published="2026-02-12" faqs={faqs}>
    <section>
      <h2>Two day spa concepts with different investment requirements</h2>
      <p>Spavia and Woodhouse both offer massage, facials and body treatments. The useful comparison is the business you will operate: the capital required, facility, guest experience, ongoing obligations and support. This comparison is published by Spavia and is not an independent ranking.</p>
      <p>Spavia has been family-owned and founder-led since 2005. Its <Link href="/day-spa-franchise">day spa franchise</Link> combines a resort-inspired experience with a membership model. Woodhouse describes its brand as a luxury spa concept. Both deserve to be assessed on their current disclosures and the fit with your plans.</p>
    </section>
    <section>
      <h2>Investment and candidate requirements</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[550px] text-sm text-left">
          <caption className="text-left bg-gray-50 p-4 font-semibold">Published requirements checked October 2, 2026</caption>
          <thead className="bg-gray-900 text-white"><tr><th scope="col" className="p-4">Measure</th><th scope="col" className="p-4">Spavia</th><th scope="col" className="p-4">Woodhouse</th></tr></thead>
          <tbody>
            {[
              ["Initial investment", "$479,450–$885,450", "$1,482,439–$2,697,879"],
              ["Liquid capital requirement", "$200,000+", "$700,000+"],
              ["Net worth requirement", "$500,000+", "$1,000,000+"],
              ["Royalty", "6% of Gross Sales", "6% of gross revenue"],
              ["Brand / national marketing fund", "1% of Gross Sales", "2% of gross revenue"],
            ].map(([label, spavia, woodhouse]) => <tr key={label} className="border-t border-gray-200 odd:bg-white even:bg-gray-50"><th scope="row" className="p-4">{label}</th><td className="p-4">{spavia}</td><td className="p-4">{woodhouse}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-600">Sources: Spavia’s 2026 FDD, Items 6 and 7, and current candidate requirements; <a href="https://www.ownawoodhouse.com/faq/">Woodhouse’s official franchise FAQ</a>. These rows are not a complete list of fees. Woodhouse also lists a 1.75% local marketing requirement. Review both FDDs for all obligations and definitions.</p>
      <p>Spavia’s <Link href="/franchise-cost">cost breakdown</Link> includes its $59,500 franchise fee, $5,000 initial training fee, build-out, equipment and three months of additional funds. Compare complete opening budgets, including the treatment of working capital and the condition of your proposed space.</p>
    </section>
    <section>
      <h2>Compare the guest experience and the operating format</h2>
      <p>Spavia’s membership model is designed around repeat visits for massage, facials and other spa services. Woodhouse’s published FAQ describes an average facility of approximately 4,500–6,000 square feet. Format and site choices affect the build-out, staffing plan and capital needed.</p>
      <p>A larger spa or a broader menu does not by itself establish profitability. Ask how the layout, staffing and guest experience work together in the specific format you are considering. For Spavia, explore <Link href="/your-spavia">the spa environment and service model</Link> and <Link href="/our-franchisees">owner perspectives</Link>.</p>
    </section>
    <section>
      <h2>Keep revenue separate from owner income</h2>
      <p>Spavia’s 2026 FDD, Item 19, Part III reports median annual revenue (cash receipts) of $1,110,481 among 44 reporting franchised locations for 2025. Revenue is not profit or personal income, and individual results vary.</p>
      <p>Woodhouse publishes its own financial performance information. Comparing its average to a Spavia median without the reporting criteria would hide meaningful differences. Review each brand’s Item 19, location sample, measurement period and expenses. This comparison does not project a return for either franchise.</p>
    </section>
    <section>
      <h2>Match the support and market to your plans</h2>
      <p>Both brands describe franchise training and support. At Spavia, the conversation covers site selection, build-out guidance, training, marketing and operations. Review <Link href="/training-and-support">Spavia’s support</Link> and bring specific questions about your experience and preferred market.</p>
      <p>Use the <Link href="/franchise-opportunities">state market pages</Link> as a starting point, then have the team confirm territory availability. Alisa Anderson leads Spavia’s introductory conversation and can help you understand the <Link href="/steps-to-ownership">steps to ownership</Link>. If Spavia fits your plans, <Link href="/get-started">request an introduction</Link>.</p>
    </section>
  </FranchiseGuideArticle>;
}
