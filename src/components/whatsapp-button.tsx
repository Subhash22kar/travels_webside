"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/1234567890" // Placesholder number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all"
        >
            <MessageCircle size={32} />
        </motion.a>
    );
}
