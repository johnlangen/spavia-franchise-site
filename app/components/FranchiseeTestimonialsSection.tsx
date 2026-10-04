import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Paul",
    role: "Spavia Owner, Chicago, IL",
    text: "As a Spavia owner, what fills my cup is seeing the daily growth of team members as they challenge themselves and helping to guide them along. Each day brings a new discovery for someone, as they realize that by digging deep, they learn, grow, and earn guest loyalty by giving their best effort.",
    image: "/our-franchisees/image4.jpg",
  },
  {
    name: "Kari",
    role: "Spavia Owner, Centennial, CO",
    text: "I chose Spavia because it is more than just a business. It is a network of passionate, caring individuals that have come together to make a difference in the lives of our guests and team.",
    image: "/our-franchisees/image1.jpg",
  },
  {
    name: "Nivin",
    role: "Spavia Owner, Fredericksburg, VA",
    text: "Everything we do is about the guest experience. We say it, we do it and we firmly believe it. With this mentality, productivity increases and revenue follows.",
    image: "/our-franchisees/image2.jpg",
  },
  {
    name: "Merirae",
    role: "Spavia Owner, Reno, NV",
    text: "If you are considering a franchise opportunity, I say start sooner rather than later. I really wish my husband and I had started this much younger in our career. When you choose a franchise that has a great road map for success, it makes everything easy. I just think it was the best decision we ever made.",
    image: "/testimonials/merirae-tackett.jpg",
  },
  {
    name: "Patricia",
    role: "Spavia Owner, Orlando, FL",
    text: "The Spavia National team has a passion for what they do. I love the branding and level of knowledge that they readily share. This is especially important to me since I came from 25 years in the banking industry and was not in the spa industry before.",
    image: "/our-franchisees/image3.jpg",
  },
];

export default function FranchiseeTestimonialsSection() {
  return (
    <section
      className="owner-perspectives section-space"
      data-section="owner_perspectives"
    >
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">From people who have made the decision</p>
            <h2 className="display-heading">
              Different backgrounds.
              <br />A shared sense of purpose.
            </h2>
          </div>
          <Link href="/our-franchisees" className="text-link">
            Meet our owners <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="owner-perspectives-grid">
          {[testimonials[1], testimonials[4]].map((owner) => (
            <figure key={owner.name}>
              <blockquote>“{owner.text}”</blockquote>
              <figcaption>
                <Image
                  src={owner.image}
                  alt={owner.name}
                  width={72}
                  height={72}
                />
                <div>
                  <strong>{owner.name}</strong>
                  <span>{owner.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
