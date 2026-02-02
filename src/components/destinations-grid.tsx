"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Destination {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string;
}

const destinations: Destination[] = [
    {
        id: 1,
        name: "Paris, France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
        price: "$1,200",
        description: "Experience the city of love and lights.",
    },
    {
        id: 2,
        name: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000",
        price: "$950",
        description: "Tropical paradise with serene beaches.",
    },
    {
        id: 3,
        name: "Kyoto, Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
        price: "$1,500",
        description: "Ancient temples and beautiful cherry blossoms.",
    },
    {
        id: 4,
        name: "Swiss Alps",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1000",
        price: "$2,100",
        description: "Breathtaking mountain views and skiing.",
    },
    {
        id: 5,
        name: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000",
        price: "$1,800",
        description: "White buildings and crystal clear waters.",
    },
    {
        id: 6,
        name: "New York, USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000",
        price: "$1,350",
        description: "The city that never sleeps.",
    },
];

export function DestinationsGrid() {
    return (
        <section id="destinations" className="py-24 px-4 md:px-8 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Popular <span className="text-brand-gold italic">Destinations</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <DestinationCard key={dest.id} destination={dest} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
            style={{ perspective: 1000 }}
            className="group relative bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-700 hover:border-brand-gold/50 transition-all duration-500 ease-out"
        >
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-brand-gold font-bold shadow-xl">
                    {destination.price}
                </div>
            </div>

            <div className="p-8 relative z-10 bg-neutral-800 transition-colors group-hover:bg-neutral-800/90">
                <h3 className="text-2xl font-serif font-bold mb-2 text-white group-hover:text-brand-gold transition-colors">{destination.name}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2 font-light">{destination.description}</p>
                <button className="w-full py-4 bg-white/5 hover:bg-brand-gold hover:text-black text-white rounded-xl font-semibold transition-all duration-300 border border-white/10 hover:border-brand-gold">
                    Explore Destination
                </button>
            </div>
        </motion.div>
    );
}
