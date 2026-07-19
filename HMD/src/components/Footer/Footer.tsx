import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

const footerColumns = [
  {
    title: "Services",
    items: [
      { label: "Bulk selling", external: true },
      { label: "Import", external: true },
      { label: "Retail", external: true }
    ],
  },
  {
    title: "Contact us",
    items: [
      { label: "Warranty Registration", external: true },
      { label: "Contact", page: 'contact' as const },
      { label: "Blogs", external: true }
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Terms & Conditions", external: true },
      { label: "Privacy Policy", external: true },
      { label: "FAQs", external: true },
      { label: "Returns & Refunds Policy", external: true },
      { label: "Shipping Policy", external: true },
      { label: "About HMD", page: 'about' as const },
    ],
  }
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white pt-16 pb-24 border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Tagline */}
        <div className="mb-24 text-center">
          <p className="font-sacramento text-5xl md:text-6xl lg:text-7xl text-gray-900">
            Bulk, retail, or bespoke—we source it, you shine.
          </p>
        </div>

        {/* Footer Columns Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Contact Info */}
          <div className="flex flex-col gap-6">
            <div 
              className="flex flex-col cursor-pointer select-none"
              onClick={() => onNavigate('home')}
            >
              <span className="font-serif text-5xl font-bold tracking-tight uppercase leading-none text-gray-900">HMD</span>
              <span className="font-sans text-sm tracking-[0.2em] text-gray-500 uppercase mt-2">PROFESSIONAL</span>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <h3 className="font-medium text-2xl text-gray-900">Connect With Us</h3>
              <a href="tel:+91XXXXXXXXXX" className="text-gray-600 font-light hover:text-gray-900 transition-colors">+91 XXXXX XXXXX</a>
              <a href="mailto:hmdprofessional@gmail.com" className="text-gray-600 font-light hover:text-gray-900 transition-colors">hmdprofessional@gmail.com</a>
            </div>
          </div>

          {/* Nav Columns */}
          {footerColumns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="font-medium text-2xl text-gray-900">{col.title}</h3>
              <ul className="flex flex-col gap-4">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <button 
                      onClick={() => {
                        if ((item as any).external) {
                          window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
                        } else if ((item as any).page) {
                          onNavigate((item as any).page);
                        }
                      }}
                      className="text-gray-600 font-light hover:text-gray-900 transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </footer>
  );
};
