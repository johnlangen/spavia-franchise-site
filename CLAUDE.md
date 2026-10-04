# CLAUDE.md — Spavia Franchise Site

## Project Overview
Spavia Day Spa franchise lead generation website. Converts prospective franchise owners into qualified leads via ActiveCampaign + Supabase.

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` in globals.css)
- **Animation**: Framer Motion
- **Font**: Recoleta (local, loaded via `next/font/local`)
- **Database**: Supabase (lead storage)
- **CRM**: ActiveCampaign (lead submission + list management)
- **Hosting**: Vercel (auto-deploys on push to main)
- **Repo**: github.com/johnlangen/spavia-franchise-site

## Commands
- `npm run dev` — local dev server (Turbopack)
- `npm run build` — production build (always run before pushing)
- `npm run lint` — ESLint
- `npm test` — mocked lead-flow regression tests; never submit synthetic production leads

## Project Structure
```
app/
  page.tsx              # Homepage (server component, imports client components)
  layout.tsx            # Root layout — global JSON-LD (Organization + WebSite), GA4, Google Ads
  sitemap.ts            # Dynamic sitemap generation (/sitemap.xml)
  globals.css           # Shared neutral design system, typography, responsive layouts and form styles
  blog/
    page.tsx            # Blog index
    [year]/[month]/[day]/[slug]/page.tsx  # 21 blog posts
  [core-pages]/         # why-spavia, your-spavia, get-started, steps-to-ownership,
                        # training-and-support, who-we-are, our-franchisees, thank-you
  api/
    franchise-lead/         # Short form -> ActiveCampaign
    franchise-lead-long/    # Long form -> ActiveCampaign
    franchise-lead-short-db/    # Short form -> Supabase
    franchise-lead-long-db/     # Long form -> Supabase
    franchise-lead-step1/       # Step 1 partial save -> Supabase
    franchise-lead-long-step1-db/ # Long form step 1 partial save -> Supabase
  components/
    NavBar.tsx           # Sticky nav, hamburger below lg (1024px)
    Footer.tsx
    Hero.tsx             # Still-photo introduction, intent-aware copy and overview section
    Breadcrumbs.tsx      # Reusable breadcrumbs + BreadcrumbList JSON-LD
    FranchiseOverviewForm.tsx # Shared 2-step short form (email -> details)
    FranchiseIntroForm.tsx  # Section wrapper for the shared short form
    FranchiseLongForm.tsx   # 2-step long form (info -> financials)
    FloatingButton.tsx      # Mobile inquiry bar, hidden when form is visible or being edited
    BlogGrid.tsx            # Blog listing cards with Next.js Image
    FAQ.tsx                 # Accordion FAQ (homepage)
    ThemeProvider.tsx        # React Context for spa design themes
    ThemeSelector.tsx / ThemeGallery.tsx  # Interactive theme picker
    *Content.tsx            # Page-specific content components (client-side)
```

## Key Patterns

### Forms
- Two form types: FranchiseOverviewForm (short, shared by homepage/landing/intro sections) and FranchiseLongForm (detailed, on /get-started)
- Both are 2-step: capture basic info first (saved to Supabase immediately), then complete submission to ActiveCampaign
- API routes submit to ActiveCampaign API and add contacts to "Organic Lead List"
- Forms have proper `<label>` + `htmlFor`/`id` associations and `autoComplete` attributes
- Preserve leadSource values, attribution, GA event dimensions, Ads conversion IDs and qualification thresholds when changing presentation. Alisa handles franchise inquiries; the legacy `ceo=1` thank-you query opens her intro-call calendar.
- Production analytics initialize only on spaviafranchise.com and www.spaviafranchise.com. CTA and section-view events are diagnostics, not additional conversions.

### SEO
- Every page has: Metadata (title, description, canonical, OG, Twitter), Breadcrumbs with BreadcrumbList schema
- Blog posts have: Article JSON-LD, published dates, Related Articles (tag-based cross-linking), Next.js Image
- Homepage has: FAQPage JSON-LD for the FAQ section
- Root layout has: Organization + WebSite JSON-LD (global)
- Sitemap at /sitemap.xml covers all pages + blog posts

### Styling
- Black, white and neutral gray surfaces; copper `#b38a5f` sparingly. Use `--accent-text` for accessible accent text on `.brand-light` and `.brand-dark` surfaces. Avoid large solid gold banners.
- Tailwind utilities preferred. Some inline styles for theme-dynamic colors (`var(--accent)`)
- FranchiseLongForm uses `<style jsx>` for form-specific classes — keep as-is
- Use normal document scrolling and visible content. Prefer still photography, deliberate video playback, native FAQ details and directly visible owner proof over autoplay or rotating carousels.
- Motion lives in `app/motion.css` and `app/lib/siteMotion.ts`, mounted by `SiteMotion`. Use `data-motion="rise"` for story groups and `data-motion="photo"` for photography (or `Reveal`). Section headings share the observer automatically; avoid nested entrances. Content is visible by default, entrances run once only for initially offscreen content, and the hero/forms stay immediately usable. Preserve reduced-motion, keyboard-focus and route-cleanup behavior; never use hidden initial styles for lead capture.

### Content Pages
- Each core page has a `*Content.tsx` client component in /components/ that contains all the page UI
- The page.tsx in the route folder is a thin server component that exports metadata and renders the content component

## Environment Variables (.env.local)
- `ACTIVECAMPAIGN_API_KEY` — AC API key
- `ACTIVECAMPAIGN_API_URL` — AC API base URL
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key

## Things to Know
- Always run `npm run build` before pushing — catches TypeScript errors that dev mode misses
- Blog posts are hardcoded .tsx files (no CMS) — editing requires code changes
- The `metadata.other["script:ld+json"]` pattern does NOT work in Next.js — always use `<script type="application/ld+json" dangerouslySetInnerHTML>` instead
- Batch changes across many blog posts: use a Python script via Bash (much faster than editing files individually)
- Don't use Task agents for file edits on this project — they hit permission issues. Do edits directly or via Python scripts.
- Images in /public/blog/ are large (some 2-5MB) — Next.js Image component handles optimization at serve time
