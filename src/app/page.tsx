"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, BarChart3, LayoutDashboard, QrCode, Sparkles, Smartphone, ChevronRight } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-surface-0 font-sans selection:bg-brand-yellow selection:text-black overflow-x-hidden">
            {/* Premium Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-crimson rounded-xl flex items-center justify-center shadow-lg shadow-brand-crimson/20">
                        <span className="text-white font-black text-xl italic">G</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-black">Gebeta</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
                    <Link href="#features" className="hover:text-brand-crimson transition-colors">Features</Link>
                    <Link href="#solutions" className="hover:text-brand-crimson transition-colors">Solutions</Link>
                    <Link href="#pricing" className="hover:text-brand-crimson transition-colors">Pricing</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/auth/login" className="text-sm font-semibold hover:text-brand-crimson transition-colors px-4 py-2">Sign In</Link>
                    <Link href="/auth/signup" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-crimson transition-all active:scale-95 shadow-lg shadow-black/10">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 opacity-10">
                    <div className="w-[800px] h-[801px] bg-brand-crimson rounded-full blur-[120px] -mr-96 -mt-96" />
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 bg-brand-mint px-4 py-2 rounded-full border border-brand-crimson/10"
                        >
                            <Sparkles className="w-4 h-4 text-brand-crimson" />
                            <span className="text-xs font-bold text-brand-crimson uppercase tracking-wider">The Intelligent Menu for Emerging Markets</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-black"
                        >
                            FLAVOR GOES <br />
                            <span className="text-brand-crimson underline decoration-brand-yellow/30 underline-offset-8 italic">DIGITAL.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-black/60 max-w-xl leading-relaxed"
                        >
                            Empower your restaurant with smart QR menus, real-time analytics, and an intelligent upselling engine designed specifically for the realities of emerging markets.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link href="/auth/signup" className="bg-brand-crimson text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-black transition-all active:scale-95 shadow-2xl shadow-brand-crimson/20 flex items-center gap-3 group">
                                Build My Menu
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/m/demo" className="bg-white text-black border-2 border-black/5 px-10 py-5 rounded-2xl text-lg font-bold hover:border-black transition-all active:scale-95 flex items-center gap-3">
                                Live Demo
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex items-center gap-8 pt-10"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface-1 flex items-center justify-center overflow-hidden relative">
                                        <Image
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            alt="user"
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-medium">
                                <span className="block font-black text-black text-lg leading-none">500+</span>
                                <span className="text-black/40">Restaurants Joined</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 relative"
                    >
                        {/* Elegant Phone Mockup */}
                        <div className="relative z-10 w-[320px] h-[640px] mx-auto bg-black rounded-[50px] border-[8px] border-black/90 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                            <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center">
                                <div className="w-20 h-5 bg-black rounded-b-2xl" />
                            </div>
                            <iframe
                                src="/m/demo"
                                className="w-full h-full border-none pointer-events-none"
                                title="demo-preview"
                            />
                        </div>
                        {/* Decorative background cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 -right-10 bg-white p-4 rounded-2xl shadow-floating border border-black/5 z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                                    <BarChart3 className="w-4 h-4 text-green-600" />
                                </div>
                                <div className="text-xs font-bold text-black">+24% Revenue</div>
                            </div>
                            <div className="text-[10px] text-black/40">From Smart Upselling</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -left-10 bg-white p-4 rounded-2xl shadow-floating border border-black/5 z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-brand-yellow" />
                                </div>
                                <div className="text-xs font-bold text-black italic">Chef&apos;s Choice</div>
                            </div>
                            <div className="text-[10px] text-black/40">Most Popular Upsell</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 px-6 bg-surface-1">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-sm font-black text-brand-crimson uppercase tracking-[0.2em]">Platform Excellence</h2>
                        <h3 className="text-5xl font-black tracking-tight text-black">Built for Reliability. <br /> Designed for Growth.</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm space-y-6"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center text-white shadow-xl`}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-2xl font-black text-black">{feature.title}</h4>
                                <p className="text-black/60 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                                <div className="pt-4 flex items-center gap-2 text-brand-crimson font-bold text-sm cursor-pointer group">
                                    Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-32 bg-black text-white px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="text-6xl text-brand-yellow font-serif">&quot;</div>
                    <h2 className="text-4xl md:text-5xl font-light italic leading-tight">
                        Gebeta allowed us to eliminate printing costs entirely. Our profit margins on drinks increased by 19% in the first month using the smart recommendation engine.
                    </h2>
                    <div className="space-y-2">
                        <div className="font-bold text-xl">Dawit Abraham</div>
                        <div className="text-brand-yellow/60 font-medium">Owner, Addis Bistro</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white pt-20 pb-10 px-6 border-t border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-crimson rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black italic text-xl">G</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight text-black">Gebeta</span>
                            </div>
                            <p className="text-black/60 max-w-sm font-medium leading-relaxed">
                                Empowering restaurants across emerging markets with next-generation digital infrastructure.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h5 className="font-black text-black uppercase tracking-wider text-xs">Product</h5>
                            <ul className="space-y-4 text-black/50 font-medium text-sm">
                                <li><Link href="#" className="hover:text-brand-crimson">Digital Menu</Link></li>
                                <li><Link href="#" className="hover:text-brand-crimson">Insights Dashboard</Link></li>
                                <li><Link href="#" className="hover:text-brand-crimson">QR Generator</Link></li>
                                <li><Link href="#" className="hover:text-brand-crimson">Pricing</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h5 className="font-black text-black uppercase tracking-wider text-xs">Company</h5>
                            <ul className="space-y-4 text-black/50 font-medium text-sm">
                                <li><Link href="#" className="hover:text-brand-crimson">About Us</Link></li>
                                <li><Link href="#" className="hover:text-brand-crimson">Careers</Link></li>
                                <li><Link href="#" className="hover:text-brand-crimson">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-brand-crimson">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-black/5 flex flex-col md:row justify-between items-center gap-6">
                        <div className="text-black/30 text-xs font-bold uppercase tracking-widest">© 2026 Gebeta Technologies. All Rights Reserved.</div>
                        <div className="flex gap-6">
                            <div className="w-8 h-8 rounded-full bg-surface-1 flex items-center justify-center hover:bg-brand-crimson hover:text-white transition-all cursor-pointer">
                                <Smartphone className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-surface-1 flex items-center justify-center hover:bg-brand-crimson hover:text-white transition-all cursor-pointer">
                                <LayoutDashboard className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const features = [
    {
        title: "Offline-First QR Menus",
        description: "Our menus load instantly even on 3G connections and work completely offline once loaded. Perfectly suited for emerging market connectivity.",
        icon: <Smartphone className="w-7 h-7" />,
        color: "bg-brand-crimson"
    },
    {
        title: "Intelligence Engine",
        description: "Automatically identify your high-margin 'Stars' and low-performing 'Dogs'. Make data-driven menu changes with our Star-Dog matrix.",
        icon: <BarChart3 className="w-7 h-7" />,
        color: "bg-black"
    },
    {
        title: "Smart Upselling",
        description: "Increase Average Order Value by 19-30% with context-aware recommendations that feel like a premium personal recommendation.",
        icon: <Sparkles className="w-7 h-7" />,
        color: "bg-brand-yellow text-black"
    }
];
