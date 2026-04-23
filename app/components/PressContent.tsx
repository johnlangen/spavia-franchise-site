"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import AwardsSection from "./AwardsSection";
import Link from "next/link";

const pressItems = [
  {
    year: "2026",
    items: [
      {
        title: "Spavia Named a 2026 FranServe Fran-tastic Brand",
        source: "FranServe Inc.",
        date: "April 2026",
        description:
          "Spavia was selected as one of FranServe's 2026 Fran-tastic Brands, recognized for responsible franchising, turnkey model, operational support, training, industry leadership, scalability, and transparency. FranServe CEO Alesia Visconti said, \"Brands that make the 2026 Fran-tastic Brands list value people taking control of their future through business ownership. We are recognizing these fran-tastic brands for going the extra mile in supporting their franchisees and for adhering to responsible franchising.\"",
      },
      {
        title: "A Year in Review: Reflecting on 20 Years of Growth, Innovation, and Purpose",
        source: "International Franchise Association",
        date: "January 2026",
        description:
          "The IFA published Spavia's year-in-review reflecting on 20 years of growth, innovation in design-led wellness, and the brand's purpose-driven franchise model.",
        link: "https://www.franchise.org/2026/01/a-year-in-review-reflecting-on-20-years-of-growth-innovation-and-purpose-at-spavia-day-spa/",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Spavia Ranked #394 on 2025 Franchise Times Top 400",
        source: "Franchise Times",
        date: "November 2025",
        description:
          "Spavia earned a spot on the 2025 Franchise Times Top 400, an exclusive annual ranking of the largest U.S.-based franchise systems by global systemwide sales. Spavia reported $60.7M in systemwide sales with 13% sales growth and 7.3% unit growth.",
        link: "https://www.franchisetimes.com/top-400-2025/394-spavia-day-spa/article_569dbaf7-28af-4dad-969d-8536cd0fcb68.html",
      },
      {
        title: "Spavia Expands to Urban Markets with Tech-Forward Concept",
        source: "Franchise Times",
        date: "2025",
        description:
          "Franchise Times covered Spavia's expansion into urban markets, highlighting the brand's tech-forward approach and design-led growth strategy as it targets new metropolitan areas.",
        link: "https://www.franchisetimes.com/franchise_news/spavia-expands-to-urban-markets-with-tech-forward-concept/article_a3912ae4-0411-11f0-a1a9-efac9e8fdad0.html",
      },
      {
        title: "Cause Marketing Champion Award",
        source: "Franchise Innovation Awards",
        date: "June 2025",
        description:
          "Spavia received the Cause Marketing Champion Award at the 7th Annual Franchise Innovation Awards for Spavia Cares, the brand's system-wide charitable initiative supporting local nonprofits and Blessings in a Backpack.",
        link: "https://www.franchising.com/news/20250627_franchise_update_media_announces_2025_franchise_innovation_award_winners.html",
      },
      {
        title: "Allison Langenderfer Named \"Woman of Wonder\" for Second Consecutive Year",
        source: "Franchise Dictionary Magazine",
        date: "October 2025",
        description:
          "Spavia President and Co-Founder Allison Langenderfer was named to Franchise Dictionary Magazine's \"50 Women of Wonder\" list for 2025, her second consecutive year receiving the honor for leadership and philanthropic impact.",
        link: "https://franchisedictionarymagazine.com/50-women-of-wonder/",
      },
      {
        title: "IFA Honors Aaron & Danielle Katzoff as 2024 Franchisees of the Year",
        source: "International Franchise Association",
        date: "2025",
        description:
          "Spavia franchise owners Aaron and Danielle Katzoff (Moorestown/Guilford Commons/Stamford) were honored by the International Franchise Association as 2024 Franchisees of the Year.",
        link: "https://www.franchise.org/media-center/press-releases/international-franchise-association-honors-2024-franchisees-of-the-year",
      },
      {
        title: "Spavia Day Spa Franchise Review 2025",
        source: "Franchise Chatter",
        date: "June 2025",
        description:
          "Franchise Chatter published a comprehensive 2025 review of the Spavia Day Spa franchise, covering costs, fees, average revenues, and the brand's competitive position in the wellness industry.",
        link: "https://www.franchisechatter.com/2025/06/03/spavia-day-spa-franchise-review-2025-costs-fees-news-average-revenues-and-or-profits/",
      },
      {
        title: "Spavia Brings First Kansas City Luxury Day Spa to Overland Park",
        source: "International Franchise Association",
        date: "October 2025",
        description:
          "The IFA announced Spavia's Midwest expansion with its first Kansas City-area location in Overland Park, Kansas, continuing the brand's national growth strategy.",
        link: "https://www.franchise.org/2025/10/spavia-brings-first-kansas-city-based-luxury-day-spa-to-overland-park-as-midwest-expansion-blossoms-2/",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Spavia Named to Inc. 5000",
        source: "Inc. Magazine",
        date: "2024",
        description:
          "Spavia Day Spa was named to the prestigious Inc. 5000 list, recognizing the brand among the fastest-growing private companies in America.",
        link: "https://www.inc.com/profile/spavia-day-spa",
      },
      {
        title: "Spavia Ranked #425 on 2024 Franchise Times Top 400",
        source: "Franchise Times",
        date: "2024",
        description:
          "Spavia earned its second consecutive spot on the Franchise Times Top 400, ranking #425 among the largest U.S.-based franchise systems by systemwide sales.",
        link: "https://www.franchisetimes.com/top-400-2024/425-spavia-day-spa/article_79434304-566e-11ef-b939-83b4d2414a2a.html",
      },
      {
        title: "Allison Langenderfer Named \"Woman of Wonder\"",
        source: "Franchise Dictionary Magazine",
        date: "2024",
        description:
          "Spavia Co-Founder Allison Langenderfer was recognized on Franchise Dictionary Magazine's \"50 Women of Wonder\" list for her visionary leadership and commitment to franchisee success.",
        link: "https://franchisedictionarymagazine.com/50-women-of-wonder/",
      },
      {
        title: "Spavia's Year of Growth: A Journey of Redefining Wellness",
        source: "IFA Franchising World",
        date: "February 2024",
        description:
          "Spavia CEO Marty Langenderfer authored a feature in the IFA's Franchising World publication covering the brand's achievements, new treatments, leadership expansion, and future growth plans.",
        link: "https://www.franchise.org/franchise-information/franchising-world/spavias-year-of-growth-a-journey-of-redefining-wellness-and",
      },
      {
        title: "IFA Honors Paul Groshko as 2023 Franchisee of the Year",
        source: "International Franchise Association",
        date: "February 2024",
        description:
          "Spavia franchise owner Paul Groshko (Chicago, IL) was honored by the International Franchise Association as a 2023 Franchisee of the Year recipient.",
        link: "https://www.franchise.org/2024/02/international-franchise-association-names-2023-franchisee-of-the-year-recipients/",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Spavia Ranked #437 on 2023 Franchise Times Top 400",
        source: "Franchise Times",
        date: "2023",
        description:
          "Spavia debuted on the Franchise Times Top 400 list at #437, marking the brand's first inclusion among the largest U.S.-based franchise systems.",
        link: "https://www.franchisetimes.com/top-400-2023/437-spavia-day-spa/article_77445a72-35f7-11ee-b1da-3b7bcf90bf7d.html",
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
          "Spavia climbed to #109 on Entrepreneur's Franchise 500 ranking, up from #258 the previous year, reflecting the brand's strong growth trajectory.",
        link: "https://www.entrepreneur.com/franchises/directory/spavia-day-spa/334955",
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
        link: "https://www.entrepreneur.com/franchises/directory/spavia-day-spa/334955",
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

          {pressItems.map((yearGroup) => (
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C2A878] font-medium hover:underline text-sm"
                      >
                        Read on {item.source} →
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
