import { HeroSection } from "@/components/hero-section";
import { DestinationsGrid } from "@/components/destinations-grid";
import { TestimonialsParallax } from "@/components/testimonials-parallax";
import { InquiryForm } from "@/components/inquiry-form";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      <DestinationsGrid />

      {/* Placeholders for other sections */}
      <TestimonialsParallax />

      {/* Placeholders for other sections */}
      <section id="inquiry" className="min-h-screen py-24 px-4 md:px-8 bg-neutral-900 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Start Your <span className="text-brand-gold italic">Journey</span></h2>
          <p className="text-center text-gray-400 mb-12">Fill out the form below and let us craft your perfect itinerary.</p>
          <InquiryForm />
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}


