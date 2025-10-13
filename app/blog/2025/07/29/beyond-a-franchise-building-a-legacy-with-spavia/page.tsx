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
      <main className="bg-white text-gray-900 py-20 px-6">
        <article className="max-w-3xl mx-auto">
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

          <p className="text-lg mb-8 leading-relaxed">
            Spavia franchise ownership isn’t just about running a business—it’s about{" "}
            <strong>building something that lasts</strong>. With financial opportunity,
            community impact, and multi-unit potential, many Spavia owners transform their
            investment into a family legacy that creates value for generations to come.
          </p>

          <img
            src="/blog/blog13.png"
            alt="Spavia franchise owners building a lasting legacy"
            className="w-full h-auto rounded mb-10 shadow"
          />

          <h2 className="text-2xl font-semibold mb-3">Beyond Business: Building a Legacy</h2>
          <p className="mb-6 leading-relaxed">
            Most people look at franchises as a way to generate income. At Spavia, it’s
            different. Owning a Spavia isn’t just about numbers on a balance sheet—it’s
            about creating{" "}
            <em>a foundation of wellness, resilience, and community connection</em>. Your spa
            becomes more than a business; it becomes a hub where lives are enriched every day.
          </p>

          <h2 className="text-2xl font-semibold mb-3">The Foundation of Lasting Success</h2>
          <p className="mb-6 leading-relaxed">
            Unlike concepts that focus only on short-term profits, Spavia prioritizes{" "}
            <strong>long-term growth, strong relationships, and community presence</strong>.
            Owners often grow from one spa into multi-unit businesses—turning their
            investment into a family enterprise that stands the test of time.
          </p>

          <h2 className="text-2xl font-semibold mb-3">The Multi-Unit Advantage</h2>
          <p className="mb-6 leading-relaxed">
            Expanding into multiple locations unlocks powerful advantages:{" "}
          </p>
          <ul className="list-disc list-inside mb-6 leading-relaxed space-y-2">
            <li><strong>Diversification:</strong> Spread operations across multiple markets.</li>
            <li><strong>Efficiency:</strong> Share staff, marketing, and systems for smoother operations.</li>
            <li><strong>Family Involvement:</strong> Bring loved ones into leadership and create a lasting enterprise.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Creating Generational Wealth</h2>
          <p className="mb-6 leading-relaxed">
            Many Spavia owners involve their families—whether in guest care, marketing,
            or management. This not only strengthens the business but also fosters{" "}
            <strong>unity, purpose, and financial stability</strong> that can be passed on
            to future generations.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Community Impact</h2>
          <p className="mb-6 leading-relaxed">
            Spavia spas quickly become trusted wellness hubs. Guests come for stress relief
            and self-care, but they leave with more—meaningful connections, improved health,
            and a sense of belonging. Every location strengthens the community it serves.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Long-Term Growth</h2>
          <p className="mb-6 leading-relaxed">
            With tools for expansion, innovation, and succession planning, Spavia provides
            a proven framework for owners to ensure their businesses thrive today—and
            continue for decades to come.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Your Legacy Starts Today</h2>
          <p className="mb-8 leading-relaxed">
            Spavia offers more than a franchise. It’s an opportunity to{" "}
            <strong>create wealth, strengthen families, and leave a legacy of wellness</strong>.
            Whether you’re opening your first spa or expanding into multiple units, your
            legacy starts the day you choose Spavia.
          </p>

          <p className="mb-8 leading-relaxed">
            Ready to explore what’s possible?{" "}
            <a
              href="/get-started"
              className="text-[#C2A878] font-semibold hover:underline"
            >
              Contact us today →
            </a>
          </p>

          {/* Permalink */}
          <p className="text-sm text-gray-500">
            Permalink:{" "}
            <a
              href="https://spaviafranchise.com/blog/2025/10/07/beyond-a-franchise-building-a-legacy-with-spavia"
              className="underline"
            >
              https://spaviafranchise.com/blog/2025/10/07/beyond-a-franchise-building-a-legacy-with-spavia
            </a>
          </p>

          {/* Back Button at Bottom */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-block text-[#C2A878] hover:underline font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
