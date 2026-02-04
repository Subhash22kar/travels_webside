"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const contactOptions = [
        {
            icon: <MessageCircle size={24} />,
            label: "WhatsApp",
            href: "https://wa.me/918817777504",
            color: "bg-green-500",
            delay: 0.1
        },
        {
            icon: <Phone size={24} />,
            label: "Call Us",
            href: "tel:+918817777504",
            color: "bg-blue-600",
            delay: 0.2
        },
        {
            icon: <Mail size={24} />,
            label: "Email",
            href: "mailto:preetesh.tour.travel969@gmail.com",
            color: "bg-red-500",
            delay: 0.3
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col gap-3 mb-2">
                        {contactOptions.map((option, index) => (
                            <motion.a
                                key={index}
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ delay: option.delay }}
                                className={`flex items-center gap-3 p-3 rounded-full text-white shadow-lg ${option.color} hover:scale-110 transition-transform`}
                            >
                                <span className="text-sm font-medium bg-white/90 text-black px-2 py-1 rounded-md shadow-sm whitespace-nowrap absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {option.label}
                                </span>
                                {option.icon}
                            </motion.a>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleOpen}
                className={`p-4 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 ${isOpen ? "bg-red-500 rotate-45" : "bg-brand-saffron"
                    }`}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
}
