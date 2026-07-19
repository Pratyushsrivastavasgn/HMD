import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Products } from './components/Products/Products';
import { Categories } from './components/Categories/Categories';
import { Bestsellers } from './components/Bestsellers/Bestsellers';
import { Footer } from './components/Footer/Footer';
import { PlaceholderImage } from './components/Shared/PlaceholderImage';
import { AboutPage } from './components/About/AboutPage';
import { ContactPage } from './components/Contact/ContactPage';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-3 text-xs md:text-sm overflow-hidden select-none relative flex">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
      `}</style>
      <div className="animate-marquee flex gap-8">
        {/* Original content */}
        <div className="flex gap-8 items-center pr-8">
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
        </div>
        {/* Cloned content for loop */}
        <div className="flex gap-8 items-center pr-8" aria-hidden="true">
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-bold underline ml-1">view here</a></span>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'about' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col">
      <Header onNavigate={setActivePage} />
      <AnnouncementBar />
      
      <main className="flex-1 w-full flex flex-col">
        {activePage === 'home' && (
          <>
            <Hero />
            <Products />
            <Categories />
            
            {/* Divider Image */}
            <section className="w-full h-[400px] md:h-[600px] my-12 bg-gray-100">
              <PlaceholderImage 
                alt="Divider Video/Image placeholder (forklift moving boxes)"
                className="w-full h-full object-cover"
              />
            </section>

            <Bestsellers />
          </>
        )}

        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={setActivePage} />

      {/* Global Sticky WhatsApp Button */}
      <a
        href="https://wa.me/918077625911"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp: +91 8077 625 911"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 p-4 rounded-full shadow-[0_0_40px_rgba(19,144,61,0.5)] hover:shadow-[0_0_55px_rgba(19,144,61,0.8)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.226h.004c5.505 0 9.99-4.478 9.99-9.985C22 4.478 17.517 2 12.012 2zm5.735 14.13c-.252.712-1.463 1.307-2.01 1.352-.5.04-1.148.225-3.385-.702-2.862-1.185-4.706-4.11-4.85-4.298-.143-.19-1.143-1.521-1.143-2.9 0-1.38.713-2.057.967-2.336.252-.28.55-.349.733-.349.183 0 .367.003.527.01.163.008.385-.062.602.46.225.54.767 1.868.833 2.003.067.135.112.292.022.472-.09.18-.135.292-.27.45-.135.158-.285.35-.405.47-.135.135-.278.283-.12.55.158.27.7 1.15 1.502 1.865.803.715 1.485.937 1.758 1.05.27.112.43.09.592-.09.16-.18.7-1.02.885-1.37.185-.35.37-.29.622-.2.253.09 1.603.754 1.88 1.13.277.38.277.568.152.85-.125.28-.602 1.258-.885 1.57z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
