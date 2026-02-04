"use client";
import Image from "next/image";

import { SectionWrapper } from "./ui/section-wrapper";

export function AboutSection() {
    return (
        <SectionWrapper
            id="about"
            backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
            overlayOpacity="bg-white/95 dark:bg-neutral-900/90"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
                    <Image
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
                        alt="Travel Adventure"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                        Redefining <span className="text-brand-saffron italic">Pilgrimage</span> & Travel
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                        At <span className="text-brand-saffron font-bold">Preetesh Travels</span>, we don't just book tickets; we craft spiritual experiences. From the snow-capped peaks of the Himalayas to the sacred ghats of Kashi, our curated packages ensure every moment is a memory.
                    </p>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                        Join thousands of happy yatris who have discovered the divine with our premium, hassle-free tour packages. Let us handle the details while you focus on your journey.
                    </p>
                    <button className="px-8 py-4 bg-brand-saffron hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
