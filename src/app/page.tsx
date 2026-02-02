import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { DestinationsGrid } from "@/components/destinations-grid";
import { AboutSection } from "@/components/about-section";
import { TestimonialsParallax } from "@/components/testimonials-parallax";
import { InquiryForm } from "@/components/inquiry-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeToggle } from "@/components/theme-toggle";

import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { CareerSection } from "@/components/career-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <HeroSection />

      <StatsSection />

      <AboutSection />

      <CareerSection />

      <DestinationsGrid />

      <TestimonialsParallax />

      <ContactSection />

      <Footer />

      <WhatsAppButton />
      <ThemeToggle />
    </main>
  );
}


