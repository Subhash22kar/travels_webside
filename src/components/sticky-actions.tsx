"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, Share2, Facebook, Instagram, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyActions() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const socialOptions = [
        {
            icon: <Phone size={20} />,
            label: "+91 98765 43210",
            href: "tel:+919876543210",
            color: "bg-blue-600",
            delay: 0.1
        },
        {
            icon: <Mail size={20} />,
            label: "Email Us",
            href: "mailto:info@preeteshtravels.com",
            color: "bg-red-500",
            delay: 0.2
        },
        {
            icon: <Facebook size={20} />,
            label: "Facebook",
            href: "#",
            color: "bg-blue-800",
            delay: 0.3
        },
        {
            icon: <Instagram size={20} />,
            label: "Instagram",
            href: "#",
            color: "bg-pink-600",
            delay: 0.4
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* WhatsApp Sticky Icon (Always Visible) */}
            <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-shadow"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </motion.a>

            {/* Menu Toggle Button */}
            <div className="relative flex flex-col items-end">
                <AnimatePresence>
                    {isMenuOpen && (
                        <div className="flex flex-col gap-3 mb-4 absolute bottom-full right-0 w-max pb-2">
                            {socialOptions.map((option, index) => (
                                <motion.a
                                    key={index}
                                    href={option.href}
                                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                    transition={{ delay: option.delay * 0.5 }}
                                    className={`flex items-center gap-3 p-3 rounded-full text-white shadow-lg ${option.color} hover:scale-105 transition-transform justify-end group`}
                                >
                                    <span className="text-sm font-medium bg-white text-black px-2 py-1 rounded shadow-sm whitespace-nowrap mr-2 opacity-0 group-hover:opacity-100 transition-opacity absolute right-12 pointer-events-none">
                                        {option.label}
                                    </span>
                                    {option.icon}
                                </motion.a>
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                <button
                    onClick={toggleMenu}
                    className={`w-14 h-14 rounded-full text-white shadow-xl transition-all duration-300 flex items-center justify-center ${isMenuOpen ? "bg-neutral-800 rotate-90" : "bg-brand-gold"
                        }`}
                    title="Contact & Socials"
                >
                    {isMenuOpen ? <X size={24} /> : <Share2 size={24} />}
                </button>
            </div>
        </div>
    );
}
