import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import FranchiseIntent from "./FranchiseIntent";
import FranchiseOverviewForm from "./FranchiseOverviewForm";

export default function Hero() {
  return (
    <>
      <section id="hero" className="video-hero" data-section="home_intro">
        <Image
          src="/media/guest-robe-fireplace.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="video-hero-media object-cover"
        />
        <video
          className="video-hero-media video-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/guest-robe-fireplace.webp"
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="video-hero-scrim" aria-hidden="true" />
        <div className="video-hero-inner">
          <div className="video-hero-copy">
            <Suspense
              fallback={
                <p className="eyebrow hero-intent">Spavia franchise ownership</p>
              }
            >
              <FranchiseIntent />
            </Suspense>
            <h1>Own a Day Spa Franchise</h1>
            <p className="video-hero-big">
              $1.1M
              <span>median gross sales*</span>
            </p>
            <p className="video-hero-sub">
              Join 60+ owners building $1M+ day spas in their communities.*
            </p>
          </div>
          <div id="franchise-overview" className="video-hero-form">
            <FranchiseOverviewForm
              leadSource="homepage-hero"
              formType="hero"
              compact
            />
          </div>
          <div className="video-hero-proof">
            <ul>
              <li>
                <strong>1 in 2</strong> owners above $1M*
              </li>
              <li>
                <strong>$479K–$885K</strong> initial investment
              </li>
              <li>Family-owned since 2005 · Not PE-backed</li>
            </ul>
            <p>
              *2026 FDD Item 19, Part III: $1,110,481 median 2025 cash receipts
              (gross sales) at 44 reporting franchised locations, so at least
              half exceeded $1M. Investment per Item 7. Results vary.{" "}
              <Link href="/franchise-cost" data-track="cta_investment">
                See the full financials
              </Link>
            </p>
          </div>
        </div>
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
