"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "./ui/section-wrapper";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Rahul Verma",
        location: "Mumbai",
        text: "The trip to Bodh Gaya was a life-changing experience. Preetesh Travels handled everything seamlessly. The hotels were excellent, and the guide was very knowledgeable about Buddhist history.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        name: "Mrs. Anjali Gupta",
        location: "Delhi",
        text: "We booked the complete Buddhist Circuit package for our parents. They were extremely happy with the comfort and the personal care provided by the team. Highly recommended for senior citizens.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 3,
        name: "David & Sarah",
        location: "UK",
        text: "An incredible journey through India's spiritual heartland. Sanchi and Ajanta were breathtaking. The service was world-class, and the transport was very comfortable.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
    }
];

export function TestimonialsSection() {
    return (
        <SectionWrapper id="testimonials" className="bg-neutral-50 dark:bg-neutral-900/50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-brand-saffron font-bold tracking-widest uppercase text-sm"
                >
                    Testimonials
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mt-3"
                >
                    Stories from our <span className="text-brand-saffron italic">Yatris</span>
                </motion.h2>
                <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-700 relative group"
                    >
                        <Quote className="absolute top-8 right-8 text-brand-gold/20 w-12 h-12 group-hover:text-brand-gold/40 transition-colors" />

                        <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={16} className="fill-brand-saffron text-brand-saffron" />
                            ))}
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed relative z-10 italic">
                            "{testimonial.text}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/50">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-neutral-900 dark:text-white">{testimonial.name}</h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider">{testimonial.location}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
