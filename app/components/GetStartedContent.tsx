import Image from "next/image";
import Link from "next/link";
import { getStartedFaqs } from "../data/getStartedFaq";
import Breadcrumbs from "./Breadcrumbs";
import FaqList from "./FaqList";
import Footer from "./Footer";
import FranchiseLongForm from "./FranchiseLongForm";
import NavBar from "./NavBar";

export default function GetStartedContent() {
  return <><NavBar/><Breadcrumbs items={[{label:"Get Started"}]}/><main id="main-content">
    <section className="section-space inquiry-page"><div className="site-container inquiry-grid">
      <div><p className="eyebrow">Start a conversation</p><h1 className="display-heading">Request Franchise<br/>Information</h1><p className="body-copy mt-5">Tell us a little about yourself and the business you want to build. Alisa and the franchise development team will follow up within one business day.</p>
        <div className="inquiry-contact"><Image src="/who-we-are/alisa-anderson.png" alt="Alisa Anderson" width={80} height={96}/><div><p>Alisa Anderson</p><span>VP of Franchise Development</span><a href="mailto:alisa@spaviadayspa.com">Email Alisa directly →</a></div></div>
        <div className="inquiry-expectations"><h2>What comes next</h2><p>Receive the franchise overview, discuss your goals and market, and learn how Spavia ownership works.</p><Link href="/steps-to-ownership" className="text-link mt-4">See all seven steps to ownership →</Link></div>
        <p className="fine-print mt-6">No obligation. Candidates need $200K+ in liquid capital and $500K+ net worth. <Link href="/franchise-cost" className="underline">Review investment details.</Link></p>
      </div>
      <FranchiseLongForm/>
    </div></section>
    <section className="section-space"><div className="site-container max-w-4xl"><p className="eyebrow">Before you begin</p><h2 className="display-heading mb-6">A few helpful answers.</h2><FaqList items={getStartedFaqs}/></div></section>
  </main><Footer/></>;
}
