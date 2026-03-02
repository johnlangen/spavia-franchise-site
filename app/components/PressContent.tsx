"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import AwardsSection from "./AwardsSection";
import Link from "next/link";

const pressItems = [
  {
    year: "2025",
    items: [
      {
        title: "Spavia Named to 2025 Franchise Times Top 400",
        source: "Franchise Times",
        date: "November 2025",
        description:
          "Spavia Day Spa earned a spot on the 2025 Franchise Times Top 400 list, an exclusive annual ranking of the largest U.S.-based franchise systems by global systemwide sales. The recognition arrives as Spavia celebrates 20 years of redefining affordable luxury.",
        link: "/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale",
        isInternal: true,
      },
      {
        title: "Allison Langenderfer Named \"Woman of Wonder\" for Second Consecutive Year",
        source: "Franchise Dictionary Magazine",
        date: "October 2025",
        description:
          "Spavia President and Co-Founder Allison Langenderfer was named to Franchise Dictionary Magazine's \"50 Women of Wonder\" list for 2025, marking her second consecutive year receiving the honor for her leadership, innovation, and philanthropic impact through Spavia Cares.",
        link: "/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year",
        isInternal: true,
      },
      {
        title: "Spavia Celebrates 20th Anniversary",
        source: "Spavia Day Spa",
        date: "October 2025",
        description:
          "Spavia marked 20 years since opening its first location in 2005 in Centennial, Colorado. The anniversary celebration highlighted two decades of accessible luxury, community-focused wellness, and national growth to 60+ locations across 25 states.",
        link: "/blog/2025/10/14/celebrating-20-years-of-spavia-a-look-back-and-a-vision-forward",
        isInternal: true,
      },
      {
        title: "Spavia Wins Cause Marketing Champion Award",
        source: "Franchise Innovation Awards",
        date: "2025",
        description:
          "Spavia received the Cause Marketing Champion Award at the Franchise Innovation Awards for Spavia Cares, the brand's annual system-wide charitable initiative. Through Spavia Cares, franchise locations partner with local nonprofits each September, including national campaigns supporting Blessings in a Backpack.",
        link: "https://www.prnewswire.com/news-releases/spavia-day-spa-announces-ambitious-franchise-growth-plans-as-spa-culture-surges-302199048.html",
        isInternal: false,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Spavia Named to Inc. 5000 List",
        source: "Inc. Magazine",
        date: "2024",
        description:
          "Spavia Day Spa was named to the prestigious Inc. 5000 list, recognizing the brand as one of the fastest-growing private companies in America.",
        link: "https://www.prnewswire.com/news-releases/spavia-day-spa-announces-ambitious-franchise-growth-plans-as-spa-culture-surges-302199048.html",
        isInternal: false,
      },
      {
        title: "Allison Langenderfer Named \"Woman of Wonder\"",
        source: "Franchise Dictionary Magazine",
        date: "2024",
        description:
          "Spavia Co-Founder Allison Langenderfer was first recognized on Franchise Dictionary Magazine's \"50 Women of Wonder\" list for her visionary leadership and commitment to franchisee success.",
        link: "/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year",
        isInternal: true,
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Spavia Ranked #109 on Entrepreneur Franchise 500",
        source: "Entrepreneur Magazine",
        date: "2021",
        description:
          "Spavia climbed to #109 on Entrepreneur's prestigious Franchise 500 ranking, up from #258 the previous year, reflecting the brand's strong growth trajectory and franchise system performance.",
        link: "https://www.entrepreneur.com/franchise/spavia-day-spa/333398",
        isInternal: false,
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Spavia Debuts at #258 on Entrepreneur Franchise 500",
        source: "Entrepreneur Magazine",
        date: "2020",
        description:
          "Spavia earned its first placement on Entrepreneur Magazine's Franchise 500, debuting at #258 among the top franchise opportunities in the country.",
        link: "https://www.entrepreneur.com/franchise/spavia-day-spa/333398",
        isInternal: false,
      },
    ],
  },
];

export default function PressContent() {
  return (
    <main className="text-gray-900">
      <NavBar />
      <Breadcrumbs items={[{ label: "Press" }]} />

      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Press &amp; Recognition
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
        >
          Spavia Day Spa has been recognized by leading industry publications and
          organizations for its design-led growth, franchise excellence, and
          commitment to community impact. Explore our latest press coverage and
          awards below.
        </motion.p>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "20+", label: "Years in Business" },
              { stat: "60+", label: "Locations Nationwide" },
              { stat: "25", label: "States" },
              { stat: "#109", label: "Entrepreneur Franchise 500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6"
              >
                <p className="text-4xl font-bold text-[#C2A878] mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Awards &amp; Press Coverage
          </h2>

          {pressItems.map((yearGroup, yi) => (
            <div key={yearGroup.year} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-8"
              >
                <span className="text-3xl font-bold text-[#C2A878] mr-4">
                  {yearGroup.year}
                </span>
                <div className="flex-1 h-px bg-gray-300" />
              </motion.div>

              <div className="space-y-8">
                {yearGroup.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-sm text-[#C2A878] font-medium mb-3">
                      {item.source}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link}
                        target={item.isInternal ? undefined : "_blank"}
                        rel={item.isInternal ? undefined : "noopener noreferrer"}
                        className="text-[#C2A878] font-medium hover:underline text-sm"
                      >
                        {item.isInternal ? "Read more →" : "View source →"}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Marquee */}
      <section className="bg-white">
        <AwardsSection />
      </section>

      {/* Media Contact / CTA */}
      <section className="py-20 bg-black text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            For press inquiries, interview requests, or additional information
            about Spavia Day Spa, please contact our team.
          </p>
          <a
            href="mailto:tyler@spaviadayspa.com"
            className="inline-block bg-[#C2A878] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
