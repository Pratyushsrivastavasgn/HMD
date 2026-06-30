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

      {/* WhatsApp Button */}
      <button 
        className="absolute bottom-12 right-12 md:bottom-24 md:right-24 bg-green-500 hover:bg-green-600 transition-colors p-4 rounded-full shadow-[0_0_40px_rgba(19,144,61,0.6)]"
        aria-label="Contact on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="white"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.226h.004c5.505 0 9.99-4.478 9.99-9.985C22 4.478 17.517 2 12.012 2zm5.735 14.13c-.252.712-1.463 1.307-2.01 1.352-.5.04-1.148.225-3.385-.702-2.862-1.185-4.706-4.11-4.85-4.298-.143-.19-1.143-1.521-1.143-2.9 0-1.38.713-2.057.967-2.336.252-.28.55-.349.733-.349.183 0 .367.003.527.01.163.008.385-.062.602.46.225.54.767 1.868.833 2.003.067.135.112.292.022.472-.09.18-.135.292-.27.45-.135.158-.285.35-.405.47-.135.135-.278.283-.12.55.158.27.7 1.15 1.502 1.865.803.715 1.485.937 1.758 1.05.27.112.43.09.592-.09.16-.18.7-1.02.885-1.37.185-.35.37-.29.622-.2.253.09 1.603.754 1.88 1.13.277.38.277.568.152.85-.125.28-.602 1.258-.885 1.57z"/>
        </svg>
      </button>
    </section>
  );
};
