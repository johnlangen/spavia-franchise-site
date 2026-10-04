"use client";
import FaqList from "./FaqList";
import GoldBottomBanner from "./GoldBottomBanner";
import PageHero from "./PageHero";

import { ClipboardCheck, Heart, Star, Users } from "lucide-react";
import AwardsSection from "./AwardsSection";
import Breadcrumbs from "./Breadcrumbs";
import NavBar from "./NavBar";

import Image from "next/image";
import Footer from "./Footer";
import FranchiseeVideoTestimonial from "./FranchiseeVideoTestimonial";

const entrepreneurTraits = [
  {
    title: "Natural Leaders",
    description:
      "Individuals who possess innate leadership qualities, demonstrating the ability to guide and inspire others organically.",
    icon: Users,
  },
  {
    title: "Drive to Succeed",
    description:
      "Motivated individuals with a strong determination to achieve success who exhibit resilience, a results-oriented mindset, and a commitment to overcoming challenges.",
    icon: ClipboardCheck,
  },
  {
    title: "Passion for Spa",
    description:
      "Team members who harbor a genuine passion for the spa industry. With enthusiasm and love for the growing wellness industry.",
    icon: Heart,
  },
  {
    title: "Highly Engaged",
    description:
      "Team players who are involved within the franchise system and dedicated to contributing to the overall efficiency and effectiveness of Spavia as a whole.",
    icon: Star,
  },
];

const testimonials = [
  {
    name: "Paul",
    role: "Spavia Owner, Chicago, IL",
    text: "As a Spavia owner, what fills my cup is seeing the daily growth of team members as they challenge themselves and helping to guide them along. Each day brings a new discovery for someone, as they realize that by digging deep, they learn, grow, and earn guest loyalty by giving their best effort, which translates into an exceptional experience for their guests!",
    image: "/our-franchisees/image4.jpg",
  },
  {
    name: "Kari",
    role: "Spavia Owner, Centennial, CO",
    text: "I chose Spavia because it is more than just a business, it is a network of passionate, caring individuals that have come together to make a difference in the lives of our guests and team.",
    image: "/our-franchisees/image1.jpg",
  },
  {
    name: "Nivin",
    role: "Spavia Owner, Fredericksburg, VA",
    text: "Everything we do is about the guest experience. We say it, we do it and we firmly believe it. With this mentality, productivity increases and revenue follows.",
    image: "/our-franchisees/image2.jpg",
  },
  {
    name: "Patricia",
    role: "Spavia Owner, Orlando, FL",
    text: "The Spavia National team has a passion for what they do. I love the branding and level of knowledge that they readily share. This is especially important to me since I came from 25 years in the banking industry and was not in the spa industry before.",
    image: "/our-franchisees/image3.jpg",
  },
];

const ourFranchiseesFaqs = [
  {
    question: "What qualities does Spavia look for in franchise candidates?",
    answer:
      "Spavia seeks natural leaders with a drive to succeed, a genuine passion for the spa and wellness industry, and a commitment to being highly engaged within the franchise system. Ideal candidates demonstrate resilience, a results-oriented mindset, and dedication to contributing to the overall effectiveness of Spavia.",
  },
  {
    question:
      "Do I need prior spa or wellness experience to own a Spavia franchise?",
    answer:
      "No. Spavia welcomes entrepreneurs from all backgrounds. For example, one franchise owner came from 25 years in the banking industry with no prior spa experience. Spavia's comprehensive training programs prepare owners regardless of their previous industry experience.",
  },
  {
    question: "Where do Spavia franchise owners operate?",
    answer:
      "Spavia franchise owners operate across the United States, including locations in markets like Chicago, IL; Centennial, CO; Fredericksburg, VA; and Orlando, FL, among others.",
  },
  {
    question:
      "What do current Spavia franchise owners say about the experience?",
    answer:
      "Spavia franchise owners consistently highlight the strong support from the national team, the brand's passion and knowledge, and the rewarding experience of building a wellness business. Owners describe Spavia as more than just a business \u2014 it's a network of passionate, caring individuals making a difference in the lives of guests and team members.",
  },
];

export default function OurFranchiseesContent() {
  return (
    <>
      <NavBar />
      <Breadcrumbs items={[{ label: "Our Franchisees" }]} />
      <main id="main-content">
        <PageHero
          eyebrow="People who made it their own"
          title="Our Franchisees"
          intro="Different backgrounds. Different communities. Hear from the owners building their businesses with Spavia—and the people behind their decision to begin."
          image="/testimonials/merirae-tackett.jpg"
          alt="Merirae Tackett, Spavia franchise owner in Reno, Nevada"
          action={{ href: "#owner-stories", label: "Hear from Spavia owners" }}
        />
        <section id="owner-stories" className="section-space">
          <div className="site-container">
            <FranchiseeVideoTestimonial
              eyebrow="Inside the business"
              heading="Merirae Tackett, Spavia Reno"
              intro="On balancing massage and skin care, building a business with her husband, and why she wishes they had started sooner."
            />
            <details className="owner-film">
              <summary>
                Watch more perspectives on Spavia ownership{" "}
                <span aria-hidden="true">+</span>
              </summary>
              <video
                src="/our-franchisees/video1.mp4"
                controls
                preload="none"
                poster="/our-franchisees/image4.jpg"
                className="w-full"
                aria-label="Spavia franchise owners share their experience"
              />
            </details>
          </div>
        </section>
        <section className="section-space bg-[#f5f5f5]">
          <div className="site-container">
            <p className="eyebrow">In their own words</p>
            <h2 className="display-heading">
              The work. The people. The reasons they chose Spavia.
            </h2>
            <div className="owner-portraits">
              {testimonials.map((owner) => (
                <figure key={owner.name} data-motion="rise">
                  <Image
                    src={owner.image}
                    alt={owner.name}
                    width={176}
                    height={176}
                  />
                  <div>
                    <blockquote>“{owner.text}”</blockquote>
                    <figcaption>
                      <strong>{owner.name}</strong> · {owner.role}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="section-space">
          <div className="site-container editorial-grid">
            <div>
              <p className="eyebrow">Could this be your community?</p>
              <h2 className="display-heading">
                Leadership matters.
                <br />
                Spa experience is something you can learn.
              </h2>
              <p className="body-copy mt-6">
                Owners come from many industries. What connects them is a
                commitment to their teams, their guests and the business they
                are building.
              </p>
            </div>
            <div className="support-chapters">
              {entrepreneurTraits.map((trait) => (
                <div key={trait.title}>
                  <h3>{trait.title}</h3>
                  <p>{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-space bg-[#f5f5f5]">
          <div className="site-container faq-layout">
            <div>
              <p className="eyebrow">Before you take the next step</p>
              <h2 className="display-heading">Questions about ownership.</h2>
            </div>
            <FaqList items={ourFranchiseesFaqs} />
          </div>
        </section>
        <AwardsSection />
        <GoldBottomBanner />
      </main>
      <Footer />
    </>
  );
}
