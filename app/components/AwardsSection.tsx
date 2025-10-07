"use client";

import Image from "next/image";
import Link from "next/link";

const awards = [
  { src: "/awards/award1.svg", alt: "Top Franchise Award" },
  { src: "/awards/award2.png", alt: "Entrepreneur Franchise 500" },
  { src: "/awards/award3.webp", alt: "Franchise Business Review" },
  { src: "/awards/award4.png", alt: "Inc. 5000 Recognition" },
  { src: "/awards/award5.png", alt: "Wellness Industry Excellence Award" },
  { src: "/awards/award6.png", alt: "Best Spa Franchise Award" },
  { src: "/awards/award7.png", alt: "Top Growing Franchise Award" },
  { src: "/awards/award8.png", alt: "Industry Innovation Award" },
  { src: "/awards/award9.png", alt: "Community Impact Award" },
];

export default function AwardsSection() {
  return (
    <section className="bg-white py-26">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Awards, Press, and Recognition
        </h2>
        <div className="h-1 w-32 bg-[#C2A878] mx-auto mb-8"></div>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {awards.concat(awards).map((award, i) => (
              <div key={i} className="flex-shrink-0 px-8">
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/our-franchisees" className="text-[#C2A878] font-medium hover:underline">
            Explore franchisee stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
