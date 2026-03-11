import { Metadata } from "next";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import BlogGrid from "../components/BlogGrid"; // 👈 client component

export const metadata: Metadata = {
  title: "Blog | Spavia Day Spa Franchise | Insights & Resources",
  description:
    "Explore Spavia's blog for insights on spa franchising, investment costs, wellness industry trends, and building a successful day spa business.",
  alternates: {
    canonical: "https://spaviafranchise.com/blog",
  },
  openGraph: {
    title: "Blog | Spavia Day Spa Franchise | Insights & Resources",
    description:
      "Explore Spavia's blog for insights on spa franchising, investment costs, wellness industry trends, and building a successful day spa business.",
    url: "https://spaviafranchise.com/blog",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Day Spa Franchise Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Spavia Day Spa Franchise | Insights & Resources",
    description:
      "Explore Spavia's blog for insights on spa franchising, investment costs, wellness industry trends, and building a successful day spa business.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

const blogIndexJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Spavia Franchise Blog",
  description:
    "Insights on spa franchising, investment costs, wellness industry trends, and building a successful day spa business.",
  url: "https://spaviafranchise.com/blog",
  publisher: {
    "@id": "https://spaviafranchise.com/#organization",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://spaviafranchise.com/blog/2026/03/10/how-to-open-a-spa-franchise",
        name: "How to Open a Spa Franchise: A Step-by-Step Owner\u2019s Timeline",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://spaviafranchise.com/blog/2026/02/26/spa-franchise-phoenix-scottsdale",
        name: "Why Phoenix & Scottsdale Are the Hottest Markets for a Spa Franchise in 2026",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://spaviafranchise.com/blog/2026/02/19/spa-franchise-opportunities-guide",
        name: "The Complete Guide to Spa Franchise Opportunities in 2026",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://spaviafranchise.com/blog/2026/02/12/spavia-vs-woodhouse-spa-franchise",
        name: "Spavia vs. Woodhouse Spa Franchise: A Side-by-Side Comparison",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://spaviafranchise.com/blog/2026/02/11/day-spa-vs-med-spa-franchise",
        name: "Day Spa vs. Med Spa Franchise: Which Is Right for You?",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://spaviafranchise.com/blog/2025/11/26/the-power-of-spavias-brand-partners-vendor-collaborations-that-drive-revenue",
        name: "The Power of Spavia's Brand Partners: Vendor Collaborations That Drive Revenue",
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://spaviafranchise.com/blog/2025/11/25/how-8-could-feed-every-hungry-child-a-thanksgiving-reflection-from-spavias-ceo",
        name: "How $8 Could Feed Every Hungry Child: A Thanksgiving Reflection From Spavia's CEO",
      },
      {
        "@type": "ListItem",
        position: 8,
        url: "https://spaviafranchise.com/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale",
        name: "Spavia Day Spa Named to 2025 Franchise Times Top 400",
      },
      {
        "@type": "ListItem",
        position: 9,
        url: "https://spaviafranchise.com/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year",
        name: "Spavia Co-Founder Allison Langenderfer Named a Woman of Wonder",
      },
      {
        "@type": "ListItem",
        position: 10,
        url: "https://spaviafranchise.com/blog/2025/10/14/celebrating-20-years-of-spavia-a-look-back-and-a-vision-forward",
        name: "Celebrating 20 Years of Spavia: A Look Back and a Vision Forward",
      },
      {
        "@type": "ListItem",
        position: 11,
        url: "https://spaviafranchise.com/blog/2025/08/28/the-power-of-a-national-brand-with-a-local-focus",
        name: "The Power of a National Brand with a Local Focus",
      },
      {
        "@type": "ListItem",
        position: 12,
        url: "https://spaviafranchise.com/blog/2025/07/29/beyond-a-franchise-building-a-legacy-with-spavia",
        name: "Beyond a Franchise: Building a Legacy with Spavia",
      },
      {
        "@type": "ListItem",
        position: 13,
        url: "https://spaviafranchise.com/blog/2025/06/24/the-power-of-franchisee-success-stories-how-spavia-franchisees-are-thriving",
        name: "The Power of Franchisee Success Stories: How Spavia Franchisees Are Thriving",
      },
      {
        "@type": "ListItem",
        position: 14,
        url: "https://spaviafranchise.com/blog/2025/05/14/spavias-brand-evolution-pioneering-wellness-and-staying-ahead-in-a-changing-world",
        name: "Spavia's Brand Evolution: Pioneering Wellness and Staying Ahead",
      },
      {
        "@type": "ListItem",
        position: 15,
        url: "https://spaviafranchise.com/blog/2025/04/11/spavias-guest-care-in-the-evolving-wellness--spa-franchise-industry",
        name: "Spavia's Guest Care in the Evolving Wellness & Spa Franchise Industry",
      },
      {
        "@type": "ListItem",
        position: 16,
        url: "https://spaviafranchise.com/blog/2025/03/10/the-power-of-community-how-spavia-stands-out-by-giving-back",
        name: "The Power of Community: How Spavia Stands Out by Giving Back",
      },
      {
        "@type": "ListItem",
        position: 17,
        url: "https://spaviafranchise.com/blog/2025/02/10/supporting-franchisees-for-success-inside-spavias-comprehensive-training-program",
        name: "Supporting Franchisees for Success: Inside Spavia's Training Program",
      },
      {
        "@type": "ListItem",
        position: 18,
        url: "https://spaviafranchise.com/blog/2025/01/16/a-new-year-a-new-opportunity-why-spavia-is-the-right-franchise-to-start-in-2025",
        name: "A New Year, A New Opportunity: Why Spavia is the Right Franchise",
      },
      {
        "@type": "ListItem",
        position: 19,
        url: "https://spaviafranchise.com/blog/2024/12/03/a-guide-to-choosing-the-best-spa-franchise-key-factors-and-considerations",
        name: "A Guide to Choosing the Best Spa Franchise",
      },
      {
        "@type": "ListItem",
        position: 20,
        url: "https://spaviafranchise.com/blog/2024/10/22/cost-effective-day-spa",
        name: "A Cost-Effective Day Spa Franchise: The Spavia Advantage",
      },
      {
        "@type": "ListItem",
        position: 21,
        url: "https://spaviafranchise.com/blog/2024/04/16/spa-franchise-opportunities",
        name: "Spa Franchise Opportunities: Where Passion Meets Profit",
      },
      {
        "@type": "ListItem",
        position: 22,
        url: "https://spaviafranchise.com/blog/2024/03/05/cost-effective-day-spa-franchise",
        name: "A Cost-Effective Day Spa Franchise: The Spavia Advantage",
      },
      {
        "@type": "ListItem",
        position: 23,
        url: "https://spaviafranchise.com/blog/2024/02/02/how-day-spa-franchisees-are-capitalizing-on-health-and-wellness-in-the-new-year",
        name: "How Day Spa Franchisees Are Capitalizing on Health and Wellness",
      },
      {
        "@type": "ListItem",
        position: 24,
        url: "https://spaviafranchise.com/blog/2024/01/04/spavia-2023-reflections-and-exciting-anticipations-for-2024",
        name: "Spavia: 2023 Reflections and Anticipations for 2024",
      },
      {
        "@type": "ListItem",
        position: 25,
        url: "https://spaviafranchise.com/blog/2023/11/28/reasons-to-invest-in-a-day-spa-franchise",
        name: "3 Reasons to Invest in a Day Spa Franchise",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogIndexJsonLd),
        }}
      />
      <NavBar />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <main className="bg-white text-gray-900 py-32 px-6 [scroll-snap-type:none]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-16 text-center tracking-tight">
            Blog
          </h1>
          <BlogGrid /> {/* 👈 separate client component */}
        </div>
      </main>
      <Footer />
    </>
  );
}
