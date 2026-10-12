import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <Services />
        <Differentials />
        <Testimonials />
        <FAQ />
        <CTASection />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
