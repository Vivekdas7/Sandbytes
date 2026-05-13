import React from 'react';

const Navbar: React.FC = () => {
  // Function to handle smooth scroll without changing the URL hash
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4 ">
      <nav className="flex items-center justify-between w-full max-w-[95%] md:max-w-5xl h-[72px] bg-white border border-gray-100 rounded-full px-4 md:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md bg-opacity-90">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="h-6 sm:h-8 md:h-10 lg:h-12">
            <img
              src="/assets/SANDBYTE-LOGO.png"
              alt="Sandbyte logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation Links - Now using Buttons to avoid # in URL */}
        <div className="hidden md:flex items-center bg-gray-50/50 rounded-full px-2 py-1.5 border border-gray-50">
          <button 
            onClick={() => scrollToSection('benefits')}
            className="px-5 py-2 text-sm font-bold text-slate-900 hover:bg-white rounded-full transition-all"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('PricingSection')}
            className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors"
          >
            Testimonials
          </button>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white px-6 md:px-8 py-3 rounded-full text-sm font-black transition-all transform active:scale-95 shadow-lg shadow-purple-200">
            Get Template
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;