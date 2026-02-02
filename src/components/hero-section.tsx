"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

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
            {/* Glassmorphism Header */}
            <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center ">
                {/* Desktop Background (Only visible on MD+) */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-b border-white/10 hidden md:block" />

                <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group hover:scale-110 transition-transform duration-300 z-50">
                    <Image
                        src="/logo.jpg"
                        alt="Preetesh Tour & Travels Logo"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-sm font-sans tracking-widest text-gray-300 uppercase z-50 pr-8">
                    <Link href="#" className="hover:text-white transition-colors">Home</Link>
                    <Link href="#destinations" className="hover:text-white transition-colors">Tour Packages</Link>
                    <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
                    <Link href="#career" className="hover:text-white transition-colors">Career</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
                </div>

                {/* Mobile Nav */}
                <MobileNav />
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
                    <h1 className="text-[8vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00f0ff] via-[#00f0ff] to-[#7000ff] drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] -mt-[1vw]">
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
                        className="group relative inline-flex items-center gap-3 px-12 py-5 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#00f0ff] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
