"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogPosts, tagLabels } from "../blog/blogData";

const featured =
  blogPosts.find(
    (post) =>
      post.href === "/blog/2026/02/19/spa-franchise-opportunities-guide",
  ) ??
  blogPosts.find((post) => post.featured) ??
  blogPosts[0];
const dateLabel = (date: string) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export default function BlogGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag
    ? blogPosts.filter((post) => post.tags.includes(activeTag))
    : blogPosts.filter((post) => post !== featured);
  return (
    <>
      <div className="article-filters" aria-label="Filter articles by topic">
        <button
          type="button"
          aria-pressed={!activeTag}
          onClick={() => setActiveTag(null)}
        >
          All articles
        </button>
        {Object.entries(tagLabels).map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={activeTag === key}
            onClick={() => setActiveTag(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {!activeTag && (
        <Link href={featured.href} className="featured-article">
          <div className="featured-article-image">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Start here</p>
            <h2>{featured.title}</h2>
            <p className="body-copy mt-5">{featured.excerpt}</p>
            <p className="fine-print mt-5">
              <time dateTime={featured.date}>{dateLabel(featured.date)}</time>
            </p>
            <span className="text-link mt-5">
              Read the guide <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      )}
      <p role="status" className="fine-print mb-6">
        {activeTag
          ? `${filtered.length} articles on ${tagLabels[activeTag]}`
          : "More perspectives for your ownership decision"}
      </p>
      <div className="article-grid">
        {filtered.map((post) => (
          <Link href={post.href} key={post.href} className="article-card">
            <div className="article-card-image">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="eyebrow mt-6">
              {tagLabels[post.tags[0]] ?? post.tags[0]}
            </p>
            <h2>{post.title}</h2>
            <p className="body-copy mt-3">{post.excerpt}</p>
            <p className="fine-print mt-4">
              <time dateTime={post.date}>{dateLabel(post.date)}</time> ·{" "}
              {post.readingTime} min read
            </p>
            <span className="text-link mt-4">
              Read article <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="body-copy py-12">
          No articles are available in this topic yet.
        </p>
      )}
    </>
  );
}
