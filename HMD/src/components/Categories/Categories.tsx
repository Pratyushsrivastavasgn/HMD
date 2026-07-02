import React from 'react';
import combImg from '../../assets/comb illustration.png';
import scissorImg from '../../assets/scissor illustration.png';
import brushImg from '../../assets/brush illustration.png';
import machineImg from '../../assets/machine illustration.png';

const categories = [
  { label: "Comb", img: combImg },
  { label: "Scissors", img: scissorImg },
  { label: "Brushes", img: brushImg },
  { label: "Machines", img: machineImg }
];

export const Categories: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-16 text-center">
        Shop by Categories
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 w-full">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col items-center gap-6">
            <div className="w-full aspect-[2/3] max-w-[280px] rounded-[100px] border border-gray-200 overflow-hidden bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex items-center justify-center">
              <img 
                src={cat.img}
                alt={`${cat.label} category`} 
                className="w-[90%] h-[90%] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <span className="font-sacramento text-5xl text-gray-900">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

