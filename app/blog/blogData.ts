// Shared blog post metadata — used by BlogGrid, tag pages, related articles, and blog index JSON-LD
//
// Post pruning history:
// - 2026-04-23: Removed 15 posts with <10s avg engagement and 0% GSC CTR
//   (HCU "thin content at scale" risk). Redirects are in next.config.ts.
//   See notes/blog-strategy-2026.md for the decision rationale.

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  readingTime: number; // minutes
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Beauty Franchise vs. Wellness Franchise: Where\u2019s the Growth?",
    excerpt:
      "Beauty and wellness franchises are booming, but which sector offers better growth? Compare market size, revenue models, and investment potential to find your best fit.",
    image: "/blog/blog27.png",
    href: "/blog/2026/04/08/beauty-franchise-vs-wellness-franchise",
    date: "2026-04-08",
    tags: ["comparisons", "investment", "franchise-guide"],
    readingTime: 10,
  },
  {
    title: "Do You Have What It Takes? Traits of Successful Spa Franchise Owners",
    excerpt:
      "What separates thriving spa franchise owners from the rest? Discover the 7 traits that drive success at Spavia Day Spa\u2014from people-first leadership to operational discipline\u2014and find out if you have what it takes.",
    image: "/blog/blog26.png",
    href: "/blog/2026/04/04/traits-successful-spa-franchise-owners",
    date: "2026-04-04",
    tags: ["franchise-guide", "getting-started", "operations"],
    readingTime: 13,
  },
  {
    title: "Why Women Entrepreneurs Are Choosing Spa Franchises",
    excerpt:
      "Women represent 35% of all franchise owners and growing. Discover why spa franchises rank among the best franchise opportunities for women entrepreneurs in 2026\u2014from financial performance to financing resources.",
    image: "/blog/blog25.png",
    href: "/blog/2026/03/25/women-entrepreneurs-spa-franchise",
    date: "2026-03-25",
    tags: ["franchise-guide", "getting-started", "investment"],
    readingTime: 12,
  },
  {
    title: "How to Open a Spa Franchise: A Step-by-Step Owner\u2019s Timeline",
    excerpt:
      "Your complete guide to opening a spa franchise\u2014from the first phone call to grand opening day. Learn the 8-step timeline, financing options, and what to expect at every phase of ownership.",
    image: "/blog/blog24.png",
    href: "/blog/2026/03/10/how-to-open-a-spa-franchise",
    date: "2026-03-10",
    tags: ["getting-started", "investment", "franchise-guide"],
    readingTime: 14,
    featured: true,
  },
  {
    title: "Why Phoenix & Scottsdale Are the Hottest Markets for a Spa Franchise in 2026",
    excerpt:
      "Phoenix and Scottsdale are booming markets for spa franchise investment. Explore why Spavia's day spa franchise model is ideal for the Valley's wellness-driven population. Limited territories available.",
    image: "/blog/blog23.jpg",
    href: "/blog/2026/02/26/spa-franchise-phoenix-scottsdale",
    date: "2026-02-26",
    tags: ["market-insights", "investment"],
    readingTime: 12,
  },
  {
    title: "The Complete Guide to Spa Franchise Opportunities in 2026",
    excerpt:
      "Everything you need to know about spa franchise opportunities in 2026 \u2014 compare costs, revenue models, and top brands to find the right investment for you.",
    image: "/blog/blog22.png",
    href: "/blog/2026/02/19/spa-franchise-opportunities-guide",
    date: "2026-02-19",
    tags: ["franchise-guide", "investment", "comparisons"],
    readingTime: 10,
  },
  {
    title: "Spavia vs. Woodhouse Spa Franchise: A Side-by-Side Comparison",
    excerpt:
      "Compare Spavia and Woodhouse spa franchise models side by side \u2014 investment costs, revenue, franchise fees, training, and which spa franchise is right for you.",
    image: "/blog/blog21.jpg",
    href: "/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise",
    date: "2026-02-12",
    tags: ["comparisons", "investment"],
    readingTime: 6,
  },
  {
    title: "Day Spa vs. Med Spa Franchise: Which Is Right for You?",
    excerpt:
      "Compare day spa and med spa franchise models side by side \u2014 investment costs, profit margins, licensing requirements, and ROI to help you choose the right spa franchise.",
    image: "/blog/blog20.jpg",
    href: "/blog/2026/02/11/day-spa-vs-med-spa-franchise",
    date: "2026-02-11",
    tags: ["comparisons", "investment", "franchise-guide"],
    readingTime: 11,
  },
  {
    title: "How $8 Could Feed Every Hungry Child: A Thanksgiving Reflection From Spavia\u2019s CEO",
    excerpt:
      "A message of gratitude from Spavia\u2019s CEO \u2014 exploring how small, targeted acts of generosity can feed every hungry child in America, and celebrating Spavia\u2019s 20th Anniversary donation impact.",
    image: "/blog/blog18.png",
    href: "/blog/2025/11/25/how-8-could-feed-every-hungry-child-a-thanksgiving-reflection-from-spavias-ceo",
    date: "2025-11-25",
    tags: ["community", "brand-story"],
    readingTime: 5,
  },
  {
    title: "Spavia Co-Founder Allison Langenderfer Named a \u201CWoman of Wonder\u201D for the Second Consecutive Year",
    excerpt:
      "Allison Langenderfer, President and Co-Founder of Spavia Day Spa, has been named to Franchise Dictionary Magazine\u2019s \u201C50 Women of Wonder\u201D list for the second consecutive year, recognizing her leadership and community impact.",
    image: "/blog/blog16.png",
    href: "/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year",
    date: "2025-10-29",
    tags: ["awards", "brand-story"],
    readingTime: 4,
  },
  {
    title: "Celebrating 20 Years of Spavia: A Look Back and a Vision Forward",
    excerpt:
      "Spavia celebrates 20 years of inspiring wellness through accessible luxury, founder-led passion, and community-driven growth.",
    image: "/blog/blog15.png",
    href: "/blog/2025/10/14/celebrating-20-years-of-spavia-a-look-back-and-a-vision-forward",
    date: "2025-10-14",
    tags: ["brand-story", "community"],
    readingTime: 5,
  },
  {
    title: "The Power of Community: How Spavia Stands Out by Giving Back",
    excerpt:
      "This year, as Spavia celebrates its 20th anniversary, we reflect not only on our growth as a leader in the spa industry but also on the core values that define us. A key element of our identity is our commitment to community engagement.",
    image: "/blog/blog9.jpg",
    href: "/blog/2025/03/10/the-power-of-community-how-spavia-stands-out-by-giving-back",
    date: "2025-03-10",
    tags: ["community", "brand-story"],
    readingTime: 5,
  },
  {
    title: "Spa Franchise Opportunities: Where Passion Meets Profit",
    excerpt:
      "Turn your passion for wellness into a profitable venture with our spa franchise opportunities. Take the first step towards financial success!",
    image: "/blog/blog2.jpg",
    href: "/blog/2024/04/16/spa-franchise-opportunities",
    date: "2024-04-16",
    tags: ["franchise-guide", "investment"],
    readingTime: 5,
  },
];

// All available tags with display labels
export const tagLabels: Record<string, string> = {
  "getting-started": "Getting Started",
  investment: "Investment & Costs",
  "franchise-guide": "Franchise Guide",
  comparisons: "Comparisons",
  "market-insights": "Market Insights",
  "brand-story": "Brand Story",
  awards: "Awards & Recognition",
  community: "Community & Giving Back",
  "franchisee-stories": "Franchisee Stories",
  operations: "Operations & Training",
  "wellness-trends": "Wellness Trends",
};

// Get related posts by shared tags (excludes self, returns up to 3)
export function getRelatedPosts(currentHref: string, count = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.href === currentHref);
  if (!current) return [];

  return blogPosts
    .filter((p) => p.href !== currentHref)
    .map((p) => ({
      ...p,
      score: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((p) => p.tags.includes(tag));
}

// Format date for display
export function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
