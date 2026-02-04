"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Utensils, GlassWater } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  return (
    <div className="relative bg-brand-crimson pt-8 pb-16 px-6 rounded-b-[40px] shadow-lg mb-4 overflow-visible z-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.gif"
            alt="Gebeta Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
        <button className="text-white/80 p-2 rounded-full active:scale-95 transition-transform">
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-white"></div>
            <div className="w-3 h-0.5 bg-white ml-auto"></div>
          </div>
        </button>
      </div>

      {/* Main Copy */}
      <div className="max-w-lg mx-auto">
        <h1 className="text-[3.5rem] leading-[0.9] text-white font-black tracking-tighter mb-4">
          Where flavor <br />
          goes <span className="font-serif font-medium italic text-brand-yellow">wild</span>.
        </h1>
        <p className="text-white/80 text-sm w-full leading-relaxed">
          Discover the best local bites, trending dishes, and must-try flavors near you.
        </p>
      </div>

      {/* Food/Drinks Tabs */}
      <div className="absolute -bottom-6 left-6 right-6 z-30">
        <div className="bg-white rounded-full p-1 shadow-float flex">
          <button
            onClick={() => setActiveTab('food')}
            className={`flex-1 h-12 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'food'
              ? 'bg-brand-crimson text-white shadow-lg'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <Utensils size={16} />
            Food
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`flex-1 h-12 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'drinks'
              ? 'bg-brand-crimson text-white shadow-lg'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            <GlassWater size={16} />
            Drinks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;