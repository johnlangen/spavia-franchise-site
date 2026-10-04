import Image from "next/image";
import Link from "next/link";

const groups = [
  {
    label: "Your opportunity",
    links: [
      ["Franchise cost", "/franchise-cost"],
      ["Available markets", "/franchise-opportunities"],
      ["Steps to ownership", "/steps-to-ownership"],
      ["Multi-unit development", "/multi-unit"],
      ["Request franchise info", "/get-started"],
    ],
  },
  {
    label: "The Spavia difference",
    links: [
      ["Why Spavia", "/why-spavia"],
      ["Our story & team", "/who-we-are"],
      ["Meet our owners", "/our-franchisees"],
      ["Training & support", "/training-and-support"],
      ["Your Spavia", "/your-spavia"],
    ],
  },
  {
    label: "Explore the model",
    links: [
      ["Day spa franchise", "/day-spa-franchise"],
      ["Massage franchise", "/massage-franchise"],
      ["Facial franchise", "/facial-franchise"],
      ["Wellness franchise", "/wellness-franchise"],
      ["Franchise insights", "/blog"],
      ["Press & recognition", "/press"],
      ["What’s new", "/whats-new"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Spavia franchise home">
              <Image
                src="/spavia-logo.png"
                alt="Spavia"
                width={170}
                height={46}
              />
            </Link>
            <p>
              Locally owned spas.
              <br />A nationwide community.
              <br />
              Family-owned since 2005.
            </p>
            <a href="mailto:alisa@spaviadayspa.com">alisa@spaviadayspa.com</a>
          </div>
          {groups.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <p>{group.label}</p>
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Spavia. All rights reserved.</p>
          <div>
            <a
              href="https://spaviadayspa.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://spaviadayspa.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
            <a
              href="https://spaviadayspa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Spavia Day Spa ↗
            </a>
          </div>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/SpaviaDaySpa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/spaviadayspa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/spavia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
