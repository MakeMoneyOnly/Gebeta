"use client";

import React from 'react';
import { FoodItem } from '../types';
import Image from 'next/image';
import { Heart, Plus } from 'lucide-react';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="group relative mb-6 active:scale-[0.98] transition-transform duration-300">
      {/* Image Container */}
      <div className="relative rounded-[32px] overflow-hidden bg-gray-200 shadow-md">

        {/* Flash Photo Effect Overlay - Always Active */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-100 z-10 pointer-events-none"></div>

        <Image
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={230}
          className="w-full h-[230px] object-cover"
          unoptimized
        />

        {/* Top Floating Elements */}
        <button className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white z-20 hover:bg-white hover:text-brand-crimson transition-colors">
          <Heart size={16} fill="currentColor" />
        </button>

        <div className="absolute -top-2 -right-2 z-20 w-[90px] h-[90px]">
          <Image
            src="/price.svg"
            alt=""
            width={90}
            height={90}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white leading-tight">
            <span className="text-base font-black">{Math.round(item.price)}</span>
            <span className="text-xs font-bold">ETB</span>
          </div>
        </div>

        {/* Add Button (Bottom Right of Image) */}
        <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform">
          <Plus size={20} />
        </button>
      </div>

      {/* Info Below */}
      <div className="mt-3 px-1">
        <h3 className="font-bold text-lg leading-tight text-black">{item.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{item.shop}</p>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold">★</span>
            <span className="text-xs">{item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;