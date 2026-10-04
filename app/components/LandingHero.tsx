import Image from "next/image";
import Link from "next/link";
import FranchiseOverviewForm from "./FranchiseOverviewForm";

interface LandingHeroProps {
  breadcrumbLabel?: string;
  headlineFirst: string;
  headlineSecond: string;
  headlineHighlight: string;
  subhead: string;
  bullets: string[];
  sourceLine?: string;
  leadSource: string;
}

const photography: Record<string, { src: string; alt: string }> = {
  massage: {
    src: "/media/signature-massage-candle.webp",
    alt: "Massage therapy in a warm, candlelit Spavia treatment room",
  },
  facial: {
    src: "/media/facial-fan-brush.webp",
    alt: "A customized Spavia facial treatment",
  },
  wellness: {
    src: "/media/fireplace-retreat-wide.webp",
    alt: "Spavia's retreat room, designed for relaxation between treatments",
  },
  "multi-unit": {
    src: "/media/exterior-storefront.webp",
    alt: "A Spavia day spa storefront in its community",
  },
};

export default function LandingHero({
  headlineFirst,
  headlineSecond,
  headlineHighlight,
  subhead,
  bullets,
  sourceLine = "Source: 2026 Spavia FDD, Items 7 & 19. Results vary by location.",
  leadSource,
}: LandingHeroProps) {
  const photo = Object.entries(photography).find(([key]) =>
    leadSource.includes(key),
  )?.[1] ?? {
    src: "/media/reception-guest-experience.webp",
    alt: "A guest is welcomed at a Spavia day spa",
  };
  return (
    <section id="hero" className="landing-hero" data-section="landing_intro">
      <div className="site-container landing-hero-grid">
        <div className="landing-story">
          <p className="eyebrow">The Spavia opportunity</p>
          <h1>
            {headlineFirst}{" "}
            <span>
              {headlineSecond} <em>{headlineHighlight}</em>
            </span>
          </h1>
          <p className="body-copy mt-5">{subhead}</p>
          <a
            href="#landing-overview"
            className="button button-primary mt-6 landing-overview-link"
            data-track="cta_overview"
          >
            Get the Franchise Overview <span aria-hidden="true">→</span>
          </a>
          <figure className="landing-photo">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </figure>
          <ul className="landing-proof">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="fine-print mt-4">{sourceLine}</p>
          <Link
            href="/franchise-cost"
            className="text-link mt-4"
            data-track="cta_investment"
          >
            Review costs and financial details <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div id="landing-overview">
          <FranchiseOverviewForm leadSource={leadSource} formType="landing" />
        </div>
      </div>
    </section>
  );
}
