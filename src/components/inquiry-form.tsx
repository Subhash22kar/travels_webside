"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function InquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        destination: "",
        budget: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg mx-auto p-8 rounded-2xl bg-neutral-800 border border-brand-gold/50 text-center"
            >
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-sky-500 mb-2">Inquiry Received!</h3>
                <p className="text-gray-300">We'll get back to you shortly to plan your dream trip.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-gray-500 hover:text-white underline"
                >
                    Send another inquiry
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone (WhatsApp)</label>
                    <input
                        type="tel"
                        required
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Destination</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                            placeholder="Paris, Bali..."
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Budget</label>
                        <select
                            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all appearance-none"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                            <option value="">Select Range</option>
                            <option value="$1k - $3k">$1k - $3k</option>
                            <option value="$3k - $5k">$3k - $5k</option>
                            <option value="$5k+">$5k+</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Special Request</label>
                    <textarea
                        rows={4}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                        placeholder="Tell us about your dream trip..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:bg-white hover:text-sky-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? "Sending..." : "Plan My Trip"}
                </motion.button>

                {status === "error" && (
                    <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
}
