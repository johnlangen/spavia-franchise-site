"use client";

import NavBar from "./NavBar";
import AwardsSection from "./AwardsSection";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Link from "next/link";

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
    name: "Courtney Allison",
    role: "Chief Operating Officer",
    image: "/who-we-are/image3.png",
    bio: `With over 10 years of experience as a franchise operations leader, Courtney has a proven track record of supporting franchisees in high-growth systems. Her strong background in operations and training, coupled with her passion for driving franchisee success and profitability, makes her an invaluable asset to the team.`,
  },
  {
    name: "Dana Benfield",
    role: "Chief Marketing Officer",
    image: "/who-we-are/image4.png",
    bio: `With over two decades of marketing expertise and strategic vision, Dana’s creativity and professionalism enhance our commitment to strong brand recognition, ensuring our presence resonates from national landscapes to local communities, making her a key asset in driving growth and revenue for the team.`,
  },
  {
    name: "Karyn White",
    role: "Director of Franchise Development",
    image: "/who-we-are/image5.png",
    bio: `With a wealth of franchise experience and a deep passion for the wellness industry, Karyn’s expertise in building strong franchisee relationships and driving unit growth plays a pivotal role as we continue to expand and bring exceptional spa offerings to even more communities across the country.`,
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
  return (
    <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <NavBar />

      {/* Hero */}
      <section className="snap-start bg-gradient-to-b from-[#C2A878] to-[#e3d6b7] pt-40 pb-24 text-center text-white px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
        >
          Spavia redefined the spa experience by bringing luxury treatments and
          amenities found at world-class resorts to local communities across
          America. For the last 20 years, Spavia has served guests nationwide
          and built a network of Spavia Members who enjoy monthly treatments to
          feel relaxed, recentered, and renewed.
        </motion.p>
      </section>

      {/* Founders */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 justify-center">
            {founders.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform md:hover:scale-[1.02] p-6 max-w-[500px] mx-auto flex flex-col"
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="rounded-lg mb-4 w-full h-72 object-cover object-center"
                />
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p className="text-sm text-[#C2A878] font-semibold mb-3">
                  {f.role}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line font-sans">
                  {f.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="snap-start py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Your Support Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 transition md:hover:scale-105 md:hover:shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg mb-4 w-full object-cover h-56"
                />
                <h3 className="text-base font-bold">{member.name}</h3>
                <p className="text-xs text-[#C2A878] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-700 text-xs leading-relaxed font-sans">
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/who-we-are/image7.png"
              alt="Spavia Cares"
              className="rounded-xl shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Spavia Cares
            </h2>
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Responsibility
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              In life, gratitude and generosity of spirit are the greatest gifts
              we can give to ourselves and others. Spavia is committed to
              creating stronger communities, happier neighborhoods, and a better
              world than when we found it. That’s why we’re committed to
              sourcing high quality products that are good for our guests and
              the planet.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/who-we-are/image8.png"
              alt="Our Responsibility"
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="snap-start bg-white px-4 sm:px-6">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <div className="bg-black text-white py-10 text-center">
        <Link
          href="/steps-to-ownership"
          className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
        >
          Next: Steps to Ownership →
        </Link>
      </div>

      <Footer />
    </main>
  );
}
