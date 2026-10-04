import Link from "next/link";
import FranchiseOverviewForm from "./FranchiseOverviewForm";

export default function FranchiseIntroForm({
  leadSource,
}: {
  leadSource?: string;
}) {
  return (
    <section
      id="franchise-overview"
      className="section-space bg-[var(--cream)]"
    >
      <div className="site-container grid gap-10 lg:grid-cols-2 items-center">
        <div className="max-w-lg">
          <p className="eyebrow">From research to a real conversation</p>
          <h2 className="display-heading">
            Let’s see what ownership could look like for you.
          </h2>
          <p className="body-copy mt-5">
            Get an introduction to the Spavia business model, the investment and
            the support behind your spa. Alisa will help you explore whether
            your goals and market are a fit.
          </p>
          <Link href="/steps-to-ownership" className="text-link mt-6">
            See the steps to ownership <span aria-hidden="true">→</span>
          </Link>
        </div>
        <FranchiseOverviewForm leadSource={leadSource} formType="intro" />
      </div>
    </section>
  );
}
