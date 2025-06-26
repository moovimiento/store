import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Section
          id="precios"
          title="Precios"
          description="Precios simples y transparentes. Sin sorpresas."
        >
          <Pricing />
        </Section>

        <div id="faq">
          <FAQ />
        </div>

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
