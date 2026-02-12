# CLAUDE-SEO.md — Generalized SEO Playbook

A comprehensive SEO guide derived from hands-on optimization of franchise lead generation sites. Applies to any Next.js site targeting high-intent keywords.

---

## Table of Contents
1. [On-Page SEO Checklist](#on-page-seo-checklist)
2. [Technical SEO](#technical-seo)
3. [Keyword Strategy](#keyword-strategy)
4. [Content Strategy](#content-strategy)
5. [Internal Linking](#internal-linking)
6. [Google Ads Quality Score](#google-ads-quality-score)
7. [Off-Site SEO & Link Building](#off-site-seo--link-building)
8. [Schema / Structured Data](#schema--structured-data)
9. [Google Search Console](#google-search-console)
10. [Generative Engine Optimization (GEO)](#generative-engine-optimization-geo)

---

## On-Page SEO Checklist

Every page on the site should have:

### Metadata
- [ ] `<title>` — 50-60 chars, primary keyword first, brand name last
- [ ] `meta description` — 150-160 chars, include keyword + value prop + CTA
- [ ] `canonical` URL — self-referencing canonical on every page
- [ ] OpenGraph tags (title, description, image, url, type)
- [ ] Twitter card tags (card, title, description, image)

### Headings
- [ ] Single `<h1>` per page containing the primary target keyword
- [ ] `<h2>` subheadings that include secondary/related keywords naturally
- [ ] Heading hierarchy (h1 > h2 > h3) — never skip levels

### Content
- [ ] Primary keyword appears in: H1, first paragraph, at least one H2, meta title, meta description
- [ ] Related keywords appear naturally in body content and subheadings
- [ ] Content is substantial (500+ words for core pages, 1000+ for blog posts)
- [ ] Unique content on every page — no duplicate/thin pages

### Images
- [ ] All images have descriptive `alt` text (include keywords where natural)
- [ ] Use Next.js `<Image>` component for automatic optimization
- [ ] Large hero images: use `priority` prop for LCP optimization

---

## Technical SEO

### Sitemap
- Generate a dynamic sitemap at `/sitemap.xml` using Next.js `app/sitemap.ts`
- Include all indexable pages with appropriate `priority` and `changeFrequency`
- Submit to Google Search Console after any new pages are added
- Priority guide: Homepage 1.0, core pages 0.8-0.9, blog posts 0.6-0.7, thank-you 0.3

### Robots
- Ensure `/robots.txt` allows crawling of all public pages
- Block admin/API routes if applicable

### Performance
- Use Next.js App Router with server components by default
- Client components (`"use client"`) only where interactivity is needed
- Lazy load below-fold content
- Google Ads landing pages: avoid video heroes — use gradient/static for fast load (improves Quality Score)

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s — optimize hero images/videos
- CLS (Cumulative Layout Shift): < 0.1 — set explicit width/height on images
- INP (Interaction to Next Paint): < 200ms — minimize client-side JS

---

## Keyword Strategy

### Research Process
1. Start with Google Search Console — see what queries already trigger impressions
2. Identify high-impression, low-click keywords (ranking page 2-3) — these are quick wins
3. Check competitor pages for keywords you're missing
4. Group keywords into clusters (e.g., "spa franchise cost", "how much does a spa franchise cost", "spa franchise investment" = one cluster)

### Keyword Placement Priority
1. **H1** — most important on-page signal
2. **Meta title** — directly affects CTR in search results
3. **URL slug** — keep short, keyword-rich
4. **First paragraph** — Google weights early content
5. **H2 subheadings** — reinforce topical relevance
6. **Meta description** — doesn't directly affect ranking but affects CTR
7. **Alt text** — secondary signal but helps image search

### Matching Keywords to Pages
- Every target keyword cluster should map to ONE primary page
- Don't try to rank multiple pages for the same keyword (keyword cannibalization)
- Create new pages for keyword clusters that don't have a natural home

### Quick Wins from Search Console
- **Position 8-20 with high impressions** = page 2 opportunities. Optimize existing page or create new targeted content
- **Position 1-5 with low CTR** = title/description needs improvement to drive clicks
- **Position 3 with 0 clicks** = likely your content is shown but not compelling enough to click

---

## Content Strategy

### Page Types
1. **Core conversion pages** — directly drive leads (homepage, get-started, cost page)
2. **Supporting pages** — build trust and answer questions (why us, process, training)
3. **Location pages** — target geo-specific keywords (e.g., `/franchise-opportunities/arizona`)
4. **Comparison pages** — capture high-intent research traffic (e.g., "Brand A vs. Brand B")
5. **Blog posts** — target long-tail keywords, build topical authority, earn backlinks

### Blog Post Strategy
- **Comparison posts** rank well and capture high-intent traffic ("X vs Y", "Best X for Y")
- **Cost/investment posts** target bottom-of-funnel keywords
- **Industry data posts** earn backlinks naturally (e.g., "Industry Statistics 2026")
- **FAQ-rich posts** can win featured snippets and AI search citations
- Every blog post should link back to at least 2-3 core pages
- Add Related Articles section at the bottom of every post for cross-linking

### Location Pages
- Create one per target state/city with unique content
- Include: local market data, city names, territory availability, forms with unique `leadSource`
- Use JSON-LD `WebPage` schema with `areaServed` listing specific cities
- These rank for "[service] in [location]" queries with minimal effort
- Hub page (e.g., `/franchise-opportunities`) links to all location pages

### Content Freshness
- Update key pages periodically (especially dates, statistics, and financial figures)
- Re-publish blog posts with updated data and new `dateModified`
- Google favors recently updated content for competitive queries

---

## Internal Linking

### Principles
1. Every page should be reachable within 3 clicks from the homepage
2. Important pages should have the MOST internal links pointing to them
3. Use descriptive anchor text that includes target keywords (not "click here")
4. Cross-link related content bidirectionally (A links to B, B links to A)

### Link Architecture
- **Global nav** — links to top 5-7 core pages
- **Footer** — links to key conversion pages, cost page, blog, franchise opportunities
- **In-content links** — naturally reference other pages within body text
- **Related/Explore sections** — card-style links at bottom of pages
- **Blog Related Articles** — link to 3-4 related posts at end of each blog post
- **Breadcrumbs** — provide hierarchical navigation + BreadcrumbList schema

### Common Mistakes
- Orphan pages (pages with no internal links pointing to them)
- Over-relying on global nav — contextual body links carry more SEO weight
- Using generic anchor text ("learn more", "click here") instead of descriptive text
- Not linking new pages from existing high-authority pages

### Audit Process
1. For each page, list all internal links going OUT
2. For each page, count how many internal links come IN
3. High-priority pages should have the most inbound internal links
4. New pages need immediate links from existing pages to get crawled/indexed

---

## Google Ads Quality Score

Quality Score (1-10) determines your CPC and ad position. Three factors:

### 1. Landing Page Relevance
- H1 must contain the ad keyword (e.g., if targeting "day spa franchise", H1 should include "day spa franchise")
- Meta title should include the keyword
- Content should naturally use the keyword and related terms throughout
- Don't stuff — write for humans first, then check keyword presence

### 2. Ad Relevance
- Ad headlines should match search keywords
- Use **Display Path** (cosmetic URL) to include keywords (e.g., `site.com/spa-franchise`)
- Include keywords in ad descriptions
- Use responsive search ads with 15 headlines and 4 descriptions for maximum matching

### 3. Expected CTR
- Write compelling ad copy that stands out
- Include numbers/stats (e.g., "$1M+ avg revenue")
- Use call-to-action language
- Test multiple ad variations

### Landing Page Best Practices for Ads
- Fast load time (no hero videos — use gradients for ad landing pages)
- Mobile-optimized
- Clear CTA above the fold
- Trust signals (awards, metrics, testimonials)
- Form should be easy to find and simple to complete

### Conversion Tracking
- Fire `gtag('event', 'conversion', { send_to: 'AW-ID/LABEL' })` on successful form submission
- Fire BEFORE redirect but after API success (gtag sends asynchronously)
- Google only counts conversions where the user clicked an ad (has `gclid` cookie)
- Need 30-50 conversions/month for Smart Bidding to work well
- At low volume: use Maximize Clicks bidding, switch to Maximize Conversions later

---

## Off-Site SEO & Link Building

### Domain Authority
This is the #1 factor for competitive keywords. Domain authority comes from:
1. **Quantity and quality of backlinks** (links from other sites to yours)
2. **Age of domain** — older domains have more authority
3. **Breadth of referring domains** — 100 links from 100 sites > 100 links from 1 site

### Link Building Tactics (Franchise/B2B)
1. **Industry directory listings** — get listed on every relevant directory with a link back to your site
2. **Digital PR** — pitch stories to industry publications, local business journals
3. **Guest posting** — write expert articles for industry blogs with author bio linking back
4. **Data/statistics pages** — create comprehensive industry data pages that earn natural links
5. **Awards/recognition** — apply for industry awards; winners get press coverage and backlinks
6. **Partner cross-linking** — ensure your related brand sites (consumer, corporate) link to you
7. **Local backlinks** — Chamber of Commerce, local news, community sponsorships

### Domain Architecture Decision
If you have a consumer site (`brand.com`) and a franchise site (`brandfranchise.com`):
- **Subfolder approach** (`brand.com/franchise`) inherits consumer domain authority — strongest for SEO
- **Subdomain approach** (`franchise.brand.com`) partially inherits authority
- **Separate domain** (`brandfranchise.com`) starts from scratch — weakest for SEO but cleanest separation
- At minimum: ensure the consumer site links prominently to the franchise site

### Citation Consistency
- NAP (Name, Address, Phone) must be identical across all directory listings
- Inconsistent data confuses Google and hurts local SEO
- Audit all listings quarterly

---

## Schema / Structured Data

### Implementation in Next.js
Always use `<script type="application/ld+json" dangerouslySetInnerHTML>`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

**Never use** `metadata.other["script:ld+json"]` — it doesn't work in Next.js.

### Schema Types to Use
| Page Type | Schema |
|---|---|
| Global (layout) | `Organization` + `WebSite` |
| Homepage FAQ | `FAQPage` |
| Blog posts | `Article` + `FAQPage` (if has FAQs) |
| Core pages | `WebPage` + `BreadcrumbList` |
| Location pages | `WebPage` with `areaServed` |
| Cost/pricing pages | `FAQPage` |

### Benefits
- **FAQPage** — can display expandable FAQ in search results (more SERP real estate)
- **Article** — helps blog posts appear in Google News and Discover
- **BreadcrumbList** — shows breadcrumb trail in search results
- **Organization** — provides brand info for knowledge panels

---

## Google Search Console

### Setup
1. Verify domain ownership
2. Submit sitemap URL (e.g., `https://yoursite.com/sitemap.xml`)
3. Check "Pages" report for indexing issues
4. Monitor "Performance" for keyword data

### Regular Monitoring (weekly/biweekly)
1. **Performance > Search Results** — check impressions, clicks, CTR, position
2. **Pages** — ensure all pages are indexed, fix any errors
3. **Sitemaps** — verify sitemap is successfully processed
4. **Experience > Core Web Vitals** — monitor page speed metrics

### Key Metrics to Watch
- **Impressions trending up** = your content is being discovered
- **Position improving** = your optimizations are working
- **CTR below 3%** for high-impression keywords = title/description needs work
- **"Not indexed"** pages = check for crawl errors, thin content, or noindex tags

### After Adding New Pages
1. Update and resubmit sitemap
2. Use "URL Inspection" tool to request indexing of specific new URLs
3. Monitor "Pages" report for successful indexing (can take days to weeks)

---

## Generative Engine Optimization (GEO)

AI search (ChatGPT, Perplexity, Google AI Overviews) is becoming a significant traffic source.

### How AI Systems Choose What to Cite
1. **Third-party mentions** — brands mentioned frequently across authoritative sources rank higher in AI responses
2. **Structured, factual content** — clear statements of fact (costs, features, comparisons) are preferred
3. **Consistent brand data** — same information across all sources builds confidence
4. **Schema markup** — helps AI systems understand page structure and content

### Optimization Tactics
- Ensure your brand appears in industry directories, comparison articles, and review sites
- Write content that directly answers common questions in clear, factual language
- Use FAQ schema extensively — AI systems love structured Q&A
- Keep financial data, feature lists, and comparison tables up to date
- Monitor what AI systems say about your brand (search ChatGPT/Perplexity for your keywords)

---

## Quick Reference: New Page Launch Checklist

When creating any new page:

1. [ ] Meta title with primary keyword (50-60 chars)
2. [ ] Meta description with keyword + value prop (150-160 chars)
3. [ ] Canonical URL (self-referencing)
4. [ ] OpenGraph + Twitter card metadata
5. [ ] Single H1 with primary keyword
6. [ ] JSON-LD schema (appropriate type)
7. [ ] Breadcrumbs component with BreadcrumbList schema
8. [ ] Internal links TO this page from at least 2-3 existing pages
9. [ ] Internal links FROM this page to 2-3 related pages
10. [ ] Add to sitemap.ts
11. [ ] Add to footer/nav if appropriate
12. [ ] Run `npm run build` to verify no errors
13. [ ] After deploy: request indexing in Google Search Console
14. [ ] After deploy: resubmit sitemap in Google Search Console
