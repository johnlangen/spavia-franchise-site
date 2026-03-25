"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, tagLabels } from "../blog/blogData";
import { useState } from "react";

const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
const remaining = blogPosts.filter((p) => p !== featured);

export default function BlogGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? remaining.filter((p) => p.tags.includes(activeTag))
    : remaining;

  const tags = Object.entries(tagLabels);

  return (
    <>
      {/* ── Featured Post ── */}
      <Link
        href={featured.href}
        className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#C2A878] hover:shadow-xl transition-all mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[240px] md:h-[360px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute top-4 left-4 bg-[#C2A878] text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide">
              Featured
            </span>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
              <time dateTime={featured.date}>
                {new Date(featured.date + "T00:00:00").toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric" }
                )}
              </time>
              <span>&middot;</span>
              <span>{featured.readingTime} min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug group-hover:text-[#C2A878] transition-colors">
              {featured.title}
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-block text-sm font-bold text-[#C2A878]">
              Read article &rarr;
            </span>
          </div>
        </div>
      </Link>

      {/* ── Tag Filters ── */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeTag === null
              ? "bg-[#C2A878] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {tags.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTag(activeTag === key ? null : key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTag === key
                ? "bg-[#C2A878] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Blog Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag ?? "all"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#C2A878] hover:shadow-lg transition-all"
            >
              <div className="relative h-[200px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-[11px] px-2.5 py-1 rounded-full font-semibold tracking-wide backdrop-blur-sm">
                  {post.tags[0] && tagLabels[post.tags[0]]
                    ? tagLabels[post.tags[0]]
                    : post.tags[0]}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <time dateTime={post.date}>
                    {new Date(post.date + "T00:00:00").toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "short", day: "numeric" }
                    )}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <h2 className="text-lg font-semibold leading-snug group-hover:text-[#C2A878] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-bold text-[#C2A878]">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">
          No articles found for &ldquo;{activeTag && tagLabels[activeTag]}&rdquo;.
        </p>
      )}
    </>
  );
}
