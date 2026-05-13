import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import WhatWeDo from './WhatWeDo';

const BEFORE_AFTER_DATA = [
  {
    id: 1,
    title: "Standard Product Shot",
    desc: "Turned a simple desk photo into a high-CTR Instagram Story ad.",
    rawLabel: "RAW IMAGE",
    rawContent: "Watch Image",
    premiumLabel: "Premium Ad",
    premiumContent: "Watch Ad",
    premiumColor: "bg-yellow-400"
  },
  {
    id: 2,
    title: "Raw Smartphone Snap",
    desc: "Cleaned up lighting, added AI backgrounds, and added conversion-focused copy.",
    rawLabel: "BASIC PHOTO",
    rawContent: "Shoe Image",
    premiumLabel: "Premium Ad",
    premiumContent: "Shoe Ad",
    premiumColor: "bg-gray-800"
  },
  {
    id: 3,
    title: "Pro Lighting Setup",
    desc: "Enhanced shadows and color grading for a luxury feel.",
    rawLabel: "BASIC PHOTO",
    rawContent: "Watch Image",
    premiumLabel: "Premium Ad",
    premiumContent: "Watch Ad",
    premiumColor: "bg-yellow-400"
  },
  {
    id: 4,
    title: "E-com Conversion",
    desc: "Optimized product placement for higher click-through rates.",
    rawLabel: "RAW IMAGE",
    rawContent: "Shoe Image",
    premiumLabel: "Premium Ad",
    premiumContent: "Shoe Ad",
    premiumColor: "bg-gray-800"
  }
];

const SwipeCard = ({ item, index, total, onSwipe }: any) => {
  const x = useMotionValue(0);
  
  // Tinder Physics: Card rotates as you drag, and background cards scale up
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  
  // Visual stack effect: Cards further back are smaller and lower
  const isTop = index === 0;
  const scale = isTop ? 1 : 1 - (index * 0.05);
  const translateY = isTop ? 0 : index * 12;

  return (
    <motion.div
      style={{ 
        x, 
        rotate, 
        opacity, 
        scale,
        y: translateY,
        zIndex: total - index,
        position: 'absolute'
      }}
      drag={isTop ? "x" : false} // Only top card is draggable
      dragConstraints={{ left: 0, right: 0 }}
      whileDrag={{ cursor: 'grabbing', scale: 1.02 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 120) onSwipe(item.id);
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inset-0 w-full cursor-grab active:cursor-grabbing"
    >
      <div className="bg-white rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 h-[520px] flex flex-col justify-between overflow-hidden relative group">
        <div className="absolute top-4 right-4 z-20">
            <div className="bg-orange-500 p-2 rounded-full text-white shadow-lg animate-pulse">
                <Sparkles size={16} />
            </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2 h-72">
            <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200">
              <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-widest">Original</span>
              <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-xs">{item.rawContent}</div>
            </div>
            <div className={`flex-[1.5] ${item.premiumColor} rounded-2xl overflow-hidden relative border border-black/5 shadow-inner`}>
              <span className="absolute top-3 right-3 bg-orange-600 text-white text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-widest">Premium Ad</span>
              <div className="w-full h-full flex items-center justify-center text-white font-black text-2xl drop-shadow-md">{item.premiumContent}</div>
            </div>
          </div>

          <div className="px-2">
            <h4 className="font-black text-2xl text-gray-900 leading-tight">{item.title}</h4>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">"{item.desc}"</p>
          </div>
        </div>

        <div className="flex items-center justify-between px-2 pb-2">
           <div className="flex -space-x-2">
              {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />)}
              <div className="pl-4 text-[10px] text-gray-400 font-bold uppercase self-center tracking-tighter">Loved by D2C Brands</div>
           </div>
           <div className="text-orange-500 font-black text-xs">9.8/10</div>
        </div>
      </div>
    </motion.div>
  );
};

