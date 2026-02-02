"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video - Premium Travel Footage */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0 brightness-40"
            >
                {/* Cinematic Travel Video (Pexels - Free to use) */}
                <source
                    src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-brand-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-medium"
                >
                    The Art of Exploration
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
                >
                    Discover <span className="italic text-brand-gold">Limitless</span><br />
                    Horizons
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light"
                >
                    Curating unforgettable journeys to the world's most breathtaking destinations. Your adventure begins here.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        href="#destinations"
                        className="px-10 py-4 bg-brand-gold text-black font-serif font-bold rounded-full text-lg hover:bg-white hover:text-brand-gold transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] uppercase tracking-wider"
                    >
                        Start Your Journey
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
}
