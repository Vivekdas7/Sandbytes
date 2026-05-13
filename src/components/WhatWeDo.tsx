import React from 'react';
import { Palette, Megaphone, TrendingUp, Check } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      title: "Performance Creatives",
      icon: <Palette size={20} className="text-orange-600" />,
      items: ["Static Ad Creatives", "Carousel Ads", "Banner Ads", "AI Product Visuals"],
      dark: false
    },
    {
      title: "Meta & Google Ads",
      subtitle: "Scaling your brand beyond design.",
      icon: <Megaphone size={20} className="text-orange-600" />,
      items: ["Meta (FB/IG) Strategy", "Google Search & Shopping", "Performance Insights", "Creative Testing Guidance"],
      dark: true
    },
    {
      title: "Growth Support",
      icon: <TrendingUp size={20} className="text-orange-600" />,
      items: ["Scroll-stopping hooks", "Multiple ad angles", "Offer-based creatives", "Conversion-focused design"],
      dark: false
    }
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🎨</span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase">What We Do</h2>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From high-converting visuals to performance-driven scaling, we provide everything your D2C brand needs to win.
          </p>
        </div>

        {/* 
            FIX: Added flex and overflow-x-auto for mobile. 
            Used md:grid and md:grid-cols-3 to restore the grid on desktop.
            Added snap-x for a "Tinder-like" locking feel when swiping.
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 items-stretch snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-[40px] p-10 flex flex-col transition-transform duration-300 md:hover:scale-[1.02] 
                min-w-[85%] md:min-w-0 snap-center
                ${
                service.dark 
                  ? 'bg-black text-white shadow-2xl md:scale-105 z-10' 
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 ${
                service.dark ? 'bg-zinc-900' : 'bg-white shadow-sm'
              }`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              
              {service.subtitle && (
                <p className="text-zinc-500 text-sm mb-6 italic">{service.subtitle}</p>
              )}

              <ul className={`space-y-4 flex-grow ${service.subtitle ? 'mt-0' : 'mt-6'}`}>
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    {service.dark ? (
                      <Check size={14} className="text-orange-600" />
                    ) : (
                      <span className="text-orange-600 font-bold">+</span>
                    )}
                    <span className={service.dark ? 'text-zinc-300' : 'text-gray-600'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CSS to hide scrollbars while maintaining functionality */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;