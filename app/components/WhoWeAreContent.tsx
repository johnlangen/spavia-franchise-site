"use client";
import FaqList from "./FaqList";
import GoldBottomBanner from "./GoldBottomBanner";
import PageHero from "./PageHero";

import { motion } from "framer-motion";
import AwardsSection from "./AwardsSection";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Link from "next/link";

const whoWeAreFaqs = [
  {
    question: "Who founded Spavia Day Spa?",
    answer:
      "Spavia was co-founded by Marty Langenderfer (CEO) and Allison Langenderfer. Marty brings expertise in finance, marketing, and operations from his background at Cornell University, Travelocity, and DISH Network. Allison leads with passion in design, creativity, and spa retail, drawing on her experience at Macy's and in pharmaceutical sales.",
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
      "Spavia's leadership includes a President with 20+ years of executive operations experience in wellness and franchising (formerly COO of CorePower Yoga), a Vice President of Franchise Development with 15 years in franchising and experience as a multi-unit franchise owner, and a Vice President of Spa Services with over 15 years of franchise system experience. Owners are also supported by dedicated Franchise Business Coaches and a national marketing and technology team.",
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
    role: "Co-founder",
    image: "/who-we-are/image2.png",
    bio: `Allison Langenderfer, Co-founder of Spavia, leads with passion in design, creativity, and spa retail. A Cal Poly San Luis Obispo graduate with a marketing focus, she embraces a "learning by doing" philosophy.

Before Spavia, Allison excelled as a Macy’s buyer and regional manager, followed by a 12-year career in pharmaceutical sales. She drives Spavia’s mission through Spavia Cares, franchisee support, and an expertly curated retail experience. She is also deeply passionate about fostering a strong culture and sense of community within Spavia, creating a welcoming environment for guests, team members, and franchise partners. With a market-driven approach, she brings world-class skincare, relaxation products, and gifts to Spavia’s retail. Her greatest success? Raising three children now launching careers of their own.`,
  },
];

const team = [
  {
    name: "Alisa Anderson",
    role: "Vice President of Franchise Development",
    image: "/who-we-are/alisa-anderson.jpg",
    objectPosition: "center 30%",
    bio: `Alisa brings 30 years in sales, marketing, and business development, including 15 years in franchising and time as a multi-unit franchise owner herself. A U.S. Air Force veteran, she has spent her career helping brands grow and helping entrepreneurs become owners.

As Vice President of Franchise Development, Alisa leads Spavia's franchise growth, guiding prospective owners from their first conversation through opening. Off the clock, you'll find her at Pilates, traveling, enjoying the outdoors, or spending time with her grandchildren.`,
  },
  {
    name: "Heather Holland",
    role: "President",
    image: "/who-we-are/heather-holland.png",
    objectPosition: "center 20%",
    bio: `Heather brings over 20 years of executive operations leadership across wellness, hospitality, and franchising. She previously served as Chief Operating Officer of CorePower Yoga, scaling the company from 89 to 225 studios across 20 markets, and earlier led people, training, and legal operations at Le Pain Quotidien during its global expansion. A UC Berkeley graduate with a JD from the University of Colorado, she has built her career at the intersection of hospitality, wellness, and franchise operations.

As President of Spavia, Heather leads company-wide operations, partnering with franchisees and the national support team to drive operational excellence, member growth, and continued brand expansion.`,
  },
  {
    name: "Jessica Hartman",
    role: "Vice President of Spa Services",
    image: "/who-we-are/image6.png",
    bio: `With over 15 years of experience in a franchise system, Jessica specializes in market research for services, products, and equipment. Her expertise enhances operational efficiency and supports the development of popular treatment protocols, making her a key contributor to our team's success.`,
  },
];

const supportGroups = [
  {
    title: "Franchise Business Coaches",
    intro: "Your day-to-day partners, from pre-opening through every stage of growth.",
    people: [
      {
        name: "Danette Sugg",
        role: "Franchise Business Coach",
        image: "/who-we-are/danette-sugg.jpg",
        bio: "With 18 years in the spa industry, Danette guides new owners from signed agreement to grand opening. She runs pre-opening calls, owner training and remodel planning so every new Spavia opens on schedule and ready to grow.",
      },
      {
        name: "Whitney Gustafson",
        role: "Franchise Business Coach",
        image: "/who-we-are/whitney-gustafson.jpg",
        bio: "Whitney brings nearly two decades in wellness, including more than ten years with CorePower Yoga, to coaching owners on membership growth, team training and the numbers that drive a healthy spa.",
      },
      {
        name: "Sarah Jo Massobrio",
        role: "Franchise Business Coach",
        image: "/who-we-are/sarah-jo-massobrio.jpg",
        bio: "Sarah Jo brings 16 years in wellness to her work with owners from Florida to Massachusetts, partnering with each spa on membership goals, team performance and day-to-day operations.",
      },
    ],
  },
  {
    title: "Spa Services",
    intro: "The team behind your treatments, protocols and spa training, working alongside our VP of Spa Services.",
    people: [
      {
        name: "Jocelyn Farmer",
        role: "Spa Services & Hospitality",
        image: "/who-we-are/jocelyn-farmer.jpg",
        bio: "Jocelyn helps every spa deliver Spavia's signature hospitality, building onboarding and training for spa teams and supporting owners on service standards. She also leads day-to-day operations at our Sway Wellness Spas in Denver.",
      },
      {
        name: "Erin Chambers",
        role: "Spa Services & Education Support Specialist",
        image: "/who-we-are/erin-chambers.jpg",
        bio: "Erin keeps the details behind every treatment running smoothly, updating service protocols and Spastream training content and building opening checklists so new owners launch with everything they need.",
      },
    ],
  },
  {
    title: "Marketing & Technology",
    intro: "The national team behind your brand, your local launch and the tools you run your spa on.",
    people: [
      {
        name: "Emily Langenderfer",
        role: "Marketing Director",
        image: "/who-we-are/emily-langenderfer.jpg",
        bio: "Emily leads Spavia's brand and marketing, from PR and national campaigns to member communications, so every owner has a polished brand to launch and grow with.",
      },
      {
        name: "Ruthie Massman",
        role: "Director of Membership & Local Marketing",
        image: "/who-we-are/ruthie-massman.jpg",
        bio: "A Colorado native with more than 20 years across wellness, fitness and hospitality, Ruthie helps owners fill their spas from day one with pre-opening launch plans, founding membership campaigns, local partnerships and in-spa marketing.",
      },
      {
        name: "Katelyn Hamilton",
        role: "Marketing & Brand Coordinator",
        image: "/who-we-are/katelyn-hamilton.jpg",
        bio: "Katelyn creates the marketing assets and videos behind the Spavia brand and helps owners get the most from our marketing platforms while keeping brand standards consistent across every location.",
      },
      {
        name: "John Langenderfer",
        role: "Director of Technology & AI",
        image: "/who-we-are/john-langenderfer.jpg",
        bio: "John builds the technology and AI behind every Spavia: the dashboards owners use to run their business, the network's websites, and the data and digital marketing that bring in new guests.",
      },
    ],
  },
];

