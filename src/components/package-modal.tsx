"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Calendar, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface PackageModalProps {
    isOpen: boolean;
    onClose: () => void;
    destination: any; // Using any for flexibility with the destination object structure
}

export function PackageModal({ isOpen, onClose, destination }: PackageModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !destination) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-neutral-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 relative flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Section (Left / Top) */}
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px]">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="bg-brand-saffron px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                                        {destination.tag}
                                    </span>
                                    <h3 className="text-3xl font-serif font-bold leading-tight">{destination.name}</h3>
                                    <div className="flex items-center gap-2 mt-2 text-white/90 text-sm">
                                        <MapPin size={14} className="text-brand-saffron" />
                                        <span>Buddhist Circuit</span>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section (Right / Bottom) */}
                            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col">
                                <div className="flex justify-between items-start mb-6 border-b border-neutral-100 dark:border-neutral-800 pb-6">
                                    <div>
                                        <h4 className="text-neutral-500 dark:text-neutral-400 text-sm font-medium uppercase tracking-wider mb-1">Package Price</h4>
                                        <div className="text-3xl font-bold text-brand-saffron flex items-baseline gap-1">
                                            {destination.price} <span className="text-sm text-neutral-400 font-normal">/ person</span>
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-300 justify-end mb-1">
                                            <Clock size={14} />
                                            <span className="text-sm font-medium">5 Days / 4 Nights</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 justify-end">
                                            <Calendar size={14} />
                                            <span className="text-xs">Daily Departures</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h5 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">Experience Highlights</h5>
                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm">
                                            {destination.description} Immerse yourself in the spiritual energy of this sacred site. Our comprehensive package includes guided tours, meditation sessions, and comfortable transfers.
                                        </p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold text-lg text-neutral-900 dark:text-white mb-3">What's Included</h5>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {["Premium Hotel Stay", "AC Temple Transfers", "Breakfast & Dinner", "Expert Guide", "VIP Darshan Assistance", "Travel Insurance"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                                    <CheckCircle size={14} className="text-green-500 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex gap-4">
                                    <Link
                                        href="#contact"
                                        onClick={onClose}
                                        className="flex-1 bg-brand-saffron hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 text-center transition-all hover:-translate-y-1 block"
                                    >
                                        Book Now
                                    </Link>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-4 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-bold rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
