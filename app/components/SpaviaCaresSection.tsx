"use client";

import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    img: "/spavia-cares/3.png",
    title: "FarmHouse Fresh",
    caption: "Every product purchased helps rescue and care for neglected animals.",
  },
  {
    img: "/spavia-cares/4.png",
    title: "Pure Fiji",
    caption: "15+ years supporting the people of Fiji and a Fijian school.",
  },
  {
    img: "/spavia-cares/2.png",
    title: "IMAGE Skincare",
    caption: "$25 per Anniversary Facial donated to Blessings in a Backpack.",
  },
  {
    img: "/spavia-cares/1.png",
    title: "Spavia Cares Month",
    caption: "Every September, all locations rally around local causes.",
  },
];

export default function SpaviaCaresSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#9c8457] mb-3">
            Spavia Cares
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Giving back is built into the brand
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Owners support their communities year-round, and every September —
            our anniversary month — all locations rally around the causes that
            matter most where they live. Our product partners are chosen for
            their philanthropy, too.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stories.map((s) => (
            <figure key={s.title}>
              <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <p className="font-bold text-gray-900 text-sm md:text-base">
                  {s.title}
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-snug mt-1">
                  {s.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/who-we-are"
            className="text-sm font-semibold text-[#9c8457] hover:text-[#7d6943] transition-colors"
          >
            Meet the founders and team →
          </Link>
        </div>
      </div>
    </section>
  );
}
