"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon, YouTubeIcon } from "./social-icons";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white pt-20 pb-10 border-t border-brand-gold/20 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-brand-gold shrink-0 bg-white p-1">
                                <Image
                                    src="/uploaded_media_1770133040423.jpg"
                                    alt="Preetesh Tours & Travels Logo"
                                    fill
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wider leading-tight text-neutral-900 dark:text-white">
                                    Preetesh <br /><span className="text-brand-saffron">Tours & Travels</span>
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Buddhist Circuit Specialist</p>
                            </div>
                        </div>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            Your trusted partner for spiritual journeys and memorable holidays. We specialize in Char Dham, Kashi, and customized family tour packages.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <SocialIcon icon={<InstagramIcon />} href="https://www.instagram.com/preetesh_travels/" />
                            <SocialIcon icon={<FacebookIcon />} href="https://www.facebook.com/preetesh.gajbhiye" />
                            <SocialIcon icon={<LinkedInIcon />} href="https://www.linkedin.com/in/preetesh-gajbhiye-abb4a1387/" />
                            <SocialIcon icon={<YouTubeIcon />} href="https://www.youtube.com/@PreeteshTourandTravelsBhopal" />
                            <SocialIcon icon={<WhatsAppIcon />} href="https://wa.me/918817777504" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Quick Links</h4>
                        <ul className="space-y-3 text-neutral-400 text-sm">
                            <li><Link href="/" className="hover:text-brand-saffron transition-colors flex items-center gap-2"><span className="text-brand-gold">›</span> Home</Link></li>
                            <li><Link href="#destinations" className="hover:text-brand-saffron transition-colors flex items-center gap-2"><span className="text-brand-gold">›</span> Spiritual Yatra</Link></li>
                            <li><Link href="#packages" className="hover:text-brand-saffron transition-colors flex items-center gap-2"><span className="text-brand-gold">›</span> Tour Packages</Link></li>
                            <li><Link href="#about" className="hover:text-brand-saffron transition-colors flex items-center gap-2"><span className="text-brand-gold">›</span> About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-brand-saffron transition-colors flex items-center gap-2"><span className="text-brand-gold">›</span> Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Get in Touch</h4>
                        <ul className="space-y-4 text-neutral-400 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-brand-saffron mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+918817777504" className="hover:text-white transition-colors font-medium text-white">+91 881-777-7504</a>
                                    <a href="tel:+916263435093" className="hover:text-white transition-colors">+91 626-343-5093</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-saffron shrink-0" />
                                <a href="mailto:preetesh.tour.travel969@gmail.com" className="hover:text-white transition-colors break-all">
                                    preetesh.tour.travel969@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-saffron mt-1 shrink-0" />
                                <span className="leading-relaxed">
                                    Leela Tower, Raisen Rd, Sonagiri Square, Indrapuri C-Sector, Bhopal, MP 462021
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Newsletter</h4>
                        <p className="text-neutral-400 text-sm mb-4">Subscribe for exclusive Yatra offers and updates.</p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-neutral-800 border border-neutral-700 rounded px-4 py-3 w-full focus:outline-none focus:border-brand-saffron focus:ring-1 focus:ring-brand-saffron text-sm transition-all"
                            />
                            <button className="w-full bg-brand-saffron hover:bg-orange-600 text-white px-4 py-3 rounded font-bold uppercase tracking-wider text-xs transition-all shadow-[0_4px_14px_0_rgba(255,153,51,0.39)] hover:shadow-[0_6px_20px_rgba(255,153,51,0.23)] hover:-translate-y-1">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-xs gap-4">
                    <p>© {new Date().getFullYear()} Preetesh Travels. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
                    </div>
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
            className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-saffron transition-all duration-300 hover:-translate-y-1 border border-neutral-700 hover:border-brand-saffron"
        >
            <div className="w-5 h-5 flex items-center justify-center">
                {icon}
            </div>
        </a>
    );
}
