import { Metadata } from "next";
import NavBar from "../../../../../components/NavBar";
import Footer from "../../../../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Spavia Day Spa Named to 2025 Franchise Times Top 400 | Spavia Franchise Blog",
  description:
    "As Spavia celebrates 20 years of affordable luxury, the brand has been named to the 2025 Franchise Times Top 400 list — marking a milestone in design-led growth and national expansion.",
  alternates: {
    canonical:
      "https://spaviafranchise.com/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Spavia Day Spa Named to 2025 Franchise Times Top 400",
  "description": "As Spavia celebrates 20 years of affordable luxury, the brand has been named to the 2025 Franchise Times Top 400 list \u2014 marking a milestone in design-led growth and national expansion.",
  "datePublished": "2025-11-20",
  "dateModified": "2025-11-20",
  "author": {
    "@type": "Organization",
    "name": "Spavia Day Spa",
    "url": "https://spaviafranchise.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Spavia Franchise",
    "url": "https://spaviafranchise.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://spaviafranchise.com/spavia-logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://spaviafranchise.com/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale"
  },
  "image": "https://spaviafranchise.com/blog/blog15.jpeg"
};

export default function Page() {
  return (
    <>
      <NavBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white text-gray-900 py-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-block mb-8 text-[#C2A878] hover:underline font-medium"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-4xl font-bold mb-6">
            Spavia Day Spa Named to 2025 Franchise Times Top 400 as the Brand Celebrates Its 20th Year with Design-Led Growth and “Affordable Luxury” at Scale
          </h1>

          <Image
                src="/blog/blog15.jpeg"
                alt="Spavia recognized in Franchise Times Top 400"
                width={1200}
                height={675}
                className="w-full rounded mb-8"
              />

          <p className="text-lg mb-8 leading-relaxed">
            <strong>DENVER, Colo.</strong> – Spavia Day Spa has been recognized by{" "}
            <a
              href="https://www.franchisetimes.com/top-400-2025/394-spavia-day-spa/article_569dbaf7-28af-4dad-969d-8536cd0fcb68.html"
              target="_blank"
              className="text-[#C2A878] font-semibold hover:underline"
            >
              Franchise Times
            </a>{" "}
            as one of the largest and most successful franchise systems in the country, earning
            a coveted spot on the 2025 Franchise Times Top 400 list. The honor arrives as Spavia
            marks 20 years of redefining affordable luxury through design-forward, hospitality-driven
            day spas that continue to expand nationwide.
          </p>

          <p className="mb-6 leading-relaxed">
            The Franchise Times Top 400 is an exclusive annual ranking of the largest U.S.-based
            franchise systems by global systemwide sales. This year’s report found that combined
            annual sales across the top franchises grew by $9 billion, reaching $738.5 billion in 2024.
            The ranking reflects the most credible and objective measure of franchise performance.
          </p>

          <h2 className="text-2xl font-semibold mb-3">A Milestone 20 Years in the Making</h2>
          <p className="mb-6 leading-relaxed">
            “Earning a place among the top 400 franchise brands in the country is an incredible
            milestone for Spavia,” said Marty Langenderfer, CEO and Co-Founder of Spavia. “Over the
            past two decades, we’ve proven that luxury and accessibility can coexist, delivering high-end
            spa experiences that make a meaningful difference in people’s lives.”
          </p>

          <p className="mb-6 leading-relaxed">
            Founded in 2005, Spavia pioneered the affordable luxury category in the wellness industry.
            Every location is designed to transport guests through one of four curated interior designs:
            Mountain, Coastal, Vineyard, or Sway (urban). These design systems allow franchise owners
            to maintain a boutique feel at scale, with treatments centered around the brand’s promise
            to help every guest relax, recenter, and renew.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Community-Centered, Design-Led Growth</h2>
          <p className="mb-6 leading-relaxed">
            “Spavia pairs a premium guest experience with design systems that transport guests,” added
            Allison Langenderfer, Co-Founder of Spavia. “Our franchise owners live where they operate,
            support local causes, and create spaces that genuinely serve their communities.”
          </p>

          <p className="mb-6 leading-relaxed">
            Spavia’s membership model balances guest affordability with strong unit economics, while
            ongoing training and business coaching help franchise partners achieve long-term success.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Focused Expansion for 2025 and Beyond</h2>
          <p className="mb-6 leading-relaxed">
            As Spavia continues its national expansion, the brand is prioritizing major metropolitan
            areas across Florida, Georgia, and Arizona. New franchisees are drawn to Spavia’s unique
            combination of luxury design, community connection, and accessible pricing.
          </p>

          <p className="mb-6 leading-relaxed">
            To learn more about franchising with Spavia, visit{" "}
            <a
              href="https://spaviafranchise.com"
              className="text-[#C2A878] font-semibold hover:underline"
            >
              spaviafranchise.com →
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-3">ABOUT SPAVIA</h2>
          <p className="mb-6 leading-relaxed">
            The first Spavia opened in 2005 in Denver, CO, with a mission to make a positive
            difference in the world, one guest at a time. Today, Spavia operates 60+ locations
            in 25 states, offering a variety of massage, skincare, beauty treatments, and
            spalebration™ events — all designed to help guests relax, recenter, and renew.
          </p>

          <h2 className="text-2xl font-semibold mb-3">ABOUT THE FRANCHISE TIMES TOP 400</h2>
          <p className="mb-6 leading-relaxed">
            The Franchise Times Top 400 is the only ranking by systemwide sales and units of the
            largest U.S.-based franchise brands. Reports, rankings, and the searchable database
            are available at franchisetimes.com.
          </p>

          {/* Permalink */}
          <p className="text-sm text-gray-500 mt-8">
            Permalink:{" "}
            <a
              href="https://spaviafranchise.com/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale"
              className="underline"
            >
              https://spaviafranchise.com/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale
            </a>
          </p>

          {/* Back Button */}
          
          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-3">
            <li>
              <Link
                href="/blog/2024/01/04/spavia-2023-reflections-and-exciting-anticipations-for-2024"
                className="text-[#C2A878] hover:underline"
              >
                Spavia: 2023 Reflections and Anticipations for 2024
              </Link>
            </li>
            <li>
              <Link
                href="/blog/2025/05/14/spavias-brand-evolution-pioneering-wellness-and-staying-ahead-in-a-changing-world"
                className="text-[#C2A878] hover:underline"
              >
                Spavia’s Brand Evolution: Pioneering Wellness
              </Link>
            </li>
            <li>
              <Link
                href="/blog/2025/10/14/celebrating-20-years-of-spavia-a-look-back-and-a-vision-forward"
                className="text-[#C2A878] hover:underline"
              >
                Celebrating 20 Years of Spavia: A Look Back and a Vision Forward
              </Link>
            </li>
            </ul>
          </div>

<div className="mt-12">
            <Link
              href="/blog"
              className="inline-block text-[#C2A878] hover:underline font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
