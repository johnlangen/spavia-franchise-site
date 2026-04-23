import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// Deleted blog posts — 301s to the closest relevant destination.
// These posts were pruned April 2026 after GA/GSC analysis showed 1–7s
// engagement and 0% CTR on high-impression informational queries. Google
// treats clusters of thin content as a domain-wide negative signal under
// the Helpful Content system, so removal + 301 is better than keeping.
// See notes/blog-strategy-2026.md for the full rationale.
// ---------------------------------------------------------------------------
const deletedBlogRedirects = [
  { from: "/blog/2023/11/28/reasons-to-invest-in-a-day-spa-franchise", to: "/why-spavia" },
  { from: "/blog/2024/01/04/spavia-2023-reflections-and-exciting-anticipations-for-2024", to: "/" },
  { from: "/blog/2024/02/02/how-day-spa-franchisees-are-capitalizing-on-health-and-wellness-in-the-new-year", to: "/blog" },
  { from: "/blog/2024/03/05/cost-effective-day-spa-franchise", to: "/blog/2026/03/10/how-to-open-a-spa-franchise" },
  { from: "/blog/2024/10/22/cost-effective-day-spa", to: "/blog/2026/03/10/how-to-open-a-spa-franchise" },
  { from: "/blog/2024/12/03/a-guide-to-choosing-the-best-spa-franchise-key-factors-and-considerations", to: "/blog/2026/02/19/spa-franchise-opportunities-guide" },
  { from: "/blog/2025/01/16/a-new-year-a-new-opportunity-why-spavia-is-the-right-franchise-to-start-in-2025", to: "/get-started" },
  { from: "/blog/2025/02/10/supporting-franchisees-for-success-inside-spavias-comprehensive-training-program", to: "/training-and-support" },
  { from: "/blog/2025/04/11/spavias-guest-care-in-the-evolving-wellness--spa-franchise-industry", to: "/why-spavia" },
  { from: "/blog/2025/05/14/spavias-brand-evolution-pioneering-wellness-and-staying-ahead-in-a-changing-world", to: "/why-spavia" },
  { from: "/blog/2025/06/24/the-power-of-franchisee-success-stories-how-spavia-franchisees-are-thriving", to: "/our-franchisees" },
  { from: "/blog/2025/07/29/beyond-a-franchise-building-a-legacy-with-spavia", to: "/why-spavia" },
  { from: "/blog/2025/08/28/the-power-of-a-national-brand-with-a-local-focus", to: "/why-spavia" },
  { from: "/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale", to: "/press" },
  { from: "/blog/2025/11/26/the-power-of-spavias-brand-partners-vendor-collaborations-that-drive-revenue", to: "/why-spavia" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // -----------------------------------------------------------------
      // Canonicalization (www vs non-www) is handled at the Vercel domain
      // level, NOT here. Adding a Next.js-level www→non-www redirect while
      // Vercel is redirecting the other direction creates a loop
      // (ERR_TOO_MANY_REDIRECTS). Configure the preferred canonical domain
      // in Vercel → Project → Settings → Domains.
      // http → https is handled automatically by Vercel at the edge.
      // -----------------------------------------------------------------

      // -----------------------------------------------------------------
      // WordPress-era ghost URLs (still indexed by Google, returning 404s
      // and signaling thin content). 301 them all to /blog.
      // -----------------------------------------------------------------
      { source: "/service/blog", destination: "/blog", permanent: true },
      { source: "/service_v3/:path*", destination: "/blog", permanent: true },
      { source: "/blog/feed", destination: "/blog", permanent: true },
      { source: "/blog/tag/:path*", destination: "/blog", permanent: true },
      { source: "/blog/archive/:path*", destination: "/blog", permanent: true },
      // Old date-archive paths (pre-2023 WordPress years)
      { source: "/blog/2018/:path*", destination: "/blog", permanent: true },
      { source: "/blog/2019/:path*", destination: "/blog", permanent: true },
      { source: "/blog/2020/:path*", destination: "/blog", permanent: true },
      { source: "/blog/2021/:path*", destination: "/blog", permanent: true },
      { source: "/blog/2022/:path*", destination: "/blog", permanent: true },
      // Orphan duplicate URLs observed in GA (2025/05/05 and 2025/10/07 buckets)
      { source: "/blog/2025/05/05/:path*", destination: "/blog", permanent: true },
      { source: "/blog/2025/10/07/:path*", destination: "/blog", permanent: true },
      // Orphan non-dated URL that showed 5 hits in GA
      { source: "/blog/spa-franchise-phoenix-scottsdale", destination: "/blog/2026/02/26/spa-franchise-phoenix-scottsdale", permanent: true },

      // -----------------------------------------------------------------
      // Deleted blog posts (see array above).
      // -----------------------------------------------------------------
      ...deletedBlogRedirects.map(({ from, to }) => ({
        source: from,
        destination: to,
        permanent: true,
      })),

      // -----------------------------------------------------------------
      // Misc
      // -----------------------------------------------------------------
      { source: "/next", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
