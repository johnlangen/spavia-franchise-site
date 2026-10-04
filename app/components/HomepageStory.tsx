import Image from "next/image";
import Link from "next/link";
import FranchiseeVideoTestimonial from "./FranchiseeVideoTestimonial";
import FranchiseFinancialNote from "./FranchiseFinancialNote";

export default function HomepageStory() {
  return (
    <>
      <section className="section-space guest-story" data-section="home_model">
        <div className="site-container">
          <div className="editorial-heading" data-motion="rise">
            <p className="eyebrow">
              The guest experience. The business behind it.
            </p>
            <h2 className="display-heading">
              More reasons to visit.
              <br />
              More reasons to return.
            </h2>
            <p className="body-copy">
              The robe. The warm neck pillow. The quiet retreat room. Spavia
              brings a resort-inspired experience into everyday life, with a
              membership that makes wellness a regular ritual.
            </p>
          </div>
          <div className="service-stories">
            <Link
              href="/massage-franchise"
              className="service-story"
              data-track="cta_massage_model"
            >
              <div className="service-photo" data-motion="photo">
                <Image
                  src="/media/signature-massage-candle.webp"
                  alt="A massage therapist delivers a customized Spavia treatment"
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <span className="eyebrow">01 / Massage</span>
              <h3>A reason to slow down.</h3>
              <p>
                Customized massage brings guests back for care that fits their
                lives.
              </p>
              <span className="text-link">
                Explore massage franchise ownership{" "}
                <span aria-hidden="true">→</span>
              </span>
            </Link>
            <Link
              href="/facial-franchise"
              className="service-story"
              data-track="cta_facial_model"
            >
              <div className="service-photo" data-motion="photo">
                <Image
                  src="/media/facial-fan-brush.webp"
                  alt="A Spavia esthetician applies a facial treatment"
                  fill
                  sizes="(max-width: 800px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <span className="eyebrow">02 / Skin care</span>
              <h3>Care that goes deeper.</h3>
              <p>
                Facials and skin care complement massage and broaden the
                services your team can offer.
              </p>
              <span className="text-link">
                Explore the facial business <span aria-hidden="true">→</span>
              </span>
            </Link>
            <div className="membership-story" data-motion="rise">
              <p className="eyebrow">03 / Membership & more</p>
              <h3>
                Build relationships,
                <br />
                visit after visit.
              </h3>
              <p>
                Memberships support recurring revenue. Retail, gift cards, body
                treatments and enhancements give guests more ways to make Spavia
                part of their routine.
              </p>
              <Link
                href="/wellness-franchise"
                className="text-link"
                data-track="cta_wellness_model"
              >
                See the wellness model <span aria-hidden="true">→</span>
              </Link>
              <Link href="/your-spavia" className="text-link">
                Picture your Spavia <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-space owner-story"
        data-section="home_owner_story"
      >
        <div className="site-container owner-story-grid">
          <div data-motion="rise">
            <p className="eyebrow">Meet the people doing it</p>
            <h2 className="display-heading">
              What does ownership
              <br />
              feel like from the inside?
            </h2>
            <blockquote>
              “Our diversified revenue model has really been quite helpful to
              our business.”
            </blockquote>
            <p className="owner-attribution">
              Merirae Tackett <span>Spavia owner · Reno, Nevada</span>
            </p>
            <p className="body-copy mt-5">
              Hear Merirae discuss staffing, the value of multiple services and
              building a business with her husband.
            </p>
            <Link
              href="/our-franchisees"
              className="text-link mt-5"
              data-track="cta_owner_stories"
            >
              Meet more Spavia owners <span aria-hidden="true">→</span>
            </Link>
          </div>
          <FranchiseeVideoTestimonial eyebrow="" heading="" variant="dark" />
        </div>
      </section>
      <section
        id="investment"
        className="section-space"
        data-section="home_investment"
      >
        <div className="site-container investment-story">
          <div data-motion="rise">
            <p className="eyebrow">Know the investment</p>
            <h2 className="display-heading">
              A business decision.
              <br />
              With the details in view.
            </h2>
            <p className="body-copy mt-5">
              Look beyond the franchise fee. Understand the opening budget,
              ongoing costs and historical results before deciding whether
              Spavia belongs in your future.
            </p>
            <Link
              href="/franchise-cost"
              className="button button-dark mt-7"
              data-track="cta_investment"
            >
              Explore costs & financials <span aria-hidden="true">→</span>
            </Link>
            <Link href="/multi-unit" className="text-link mt-5">
              Considering multiple locations? <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="investment-numbers" data-motion="rise">
            <dl>
              <div>
                <dt>Total initial investment · Item 7</dt>
                <dd>$479,450–$885,450</dd>
              </div>
              <div>
                <dt>Initial franchise fee · Item 5</dt>
                <dd>$59,500</dd>
              </div>
              <div>
                <dt>Median annual revenue · Item 19, Part III*</dt>
                <dd>$1,110,481</dd>
              </div>
            </dl>
            <p className="fine-print">
              *2025 cash receipts at 44 reporting franchised locations.
              Historical performance does not guarantee future results.
            </p>
          </div>
          <div className="investment-disclosure">
            <FranchiseFinancialNote />
          </div>
        </div>
      </section>
      <section
        className="section-space support-story"
        data-section="home_support"
      >
        <div className="site-container support-story-grid">
          <figure data-motion="photo" className="story-photo-drift">
            <Image
              src="/media/reception-guest-experience.webp"
              alt="A Spavia team member welcomes a guest at reception"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>
          <div data-motion="rise">
            <p className="eyebrow">
              You bring the drive. We bring the experience.
            </p>
            <h2 className="display-heading">
              Build your business.
              <br />
              With people beside you.
            </h2>
            <div className="support-chapters">
              <div>
                <span>Before you open</span>
                <p>
                  Market and site guidance, spa design, training and a plan for
                  your opening.
                </p>
              </div>
              <div>
                <span>As you lead</span>
                <p>
                  Operating systems, marketing resources and continued support
                  for you and your team.
                </p>
              </div>
              <div>
                <span>As you grow</span>
                <p>
                  A community of franchise owners to learn from, and multi-unit
                  opportunities to explore.
                </p>
              </div>
            </div>
            <Link
              href="/training-and-support"
              className="text-link"
              data-track="cta_support"
            >
              See how Spavia supports owners <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="section-space founder-story"
        data-section="home_founders"
      >
        <div className="site-container founder-story-grid">
          <div data-motion="rise">
            <p className="eyebrow">Family-owned since 2005</p>
            <h2 className="display-heading">
              The people who started it
              <br />
              are still part of your story.
            </h2>
            <p className="body-copy mt-5">
              Allison and Marty Langenderfer founded Spavia in Denver with a
              belief that resort-inspired wellness should feel within reach.
              Today, that belief connects a nationwide community of locally
              owned spas.
            </p>
            <p className="body-copy mt-4">
              You’ll meet the founders and national team as part of your
              ownership process—and get to know the people behind the brand
              you’re considering.
            </p>
            <Link
              href="/who-we-are"
              className="text-link mt-6"
              data-track="cta_founders"
            >
              Meet the Spavia team <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="founder-portraits">
            {[
              {
                name: "Allison Langenderfer",
                role: "President & Co-founder",
                src: "/who-we-are/image2.png",
              },
              {
                name: "Marty Langenderfer",
                role: "CEO & Co-founder",
                src: "/who-we-are/image1.png",
              },
            ].map((person) => (
              <figure key={person.name} data-motion="photo">
                <div>
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    sizes="(max-width: 800px) 45vw, 23vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption>
                  {person.name}
                  <span>{person.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