const LandingPage = () => {
  const [stack, setStack] = useState(BEFORE_AFTER_DATA);

  const handleSwipe = (id: number) => {
    setStack((prev) => {
      const remaining = prev.filter((item) => item.id !== id);
      return remaining.length === 0 ? BEFORE_AFTER_DATA : remaining;
    });
  };

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
  const infiniteProjects = useMemo(() => [...PROJECTS, ...PROJECTS, ...PROJECTS], []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 overflow-x-hidden relative">
      
      {/* HEADER SECTION */}
      <section className="py-16 text-center px-4 relative z-10">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 italic tracking-tight">
    Real Results. Not Just Good Designs.
  </h1>
  <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
    We don't just make creatives, we help brands generate revenue.
  </p>
  
  {/* 
      CHANGE: Updated 'grid-cols-1' to 'grid-cols-2'. 
      Added 'gap-4' for mobile and 'md:gap-6' for desktop.
  */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-12">
    
    {/* Card 1 */}
    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <span className="text-orange-600 text-2xl md:text-3xl font-black">₹5Cr+</span>
      <span className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest mt-2 font-bold leading-tight">
        Revenue Generated
      </span>
    </div>

    {/* Card 2 */}
    <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <span className="text-orange-600 text-2xl md:text-3xl font-black">8-10x</span>
      <span className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest mt-2 font-bold leading-tight">
        ROAS Average
      </span>
    </div>

    {/* Card 3 - 'col-span-2 md:col-span-1' makes it full width on mobile grid if you want it centered, 
        or leave it as is to just let it sit in the next grid cell */}
    <div className="col-span-2 md:col-span-1 bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <span className="text-orange-600 text-2xl md:text-3xl font-black uppercase">SCALED</span>
      <span className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest mt-2 font-bold leading-tight">
        D2C Success Stories
      </span>
    </div>

  </div>
</section>

      {/* PORTFOLIO STRIP */}
      <section className="w-full bg-gray-50 py-10 overflow-hidden">
        <div className="w-full mt-10 md:mt-24 relative flex items-center group/carousel">
          <motion.div 
            className="flex gap-4 md:gap-6 px-3"
            initial={{ x: "-33.33%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {infiniteProjects.map((project, index) => (
              <motion.a 
                key={`${project.id}-${index}`} 
                href={project.link}
                className="relative block min-w-[280px] md:min-w-[550px] aspect-[4/3] md:aspect-[16/10] bg-white rounded-[24px] md:rounded-[40px] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700 group"
              >
                <img src={project.img} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="text-black" size={32} />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-16">
          <span className="text-2xl">💡</span>
          <h2 className="text-2xl font-black tracking-widest uppercase italic">How It Works</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-8">
          {[
            { num: "01", title: "Raw images", desc: "No expensive equipment needed." },
            { num: "02", title: "Visuals", desc: "Studio-quality product creatives." },
            { num: "03", title: "Design Ads", desc: "Built specifically to convert." },
            { num: "04", title: "Scale", desc: "Testing winning concepts." }
          ].map((step, i) => (
            <div key={i} className="relative">
              <span className="text-5xl md:text-6xl font-black text-gray-100 absolute -top-8 md:-top-10 left-0 -z-10">{step.num}</span>
              <h3 className="font-bold text-base md:text-lg mb-2 leading-tight">{step.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE VS AFTER SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        {/* HYPER REALISTIC BACKGROUND DECORATION (Right Corner) */}
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute right-10 bottom-10 opacity-[0.03] select-none pointer-events-none z-0">
            <h2 className="text-[20rem] font-black leading-none">SB</h2>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-black italic flex items-center justify-center gap-2 px-4 uppercase tracking-tighter">
            Before <span className="text-orange-500 font-light">vs</span> After
          </h2>
          <p className="text-gray-400 mt-3 text-sm font-medium tracking-wide uppercase px-6">Swipe right to see the magic</p>
        </div>

        {/* MOBILE: Tinder-style Swipe Stack */}
        <div className="block md:hidden relative h-[560px] w-full max-w-[340px] mx-auto px-4 z-10">
          <AnimatePresence>
            {stack.map((item, index) => (
              <SwipeCard 
                key={item.id} 
                item={item} 
                index={index} 
                total={stack.length}
                onSwipe={handleSwipe} 
              />
            ))}
          </AnimatePresence>
        </div>

        {/* DESKTOP: Premium Grid Layout */}
        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-12 px-4 relative z-10">
          {BEFORE_AFTER_DATA.map((item) => (
            <div key={item.id} className="bg-white rounded-[3rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-700 group">
              <div className="flex gap-6 mb-8">
                <div className="flex-1 bg-gray-50 rounded-3xl overflow-hidden h-72 relative border border-gray-100 group-hover:-rotate-2 transition-transform duration-500">
                  <span className="absolute top-4 left-4 bg-black/60 text-white text-[10px] px-3 py-1.5 rounded-full font-black uppercase tracking-widest">RAW</span>
                  <div className="w-full h-full flex items-center justify-center text-gray-300 italic font-medium">{item.rawContent}</div>
                </div>
                <div className={`flex-1 ${item.premiumColor} rounded-3xl overflow-hidden h-72 relative shadow-xl group-hover:rotate-2 transition-transform duration-500`}>
                  <span className="absolute top-4 right-4 bg-orange-600 text-white text-[10px] px-3 py-1.5 rounded-full uppercase font-black tracking-widest">PREMIUM</span>
                  <div className="w-full h-full flex items-center justify-center text-white font-black text-2xl uppercase tracking-tighter drop-shadow-md">{item.premiumContent}</div>
                </div>
              </div>
              <h4 className="font-black text-2xl text-gray-900 group-hover:text-orange-600 transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-base mt-3 italic leading-relaxed">"{item.desc}"</p>
            </div>
          ))}
        </div>

        <div className="mt-32">
            <WhatWeDo />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;