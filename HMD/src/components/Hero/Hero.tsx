import React from 'react';
import truckImg from '../../assets/truck-bg.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden rounded-b-[40px] md:rounded-b-[80px]">
      {/* Background Image */}
      <img 
        src={truckImg}
        alt="Truck shipping port background"
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-24 max-w-7xl mx-auto">
        <h4 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
          Your Trusted <br/> Import &amp; <br/> Distribution <br/> Partner
        </h4>
        <p className="text-white font-sacramento text-3xl md:text-5xl mt-6 italic opacity-90 max-w-2xl">
          We sell salon products in bulk to wholesalers.
        </p>
      </div>


    </section>
  );
};
