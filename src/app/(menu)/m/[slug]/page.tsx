"use client";

import React from 'react';
import Hero from '@/components/Hero';
import CategoryScroll from '@/components/CategoryScroll';
import Feed from '@/components/Feed';

export default function GuestMenuPage() {
    return (
        <div className="min-h-screen bg-surface-0 relative overflow-x-hidden font-sans selection:bg-brand-yellow selection:text-black">
            {/* Main Content Area */}
            <main className="w-full max-w-lg mx-auto bg-surface-0 min-h-screen shadow-2xl relative">
                <Hero />
                <CategoryScroll />
                <Feed />
            </main>
        </div>
    );
}
