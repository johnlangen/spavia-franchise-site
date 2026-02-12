import { MetadataRoute } from "next";

const BASE = "https://spaviafranchise.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    // ── Core Pages ──
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/get-started`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/arizona`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/south-carolina`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/tennessee`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/north-carolina`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/georgia`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-cost`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/why-spavia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/your-spavia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/steps-to-ownership`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/training-and-support`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/who-we-are`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/our-franchisees`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/thank-you`, changeFrequency: "yearly", priority: 0.3 },

    // ── Blog Index ──
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },

    // ── Blog Posts ──
    {
      url: `${BASE}/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise`,
      lastModified: new Date("2026-02-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/2026/02/11/day-spa-vs-med-spa-franchise`,
      lastModified: new Date("2026-02-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/2025/11/26/the-power-of-spavias-brand-partners-vendor-collaborations-that-drive-revenue`,
      lastModified: new Date("2025-11-26"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/11/25/how-8-could-feed-every-hungry-child-a-thanksgiving-reflection-from-spavias-ceo`,
      lastModified: new Date("2025-11-25"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale`,
      lastModified: new Date("2025-11-20"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year`,
      lastModified: new Date("2025-10-29"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/10/14/celebrating-20-years-of-spavia-a-look-back-and-a-vision-forward`,
      lastModified: new Date("2025-10-14"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/08/28/the-power-of-a-national-brand-with-a-local-focus`,
      lastModified: new Date("2025-08-28"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/07/29/beyond-a-franchise-building-a-legacy-with-spavia`,
      lastModified: new Date("2025-07-29"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/06/24/the-power-of-franchisee-success-stories-how-spavia-franchisees-are-thriving`,
      lastModified: new Date("2025-06-24"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/05/14/spavias-brand-evolution-pioneering-wellness-and-staying-ahead-in-a-changing-world`,
      lastModified: new Date("2025-05-14"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/04/11/spavias-guest-care-in-the-evolving-wellness--spa-franchise-industry`,
      lastModified: new Date("2025-04-11"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/03/10/the-power-of-community-how-spavia-stands-out-by-giving-back`,
      lastModified: new Date("2025-03-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/02/10/supporting-franchisees-for-success-inside-spavias-comprehensive-training-program`,
      lastModified: new Date("2025-02-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2025/01/16/a-new-year-a-new-opportunity-why-spavia-is-the-right-franchise-to-start-in-2025`,
      lastModified: new Date("2025-01-16"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2024/12/03/a-guide-to-choosing-the-best-spa-franchise-key-factors-and-considerations`,
      lastModified: new Date("2024-12-03"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2024/10/22/cost-effective-day-spa`,
      lastModified: new Date("2024-10-22"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2024/04/16/spa-franchise-opportunities`,
      lastModified: new Date("2024-04-16"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2024/03/05/cost-effective-day-spa-franchise`,
      lastModified: new Date("2024-03-05"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2024/02/02/how-day-spa-franchisees-are-capitalizing-on-health-and-wellness-in-the-new-year`,
      lastModified: new Date("2024-02-02"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2024/01/04/spavia-2023-reflections-and-exciting-anticipations-for-2024`,
      lastModified: new Date("2024-01-04"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/blog/2023/11/28/reasons-to-invest-in-a-day-spa-franchise`,
      lastModified: new Date("2023-11-28"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  return pages;
}
