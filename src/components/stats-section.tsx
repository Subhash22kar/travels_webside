"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Map, Award, Clock } from "lucide-react";

const stats = [
    {
        id: 1,
        label: "Happy Travelers",
        value: "5000+",
        icon: Users,
        color: "text-[#00f0ff]",
    },
    {
        id: 2,
        label: "Destinations",
        value: "50+",
        icon: Map,
        color: "text-[#7000ff]",
    },
    {
        id: 3,
        label: "Years Experience",
        value: "10+",
        icon: Award,
        color: "text-[#00f0ff]",
    },
    {
        id: 4,
        label: "Support",
        value: "24/7",
        icon: Clock,
        color: "text-[#7000ff]",
    },
];

export function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 relative overflow-hidden bg-[#050510]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

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
                            <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-[${stat.color}]/50 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500`}>
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold font-serif text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
