import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { PricingSection } from "@/components/home/pricing-section";
import { QuoteSection } from "@/components/home/quote-section";
import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/home/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <QuoteSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
