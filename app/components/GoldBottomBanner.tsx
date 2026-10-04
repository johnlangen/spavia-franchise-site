import Image from "next/image";
import Link from "next/link";

/** Shared closing invitation, retained under its existing import name. */
export default function GoldBottomBanner() {
  return (
    <section className="closing-invitation" data-section="closing_invitation">
      <div className="site-container closing-grid">
        <div className="closing-person" data-motion="rise">
          <Image
            src="/who-we-are/alisa-anderson.png"
            alt="Alisa Anderson, Spavia VP of Franchise Development"
            width={112}
            height={136}
          />
          <p>
            Alisa Anderson
            <span>
              Your first conversation.
              <br />A real person.
            </span>
          </p>
        </div>
        <div>
          <p className="eyebrow">Let’s explore what comes next</p>
          <h2 className="display-heading">
            Your questions.
            <br />A conversation worth having.
          </h2>
          <p className="body-copy mt-4">
            Talk through your goals, your market and whether owning a Spavia is
            the right fit.
          </p>
        </div>
        <div className="closing-actions">
          <Link
            href="/get-started"
            className="button button-primary"
            data-track="cta_closing_inquiry"
          >
            Request Franchise Info <span aria-hidden="true">→</span>
          </Link>
          <a href="mailto:alisa@spaviadayspa.com" className="text-link">
            Email Alisa directly
          </a>
        </div>
      </div>
    </section>
  );
}
