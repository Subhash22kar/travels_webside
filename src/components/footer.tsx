"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon, YouTubeIcon } from "./social-icons";

export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border border-white/10 shrink-0">
                                <Image
                                    src="/logo.jpg"
                                    alt="Preetesh Travels Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-serif font-bold tracking-wider leading-tight">
                                PREETESH <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">TRAVELS</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Crafting unforgettable journeys across the globe. From luxury escapes to adventure tours, we make your travel dreams a reality.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<div className="w-5 h-5"><InstagramIcon /></div>} href="https://www.instagram.com/preetesh_travels/" />
                            <SocialIcon icon={<div className="w-5 h-5"><FacebookIcon /></div>} href="https://www.facebook.com/preetesh.gajbhiye" />
                            <SocialIcon icon={<div className="w-5 h-5"><LinkedInIcon /></div>} href="https://www.linkedin.com/in/preetesh-gajbhiye-abb4a1387/" />
                            <SocialIcon icon={<div className="w-5 h-5"><YouTubeIcon /></div>} href="https://www.youtube.com/@PreeteshTourandTravelsBhopal" />
                            <SocialIcon icon={<div className="w-5 h-5"><WhatsAppIcon /></div>} href="https://wa.me/918817777504" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#00f0ff]">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-[#00f0ff] transition-colors">Home</Link></li>
                            <li><Link href="#destinations" className="hover:text-[#00f0ff] transition-colors">Tour Packages</Link></li>
                            <li><Link href="#stories" className="hover:text-[#00f0ff] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[#00f0ff] transition-colors">Career</Link></li>
                            <li><Link href="#contact" className="hover:text-[#00f0ff] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#7000ff]">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="text-[#00f0ff] mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+918817777504" className="hover:text-white transition-colors">+91 881-777-7504</a>
                                    <a href="tel:+916263435093" className="hover:text-white transition-colors">+91 626-343-5093</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-[#7000ff] shrink-0" />
                                <a href="mailto:preetesh.tour.travel969@gmail.com" className="hover:text-white transition-colors break-all">
                                    preetesh.tour.travel969@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-[#00f0ff] mt-1 shrink-0" />
                                <span>
                                    Leela Tower, Raisen Rd, near Kwality Sweets, Sonagiri Square, BHEL, Sonagiri, Bhopal, Madhya Pradesh 462022
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Visual Only) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe for latest travel offers and updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00f0ff] text-sm"
                            />
                            <button className="bg-gradient-to-r from-[#00f0ff] to-[#7000ff] hover:opacity-90 text-white px-4 py-2 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Preetesh Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
            {icon}
        </a>
    );
}
