import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] pt-24 pb-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- TOP SECTION --- */}
        <div className="text-center mb-16">
          <h2 className="text-[56px] md:text-[64px] font-black tracking-tight mb-10 leading-none">
            Let's build <span className="text-[#A1A1AA] italic font-medium">something cool</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a 
              href="https://cal.com/kael-man/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Calendar size={18} />
              <span className="text-sm">Book Intro Call</span>
            </a>
            
            <a 
              href="https://wa.me/917031139797" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 border border-black/5 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span className="text-sm">Send Message</span>
            </a>
          </div>

          {/* --- DISCLAIMER TEXT --- */}
          <div className="max-w-6xl mx-auto text-[11px] leading-relaxed text-black font-medium text-left space-y-4 opacity-80">
            <p>
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. 
              As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. 
              I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward. 
              All of my terms, privacy policies and disclaimers for this program and website can be accessed via the links. I feel transparency is important and I hold ourselves (you & me) to a high standard of integrity.
            </p>
            <p>
              This website is not affiliated with Google LLC or any of its products or services. All product and company names are trademarks™ or registered® trademarks of their respective holders. 
              Use of them does not imply any affiliation with or endorsement by them.
            </p>
          </div>
        </div>

        {/* --- BOTTOM NAV SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 border-t border-black/5 items-start">
          
          {/* Brand Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-black text-xl tracking-tighter">SANDBYTE</div>
            <p className="text-[#A1A1AA] text-[13px] font-medium leading-tight max-w-[220px]">
              High-growth design and dev partner for modern startups.
            </p>
            <p className="text-[#D1D1D6] text-[13px] font-medium pt-2">© 2026 Sandbyte site</p>
          </div>

          {/* Links Grid (4 cols) - Split into two small sub-columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 text-[13px] font-bold text-[#71717A]">
              <a href="/about" className="hover:text-black transition-colors">About Us</a>
              <a href="/contact" className="hover:text-black transition-colors">Contact Us</a>
              <a href="#" className="hover:text-black transition-colors">Twitter / X</a>
            </div>
            <div className="flex flex-col gap-3 text-[13px] font-bold text-[#71717A]">
              <a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="/disclaimer" className="hover:text-black transition-colors">Disclaimer</a>
            </div>
          </div>

          {/* Contact Column (4 cols) */}
          <div className="md:col-span-4 text-left md:text-right flex flex-col md:items-end">
            <p className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.15em] mb-2">Get in touch</p>
            <a href="mailto:hello@sandbyte.site" className="text-lg font-black text-black hover:underline underline-offset-4">
              hello@sandbyte.site
            </a>
            <p className="text-[#A1A1AA] text-sm font-bold mt-1">+91 70311 39797</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

