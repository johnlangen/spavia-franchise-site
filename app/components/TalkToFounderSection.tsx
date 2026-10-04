"use client";

import Image from "next/image";
import Link from "next/link";

export default function TalkToFounderSection() {
  const trackScheduleClick = () =>
    window.gtag?.("event", "schedule_call_clicked", {
      event_category: "engagement",
      event_label: "homepage_founder_section",
    });
  return (
    <section className="section-space alisa-story" data-section="home_alisa">
      <div className="site-container alisa-grid">
        <div className="alisa-portrait">
          <Image
            src="/who-we-are/alisa-anderson.png"
            alt="Alisa Anderson, Vice President of Franchise Development at Spavia"
            fill
            sizes="(max-width: 800px) 160px, 350px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="eyebrow">Talk to Alisa</p>
          <h2 className="display-heading">
            A real conversation.
            <br />
            About your next chapter.
          </h2>
          <p className="body-copy mt-5">
            Alisa Anderson leads franchise development for our family-owned
            brand. With 15 years in franchising and experience as a multi-unit
            owner herself, she knows the questions behind the decision.
          </p>
          <h3 className="text-lg mt-6 mb-3">
            What your conversation with Alisa covers
          </h3>
          <ul className="conversation-topics">
            <li>
              <strong>Your goals.</strong> Where you want to build and what you
              want ownership to look like.
            </li>
            <li>
              <strong>The brand.</strong> How Spavia works and the support you
              can expect.
            </li>
            <li>
              <strong>Honest answers.</strong> Financing, timing, the FDD’s
              financial results and whether there’s a fit.
            </li>
          </ul>
          <div className="hero-actions">
            <Link
              href="/get-started"
              onClick={trackScheduleClick}
              className="button button-primary"
            >
              Request an Intro Call <span aria-hidden="true">→</span>
            </Link>
            <a href="mailto:alisa@spaviadayspa.com" className="text-link">
              Email Alisa
            </a>
          </div>
          <Link href="/steps-to-ownership" className="text-link mt-5">
            See all seven steps to ownership <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
