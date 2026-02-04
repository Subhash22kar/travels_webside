"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    backgroundImage?: string;
    overlayOpacity?: string;
}

import { motion } from "framer-motion";

export function SectionWrapper({
    children,
    id,
    className,
    backgroundImage,
    overlayOpacity = "bg-white/90 dark:bg-black/80"
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
            className={cn("relative py-24 px-4 md:px-8 overflow-hidden bg-white dark:bg-neutral-900 text-black dark:text-white", className)}
        >
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt="Section Background"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                    {/* Overlay */}
                    <div className={cn("absolute inset-0 backdrop-blur-[2px]", overlayOpacity)} />
                </div>
            )}

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut" }
                    }
                }}
            >
                {children}
            </motion.div>
        </motion.section>
    );
}
