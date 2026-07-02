import React from 'react';
import clipsImg from '../../assets/clips illustration.png';
import skincareImg from '../../assets/skincare illustration.png';
import combKitImg from '../../assets/comb-kit illustration.png';

const bestsellers = [
  {
    title: "HAIR CLIPS & SECTIONING TOOLS",
    desc: "From everyday styling clips to branded sectioning clips — available in bulk packs for professional use.",
    img: clipsImg
  },
  {
    title: "SKIN & FACIAL EQUIPMENT",
    desc: "H₂O₂ small bubble hydra facial machines with LED therapy masks — bring clinic-grade skincare to your salon.",
    img: skincareImg
  },
  {
    title: "PROFESSIONAL COMB KITS",
    desc: "Our 10-piece comb kits cover every styling need — tail combs, cutting combs, wide-tooth, and teasing combs.",
    img: combKitImg
  }
];

export const Bestsellers: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-16 text-center">
        Our Bestsellers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {bestsellers.map((item, i) => (
          <div key={i} className="flex flex-col border-2 border-gray-200 rounded-[60px] overflow-hidden p-8 hover:shadow-xl transition-shadow bg-white items-center text-center group cursor-pointer">
            <div className="w-full aspect-[3/4] mb-8 bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center">
              <img 
                src={item.img}
                alt={item.title} 
                className="w-[90%] h-[90%] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-4 h-16 flex items-center justify-center uppercase">
              {item.title}
            </h3>
            
            <p className="text-gray-600 mb-8 h-24 text-sm md:text-base px-2">
              {item.desc}
            </p>
            
            <button className="bg-gray-300/50 hover:bg-gray-300 text-gray-900 font-semibold py-4 px-12 rounded-full w-4/5 transition-colors">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
