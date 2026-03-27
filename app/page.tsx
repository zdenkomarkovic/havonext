import { buildMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "HAVONEXT D.O.O. – Organizacija drumskog saobraćaja",
  description:
    "Organizacija drumskog prevoza tereta u Srbiji. Provereni prevoznici, praćenje pošiljaka i optimizacija troškova.",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CtaBanner />
        <HowItWorks />
        <Industries />
        <About />

        <Testimonials />
        <WhyUs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
