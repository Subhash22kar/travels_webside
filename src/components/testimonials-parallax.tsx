"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "Rahul & Priya",
        location: "Char Dham Yatra",
        quote: "The arrangements for our parents were excellent. Hotels, darshan, everything was perfect. Jai Bholenath!",
        image: "https://images.unsplash.com/photo-1544025162-d76690b6094a?auto=format&fit=crop&q=80&w=1000",
    },
    {
        name: "Amit Sharma",
        location: "Kashi Tour",
        quote: "Best travel agency for spiritual tours. The guide was very knowledgeable about Kashi's history.",
        image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&q=80&w=1000",
    },
    {
        name: "Suresh Gupta",
        location: "Vaishno Devi",
        quote: "We had a comfortable and divine journey. Preetesh Travels took care of everything.",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000",
    },
];

import { SectionWrapper } from "./ui/section-wrapper";

export function TestimonialsParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <SectionWrapper
            id="stories"
            backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000"
            overlayOpacity="bg-white/95 dark:bg-neutral-900/90"
        >
            <div ref={containerRef} className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-center mb-24 text-gray-900 dark:text-white"
                >
                    Yatri <span className="text-brand-saffron italic">Stories</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div style={{ y: y1 }} className="space-y-12">
                        {testimonials.slice(0, 2).map((t, i) => (
                            <TestimonialCard key={i} testimonial={t} />
                        ))}
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="space-y-12 mt-12 md:mt-0">
                        {testimonials.slice(1, 3).map((t, i) => (
                            <TestimonialCard key={i} testimonial={t} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-brand-saffron/30 transition-colors">
            <div className="h-80 w-full relative">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="text-lg md:text-xl text-white italic mb-4">"{testimonial.quote}"</p>
                <div>
                    <h4 className="text-brand-saffron font-bold text-lg">{testimonial.name}</h4>
                    <span className="text-sm text-gray-300 uppercase tracking-widest">{testimonial.location}</span>
                </div>
            </div>
        </div>
    );
}
