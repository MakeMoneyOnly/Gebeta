"use client";

import React from 'react';
import { FOOD_ITEMS } from '../constants';
import FoodCard from './FoodCard';

const Feed: React.FC = () => {
  return (
    <div className="px-4 pb-94">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-2xl font-black text-black">Near You</h2>
        <button className="text-sm font-semibold underline decoration-2 decoration-brand-crimson/30 hover:decoration-brand-crimson transition-all">
          View All
        </button>
      </div>

      {/* Masonry Layout */}
      <div className="flex gap-3 mt-8">
        {/* Left Column */}
        <div className="flex-1 -mt-8">
          {FOOD_ITEMS.filter((_, i) => i % 2 === 0).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
        {/* Right Column */}
        <div className="flex-1">
          {FOOD_ITEMS.filter((_, i) => i % 2 === 1).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-8 mb-8 p-6 bg-brand-mint rounded-[32px] relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2 w-2/3">Free delivery on your first order.</h3>
          <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold mt-2">Get Code</button>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-6 -bottom-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl"></div>
        <div className="absolute -right-2 bottom-4 text-6xl opacity-20 rotate-12">🛵</div>
      </div>
    </div>
  );
};

export default Feed;