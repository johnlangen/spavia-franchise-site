import Link from "next/link";
import { homepageFaqItems } from "../data/homepageFaq";
import FaqList from "./FaqList";

export default function FAQ() {
  return <section className="section-space" data-section="home_faq"><div className="site-container faq-section-grid">
    <div><p className="eyebrow">A few things you may be wondering</p><h2 className="display-heading">Good questions.<br />Clear answers.</h2><Link href="/steps-to-ownership" className="text-link mt-6">Explore the ownership process <span aria-hidden="true">→</span></Link></div>
    <div><FaqList items={homepageFaqItems} /><Link href="/training-and-support" className="text-link mt-6">See details on training and support <span aria-hidden="true">→</span></Link></div>
  </div></section>;
}
