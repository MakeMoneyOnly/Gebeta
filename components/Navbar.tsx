import React from 'react';
import { House, Search, Heart, User, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 flex justify-center">
      <div className="
        relative
        flex items-center justify-between 
        w-full max-w-md 
        h-[72px] 
        px-6 
        bg-glass-black backdrop-blur-md 
        rounded-full 
        shadow-float-strong
        border border-white/10
      ">
        
        {/* Left Icons */}
        <button className="p-2 text-white/70 hover:text-white transition-colors active:scale-95">
          <House size={24} />
        </button>
        <button className="p-2 text-white/70 hover:text-white transition-colors active:scale-95 mr-8">
          <Search size={24} />
        </button>

        {/* Center Floating Action Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button className="
            flex items-center justify-center 
            w-16 h-16 
            bg-brand-crimson 
            text-white 
            rounded-full 
            shadow-[0_8px_20px_rgba(168,24,24,0.4)] 
            border-[3px] border-surface-0
            active:scale-90 transition-transform duration-200
          ">
            <ShoppingBag size={26} fill="white" />
          </button>
        </div>

        {/* Right Icons */}
        <button className="p-2 text-white/70 hover:text-white transition-colors active:scale-95 ml-8">
          <Heart size={24} />
        </button>
        <button className="p-2 text-white/70 hover:text-white transition-colors active:scale-95">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;