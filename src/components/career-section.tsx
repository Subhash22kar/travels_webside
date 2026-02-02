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
                    Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff] italic">Team</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Passionate about travel? We are always looking for creative minds, travel enthusiasts, and customer success heroes to join the Preetesh Travels family.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Culture Card */}
                <div className="bg-white dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                    <div className="w-16 h-16 bg-[#00f0ff]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-8 h-8 text-[#00f0ff]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Work With Us?</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2"><span className="text-[#00f0ff]">✨</span> Global travel opportunities</li>
                        <li className="flex items-center gap-2"><span className="text-[#7000ff]">✨</span> Competitive compensation</li>
                        <li className="flex items-center gap-2"><span className="text-[#00f0ff]">✨</span> Dynamic & creative environment</li>
                        <li className="flex items-center gap-2"><span className="text-[#7000ff]">✨</span> Shape the future of tourism</li>
                    </ul>
                </div>

                {/* Apply Card */}
                <div className="bg-gradient-to-br from-[#00f0ff] to-[#7000ff] p-8 rounded-3xl shadow-xl text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />
                    <div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Current Openings</h3>
                        <p className="mb-6 text-blue-50 relative z-10">
                            We don't have specific roles open right now, but we'd love to hear from you! Send us your resume and tell us why you'd be a great fit.
                        </p>
                    </div>

                    <a
                        href="mailto:preetesh.tour.travel969@gmail.com?subject=Career Application - [Your Name]"
                        className="relative z-10 inline-flex items-center justify-center gap-3 bg-white text-[#7000ff] px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition-colors shadow-lg"
                    >
                        <span>Send Your Resume</span>
                        <Send size={20} />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
