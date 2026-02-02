"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "John & Sarah",
        location: "Maldives",
        quote: "The trip of a lifetime! Pritesh Travels handled every detail flawlessly.",
        image: "https://images.unsplash.com/photo-1544025162-d76690b6094a?auto=format&fit=crop&q=80&w=1000",
    },
    {
        name: "Michael Chen",
        location: "Switzerland",
        quote: "Skiing in the Alps was a dream come true. Highly recommended services.",
        image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&q=80&w=1000",
    },
    {
        name: "Emily Davis",
        location: "Japan",
        quote: "A perfect mix of adventure and relaxation. I can't wait for my next trip!",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000",
    },
];

export function TestimonialsParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="stories" ref={containerRef} className="py-24 bg-white dark:bg-black overflow-hidden relative transition-colors duration-500">
            <div className="absolute inset-0 bg-sky-50/50 dark:bg-neutral-900/50 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-24 text-gray-900 dark:text-white"
                >
                    Traveler's <span className="text-sky-500 italic">Stories</span>
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
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700">
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
                    <h4 className="text-sky-400 font-bold text-lg">{testimonial.name}</h4>
                    <span className="text-sm text-gray-400 uppercase tracking-widest">{testimonial.location}</span>
                </div>
            </div>
        </div>
    );
}
