import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { DestinationsGrid } from "@/components/destinations-grid";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StickyActions } from "@/components/sticky-actions";

import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Header />
      <HeroSection />

      <AboutSection />

      <DestinationsGrid />

      <TestimonialsSection />

      <ContactSection />

      <Footer />

      <StickyActions />
    </main>
  );
}


