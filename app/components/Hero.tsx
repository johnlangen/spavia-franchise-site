import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import FranchiseIntent from "./FranchiseIntent";
import FranchiseOverviewForm from "./FranchiseOverviewForm";

export default function Hero() {
  return (
    <>
      <section id="hero" className="home-hero" data-section="home_intro">
        <div className="home-hero-copy">
          <Suspense
            fallback={
              <p className="eyebrow hero-intent">Spavia franchise ownership</p>
            }
          >
            <FranchiseIntent />
          </Suspense>
          <h1>
            Own a day spa franchise.
            <br />
            <span>
              Make room for
              <br className="hidden xl:block" /> something more.
            </span>
          </h1>
          <p className="home-hero-description">
            Join 60+ owners building day spas with{" "}
            <strong>$1.1M median gross sales.*</strong> A family-owned brand
            with recurring membership revenue.
          </p>
          <div className="hero-contact">
            <Image
              src="/who-we-are/alisa-anderson.png"
              alt="Alisa Anderson"
              width={64}
              height={76}
              sizes="64px"
              priority
            />
            <div>
              <p className="hero-contact-name">Meet Alisa Anderson</p>
              <p>VP of Franchise Development</p>
              <p className="hero-contact-message">
                Your guide to Spavia ownership.
              </p>
            </div>
          </div>
          <div id="franchise-overview" className="hero-overview">
            <FranchiseOverviewForm
              leadSource="homepage-hero"
              formType="hero"
              compact
            />
          </div>
          <div className="hero-actions">
            <Link
              href="/franchise-cost"
              className="text-link"
              data-track="cta_investment"
            >
              Explore the investment
            </Link>
          </div>
          <div className="hero-signature">
            <span>Family-owned since 2005</span>
            <span>Not PE-backed</span>
            <span>60+ spas across the U.S.</span>
          </div>
          <p className="fine-print hero-fine-print">
            *$1,110,481 median 2025 cash receipts (gross sales) at 44 reporting franchised
            locations, 2026 FDD Item 19, Part III. Results vary.
          </p>
        </div>
        <figure className="home-hero-photo" data-motion="photo">
          <Image
            src="/media/guest-robe-fireplace.webp"
            alt="A Spavia guest unwinds by the fireplace in a plush robe"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
            className="object-cover"
          />
          <figcaption>
            <span>The experience you’ll bring to life</span>
            <p>Relax. Recenter. Renew.</p>
          </figcaption>
        </figure>
      </section>
      <section
        className="home-overview"
        data-section="home_overview"
      >
        <div className="site-container home-overview-grid">
          <div data-motion="rise">
            <p className="eyebrow">A business with substance</p>
            <h2 className="display-heading">
              A thoughtful first step.
              <br />A clearer picture.
            </h2>
            <p className="body-copy mt-5 max-w-lg">
              A day spa franchise built around massage, facials and the feeling
              that brings guests back. Explore what it takes to open and the
              team that will help you get there.
            </p>
          </div>
          <div>
            <dl className="overview-facts" data-motion="rise">
              <div>
                <dt>Total initial investment*</dt>
                <dd>$479K–$885K</dd>
              </div>
              <div>
                <dt>The business model</dt>
                <dd>
                  One spa.
                  <br />
                  Multiple revenue streams.
                </dd>
              </div>
            </dl>
            <p className="fine-print">
              *Estimated $479,450–$885,450. 2026 Spavia FDD, Item 7.
            </p>
            <Link
              href="/day-spa-franchise"
              className="text-link mt-5"
              data-track="cta_business_model"
            >
              Explore the full-service day spa model{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
