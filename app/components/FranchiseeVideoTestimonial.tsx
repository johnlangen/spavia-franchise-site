"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VIDEO_ID = "5Wt55D3qbmE";
const OWNER = "Merirae Tackett";
const OWNER_ROLE = "Spavia Owner, Reno, NV";
const POSTER = "/testimonials/merirae-tackett.jpg";

const TRANSCRIPT =
  "Our diversified revenue model has really been quite helpful to our business, because if we're struggling hiring massage therapists, we can try to drive revenue through our skincare program, and vice versa. If you are considering a franchise opportunity, I say start sooner rather than later. I really wish my husband and I had started this much younger in our career. When you choose a franchise that has a great road map for success, it makes everything easy. It's got scalability, you have great support. I just think it was the best decision we ever made. And the easier they make it through these systems, the easier it is for us as a franchisee to focus on our team members, our guests, and building our business.";

type Props = {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading?: string;
  intro?: string;
  className?: string;
};

export default function FranchiseeVideoTestimonial({
  variant = "light",
  eyebrow = "In Their Words",
  heading = "Hear From an Owner",
  intro,
  className = "",
}: Props) {
  const [playing, setPlaying] = useState(false);
  const dark = variant === "dark";

  const play = () => {
    setPlaying(true);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "testimonial_video_play", {
        owner: OWNER,
        video_id: VIDEO_ID,
      });
    }
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: `${OWNER}, ${OWNER_ROLE} — Spavia Franchise Owner Testimonial`,
            description: TRANSCRIPT.slice(0, 320),
            thumbnailUrl: `https://spaviafranchise.com${POSTER}`,
            uploadDate: "2026-08-25",
            embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
            transcript: TRANSCRIPT,
            publisher: {
              "@type": "Organization",
              name: "Spavia Day Spa",
            },
          }),
        }}
      />

      {(eyebrow || heading) && (
        <div className="text-center mb-8">
          {eyebrow && (
            <p className="text-sm tracking-[0.2em] text-[#C2A878] font-semibold uppercase mb-3">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2
              className={`text-2xl md:text-3xl font-bold font-[family-name:var(--font-recoleta)] ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {heading}
            </h2>
          )}
          {intro && (
            <p
              className={`mt-3 max-w-xl mx-auto leading-relaxed ${
                dark ? "text-white/60" : "text-gray-600"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      )}

      <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200/20 shadow-sm bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title={`${OWNER}, ${OWNER_ROLE}, on owning a Spavia franchise`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={play}
            aria-label={`Play video testimonial from ${OWNER}, ${OWNER_ROLE}`}
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            <Image
              src={POSTER}
              alt={`${OWNER}, ${OWNER_ROLE}`}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C2A878] shadow-lg transition-transform group-hover:scale-105">
                <Play
                  className="h-8 w-8 text-white translate-x-[2px]"
                  fill="currentColor"
                />
              </span>
            </span>
            <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 pt-12 pb-5 text-left">
              <span className="block text-white font-semibold text-lg">
                {OWNER}
              </span>
              <span className="block text-white/70 text-sm">{OWNER_ROLE}</span>
            </span>
          </button>
        )}
      </div>

      <details className="mt-4 group">
        <summary
          className={`cursor-pointer text-sm list-none select-none ${
            dark
              ? "text-white/50 hover:text-white/80"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <span className="group-open:hidden">Read the transcript</span>
          <span className="hidden group-open:inline">Hide transcript</span>
        </summary>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            dark ? "text-white/60" : "text-gray-600"
          }`}
        >
          {TRANSCRIPT}
        </p>
      </details>
    </div>
  );
}
