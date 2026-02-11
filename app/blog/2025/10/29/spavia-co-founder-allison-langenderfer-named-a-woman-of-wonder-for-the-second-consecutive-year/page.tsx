import { Metadata } from "next";
import NavBar from "../../../../../components/NavBar";
import Footer from "../../../../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Spavia Co-Founder Allison Langenderfer Named a “Woman of Wonder” for the Second Consecutive Year | Spavia Franchise Blog",
  description:
    "Allison Langenderfer, President and Co-Founder of Spavia Day Spa, has been recognized by Franchise Dictionary Magazine as a 'Woman of Wonder' for 2025 — her second consecutive year receiving this honor.",
  alternates: {
    canonical:
      "https://spaviafranchise.com/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Spavia Co-Founder Allison Langenderfer Named a \u201cWoman of Wonder\u201d for the Second Consecutive Year",
  "description": "Allison Langenderfer, President and Co-Founder of Spavia Day Spa, has been recognized by Franchise Dictionary Magazine as a \u2018Woman of Wonder\u2019 for 2025 \u2014 her second consecutive year receiving this honor.",
  "datePublished": "2025-10-29",
  "dateModified": "2025-10-29",
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
    "@id": "https://spaviafranchise.com/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year"
  },
  "image": "https://spaviafranchise.com/blog/blog14.png"
};

export default function Page() {
  return (
    <>
      <NavBar />

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
            Spavia Co-Founder Allison Langenderfer Named a “Woman of Wonder” for
            the Second Consecutive Year
          </h1>

          <img
            src="/blog/blog14.png" // replace with new image when ready
            alt="Allison Langenderfer Woman of Wonder"
            className="w-full h-auto rounded mb-8"
          />

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Franchise Dictionary Magazine Recognizes Spavia President’s
            Continued Leadership and Philanthropic Impact
          </h2>

          <p className="text-lg mb-8 leading-relaxed">
            DENVER, Colo. –{" "}
            <Link
              href="https://spaviadayspa.com"
              className="text-[#C2A878] font-semibold hover:underline"
            >
              Spavia Day Spa
            </Link>{" "}
            is proud to announce that its President and Co-Founder, Allison
            Langenderfer, has been named to Franchise Dictionary Magazine’s “50
            Women of Wonder” list for 2025 — marking her second consecutive year
            receiving this prestigious recognition.
          </p>

          <p className="mb-6 leading-relaxed">
            The annual honor spotlights inspiring women across the franchising
            industry who are redefining leadership, driving innovation, and
            empowering others through their work. Langenderfer was also
            recognized in 2024 for her visionary leadership, commitment to
            franchisee success, and passion for giving back through Spavia’s
            national philanthropic initiative, Spavia Cares.
          </p>

          <p className="mb-6 leading-relaxed italic border-l-4 border-[#C2A878] pl-4">
            “It’s incredibly humbling to be recognized among so many remarkable
            women who are shaping the future of franchising,” said Langenderfer.
            “Being honored for the second year in a row reflects the dedication
            of our entire Spavia team and franchise owners.”
          </p>

          <p className="mb-6 leading-relaxed">
            Founded nearly 20 years ago by Allison and her husband, Marty
            Langenderfer, Spavia was created to make luxury spa experiences more
            accessible and meaningful. Allison continues to oversee the brand’s
            design, retail, and training initiatives — ensuring every location
            reflects Spavia’s commitment to relaxation, renewal, and personal
            growth.
          </p>

          <p className="mb-6 leading-relaxed">
            Her influence extends through Spavia Cares, the brand’s annual
            system-wide campaign encouraging each spa to partner with local
            nonprofits every September. Most recently, over 1,000 Platinum Ice
            and Glow Anniversary facials were experienced nationwide, resulting
            in a $32,400 donation to Blessings in a Backpack.
          </p>

          <p className="mb-6 leading-relaxed">
            “Spavia Cares continues to be one of the most rewarding parts of
            what we do,” Langenderfer added. “Seeing our franchisees and guests
            rally together to make a difference reminds me that true wellness
            starts with compassion.”
          </p>

          <p className="mb-6 leading-relaxed">
            With 60+ locations open nationwide and new development on the
            horizon, Spavia continues to elevate its presence as a leading
            franchise brand in the wellness category. Under Langenderfer’s
            leadership, the company’s mission remains clear — to make a positive
            difference in the world, one guest at a time.
          </p>

          <p className="mb-8 leading-relaxed">
            For more information on franchising with Spavia, visit{" "}
            <Link
              href="https://spaviafranchise.com"
              className="text-[#C2A878] font-semibold hover:underline"
            >
              www.spaviafranchise.com
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">ABOUT SPAVIA</h2>

          <p className="mb-6 leading-relaxed">
            The first Spavia opened in 2005 in Denver, CO, with a mission of
            making a positive difference in the world, one guest at a time.
            Spavia locations provide massages, skincare, body treatments, lash
            extensions, makeup, waxing, and more — all in a tranquil retreat
            designed to help guests relax, recenter, and renew.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Permalink:{" "}
            <a
              href="https://spaviafranchise.com/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year"
              className="underline"
            >
              https://spaviafranchise.com/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year
            </a>
          </p>

          {/* Back Button at Bottom */}
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
