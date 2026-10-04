import Link from "next/link";

export default function AwardsSection() {
  return <section className="recognition-strip" aria-labelledby="recognition-heading"><div className="site-container recognition-grid"><div><h2 id="recognition-heading">A brand earning recognition.</h2><Link href="/press" className="text-link">See awards & press <span aria-hidden="true">→</span></Link></div><p><strong>Inc. 5000</strong><span>2026 · No. 3,221</span></p><p><strong>Newsweek Readers’ Choice</strong><span>2026 · Top 10 Best Massage Chain</span></p><p><strong>FranServe</strong><span>2026 · Fran-tastic Brand</span></p></div></section>;
}
