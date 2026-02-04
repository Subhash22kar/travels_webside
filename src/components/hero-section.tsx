"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center py-20 md:py-0">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop"
                >
                    {/* Travel/Journey Video (Clouds/Flying) */}
                    <source src="https://videos.pexels.com/video-files/3050964/3050964-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <motion.h1
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg leading-tight"
                    >
                        Walk the Path of <br />
                        <span className="text-brand-saffron bg-clip-text text-transparent bg-gradient-to-r from-brand-saffron to-yellow-200">
                            Enlightenment
                        </span>
                    </motion.h1>
                    <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md px-4">
                        Experience the serenity of the Buddhist Circuit.
                        <span className="block mt-2 md:inline md:mt-0"> Ajanta • Ellora • Bodh Gaya • Sarnath • Lumbini</span>
                    </p>
                </motion.div>

                {/* Search Box / Inquiry Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                    className="mt-8 md:mt-12 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-w-5xl mx-auto text-black border border-white/50 mx-4"
                >
                    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-1 text-left">
                            <label className="text-sm font-semibold text-neutral-600 flex items-center gap-1">
                                <MapPin size={14} className="text-brand-saffron" /> Destination
                            </label>
                            <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-saffron outline-none hover:bg-neutral-100 transition-colors cursor-pointer text-sm md:text-base">
                                <option>Select Place...</option>
                                <option>Ajanta & Ellora Caves</option>
                                <option>Bodh Gaya (Mahabodhi)</option>
                                <option>Sarnath & Varanasi</option>
                                <option>Lumbini (Nepal)</option>
                                <option>Sanchi & Satdhara</option>
                                <option>International (Thailand/Vietnam)</option>
                            </select>
                        </div>

                        <div className="space-y-1 text-left">
                            <label className="text-sm font-semibold text-neutral-600 flex items-center gap-1">
                                <Calendar size={14} className="text-brand-saffron" /> Travel Date
                            </label>
                            <input
                                type="date"
                                className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-saffron outline-none cursor-pointer text-sm md:text-base"
                            />
                        </div>

                        <div className="space-y-1 text-left">
                            <label className="text-sm font-semibold text-neutral-600 flex items-center gap-1">
                                <Users size={14} className="text-brand-saffron" /> Travelers
                            </label>
                            <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-saffron outline-none cursor-pointer text-sm md:text-base">
                                <option>2 Person</option>
                                <option>Family (4-6)</option>
                                <option>Group (10+)</option>
                            </select>
                        </div>

                        <Link href="#destinations" className="w-full col-span-1 md:col-span-1 block">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full p-3 bg-gradient-to-r from-brand-saffron to-brand-gold text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:shadow-orange-500/40 transition-shadow cursor-pointer"
                            >
                                <Search size={18} />
                                Find Packages
                            </motion.div>
                        </Link>
                    </form>
                </motion.div>
            </div>

            {/* Decorative Wave/Bottom Curve (Optional) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                <svg className="relative block w-[calc(100%+1.3px)] h-[30px] md:h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-neutral-900"></path>
                </svg>
            </div>
        </section>
    );
}
