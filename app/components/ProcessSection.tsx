import Link from "next/link";

const steps = [
  {
    title: "Intro Call",
    description:
      "We want to get to know you! A one-on-one call with Alisa Anderson, our VP of Franchise Development, to learn your goals and answer your first questions.",
    button: "Schedule a Call",
  },
  {
    title: "Brand Overview",
    description:
      "We focus on the Spavia difference: our guest experience, our culture, and our four signature designs.",
  },
  {
    title: "FDD Review",
    description:
      "You receive the Franchise Disclosure Document, and we walk through it together and answer your questions.",
  },
  {
    title: "Market & Territory",
    description:
      "We look at your market together and review our Support Systems, Marketing, Operations, and Economics.",
  },
  {
    title: "Validation",
    description:
      "We connect you with current Spavia franchise partners so you can hear what ownership is really like.",
  },
  {
    title: "Meet the Team Day",
    description:
      "Join us for two days in Denver, Colorado. You will hear from key team members and have 1:1 time with our Founders and Executive Team.",
  },
  {
    title: "Franchise Agreement",
    description:
      "Franchise agreement delivered & signed. Welcome to the Spavia family.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="section-space"
      aria-labelledby="ownership-process-heading"
    >
      <div className="site-container process-layout">
        <div>
          <p className="eyebrow">Your path to ownership</p>
          <h2 id="ownership-process-heading" className="display-heading">
            The Franchise
            <br />
            Ownership Process
          </h2>
          <p className="body-copy mt-5">
            A conversation starts it. A shared understanding moves it forward.
            You’ll have opportunities to learn, ask and decide at every stage.
          </p>
        </div>
        <ol className="ownership-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.button && (
                  <Link href="/get-started" className="text-link mt-3">
                    {step.button} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
