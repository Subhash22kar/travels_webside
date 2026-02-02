import { HeroSection } from "@/components/hero-section";
import { DestinationsGrid } from "@/components/destinations-grid";
import { AboutSection } from "@/components/about-section";
import { TestimonialsParallax } from "@/components/testimonials-parallax";
import { InquiryForm } from "@/components/inquiry-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <HeroSection />

      <AboutSection />

      <DestinationsGrid />

      {/* Placeholders for other sections */}
      <TestimonialsParallax />

      {/* Placeholders for other sections */}
      {/* Placeholders for other sections */}
      <AuroraBackground className="py-24">
        <div id="inquiry" className="relative z-10 w-full max-w-4xl px-4 md:px-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Start Your <span className="text-sky-400 italic">Journey</span></h2>
          <p className="text-center text-gray-300 mb-12">Fill out the form below and let us craft your perfect itinerary.</p>
          <InquiryForm />
        </div>
      </AuroraBackground>

      <WhatsAppButton />
      <ThemeToggle />
    </main>
  );
}


