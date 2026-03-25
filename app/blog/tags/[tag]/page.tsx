import { Metadata } from "next";
import { notFound } from "next/navigation";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { getPostsByTag, tagLabels } from "../../blogData";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const label = tagLabels[tag];
  if (!label) return {};

  return {
    title: `${label} | Spavia Franchise Blog`,
    description: `Browse Spavia franchise blog posts about ${label.toLowerCase()}. Insights, guides, and resources for prospective spa franchise owners.`,
    alternates: {
      canonical: `https://spaviafranchise.com/blog/tags/${tag}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(tagLabels).map((tag) => ({ tag }));
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const label = tagLabels[tag];

  if (!label) notFound();

  const posts = getPostsByTag(tag);

  return (
    <>
      <NavBar />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: label },
        ]}
      />
      <main className="bg-white text-gray-900 py-32 px-6 [scroll-snap-type:none]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center tracking-tight">
            {label}
          </h1>
          <p className="text-center text-gray-500 mb-16">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block h-full border rounded-xl shadow hover:shadow-xl overflow-hidden transition-all duration-300 hover:border-[#C2A878] flex flex-col"
              >
                <div className="overflow-hidden relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date + "T00:00:00").toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </time>
                    <span>&middot;</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-[#C2A878] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-[#C2A878] font-semibold inline-block mt-auto pt-4 group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-block text-[#C2A878] hover:underline font-medium"
            >
              &larr; All Articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
