import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Update page title
    document.title = "Efficiency Pro - Business Automation & Digital Presence";
    
    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Efficiency Pro helps professionals minimize their efforts by automating processes and building their digital presence. Transform your business operations today.";
    document.head.appendChild(metaDescription);
    
    return () => {
      // Cleanup
      const existingMeta = document.querySelector('meta[name="description"]');
      if (existingMeta) {
        existingMeta.remove();
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
