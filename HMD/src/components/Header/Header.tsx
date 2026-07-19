import React from 'react';
import { Search, Heart, User, ShoppingCart, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

const navItems = [
  { label: "SERVICES", hasDropdown: true },
  { label: "ABOUT US", hasDropdown: false },
  { label: "EXPLORE PRODUCTS", hasDropdown: false },
  { label: "CONTACT US", hasDropdown: false }
];

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-100">
      {/* Logo */}
      <div 
        className="flex flex-col cursor-pointer select-none"
        onClick={() => onNavigate('home')}
      >
        <span className="font-serif text-3xl font-bold tracking-tight uppercase leading-none text-gray-900">HMD</span>
        <span className="font-sans text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-1">PROFESSIONAL</span>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              if (item.label === 'ABOUT US') onNavigate('about');
              else if (item.label === 'CONTACT US') onNavigate('contact');
              else window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
            }}
            className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            {item.label}
            {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
          </button>
        ))}
      </nav>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        <button onClick={() => window.open('https://www.google.com', '_blank', 'noopener,noreferrer')} className="text-gray-900 hover:text-gray-600 transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={() => window.open('https://www.google.com', '_blank', 'noopener,noreferrer')} className="text-gray-900 hover:text-gray-600 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button onClick={() => window.open('https://www.google.com', '_blank', 'noopener,noreferrer')} className="text-gray-900 hover:text-gray-600 transition-colors">
          <User className="w-5 h-5" />
        </button>
        <button onClick={() => window.open('https://www.google.com', '_blank', 'noopener,noreferrer')} className="text-gray-900 hover:text-gray-600 transition-colors relative">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
