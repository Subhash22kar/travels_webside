"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./social-icons";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/918817777504" // Preetesh Travels Official
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-white text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all"
        >
            <div className="w-8 h-8">
                <WhatsAppIcon />
            </div>
        </motion.a>
    );
}
