"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden font-serif">
            {/* Background Video - 4K Aerial Nature Footage (Mountains/Sea) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0 brightness-[0.3]"
            >
                <source
                    src="https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Glassmorphism Header */}
            <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-white/5 backdrop-blur-md border-b border-white/10">
                <div className="text-2xl font-bold text-white tracking-widest border-2 border-white p-1 px-3">PT</div>
                <div className="hidden md:flex gap-8 text-sm font-sans tracking-widest text-gray-300 uppercase">
                    <Link href="#destinations" className="hover:text-white transition-colors">Destinations</Link>
                    <Link href="#stories" className="hover:text-white transition-colors">Stories</Link>
                    <Link href="#inquiry" className="hover:text-white transition-colors">Contact</Link>
                </div>
            </nav>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 w-full">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="text-[8vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl mix-blend-overlay">
                        PREETESH
                    </h1>
                    <h1 className="text-[8vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-sky-400 via-sky-400 to-blue-600/50 drop-shadow-2xl -mt-[1vw]">
                        TRAVELS
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="mt-8 text-lg md:text-2xl text-gray-200 font-sans tracking-[0.2em] uppercase max-w-2xl"
                >
                    Beyond Borders • Beyond Dreams
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16"
                >
                    <Link
                        href="#destinations"
                        className="group relative inline-flex items-center gap-3 px-12 py-5 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-sky-500 hover:border-sky-500 transition-all duration-500"
                    >
                        <span className="relative z-10 font-bold text-white group-hover:text-white tracking-widest text-sm uppercase">
                            Begin Your Journey
                        </span>
                        <div className="group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
