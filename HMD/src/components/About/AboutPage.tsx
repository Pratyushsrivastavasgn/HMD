import React from 'react';
import aboutBanner from '../../assets/about_banner.png';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[380px] md:h-[480px] lg:h-[580px] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] rounded-bl-[100px] md:rounded-bl-[180px]">
        {/* Background Image */}
        <img 
          src={aboutBanner} 
          alt="About HMD Hair flow and dryer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/35"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-12 md:pb-20 px-8 md:px-24 max-w-7xl mx-auto">
          <h1 className="text-white font-bold text-4xl md:text-6xl tracking-wide uppercase leading-none">
            About Us
          </h1>
          <p className="text-white font-sacramento text-3xl md:text-5xl mt-6 italic opacity-95 max-w-2xl">
            We sell salon products in bulk to wholesalers.
          </p>
        </div>

        {/* Floating WhatsApp Button */}
        <button 
          className="absolute bottom-12 right-12 md:bottom-20 md:right-20 bg-green-500 hover:bg-green-600 transition-all duration-300 p-4 rounded-full shadow-[0_0_40px_rgba(19,144,61,0.6)] hover:scale-105"
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

      {/* Main Content Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-10 text-center tracking-tight">
          HMD Professional
        </h2>
        
        <p className="text-gray-900 text-center text-lg md:text-xl leading-relaxed max-w-4xl px-4 md:px-8 mb-16 font-semibold">
          HMD is your strategic partner in beauty, delivering world-class professional products through a versatile framework of wholesale, retail, and on-demand import solutions. By connecting the global market directly to your salon or doorstep, we simplify the complex, making premium innovation effortlessly accessible. At HMD, we empower the beauty industry with the tools it needs to thrive, one product at a time.
        </p>
      </section>
    </div>
  );
};
