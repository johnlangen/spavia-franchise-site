"use client";
import FaqList from "./FaqList";
import GoldBottomBanner from "./GoldBottomBanner";
import PageHero from "./PageHero";

import Image from "next/image";
import AwardsSection from "./AwardsSection";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import NavBar from "./NavBar";

const expertiseItems = [
  {
    title: "Over 120 Years of Spa Experience",
    content:
      "We know spas, inside and out. From day one of committing to your Spavia journey, you will feel the support and commitment from our team of experts. We take the time to understand your individual needs and challenges.",
  },
  {
    title: "Exceptional Experience Team Training",
    content:
      "Ongoing training to ensure a consistent and exceptional experience is provided to each and every guest.",
  },
  {
    title: "Vendor Training",
    content:
      "We partner with our carefully selected vendors to provide training to our teams, which broadens their industry knowledge.",
  },
  {
    title: "Operational Systems and POS",
    content:
      "We are on the pulse of new technology and we are constantly evolving our systems to make the process easier for franchise partners and team members alike.",
  },
  {
    title: "Spa Services Specialist Training",
    content:
      "Our spa training experts have frequent training sessions to keep teams engaged and aware of new trends, treatments and products.",
  },
  {
    title: "Marketing Training",
    content:
      "Our marketing experts equip franchisees with marketing tools and community engagement strategies to drive growth and establish a trusted wellness presence.",
  },
];

const journeyItems = [
  {
    title: "Strategic Sessions with Founders & Leadership Team",
    content:
      "Hear directly from our Founders and Leadership Team on what to expect when becoming a Spavia franchise partner. This is where the journey begins — grounded in vision, passion, and clarity.",
    imageSrc: "/media/logo-stone-wall.webp",
    imageAlt: "Spavia brand signage in a day spa location",
  },
  {
    title: "On-Site Operations Training",
    content:
      "Hands-on training for you and your team. Learn systems, procedures, and guest engagement in a live spa environment to ensure confidence on day one.",
    imageSrc: "/media/cupping-therapy-scrubs.webp",
    imageAlt: "Spavia specialist in branded scrubs performing cupping therapy",
  },
  {
    title: "Spa Services Training",
    content:
      "A three-step process designed to create confident, consistent specialists:",
    listItems: [
      "Online e-learning introduction to protocols and systems",
      "Deep dives with Spavia Trainers",
      "Hands-on training to ensure excellence in every guest experience",
    ],
    imageSrc: "/media/facial-fan-brush.webp",
    imageAlt: "Facial treatment technique with fan brush application",
  },
  {
    title: "E-Learning – Spavia University",
    content:
      "Access training 24/7 with our e-learning LMS suite. Includes video, text, quizzes, and reporting to keep your team engaged and accountable.",
    imageSrc: "/media/skincare-product-serum.webp",
    imageAlt: "Spavia skincare product knowledge and training",
  },
  {
    title: "Classroom Training – Denver, CO",
    content:
      "New owners meet the Spavia team and undergo in-depth training covering Operations, Marketing, Economics, Spa Services, and Systems. Grand Opening Training: Marketing, POS, and over 15 guides to prepare you for a successful launch.",
    imageSrc: "/media/reception-guest-experience.webp",
    imageAlt:
      "Spavia front desk and guest experience in a Denver-area location",
  },
];

const trainingFaqs = [
  {
    question: "What kind of training does Spavia provide new franchise owners?",
    answer:
      "Per the 2026 FDD, Item 11, Spavia's Initial Training Program covers 26 hours of classroom training across 14 subject areas (operations, marketing, memberships, recruiting, spa services, and more) plus 14 to 21 hours of on-site training at your spa near opening. Training is delivered through pre-opening webinars, classroom sessions at our designated training facility in Greenwood Village, Colorado, and on-site instruction. The Initial Training Fee covers tuition for you and up to two additional trainees.",
  },
  {
    question: "Does Spavia offer ongoing support after opening?",
    answer:
      "Yes. Spavia provides ongoing support including exceptional experience team training, vendor training from carefully selected partners, operational systems and POS support with evolving technology, spa services specialist training on new trends and treatments, and marketing training with community engagement strategies.",
  },
  {
    question: "What is Spavia University?",
    answer:
      "Spavia University is Spavia's e-learning LMS suite that provides 24/7 access to training including video, text, quizzes, and reporting to keep teams engaged and accountable.",
  },
  {
    question:
      "How much spa industry experience does the Spavia leadership team have?",
    answer:
      "The Spavia national team brings over 120 years of combined experience in spa and beauty, providing expert insights and guidance from day one of your franchise journey.",
  },
  {
    question: "Where does Spavia classroom training take place?",
    answer:
      "New owners attend in-depth classroom training in Denver, Colorado, covering operations, marketing, economics, spa services, and systems. Grand opening training includes marketing, POS setup, and over 15 guides to prepare you for a successful launch.",
  },
];

