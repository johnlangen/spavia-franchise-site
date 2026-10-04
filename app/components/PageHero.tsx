import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image?: string;
  alt?: string;
  dark?: boolean;
  action?: { href: string; label: string };
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt = "",
  dark = false,
  action,
  children,
}: Props) {
  return (
    <section
      id="hero"
      className={`page-hero ${dark ? "page-hero-dark" : ""}`}
      data-section="page_intro"
    >
      <div className="site-container page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="body-copy mt-6">{intro}</div>
          {action && (
            <Link
              href={action.href}
              className={`button mt-7 ${dark ? "button-primary" : "button-dark"}`}
              data-track="cta_page_intro"
            >
              {action.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
        {image ? (
          <figure className="page-hero-image">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 48vw"
              className="object-cover"
            />
            {children && <figcaption>{children}</figcaption>}
          </figure>
        ) : (
          children && <div className="page-hero-aside">{children}</div>
        )}
      </div>
    </section>
  );
}
