import React, { useState } from 'react';

const PricingSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({ name: '', email: '', business: '' });

  const whatsappNumber = "9366159066";

  const openPopup = (planName: string) => {
    setSelectedPlan(planName);
    setIsOpen(true);
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Booking Request*%0A%0A*Plan:* ${selectedPlan}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Business:* ${formData.business}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    // Added overflow-visible to ensure no part of the card is clipped
    <div className="bg-white py-12 md:py-24 px-4 font-sans text-[#1a1a1a] overflow-visible">
      <div className="max-w-6xl mx-auto overflow-visible">
        <h2 className="text-center text-3xl md:text-5xl font-black mb-10 md:mb-20">Pricing Plans</h2>
        
        {/* 
            FIX: Added py-10 to provide "breathing room" for the scaled center card and badges.
            Added overflow-visible to all levels.
        */}
        <div className="flex overflow-x-auto overflow-y-visible px-6 -mx-6 py-10 md:py-12 md:px-2 md:mx-0 md:grid md:grid-cols-3 gap-8 items-stretch snap-x snap-mandatory hide-scrollbar">
          
          {/* Starter Pack */}
          <div className="min-w-[85%] md:min-w-0 snap-center md:snap-align-none">
            <div className="bg-[#fcfcfc] rounded-[40px] md:rounded-[50px] border border-gray-100 p-8 md:p-10 flex flex-col h-full shadow-lg">
              <h3 className="text-xl font-bold mb-4">Starter Pack</h3>
              <div className="text-[40px] md:text-[48px] font-black leading-none mb-10">₹9,999</div>
              
              <ul className="space-y-5 flex-grow mb-12">
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  Best for Social Media & Ads
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  10 Ad Creatives
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  Fast Delivery
                </li>
              </ul>
              
              <button 
                onClick={() => openPopup("Starter Pack")}
                className="w-full py-4 rounded-full border-[2.5px] border-black font-black text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all mt-auto"
              >
                <span>👉</span> GET STARTED
              </button>
            </div>
          </div>

          {/* Growth Pack - CENTER HIGHLIGHT */}
          <div className="min-w-[85%] md:min-w-0 snap-center md:snap-align-none z-20">
            <div className="relative bg-white rounded-[40px] md:rounded-[60px] border-[4px] border-black p-8 md:p-10 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:scale-105 transition-transform duration-300">
              {/* Badge positioned higher to avoid overlap */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#e44d26] text-white text-[11px] font-black px-8 py-2.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md">
                Most Popular
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-2">Growth Pack</h3>
              <div className="text-[40px] md:text-[48px] font-black leading-none mb-2">₹19,999</div>
              <p className="text-gray-400 text-xs italic mb-8">For Brands Running ads Consistently</p>
              
              <ul className="space-y-5 flex-grow mb-12">
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  25 Ad Creatives
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  Multiple Hooks & Angles
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  Ad Variations
                </li>
              </ul>
              
              <button 
                onClick={() => openPopup("Growth Pack")}
                className="w-full py-5 rounded-full bg-black text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl hover:bg-[#e44d26] transition-all mt-auto"
              >
                <span>👉</span> BOOK NOW
              </button>
            </div>
          </div>

          {/* Scale Pack */}
          <div className="min-w-[85%] md:min-w-0 snap-center md:snap-align-none">
            <div className="bg-[#fcfcfc] rounded-[40px] md:rounded-[50px] border border-gray-100 p-8 md:p-10 flex flex-col h-full shadow-lg">
              <h3 className="text-xl font-bold mb-4">Scale Pack</h3>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-2xl md:text-3xl font-black text-gray-300 relative">
                  ₹39k+
                  <span className="absolute left-0 top-1/2 w-full h-[3px] bg-[#ff4d4d] -rotate-6"></span>
                </span>
                <span className="text-[35px] md:text-[40px] font-black">39,999</span>
              </div>
              
              <ul className="space-y-5 flex-grow mb-12">
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  50+ Ad Creatives
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600">✓</span>
                  Priority Delivery
                </li>
              </ul>
              
              <button 
                onClick={() => openPopup("Scale Pack")}
                className="w-full py-4 rounded-full border-[2.5px] border-black font-black text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all mt-auto"
              >
                <span>👉</span> LET'S SCALE
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* --- MODAL FORM --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="bg-white w-full max-w-md rounded-[32px] p-8 relative animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black text-xl font-bold">✕</button>
            <h3 className="text-2xl font-black mb-1">Book {selectedPlan}</h3>
            <p className="text-gray-500 text-sm mb-6">Open WhatsApp to finalize your booking</p>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              <input required className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-black outline-none font-semibold" placeholder="Your Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input required type="email" className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-black outline-none font-semibold" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input required className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-black outline-none font-semibold" placeholder="Business Name" onChange={(e) => setFormData({...formData, business: e.target.value})} />
              <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl shadow-xl hover:bg-[#e44d26] transition-all">
                BOOK VIA WHATSAPP
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PricingSection;