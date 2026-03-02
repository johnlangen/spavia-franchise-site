import { Metadata } from "next";
import TrainingAndSupportContent from "../components/TrainingAndSupportContent";

const trainingFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of training does Spavia provide new franchise owners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia provides comprehensive training including strategic sessions with founders and leadership, on-site operations training in a live spa environment, a three-step spa services training process (e-learning, deep dives with trainers, and hands-on training), access to Spavia University e-learning platform, and classroom training at headquarters in Denver, Colorado.",
      },
    },
    {
      "@type": "Question",
      name: "Does Spavia offer ongoing support after opening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spavia provides ongoing support including exceptional experience team training, vendor training from carefully selected partners, operational systems and POS support with evolving technology, spa services specialist training on new trends and treatments, and marketing training with community engagement strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What is Spavia University?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spavia University is Spavia's e-learning LMS suite that provides 24/7 access to training including video, text, quizzes, and reporting to keep teams engaged and accountable.",
      },
    },
    {
      "@type": "Question",
      name: "How much spa industry experience does the Spavia leadership team have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Spavia national team brings over 120 years of combined experience in spa and beauty, providing expert insights and guidance from day one of your franchise journey.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Spavia classroom training take place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New owners attend in-depth classroom training in Denver, Colorado, covering operations, marketing, economics, spa services, and systems. Grand opening training includes marketing, POS setup, and over 15 guides to prepare you for a successful launch.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Spa Franchise Training and Support | Spavia Spa Franchises",
  description:
    "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
  alternates: {
    canonical: "https://spaviafranchise.com/training-and-support",
  },
  openGraph: {
    title: "Spa Franchise Training and Support | Spavia Spa Franchises",
    description:
      "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
    url: "https://spaviafranchise.com/training-and-support",
    type: "website",
    images: [
      {
        url: "https://spaviafranchise.com/og/spavia-franchise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spavia Franchise Storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Franchise Training and Support | Spavia Spa Franchises",
    description:
      "Spavia's franchising team offers top-notch training and support from spa industry experts who have over 100 years of spa and beauty experience.",
    images: ["https://spaviafranchise.com/og/spavia-franchise-og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingFaqJsonLd) }}
      />
      <TrainingAndSupportContent />
    </>
  );
}
