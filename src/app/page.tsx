"use client";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { useEffect, useRef } from "react";

const HomePage: React.FC = () => {
  const logosRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [logosRef, pricingRef, faqRef, statsRef, ctaRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <div ref={logosRef} className="animate-fade-in-up">
        <Logos />
      </div>
      <Container>
        <div ref={pricingRef} className="animate-fade-in-up">
          <Section
            id="precios"
            title="Precios y Promos"
            description="Precios simples y transparentes. Sin sorpresas."
          >
            <Pricing />
          </Section>
        </div>

        <div ref={faqRef} id="faq" className="animate-fade-in-up">
          <FAQ />
        </div>

        <div ref={statsRef} className="animate-fade-in-up">
          <Stats />
        </div>

        <div ref={ctaRef} className="animate-fade-in-up">
          <CTA />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
