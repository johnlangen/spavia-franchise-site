"use client";

import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import AwardsSection from "./AwardsSection";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";
import Link from "next/link";

const whoWeAreFaqs = [
  {
    question: "Who founded Spavia Day Spa?",
    answer:
      "Spavia was co-founded by Marty Langenderfer (CEO) and Allison Langenderfer (President). Marty brings expertise in finance, marketing, and operations from his background at Cornell University, Travelocity, and DISH Network. Allison leads with passion in design, creativity, and spa retail, drawing on her experience at Macy's and in pharmaceutical sales.",
  },
  {
    question: "How long has Spavia been in business?",
    answer:
      "Spavia has been serving guests for over 20 years, bringing luxury spa treatments and amenities found at world-class resorts to local communities across America. The brand has built a network of Spavia Members who enjoy monthly treatments.",
  },
  {
    question: "What is Spavia Cares?",
    answer:
      "Spavia Cares is the brand's community-focused initiative. With every new location, the team actively works to become part of the neighborhoods they serve through philanthropic efforts, small business relationships, and community engagement.",
  },
  {
    question: "What leadership and support team does Spavia have?",
    answer:
      "Spavia's support team includes a Director of Franchise Development focused on recruitment and market growth, and a Director of Spa Services with over 15 years of franchise system experience specializing in market research for services, products, and equipment.",
  },
];

// --- Data ---
const founders = [
  {
    name: "Marty Langenderfer",
    role: "CEO & Co-founder",
    image: "/who-we-are/image1.png",
    bio: `Marty Langenderfer is CEO and Co-founder of Spavia. Marty is driven to create innovative concepts that achieve excellence through technology, marketing, operating systems and scalable growth. As an entrepreneur, Marty has an unorthodox background starting first as a CPA at a big six accounting firm which then transitioned into an MBA at Cornell University’s Johnson Graduate School of Management.

Shortly after, he joined American Airlines’ Sabre Division where he helped found Travelocity. Lessons learned from creating a world recognized brand helped Marty grow into his next venture as VP of DISH Network, where he focused on marketing, customer loyalty and customer service. During his tenure as an executive, the company grew from less than one million subscribers to over ten million. Marty’s years of expertise in finance, marketing, and operations enables him to lead the Spavia National team in delivering excellence.`,
  },
  {
    name: "Allison Langenderfer",
    role: "President & Co-founder",
    image: "/who-we-are/image2.png",
    bio: `Allison Langenderfer, President and Co-founder of Spavia, leads with passion in design, creativity, and spa retail. A Cal Poly San Luis Obispo graduate with a marketing focus, she embraces a "learning by doing" philosophy.

Before Spavia, Allison excelled as a Macy’s buyer and regional manager, followed by a 12-year career in pharmaceutical sales. She drives Spavia’s mission through Spavia Cares, franchisee support, and an expertly curated retail experience. She is also deeply passionate about fostering a strong culture and sense of community within Spavia, creating a welcoming environment for guests, team members, and franchise partners. With a market-driven approach, she brings world-class skincare, relaxation products, and gifts to Spavia’s retail. Her greatest success? Raising three children now launching careers of their own.`,
  },
];

const team = [
{
    name: "Tyler Woodard",
    role: "Director of Franchise Development",
    image: "/who-we-are/image5.png",
    bio: `Tyler brings extensive experience in franchise growth, sales strategy, and multi-unit development, with a proven track record of helping brands scale with intention. As Director of Franchise Development, he leads franchise recruitment efforts, strengthens the owner pipeline, and identifies high-potential markets to support Spavia’s continued expansion and long-term success.`,
  },
  {
    name: "Jessica Hartman",
    role: "Director of Spa Services",
    image: "/who-we-are/image6.png",
    bio: `With over 15 years of experience in a franchise system, Jessica specializes in market research for services, products, and equipment. Her expertise enhances operational efficiency and supports the development of popular treatment protocols, making her a key contributor to our team's success.`,
  },
];

// --- Component ---
export default function WhoWeAreContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <NavBar />
        <Breadcrumbs items={[{ label: "Who We Are" }]} />

      {/* Hero */}
      <section className="snap-start relative overflow-hidden pt-40 pb-24 text-center text-white px-4 sm:px-6">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/who-we-are.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
          >
            Spavia redefined the spa experience by bringing luxury treatments
            and amenities found at world-class resorts to local communities
            across America. For the last 20 years, Spavia has served guests
            nationwide and built a network of Spavia Members who enjoy monthly
            treatments to feel relaxed, recentered, and renewed.
          </motion.p>
        </div>
      </section>

      {/* Founders */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 justify-center">
            {founders.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 max-w-[500px] mx-auto flex flex-col"
              >
                <div className="w-full bg-gray-100 rounded-lg mb-4 overflow-hidden h-48 sm:h-72">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p className="text-sm text-[#C2A878] font-semibold mb-3">
                  {f.role}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line font-sans">
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="snap-start relative overflow-hidden py-20 bg-black text-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-[#C2A878]">
            Your Support Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="rounded-xl border border-[#C2A878] p-6 flex flex-col h-full bg-black/90"
              >
                <div className="w-full rounded-lg mb-4 overflow-hidden h-48 sm:h-56 border border-[#C2A878]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-base font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-[#C2A878] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-200 text-xs leading-relaxed font-sans">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <img
              src="/who-we-are/image7.png"
              alt="Spavia Cares"
              loading="lazy"
              className="rounded-xl shadow-md"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Spavia Cares</h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              Our focus on community has always been central to our growth. With
              every new Spavia, our team actively works to become part of the
              neighborhoods we serve. With philanthropic efforts, small business
              relationships, and community engagement, Spavia has worked
              tirelessly to better the community we care for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Responsibility */}
      <section className="snap-start py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Responsibility</h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              In life, gratitude and generosity of spirit are the greatest gifts
              we can give to ourselves and others. Spavia is committed to
              creating stronger communities, happier neighborhoods, and a better
              world than when we found it.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <img
              src="/who-we-are/image8.png"
              alt="Our Responsibility"
              loading="lazy"
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {whoWeAreFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-b pb-4 transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-[#C2A878] transition-colors cursor-pointer"
                  >
                    {faq.question}
                    <span
                      className={`text-2xl font-bold transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#C2A878]" : "rotate-0 text-gray-500"
                      }`}
                    >
                      {isOpen ? "\u2212" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="snap-start bg-white px-4 sm:px-6">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <div className="bg-black text-white py-10 text-center">
        <Link
          href="/why-spavia"
          className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
        >
          Next: Why Spavia →
        </Link>
      </div>

      <Footer />
    </main>
  );
}
