import { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogGrid from "../components/BlogGrid"; // 👈 client component

export const metadata: Metadata = {
  title: "Blog | Spavia Day Spa | Luxury Spa Franchises",
  description:
    "Explore Spavia’s blog for insights on franchising, wellness, and building a legacy with Spavia.",
};

export default function Page() {
  return (
    <>
      <NavBar />
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
