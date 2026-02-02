"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            }
        })
    };

    const links = [
        { name: "Home", href: "#" },
        { name: "Tour Packages", href: "#destinations" },
        { name: "About Us", href: "#about" },
        { name: "Career", href: "#career" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="md:hidden z-50">
            {/* Trigger Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-[60] p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-50 bg-[#050510]/98 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-[#00f0ff]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                            <div className="absolute -bottom-[20%] -left-[20%] w-[500px] h-[500px] bg-[#7000ff]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.3)] mb-4">
                                <Image
                                    src="/logo.jpg"
                                    alt="Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:from-[#00f0ff] hover:to-[#7000ff] transition-all duration-300 tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute bottom-10 text-gray-500 text-sm font-sans tracking-widest">
                            © {new Date().getFullYear()} PREETESH TRAVELS
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
