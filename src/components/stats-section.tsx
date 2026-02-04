"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Map, Award, Clock } from "lucide-react";

const stats = [
    {
        id: 1,
        label: "Happy Yatris",
        value: "5000+",
        icon: Users,
        color: "text-brand-saffron",
        borderColor: "group-hover:border-brand-saffron/50",
    },
    {
        id: 2,
        label: "Sacred Destinations",
        value: "50+",
        icon: Map,
        color: "text-brand-blue",
        borderColor: "group-hover:border-brand-blue/50",
    },
    {
        id: 3,
        label: "Years of Seva",
        value: "10+",
        icon: Award,
        color: "text-brand-saffron",
        borderColor: "group-hover:border-brand-saffron/50",
    },
    {
        id: 4,
        label: "Yatra Support",
        value: "24/7",
        icon: Clock,
        color: "text-brand-blue",
        borderColor: "group-hover:border-brand-blue/50",
    },
];

export function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 relative overflow-hidden bg-brand-cream/30 dark:bg-neutral-900">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-brand-gold/20 ${stat.borderColor} shadow-lg shadow-brand-gold/10 transition-all duration-500`}>
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark dark:text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
