import { Metadata } from "next";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Button from "./components/Button";
import FAQ from "./components/FAQ";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeSelector from "./components/ThemeSelector";
import ThemeGallery from "./components/ThemeGallery";
import ProofSection from "./components/ProofSection";
import AwardsSection from "./components/AwardsSection";
import SpaviaCaresSection from "./components/SpaviaCaresSection";
import ProcessSection from "./components/ProcessSection";
import MultiStepForm from "./components/MultiStepForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

export const metadata: Metadata = {
  title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
  description:
    "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
};

export default function Home() {
  return (
    <ThemeProvider>

      <NavBar />
      <main className="flex flex-col">
        {/* HERO */}
        
        <Hero />

      {/* THEME SELECTION */}
      <Section className="bg-white pt-28 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2 scroll-mt-24">
          Choose Your Spa Design
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Select a theme to see how your spa can look and feel.
        </p>
        <ThemeSelector />
        <ThemeGallery />
      </Section>


        {/* PROOF SECTION */}
        <ProofSection />

        {/* AWARDS SECTION */}
        <AwardsSection />

        {/* SPAVIA CARES SECTION */}
        <SpaviaCaresSection />

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* MULTI-STEP FORM SECTION */}
        {/* MULTI-STEP FORM SECTION */}
        <Section id="franchise-form" className="bg-white">
          <MultiStepForm />
          <CallToAction />   {/* <-- add here, right under the form */}
        </Section>


        {/* FAQ */}
        <FAQ />

        <Section className="bg-black">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <div className="flex justify-center">
            <Button className="bg-[#C2A878] text-white hover:bg-[#b09466]">
              Get Started
            </Button>
          </div>
        </Section>
        <Footer />


      </main>



    </ThemeProvider>
  );
}
