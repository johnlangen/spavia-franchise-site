import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { blogPosts,getRelatedPosts } from "../blog/blogData";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import FranchiseResearchLinks from "./FranchiseResearchLinks";
import NavBar from "./NavBar";

type Props = { title: string; description: string; path: string; image: string; published: string; faqs: { q: string; a: string }[]; children: ReactNode };

export default function FranchiseGuideArticle({ title, description, path, image, published, faqs, children }: Props) {
  const post = blogPosts.find((post) => post.href === path);
  const related = post ? getRelatedPosts(post.href, 3) : [];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: title, description, image: `https://spaviafranchise.com${image}`, datePublished: published, dateModified: "2026-10-02", author: { "@type": "Organization", name: "Spavia Franchise Team", url: "https://spaviafranchise.com/who-we-are" }, publisher: { "@id": "https://spaviafranchise.com/#organization" }, mainEntityOfPage: `https://spaviafranchise.com${path}` },
      { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };
  return <>
    <NavBar />
    <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: title }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <main id="main-content" className="bg-white text-gray-900 py-12 md:py-20 px-6 brand-light">
      <article className="franchise-article max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#705b31] underline underline-offset-4">Back to franchise insights</Link>
        <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight font-[family-name:var(--font-recoleta)]">{title}</h1>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed">{description}</p>
        <p className="mt-5 mb-8 text-sm text-gray-600">By <Link href="/who-we-are" className="underline">Spavia Franchise Team</Link> · Published <time dateTime={published}>{published}</time> · Updated <time dateTime="2026-10-02">October 2, 2026</time></p>
        <Image src={image} alt={title} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" priority className="w-full h-auto rounded-sm mb-10" />
        <div className="space-y-8 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-2 [&_p]:mb-4 [&_a]:underline [&_a]:text-[#705b31] [&_li]:mb-2">{children}</div>
        <section className="mt-12" aria-label="Frequently asked questions">
          <h2 className="text-2xl font-bold mb-6">Questions buyers ask</h2>
          {faqs.map(({ q, a }) => <div key={q} className="border-b border-gray-200 py-5"><h3 className="font-bold mb-2">{q}</h3><p className="text-gray-700 leading-relaxed">{a}</p></div>)}
        </section>
        <FranchiseResearchLinks />
        <section className="mt-12"><h2 className="text-2xl font-bold mb-5">Related franchise insights</h2><ul className="space-y-3">{related.map((item) => <li key={item.href}><Link href={item.href} className="text-[#705b31] underline underline-offset-4">{item.title}</Link></li>)}</ul></section>
      </article>
    </main>
    <Footer />
  </>;
}
