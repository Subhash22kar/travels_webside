"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { Briefcase, Send } from "lucide-react";

export function CareerSection() {
    return (
        <SectionWrapper
            id="career"
            backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000"
            overlayOpacity="bg-white/95 dark:bg-black/85"
        >
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
                    Join Our <span className="text-sky-500 italic">Team</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Passionate about travel? We are always looking for creative minds, travel enthusiasts, and customer success heroes to join the Preetesh Travels family.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Culture Card */}
                <div className="bg-white dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Work With Us?</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">✨ Global travel opportunities</li>
                        <li className="flex items-center gap-2">✨ Competitive compensation</li>
                        <li className="flex items-center gap-2">✨ Dynamic & creative environment</li>
                        <li className="flex items-center gap-2">✨ Shape the future of tourism</li>
                    </ul>
                </div>

                {/* Apply Card */}
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Current Openings</h3>
                        <p className="mb-6 text-sky-100">
                            We don't have specific roles open right now, but we'd love to hear from you! Send us your resume and tell us why you'd be a great fit.
                        </p>
                    </div>

                    <a
                        href="mailto:preetesh.tour.travel969@gmail.com?subject=Career Application - [Your Name]"
                        className="inline-flex items-center justify-center gap-3 bg-white text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-colors"
                    >
                        <span>Send Your Resume</span>
                        <Send size={20} />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
