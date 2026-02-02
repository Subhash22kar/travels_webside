"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Destination {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string;
    tag: string;
}

const destinations: Destination[] = [
    {
        id: 1,
        name: "Paris, France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
        price: "$1,200",
        description: "Experience the timeless romance and art of the Eiffel Tower.",
        tag: "Romance",
    },
    {
        id: 2,
        name: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
        price: "$950",
        description: "Tropical paradise with serene beaches and lush jungles.",
        tag: "Nature",
    },
    {
        id: 3,
        name: "Kyoto, Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
        price: "$1,500",
        description: "Discover ancient temples among blooming cherry blossoms.",
        tag: "Culture",
    },
    {
        id: 4,
        name: "Swiss Alps",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1000",
        price: "$2,100",
        description: "Breathtaking mountain peaks perfect for skiing and hiking.",
        tag: "Adventure",
    },
    {
        id: 5,
        name: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000",
        price: "$1,800",
        description: "Iconic white buildings overlooking the crystal clear Aegean sea.",
        tag: "Relaxation",
    },
    {
        id: 6,
        name: "New York, USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000",
        price: "$1,350",
        description: "The city that never sleeps, full of energy and landmarks.",
        tag: "Urban",
    },
];

import { SectionWrapper } from "./ui/section-wrapper";

export function DestinationsGrid() {
    return (
        <SectionWrapper
            id="destinations"
            backgroundImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
            overlayOpacity="bg-sky-50/90 dark:bg-neutral-900/90"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-gray-900 dark:text-white">
                    Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff] italic">Escapes</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {destinations.map((dest, index) => (
                    <DestinationCard key={dest.id} destination={dest} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -15 }}
            className="group relative h-[500px] w-full bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
        >
            {/* Background Image */}
            <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Floating Price Tag */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                {destination.price}
            </div>

            {/* Floating Tag */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md shadow-[0_0_15px_rgba(0,240,255,0.4)] transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {destination.tag}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-gray-300 mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">{destination.description}</p>

                <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                    Explore Now
                </button>
            </div>
        </motion.div>
    );
}
