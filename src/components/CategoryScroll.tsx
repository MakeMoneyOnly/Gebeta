"use client";

import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

const CategoryScroll: React.FC = () => {
  const [activeId, setActiveId] = useState('all');

  return (
    <div className="w-full overflow-x-auto no-scrollbar pl-6 py-4 mb-0">
      <div className="flex gap-4 pr-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className="group flex flex-col items-center gap-2 min-w-[70px] transition-all duration-300 focus:outline-none active:scale-95"
            >
              {/* Badge Container */}
              <div
                className={`
                  relative w-[71px] h-[71px] flex items-center justify-center
                  transition-all duration-300
                  ${isActive ? 'scale-110' : 'scale-100'}
                `}
              >
                {/* The Scalloped Background */}
                <div className={`
                    absolute inset-0 w-full h-full badge-scallop transition-colors duration-300
                    ${isActive ? 'bg-brand-crimson rotate-12' : 'bg-surface-1 group-hover:bg-gray-200'}
                 `}></div>

                {/* Icon */}
                <div className={`relative z-10 ${isActive ? 'text-white' : 'text-black'}`}>
                  {cat.icon}
                </div>
              </div>

              {/* Label */}
              <span className={`
                text-xs font-bold tracking-wide transition-colors duration-300
                ${isActive ? 'text-black' : 'text-gray-400'}
              `}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryScroll;