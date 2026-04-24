import { Metadata } from "next";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import BlogGrid from "../components/BlogGrid";
import { blogPosts } from "./blogData";

export const metadata: Metadata = {
  title: "Spavia Blog: Spa Franchise Guides, Comparisons & Data",
  description:
    "Spa franchise guides: Spavia vs. Woodhouse, day spa vs. med spa, investment breakdowns, and owner stories. Written for serious franchise buyers.",
  alternates: {
    canonical: "https://spaviafranchise.com/blog",
  },
  openGraph: {
    title: "Spavia Blog: Spa Franchise Guides, Comparisons & Data",
    description:
      "Spa franchise guides: Spavia vs. Woodhouse, day spa vs. med spa, investment breakdowns, and owner stories. Written for serious franchise buyers.",
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
    title: "Spavia Blog: Spa Franchise Guides, Comparisons & Data",
    description:
      "Spa franchise guides: Spavia vs. Woodhouse, day spa vs. med spa, investment breakdowns, and owner stories. Written for serious franchise buyers.",
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
    itemListElement: blogPosts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://spaviafranchise.com${post.href}`,
      name: post.title,
    })),
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
          <BlogGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
