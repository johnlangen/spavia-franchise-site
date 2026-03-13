"use client";

import Image from "next/image";
import Link from "next/link";

const awards = [
  { src: "/awards/award1.svg", alt: "Top Franchise Award" },
  { src: "/awards/award2.png", alt: "Titan 100 Award" },
  { src: "/awards/award3.webp", alt: "Franchise Times" },
  { src: "/awards/award4.png", alt: "Inc. Magazine" },
  { src: "/awards/award5.png", alt: "Quality Business Awards" },
  { src: "/awards/award6.png", alt: "Maple Grove Magazine" },
  { src: "/awards/award7.png", alt: "Cities South Magazine" },
  { src: "/awards/award8.png", alt: "FranServe" },
  { src: "/awards/award9.png", alt: "2025 Franchise Innovation Winner" },
];

export default function AwardsSection() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Awards, Press, and Recognition
        </h2>
        <div className="h-1 w-32 bg-[#C2A878] mx-auto mb-8" />

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {awards.concat(awards).map((award, i) => (
              <div key={i} className="flex-shrink-0 px-6">
                <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-center h-16">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={140}
                    height={60}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/press" className="text-[#C2A878] font-medium hover:underline">
            View all press &amp; recognition →
          </Link>
        </div>
      </div>
    </section>
  );
}
