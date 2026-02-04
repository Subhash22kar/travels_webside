"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Destination {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
    tag: string;
}

const destinations: Destination[] = [
    {
        id: "ajanta-ellora-caves",
        name: "Ajanta & Ellora Caves",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
        price: "₹12,999",
        description: "Explore the magnificent rock-cut caves of Ajanta & Ellora.",
        tag: "Heritage"
    },
    {
        id: "bodh-gaya-pilgrimage",
        name: "Bodh Gaya Pilgrimage",
        image: "https://images.unsplash.com/photo-1566835128038-16478950c406?q=80&w=2670&auto=format&fit=crop",
        price: "₹8,999",
        description: "Visit the Mahabodhi Temple where the Buddha acceded to Enlightenment.",
        tag: "Enlightenment"
    },
    {
        id: "sarnath-varanasi",
        name: "Sarnath & Varanasi",
        image: "https://images.unsplash.com/photo-1561584610-388f615392dd?q=80&w=2670&auto=format&fit=crop",
        price: "₹9,500",
        description: "The site of the First Sermon and the Dhamek Stupa.",
        tag: "First Sermon"
    },
    {
        id: "lumbini-nepal",
        name: "Lumbini Birthplace",
        image: "https://images.unsplash.com/photo-1572978243170-148c31cb1584?q=80&w=2670&auto=format&fit=crop",
        price: "₹15,000",
        description: "A pilgrimage to the birthplace of Lord Buddha in Nepal.",
        tag: "Birthplace"
    },
    {
        id: "sanchi-stupa",
        name: "Sanchi & Satdhara",
        image: "https://images.unsplash.com/photo-1623940173656-74fc21079313?q=80&w=2670&auto=format&fit=crop",
        price: "₹7,999",
        description: "Admire the Great Stupa and the serene Satdhara ruins.",
        tag: "Stupa"
    },
    {
        id: "international-buddhist",
        name: "Thailand, Vietnam & Cambodia",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2639&auto=format&fit=crop",
        price: "₹45,999",
        description: "Experience the Golden Pagodas and Angkor Wat.",
        tag: "International"
    },
];

import { useState } from "react";
import { PackageModal } from "./package-modal";
import { SectionWrapper } from "./ui/section-wrapper";

export function DestinationsGrid() {
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

    return (
        <SectionWrapper
            id="destinations"
            backgroundImage="https://www.transparenttextures.com/patterns/cubes.png" // Using a pattern or subtle texture
            overlayOpacity="bg-white/50 dark:bg-neutral-900/90"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-dark dark:text-white">
                    Sacred <span className="text-brand-saffron italic">Yatras</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-brand-saffron to-brand-gold mx-auto rounded-full" />
                <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                    Handpicked spiritual journeys designed for peace, comfort, and divine blessings.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {destinations.map((dest, index) => (
                    <DestinationCard
                        key={dest.id}
                        destination={dest}
                        index={index}
                        onViewDetails={() => setSelectedDestination(dest)}
                    />
                ))}
            </div>

            <PackageModal
                isOpen={!!selectedDestination}
                onClose={() => setSelectedDestination(null)}
                destination={selectedDestination}
            />
        </SectionWrapper>
    );
}

function DestinationCard({
    destination,
    index,
    onViewDetails
}: {
    destination: Destination;
    index: number;
    onViewDetails: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative h-[450px] w-full bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-neutral-100 dark:border-neutral-700 hover:border-brand-gold/50 transition-all duration-300 cursor-pointer"
            onClick={onViewDetails}
        >
            {/* Background Image */}
            <div className="relative h-[60%] w-full overflow-hidden">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                        {destination.tag}
                    </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-brand-saffron text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-1">
                    <span className="text-xs font-normal opacity-90">from</span> {destination.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative h-[40%] flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-brand-saffron transition-colors">
                        {destination.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-2 leading-relaxed">
                        {destination.description}
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        onViewDetails();
                    }}
                    className="w-full py-3 mt-4 border border-brand-saffron text-brand-saffron font-bold rounded-lg group-hover:bg-brand-saffron group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                    View Details
                </motion.button>
            </div>
        </motion.div>
    );
}
