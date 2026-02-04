"use client";

import { InquiryForm } from "./inquiry-form";
import { SectionWrapper } from "./ui/section-wrapper";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <SectionWrapper
            id="contact"
            backgroundImage="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=2000"
            overlayOpacity="bg-white/95 dark:bg-black/90"
        >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Information */}
                <div className="space-y-10 text-neutral-900 dark:text-white">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Start Your <span className="text-brand-saffron italic">Journey</span>
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                            Ready to explore the world? Reach out to us for customized tour packages, flight bookings, and unforgettable travel experiences.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <ContactItem
                            icon={<Phone className="w-6 h-6 text-brand-saffron" />}
                            title="Call Us"
                            content={
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+918817777504" className="hover:text-brand-saffron transition-colors text-neutral-800 dark:text-neutral-200 font-medium">+91 881-777-7504</a>
                                    <a href="tel:+916263435093" className="hover:text-brand-saffron transition-colors text-neutral-600 dark:text-neutral-400">+91 626-343-5093</a>
                                </div>
                            }
                        />

                        <ContactItem
                            icon={<Mail className="w-6 h-6 text-brand-saffron" />}
                            title="Email Us"
                            content={
                                <a href="mailto:preetesh.tour.travel969@gmail.com" className="hover:text-brand-saffron transition-colors text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                                    preetesh.tour.travel969@gmail.com
                                </a>
                            }
                        />

                        <ContactItem
                            icon={<MapPin className="w-6 h-6 text-brand-saffron" />}
                            title="Visit Us"
                            content="Leela Tower, Raisen Rd, near Kwality Sweets, Sonagiri Square, BHEL, Sonagiri, Bhopal, Madhya Pradesh 462022"
                        />

                        <ContactItem
                            icon={<Clock className="w-6 h-6 text-brand-saffron" />}
                            title="Working Hours"
                            content="Mon - Sat: 10:00 AM - 8:00 PM"
                        />
                    </div>
                </div>

                {/* Inquiry Form */}
                <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl border border-neutral-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">Send an Inquiry</h3>
                    <InquiryForm />
                </div>
            </div>
        </SectionWrapper>
    );
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
    return (
        <div className="flex gap-5 items-start">
            <div className="p-3 bg-white/10 rounded-xl shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-lg mb-1">{title}</h4>
                <div className="text-neutral-600 dark:text-neutral-400">{content}</div>
            </div>
        </div>
    );
}
