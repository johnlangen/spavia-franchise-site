"use client";
import FaqList from "./FaqList";
import PageHero from "./PageHero";

import Link from "next/link";
import AwardsSection from "./AwardsSection";
import Breadcrumbs from "./Breadcrumbs";
import NavBar from "./NavBar";
import ProcessSection from "./ProcessSection";
import { ThemeProvider } from "./ThemeProvider";

import { ownershipFaqItems } from "../data/ownershipFaq";
import Footer from "./Footer";

export default function StepsToOwnershipContent() {

  return (
    <ThemeProvider>
      <main id="main-content" className="text-gray-900">
        <NavBar />
        <Breadcrumbs sticky items={[{ label: "Steps to Ownership" }]} />

        {/* Hero */}
        <PageHero eyebrow="Get to know each other. Then decide." title="Steps to Spa Ownership" intro="Seven steps, with time to ask questions along the way. Start with Alisa, explore the business and your market, speak with current owners and meet our founders in Denver." image="/media/exterior-storefront.webp" alt="A Spavia day spa storefront at dusk" action={{href:"#ownership-process-heading",label:"See the seven steps"}} />

        {/* Process Section */}
        <section className="bg-white brand-light">
          <ProcessSection />
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white brand-light">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <FaqList items={ownershipFaqItems} />

            {/* Multi-unit callout */}
            <div className="mt-12 max-w-3xl mx-auto rounded-sm border border-[#b38a5f]/40 bg-[#b38a5f]/5 px-6 py-5 text-center">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold text-[var(--accent-text)]">Building a regional portfolio?</span>{" "}
                Spavia offers multi-unit Development Agreements with territory
                protection and reduced franchise fees on each additional unit.
              </p>
              <Link
                href="/multi-unit"
                className="text-sm font-semibold text-[var(--accent-text)] hover:underline"
              >
                See multi-unit development →
              </Link>
            </div>

            {/* Get Started Button */}
            <div className="mt-12 text-center">
              <Link href="/get-started" className="button button-primary">Start with an introduction →</Link>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="bg-gray-50 brand-light">
          <AwardsSection />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
