"use client";

import Image from "next/image";

const awards = [
  "/awards/award1.svg",
  "/awards/award2.png",
  "/awards/award3.webp",
  "/awards/award4.png",
  "/awards/award5.png",
  "/awards/award6.png",
  "/awards/award7.png",
  "/awards/award8.png",
  "/awards/award9.png",
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
            {awards.concat(awards).map((src, i) => (
              <div key={i} className="flex-shrink-0 px-8">
                <Image
                  src={src}
                  alt={`Award ${i + 1}`}
                  width={140}   // smaller logos
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
