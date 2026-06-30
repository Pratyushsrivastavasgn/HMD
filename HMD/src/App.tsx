import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Products } from './components/Products/Products';
import { Categories } from './components/Categories/Categories';
import { Bestsellers } from './components/Bestsellers/Bestsellers';
import { Footer } from './components/Footer/Footer';
import { PlaceholderImage } from './components/Shared/PlaceholderImage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col">
      <Header />
      
      <main className="flex-1 w-full flex flex-col">
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
