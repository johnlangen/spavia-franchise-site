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

export default function Page() {
  return (
    <>
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
