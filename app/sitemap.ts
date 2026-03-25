import { MetadataRoute } from "next";
import { blogPosts, tagLabels } from "./blog/blogData";

const BASE = "https://spaviafranchise.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    // ── Core Pages ──
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/get-started`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/alabama`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/arizona`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/california`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/colorado`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/florida`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/georgia`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/illinois`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/indiana`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/iowa`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/maryland`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/new-hampshire`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/new-mexico`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/north-carolina`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/south-carolina`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/tennessee`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-opportunities/texas`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/franchise-cost`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/why-spavia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/your-spavia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/steps-to-ownership`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/training-and-support`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/who-we-are`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/our-franchisees`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/press`, changeFrequency: "monthly", priority: 0.6 },
    // /thank-you excluded — noindex post-conversion page

    // ── Blog Index ──
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },

    // ── Blog Tag Pages ──
    ...Object.keys(tagLabels).map((tag) => ({
      url: `${BASE}/blog/tags/${tag}`,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),

    // ── Blog Posts (generated from shared data) ──
    ...blogPosts.map((post) => ({
      url: `${BASE}${post.href}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: post.date >= "2025-11-01" ? 0.7 : 0.6,
    })),
  ];

  return pages;
}
