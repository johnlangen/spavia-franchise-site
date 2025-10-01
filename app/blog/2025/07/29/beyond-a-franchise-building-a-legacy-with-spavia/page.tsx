import { Metadata } from "next";
import NavBar from "../../../../../components/NavBar";
import Footer from "../../../../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beyond a Franchise: Building a Legacy with Spavia | Spavia Franchise Blog",
  description:
    "Discover how Spavia franchise owners create lasting family legacies through multi-unit ownership, community impact, and generational wealth building.",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="bg-white text-gray-900 py-24 px-6">
          
        <div className="max-w-4xl mx-auto">
                      {/* Back Button */}
          <Link
            href="/blog"
            className="inline-block mb-8 text-[#C2A878] hover:underline font-medium"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-4xl font-bold mb-6">
            Beyond a Franchise: Building a Legacy with Spavia
          </h1>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Spavia franchise ownership offers an opportunity to create a lasting legacy 
            through financial success, personal growth, and community impact. By investing 
            in this business, you can build something meaningful that benefits both your 
            family and your community for generations.
          </p>

          <img
            src="/blog/blog13.png"
            alt="Spavia franchise owners building a lasting legacy"
            className="w-full h-auto rounded-lg shadow mb-12"
          />

          <article className="prose prose-lg max-w-none text-gray-800">
            <h2>Beyond Business: Building a Legacy</h2>
            <p>
              When most people think about franchise ownership, they imagine a business 
              that provides a steady income. But at Spavia, it becomes so much more—it’s 
              the foundation for a legacy of wellness, resilience, and community impact.
            </p>

            <h2>The Foundation of Lasting Success</h2>
            <p>
              Unlike many franchise concepts focused only on profits, Spavia’s approach 
              prioritizes long-term well-being, meaningful relationships, and community 
              involvement. Owners often grow from one location into multi-unit operations 
              that stand as lasting family enterprises.
            </p>

            <h2>The Multi-Unit Advantage</h2>
            <p>
              Multi-unit ownership provides geographic diversification, operational 
              efficiencies, and expanded opportunities for family involvement. These 
              advantages make Spavia ownership not just sustainable—but scalable.
            </p>

            <h2>Creating Generational Wealth</h2>
            <p>
              Many Spavia franchises evolve into family businesses, with loved ones 
              contributing to operations, marketing, and guest care. This dynamic fosters 
              generational wealth, unity, and purpose.
            </p>

            <h2>Community Impact</h2>
            <p>
              Spavia locations become trusted wellness hubs—offering stress relief, 
              meaningful connections, and personalized care that strengthens local 
              communities.
            </p>

            <h2>Long-Term Growth</h2>
            <p>
              With opportunities for expansion, innovation, and succession planning, 
              Spavia provides owners with tools to ensure their businesses thrive today 
              and endure for generations.
            </p>

            <h2>Your Legacy Starts Today</h2>
            <p>
              Spavia offers more than a franchise—it’s the chance to build something 
              lasting. Whether you’re starting fresh or expanding, your journey toward 
              building a legacy of wellness and success can begin now.
            </p>

            <p>
              Interested in learning more?{" "}
              <a
                href="/get-started"
                className="text-[#C2A878] font-semibold hover:underline"
              >
                Contact us to get started →
              </a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
