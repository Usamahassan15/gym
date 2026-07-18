import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Timing } from "@/components/site/Timing";
import { MenWomen } from "@/components/site/MenWomen";
import { Trainers } from "@/components/site/Trainers";
import { BmiCalculator } from "@/components/site/BmiCalculator";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <MenWomen />
        <Trainers />
        <Pricing />
        <Timing />
        <BmiCalculator />
        <Gallery />
        <Reviews />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
