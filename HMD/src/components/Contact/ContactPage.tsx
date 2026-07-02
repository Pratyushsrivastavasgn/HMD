import React from 'react';

export const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting HMD Professional! We will get back to you shortly.');
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Header Banner Text Section */}
      <section className="pt-16 pb-12 px-6 max-w-7xl mx-auto w-full flex flex-col items-start md:px-12">
        <h1 className="text-gray-900 font-bold text-4xl md:text-6xl tracking-wide uppercase leading-none">
          Contact Us
        </h1>
        <p className="text-gray-900 font-sacramento text-3xl md:text-5xl mt-3 italic opacity-90">
          We're here to help
        </p>
      </section>

      {/* Form Section */}
      <section className="px-6 pb-20 max-w-5xl w-full mx-auto relative md:px-12">
        <div className="relative">
          {/* Leaf-shaped Form Container */}
          <form 
            onSubmit={handleSubmit}
            className="w-full border-2 border-black p-8 md:p-16 rounded-[40px] rounded-tl-[120px] rounded-br-[120px] bg-white flex flex-col gap-6 md:gap-8 shadow-sm"
          >
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Name */}
              <div className="relative">
                <input 
                  type="text" 
                  required
                  placeholder="Name *" 
                  className="bg-gray-100 border border-transparent rounded-[20px] px-6 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-50 focus:border-black w-full text-base transition-all duration-300"
                />
              </div>

              {/* Email id */}
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="Email id *" 
                  className="bg-gray-100 border border-transparent rounded-[20px] px-6 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-50 focus:border-black w-full text-base transition-all duration-300"
                />
              </div>

              {/* Contact number */}
              <div className="relative">
                <input 
                  type="tel" 
                  required
                  placeholder="Contact number *" 
                  className="bg-gray-100 border border-transparent rounded-[20px] px-6 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-50 focus:border-black w-full text-base transition-all duration-300"
                />
              </div>

              {/* Company name */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Company name" 
                  className="bg-gray-100 border border-transparent rounded-[20px] px-6 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-50 focus:border-black w-full text-base transition-all duration-300"
                />
              </div>
            </div>

            {/* Comment Area */}
            <div className="relative">
              <textarea 
                placeholder="Comment" 
                rows={6}
                className="bg-gray-100 border border-transparent rounded-[20px] px-6 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-50 focus:border-black w-full text-base transition-all duration-300 resize-none h-40"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-16 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Form
              </button>
            </div>
          </form>

          {/* Floating WhatsApp Button on the right (hidden on mobile, visible on medium screens and up) */}
          <button 
            type="button"
            className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:flex bg-green-500 hover:bg-green-600 transition-all duration-300 p-5 rounded-full shadow-[0_0_40px_rgba(19,144,61,0.6)] hover:scale-105 z-10"
            aria-label="Contact on WhatsApp"
            onClick={() => window.open('https://wa.me/', '_blank')}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.226h.004c5.505 0 9.99-4.478 9.99-9.985C22 4.478 17.517 2 12.012 2zm5.735 14.13c-.252.712-1.463 1.307-2.01 1.352-.5.04-1.148.225-3.385-.702-2.862-1.185-4.706-4.11-4.85-4.298-.143-.19-1.143-1.521-1.143-2.9 0-1.38.713-2.057.967-2.336.252-.28.55-.349.733-.349.183 0 .367.003.527.01.163.008.385-.062.602.46.225.54.767 1.868.833 2.003.067.135.112.292.022.472-.09.18-.135.292-.27.45-.135.158-.285.35-.405.47-.135.135-.278.283-.12.55.158.27.7 1.15 1.502 1.865.803.715 1.485.937 1.758 1.05.27.112.43.09.592-.09.16-.18.7-1.02.885-1.37.185-.35.37-.29.622-.2.253.09 1.603.754 1.88 1.13.277.38.277.568.152.85-.125.28-.602 1.258-.885 1.57z"/>
            </svg>
          </button>
        </div>

        {/* Floating WhatsApp Button for mobile (fixed in bottom corner, or inline at the bottom) */}
        <div className="flex justify-center mt-8 md:hidden">
          <button 
            type="button"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            onClick={() => window.open('https://wa.me/', '_blank')}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.226h.004c5.505 0 9.99-4.478 9.99-9.985C22 4.478 17.517 2 12.012 2zm5.735 14.13c-.252.712-1.463 1.307-2.01 1.352-.5.04-1.148.225-3.385-.702-2.862-1.185-4.706-4.11-4.85-4.298-.143-.19-1.143-1.521-1.143-2.9 0-1.38.713-2.057.967-2.336.252-.28.55-.349.733-.349.183 0 .367.003.527.01.163.008.385-.062.602.46.225.54.767 1.868.833 2.003.067.135.112.292.022.472-.09.18-.135.292-.27.45-.135.158-.285.35-.405.47-.135.135-.278.283-.12.55.158.27.7 1.15 1.502 1.865.803.715 1.485.937 1.758 1.05.27.112.43.09.592-.09.16-.18.7-1.02.885-1.37.185-.35.37-.29.622-.2.253.09 1.603.754 1.88 1.13.277.38.277.568.152.85-.125.28-.602 1.258-.885 1.57z"/>
            </svg>
            Chat with us on WhatsApp
          </button>
        </div>
      </section>

     
      </div>
  );
};
