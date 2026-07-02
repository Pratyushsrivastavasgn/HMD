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
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
        </div>
        {/* Cloned content for loop */}
        <div className="flex gap-8 items-center pr-8" aria-hidden="true">
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
          <span>•</span>
          <span>For Retail buyers, our products are listed on flipkart and amazon <a href="#" className="font-bold underline ml-1">view here</a></span>
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
    </div>
  );
};

export default App;