export default function TrainingAndSupportContent() {
  return (
    <>
      <NavBar />
      <Breadcrumbs items={[{ label: "Training & Support" }]} />
      <main id="main-content">
        <PageHero
          eyebrow="From your first decision to your opening day"
          title="Training and Support"
          intro="Bring your leadership and your vision. Spavia provides training, operating systems and a national team to help you build—and keep building—your day spa business."
          image="/media/facial-product-prep.webp"
          alt="Preparing professional skin care products for a Spavia treatment"
          action={{
            href: "#training-program",
            label: "Explore the training program",
          }}
        />
        <section id="training-program" className="section-space">
          <div className="site-container">
            <p className="eyebrow">The foundation for your opening</p>
            <h2 className="display-heading">
              Structured training.
              <br />
              Practical preparation.
            </h2>
            <p className="body-copy mt-6 max-w-2xl">
              Spavia’s Initial Training Program combines classroom learning with
              on-site preparation for you and your team.
            </p>
            <dl className="training-facts">
              <div>
                <dd>26</dd>
                <dt>
                  Hours of classroom training
                  <br />
                  <span>Across 14 subject areas</span>
                </dt>
              </div>
              <div>
                <dd>14–21</dd>
                <dt>
                  Hours of on-site training
                  <br />
                  <span>At your spa near opening</span>
                </dt>
              </div>
              <div>
                <dd>3</dd>
                <dt>
                  Trainees covered
                  <br />
                  <span>By the Initial Training Fee</span>
                </dt>
              </div>
              <div>
                <dd>~173</dd>
                <dt>
                  Page operations manual
                  <br />
                  <span>Plus online System Site updates</span>
                </dt>
              </div>
            </dl>
            <p className="fine-print">Source: 2026 Spavia FDD, Item 11.</p>
          </div>
        </section>
        <section className="section-space bg-[#f5f5f5]">
          <div className="site-container editorial-grid">
            <div>
              <p className="eyebrow">The people and systems behind you</p>
              <h2 className="display-heading">
                Support for the work
                <br />
                you do every day.
              </h2>
              <p className="body-copy mt-6">
                Explore the expertise available as you learn to lead your spa,
                develop your team and build your local presence.
              </p>
            </div>
            <FaqList
              items={expertiseItems.map((item) => ({
                question: item.title,
                answer: item.content,
              }))}
            />
          </div>
        </section>
        <section className="section-space">
          <div className="site-container">
            <p className="eyebrow">How you’ll learn</p>
            <h2 className="display-heading mb-10">
              From the classroom
              <br />
              to your own spa.
            </h2>
            <div className="training-stages">
              {journeyItems.map((item, index) => (
                <details
                  key={item.title}
                  name="training-stages"
                  open={index === 0}
                >
                  <summary>
                    <span className="stage-number">0{index + 1}</span>
                    <span>{item.title}</span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="training-stage-body">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={640}
                      height={400}
                      className="object-cover"
                      sizes="(max-width:800px) 100vw, 45vw"
                    />
                    <div>
                      <p className="body-copy">{item.content}</p>
                      {item.listItems && (
                        <ol className="list-decimal pl-5 mt-5 space-y-3">
                          {item.listItems.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section-space bg-[#f5f5f5]">
          <div className="site-container faq-layout">
            <div>
              <p className="eyebrow">Plan with clarity</p>
              <h2 className="display-heading">Training & support questions.</h2>
            </div>
            <FaqList items={trainingFaqs} />
          </div>
        </section>
        <AwardsSection />
        <GoldBottomBanner />
      </main>
      <Footer />
    </>
  );
}
