import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { JobSearch } from "@/components/sections/JobSearch";
import { AIFeatures } from "@/components/sections/AIFeatures";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <AppShowcase />
        <JobSearch />
        <AIFeatures />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
