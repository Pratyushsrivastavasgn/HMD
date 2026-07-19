import React from 'react';
// 1. Import your actual images from the assets folder
import dryerImg from '../../assets/dryer.png'; // Adjust filename/extension as needed
import combKitImg from '../../assets/comb-kit.png';
import skincareImg from '../../assets/skincare.png';

// 2. Put them in an array
const productsList = [
  { img: dryerImg, alt: "Hair Dryer Product" },
  { img: combKitImg, alt: "Comb Kit Product" },
  { img: skincareImg, alt: "Skincare & Facial Product" }
];

export const Products: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-16 text-center">
        Our Products
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {productsList.map((item, index) => (
          <a 
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            key={index} 
            className="group block aspect-square w-full rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <img 
              src={item.img}
              alt={item.alt} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