// --- Component ---
export default function WhoWeAreContent() {

  return (
    <main id="main-content" className="text-gray-900">
      <NavBar />
        <Breadcrumbs sticky items={[{ label: "Who We Are" }]} />

      {/* Hero */}
      <PageHero eyebrow="Family-owned since 2005" title="Who We Are" intro="Spavia began with a belief: the care and calm of a resort spa should belong in everyday life. Meet the founders and national team helping local owners bring that experience to their communities." image="/media/logo-stone-wall.webp" alt="Spavia's wordmark on a stone feature wall" dark action={{href:"#founders",label:"Meet the people behind Spavia"}} />

      {/* Founders */}
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 id="founders" className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 justify-center">
            {founders.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-sm transition p-6 max-w-[500px] mx-auto flex flex-col brand-light"
              >
                <div data-motion="photo" className="w-full bg-gray-100 rounded-sm mb-4 overflow-hidden h-48 sm:h-72 brand-light">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p className="text-sm text-[var(--accent-text)] font-semibold mb-3">
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
      <section className="relative overflow-hidden py-20 bg-black text-white px-4 sm:px-6 brand-dark">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-[var(--accent-text)]">
            Leadership Team
          </h2>
          <div
            className={`grid gap-8 ${
              team.length <= 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {team.map((member, i) => (
              <motion.div
                data-motion="rise"
                key={i}
                initial={false}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="rounded-sm border border-[#b38a5f] p-6 flex flex-col h-full bg-black/90"
              >
                <div className="w-full rounded-sm mb-4 overflow-hidden h-48 sm:h-56 border border-[#b38a5f]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: ("objectPosition" in member && member.objectPosition) || "center" }}
                  />
                </div>
                <h3 className="text-base font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--accent-text)] font-semibold mb-2">
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

      {/* Support team: coaches, marketing and technology */}
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">Your Support Team</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 font-sans">
            Every owner works with a national team that knows the spa business, from your first week to your fifth location.
          </p>
          <div className="space-y-16">
            {supportGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-bold text-center">{group.title}</h3>
                <p className="text-center text-sm text-gray-600 mt-1 mb-8 font-sans">{group.intro}</p>
                <div className={`grid gap-8 sm:grid-cols-2 ${group.people.length === 4 ? "lg:grid-cols-4" : group.people.length === 2 ? "max-w-3xl mx-auto" : "lg:grid-cols-3"}`}>
                  {group.people.map((p) => (
                    <div key={p.name} data-motion="rise" className="flex flex-col items-center text-center">
                      <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-100 mb-4 border border-[#b38a5f]/60">
                        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover object-top grayscale" />
                      </div>
                      <p className="text-base font-bold">{p.name}</p>
                      <p className="text-xs text-[var(--accent-text)] font-semibold mb-2">{p.role}</p>
                      <p className="text-sm text-gray-700 leading-relaxed font-sans max-w-xs">{p.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-[#b38a5f]/40 pt-12 text-center" data-motion="rise">
            <p className="text-2xl font-bold">Want to meet the team?</p>
            <p className="text-gray-600 mt-2 mb-6 font-sans">Your first step is a conversation with Alisa about your goals and your market.</p>
            <Link href="/get-started" className="button button-primary" data-track="cta_team_inquiry">
              Request Info <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={false} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <img
              src="/who-we-are/image7.png"
              alt="Spavia Cares"
              loading="lazy"
              className="rounded-sm"
            />
          </motion.div>
          <motion.div initial={false} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
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
      <section className="py-20 bg-gray-50 px-4 sm:px-6 brand-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={false} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Responsibility</h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              In life, gratitude and generosity of spirit are the greatest gifts
              we can give to ourselves and others. Spavia is committed to
              creating stronger communities, happier neighborhoods, and a better
              world than when we found it.
            </p>
          </motion.div>
          <motion.div initial={false} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <img
              src="/who-we-are/image8.png"
              alt="Our Responsibility"
              loading="lazy"
              className="rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <FaqList items={whoWeAreFaqs} />
        </div>
      </section>

      {/* Awards */}
      <section className="bg-white px-4 sm:px-6 brand-light">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <GoldBottomBanner />

      <Footer />
    </main>
  );
}
