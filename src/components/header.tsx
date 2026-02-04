"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-neutral-900 shadow-md border-b border-brand-gold/20">
            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                            src="/uploaded_media_1770133040423.jpg"
                            alt="Preetesh Tours & Travels"
                            fill
                            className="object-contain rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-lg md:text-xl font-bold text-brand-blue dark:text-white leading-tight">
                            Preetesh Tours & Travels
                        </span>
                        <span className="text-[0.65rem] tracking-widest uppercase text-brand-gold font-semibold">
                            Buddhist Circuit Specialist
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-neutral-700 dark:text-neutral-200">
                    <Link href="/" className="hover:text-brand-saffron transition-colors">Home</Link>
                    <Link href="#destinations" className="hover:text-brand-saffron transition-colors">Destinations</Link>
                    <Link href="#destinations" className="hover:text-brand-saffron transition-colors">Packages</Link>
                    <Link href="#about" className="hover:text-brand-saffron transition-colors">About Us</Link>
                    <Link href="#contact" className="hover:text-brand-saffron transition-colors">Contact</Link>
                </nav>

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex px-5 py-2.5 bg-brand-saffron hover:bg-orange-600 text-white font-medium rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                        Book Now
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-brand-saffron transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-brand-gold/20 shadow-xl py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 fade-in duration-300 z-40">
                    <Link
                        href="/"
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-brand-saffron py-2 border-b border-neutral-100 dark:border-neutral-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="#destinations"
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-brand-saffron py-2 border-b border-neutral-100 dark:border-neutral-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Destinations
                    </Link>
                    <Link
                        href="#destinations"
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-brand-saffron py-2 border-b border-neutral-100 dark:border-neutral-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Packages
                    </Link>
                    <Link
                        href="#about"
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-brand-saffron py-2 border-b border-neutral-100 dark:border-neutral-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="#contact"
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-brand-saffron py-2 border-b border-neutral-100 dark:border-neutral-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="#contact"
                        className="mt-4 w-full py-3 bg-brand-saffron text-white font-bold rounded-lg text-center shadow-md active:scale-95 transition-transform"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Now
                    </Link>
                </div>
            )}
        </header>
    );
}
