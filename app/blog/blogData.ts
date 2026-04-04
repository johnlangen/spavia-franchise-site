// Shared blog post metadata — used by BlogGrid, tag pages, related articles, and blog index JSON-LD

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
    title: "The Power of Spavia\u2019s Brand Partners: Vendor Collaborations That Drive Revenue",
    excerpt:
      "Spavia\u2019s premium vendor partnerships elevate the guest experience, strengthen franchise revenue, and support franchisees through training, buying power, and curated, high-performance products.",
    image: "/blog/blog19.png",
    href: "/blog/2025/11/26/the-power-of-spavias-brand-partners-vendor-collaborations-that-drive-revenue",
    date: "2025-11-26",
    tags: ["brand-story", "operations"],
    readingTime: 5,
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
    title: "Spavia Day Spa Named to 2025 Franchise Times Top 400",
    excerpt:
      "Spavia celebrates its 20th year with design-led growth, national expansion, and recognition on the 2025 Franchise Times Top 400 list for accessible, affordable luxury.",
    image: "/blog/blog17.png",
    href: "/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale",
    date: "2025-11-20",
    tags: ["brand-story", "awards"],
    readingTime: 4,
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
    title: "The Power of a National Brand with a Local Focus",
    excerpt:
      "Spavia offers a unique franchise opportunity that blends the strength of a nationally recognized brand with the personalized touch of a community-focused business.",
    image: "/blog/blog14.png",
    href: "/blog/2025/08/28/the-power-of-a-national-brand-with-a-local-focus",
    date: "2025-08-28",
    tags: ["brand-story", "operations"],
    readingTime: 4,
  },
  {
    title: "Beyond a Franchise: Building a Legacy with Spavia",
    excerpt:
      "Spavia franchise ownership offers an opportunity to create a lasting legacy through financial success, personal growth, and community impact.",
    image: "/blog/blog13.png",
    href: "/blog/2025/07/29/beyond-a-franchise-building-a-legacy-with-spavia",
    date: "2025-07-29",
    tags: ["franchisee-stories", "brand-story"],
    readingTime: 4,
  },
  {
    title: "The Power of Franchisee Success Stories: How Spavia Franchisees Are Thriving",
    excerpt:
      "Discover the ultimate escape with Spavia, where relaxation meets opportunity. Learn how franchisees are building thriving businesses while making an impact in their communities.",
    image: "/blog/blog12.png",
    href: "/blog/2025/06/24/the-power-of-franchisee-success-stories-how-spavia-franchisees-are-thriving",
    date: "2025-06-24",
    tags: ["franchisee-stories", "community"],
    readingTime: 4,
  },
  {
    title: "Spavia\u2019s Brand Evolution: Pioneering Wellness and Staying Ahead in a Changing World",
    excerpt:
      "Spavia offers personalized wellness experiences tailored to refresh both body and mind. From therapeutic massages to advanced treatments, their services focus on redefining relaxation and self-care for a healthier, rejuvenated you.",
    image: "/blog/blog11.jpg",
    href: "/blog/2025/05/14/spavias-brand-evolution-pioneering-wellness-and-staying-ahead-in-a-changing-world",
    date: "2025-05-14",
    tags: ["brand-story", "wellness-trends"],
    readingTime: 4,
  },
  {
    title: "Spavia\u2019s Guest Care in the Evolving Wellness & Spa Franchise Industry",
    excerpt:
      "Spavia is redefining the spa experience by offering personalized services that cater to the unique needs of every guest. With resort-inspired amenities and a focus on affordable luxury, Spavia creates a tranquil environment where relaxation and rejuvenation come naturally.",
    image: "/blog/blog10.jpeg",
    href: "/blog/2025/04/11/spavias-guest-care-in-the-evolving-wellness--spa-franchise-industry",
    date: "2025-04-11",
    tags: ["operations", "wellness-trends"],
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
    title: "Supporting Franchisees for Success: Inside Spavia\u2019s Comprehensive Training Program",
    excerpt:
      "Our meticulously designed and comprehensive training program is intentionally structured to ensure that each and every Spavia franchisee is exceptionally well-prepared and fully empowered to confidently and effectively operate their spa business.",
    image: "/blog/blog8.jpg",
    href: "/blog/2025/02/10/supporting-franchisees-for-success-inside-spavias-comprehensive-training-program",
    date: "2025-02-10",
    tags: ["operations", "getting-started"],
    readingTime: 5,
  },
  {
    title: "A New Year, A New Opportunity: Why Spavia is the Right Franchise to Start in 2025",
    excerpt:
      "If you\u2019re exploring franchise opportunities, Spavia Day Spa is a name you won\u2019t want to overlook for 2025.",
    image: "/blog/blog7.jpg",
    href: "/blog/2025/01/16/a-new-year-a-new-opportunity-why-spavia-is-the-right-franchise-to-start-in-2025",
    date: "2025-01-16",
    tags: ["franchise-guide", "investment"],
    readingTime: 4,
  },
  {
    title: "A Guide to Choosing the Best Spa Franchise: Key Factors and Considerations",
    excerpt:
      "Discover how to choose the best spa franchise with our guide. Learn about brand reputation, financial performance, and more to succeed in the spa industry.",
    image: "/blog/blog6.jpg",
    href: "/blog/2024/12/03/a-guide-to-choosing-the-best-spa-franchise-key-factors-and-considerations",
    date: "2024-12-03",
    tags: ["franchise-guide", "comparisons"],
    readingTime: 3,
  },
  {
    title: "A Cost-Effective Day Spa Franchise: The Spavia Advantage",
    excerpt:
      "Discover the Spavia Advantage\u2014an affordable day spa franchise offering exceptional services. Join us in delivering relaxation and wellness to your community.",
    image: "/blog/blog4.jpg",
    href: "/blog/2024/03/05/cost-effective-day-spa-franchise",
    date: "2024-03-05",
    tags: ["investment", "franchise-guide"],
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
  {
    title: "A Cost-Effective Day Spa Franchise: The Spavia Advantage",
    excerpt:
      "Unlock the lucrative potential of Spavia, a cost-effective day spa franchise.",
    image: "/blog/blog1.jpeg",
    href: "/blog/2024/10/22/cost-effective-day-spa",
    date: "2024-10-22",
    tags: ["investment", "franchise-guide"],
    readingTime: 4,
  },
  {
    title: "How Day Spa Franchisees Are Capitalizing on Health and Wellness in the New Year",
    excerpt:
      "As we step into the New Year, there\u2019s a collective shift in focus as individuals embrace the \u2018Great Rejuvenation\u2019\u2014a term capturing the heightened awareness of health and wellness...",
    image: "/blog/blog0.jpeg",
    href: "/blog/2024/02/02/how-day-spa-franchisees-are-capitalizing-on-health-and-wellness-in-the-new-year",
    date: "2024-02-02",
    tags: ["wellness-trends", "franchise-guide"],
    readingTime: 5,
  },
  {
    title: "Spavia: 2023 Reflections and Exciting Anticipations for 2024",
    excerpt:
      "The year 2023 has unfolded as a thrilling chapter for Spavia Day Spa, marked by substantial growth and exciting developments...",
    image: "/blog/blog00.jpg",
    href: "/blog/2024/01/04/spavia-2023-reflections-and-exciting-anticipations-for-2024",
    date: "2024-01-04",
    tags: ["brand-story"],
    readingTime: 3,
  },
  {
    title: "3 Reasons to Invest in a Day Spa Franchise",
    excerpt:
      "As the wellness industry gains momentum amongst consumers, now is the ideal time to explore the world of day spa franchises. From rejuvenating massage therapies to cutting-edge skincare treatments...",
    image: "/blog/blog000.jpeg",
    href: "/blog/2023/11/28/reasons-to-invest-in-a-day-spa-franchise",
    date: "2023-11-28",
    tags: ["investment", "getting-started"],
    readingTime: 3,
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
