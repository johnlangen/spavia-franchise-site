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
        <div className="alisa-portrait" data-motion="photo">
          <Image
            src="/who-we-are/image2.png"
            alt="Allison Langenderfer, co-founder of Spavia"
            fill
            sizes="(max-width: 800px) 160px, 350px"
            className="object-cover object-top"
          />
        </div>
        <div data-motion="rise">
          <p className="eyebrow">Talk to Our Founder</p>
          <h2 className="display-heading">
            A real conversation.
            <br />
            About your next chapter.
          </h2>
          <p className="body-copy mt-5">
            Allison Langenderfer co-founded Spavia in 2005. We are still
            family-owned, with no private equity, and your first conversation
            happens with the founder who built the brand, not a sales team.
          </p>
          <h3 className="text-lg mt-6 mb-3">
            What your conversation with Allison covers
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
              Request a Discovery Call <span aria-hidden="true">→</span>
            </Link>
            <a href="mailto:allison@spaviadayspa.com" className="text-link">
              Email Allison
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
