"use client";
import Image from "next/image";

import { SectionWrapper } from "./ui/section-wrapper";

export function AboutSection() {
    return (
        <SectionWrapper
            id="about"
            backgroundImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
            overlayOpacity="bg-white/95 dark:bg-black/80"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                    <Image
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
                        alt="Travel Adventure"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
                        Redefining <span className="text-[#00f0ff] italic">Travel</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        At <span className="text-[#00f0ff] font-bold">Preetesh Travels</span>, we don't just book tickets; we craft experiences. From the snow-capped peaks of the Himalayas to the pristine beaches of Bali, our curated packages ensure every moment is a memory.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        Join thousands of happy travelers who have discovered the world with our premium, hassle-free tour packages. Let us handle the details while you live the adventure.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-white rounded-full font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(112,0,255,0.6)] hover:scale-105 transition-all duration-300">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
