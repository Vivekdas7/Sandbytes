import React, { useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Mail, Calendar, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  { id: 1, img: 'assets/image1.png', title: 'Project One', link: '#' },
  { id: 2, img: 'assets/image2.png', title: 'Project Two', link: '#' },
  { id: 3, img: 'assets/image3.png', title: 'Project Three', link: '#' },
  { id: 4, img: 'assets/image4.png', title: 'Project Four', link: '#' },
  { id: 5, img: 'assets/image5.png', title: 'Project Five', link: '#' },
  { id: 6, img: 'assets/image6.png', title: 'Project Six', link: '#' },
  { id: 7, img: 'assets/image7.png', title: 'Project Seven', link: '#' },
  { id: 8, img: 'assets/image8.png', title: 'Project Eight', link: '#' },
  { id: 9, img: 'assets/image9.png', title: 'Project Nine', link: '#' },
];

const LOGOS = [
  { src: 'assets/t1.svg', alt: 'Whop' },
  { src: 'assets/t2.svg', alt: 'Jupiter' },
  { src: 'assets/t3.svg', alt: 'SideShift' },
  { src: 'assets/t4.svg', alt: 'Ostium' },
  { src: 'assets/t5.svg', alt: 'Listkit' },
  { src: 'assets/t6.svg', alt: 'Partner' },
];

export const HeroSection: React.FC = () => {
  // Triple the array for infinite scroll
  const infiniteProjects = useMemo(() => [...PROJECTS, ...PROJECTS, ...PROJECTS], []);

  return (
    <section className="mt-20 relative min-h-screen flex flex-col items-center pt-16 md:pt-10 overflow-hidden bg-[#F4F4F4] selection:bg-zinc-900 selection:text-white">
      
      {/* --- TOP FLOATING BADGE --- */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="z-20 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/5 mb-8 md:mb-12"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[12px] md:text-sm font-bold tracking-tight text-zinc-800">Available for new projects</span>
      </motion.div>

      {/* --- MAIN CONTENT AREA (Faded on scroll removed) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl text-center space-y-6 px-6"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-bold text-sm md:text-base tracking-tight"
        >
         Helped Generate 5 Cr+ in 2025. Worked with 47+ Brands & more than 100+ Ad Creatives.
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[40px] md:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-[1.05] text-zinc-900"
        >Turn Your Product Photos Into <span className="text-zinc-400 italic">Scroll-Stopping </span> Ads
That Actually Sell
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
        >
         We help D2C brands create high-converting ad creatives and scale them with 
performance-driven strategies.
        </motion.p>

        {/* --- BUTTON GROUP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <a 
            href="https://cal.com/kael-man/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto block"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl group">
              <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
              Get 2 Free Ad Creatives
            </button>
          </a>
          <a 
            href="https://wa.me/917031139797?text=Hi%20Ankan,%20I'm%20interested%20in%20working%20with%20Sandbyte%20site!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto block"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-black/10 px-10 py-5 rounded-full font-bold hover:bg-zinc-50 active:scale-95 transition-all shadow-sm">
              <Mail size={20} className="text-[#25D366]" />
              Send Message
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* --- INFINITY LOOP CAROUSEL --- */}
      <div className="w-full mt-20 md:mt-24 relative flex items-center group/carousel">
        <motion.div 
          className="flex gap-4 md:gap-6 px-3"
          initial={{ x: "-33.33%" }}
          animate={{ x: "0%" }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {infiniteProjects.map((project, index) => (
            <motion.a 
              key={`${project.id}-${index}`} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block min-w-[280px] md:min-w-[550px] aspect-[4/3] md:aspect-[16/10] bg-white rounded-[24px] md:rounded-[40px] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 group"
            >
              <img 
                src={project.img} 
                alt={`Project ${project.id}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight className="text-black" size={32} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-[#F4F4F4] via-[#F4F4F4]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-[#F4F4F4] via-[#F4F4F4]/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* --- TRUSTED LOGO SECTION --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 md:mt-32 w-full max-w-6xl px-6 pb-20"
      >
        <p className="text-center font-bold text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-10">
         Inspired By
        </p>
        
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-10 opacity-30 hover:opacity-100 transition-opacity duration-500">
           {LOGOS.map((logo, idx) => (
             <img 
               key={idx} 
               src={logo.src} 
               alt={logo.alt} 
               className="h-5 md:h-8 w-auto mx-auto object-contain hover:scale-110 transition-transform" 
             />
           ))}
           <div className="col-span-3 md:col-span-1 flex justify-center">
             <div className="px-5 py-2 rounded-full border border-black/10 text-[10px] md:text-xs font-black tracking-widest bg-white/50 backdrop-blur-sm">
               30+ MORE
             </div>
           </div>
        </div>
      </motion.div>

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100/30 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-zinc-200/50 blur-[100px] -z-10 rounded-full" />
    </section>
  );
};