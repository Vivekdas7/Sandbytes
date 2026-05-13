import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Manas", role: "AI Designer", img: "assets/vishesh.svg" },
  { name: "Vivek", role: "Project Manager", img: "assets/vipul.svg" },
  { name: "Ankan", role: "Media Buyer", img: "assets/peter.svg" },
  { name: "Abhik", role: "Full-Stack Developer", img: "assets/pawel.svg" },
  { name: "Rohan", role: "Head of Sales", img: "assets/marcel.svg" },
  { name: "Aditya", role: "Motion Designer", img: "assets/karan.svg" },
  // LOGO WILL BE INSERTED HERE IN THE GRID
  { name: "Siddharth", role: "Frontend Developer", img: "assets/kacper.svg" },
  { name: "Kabir", role: "Brand Designer", img: "assets/jeremiah.svg" },
  { name: "Aarav", role: "Illustration Designer", img: "assets/eaxi.svg" },
  { name: "Vihaan", role: "Illustration Designer", img: "assets/deniz.svg" },
  { name: "Dev", role: "Brand Designer", img: "assets/choirul.svg" },
];

const tools = ["Figma", "Framer", "Next.js", "Webflow", "Rive", "Illustrator", "React", "Tailwind"];

export const TeamSection: React.FC = () => {
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4] px-4 md:px-6 relative overflow-hidden">
      
      {/* 1. Tools Marquee */}
      <div className="max-w-4xl mx-auto mb-24 md:mb-40 text-center">
        <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-10 tracking-tight text-zinc-900 uppercase">
          Tools we've mastered
        </h2>
        <div className="relative bg-white/90 backdrop-blur-xl border border-black/5 rounded-[24px] md:rounded-[32px] py-6 md:py-10 overflow-hidden shadow-sm">
          <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white/90 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white/90 to-transparent z-10" />
          <motion.div 
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedTools.map((tool, idx) => (
              <span key={idx} className="inline-block px-8 md:px-12 text-xl md:text-2xl font-bold text-zinc-900 grayscale opacity-30">
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. Team Grid */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 tracking-tight text-zinc-900">
          Meet the team
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-24 gap-x-4 md:gap-x-12 items-center">
          {teamMembers.map((member, i) => (
            <React.Fragment key={member.name}>
              {/* INSERT LOGO CARD AT INDEX 6 (Middle of the grid on desktop) */}
              {i === 6 && (
                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="bg-white p-6 rounded-[30px] shadow-xl border border-black/5 mb-4">
                    <img 
                      src="assets/SANDBYTE-LOGO.png" 
                      alt="SandByte" 
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    +5 More
                  </div>
                </div>
              )}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-full aspect-square max-w-[140px] md:max-w-[180px] bg-white rounded-[30px] md:rounded-[45px] mb-4 md:mb-6 overflow-hidden border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=f4f4f5&color=a1a1aa&size=128`;
                    }}
                  />
                </div>
                <h3 className="font-bold text-base md:text-xl text-zinc-900">{member.name}</h3>
                <p className="text-zinc-500 text-[11px] md:text-sm font-medium uppercase tracking-wide">{member.role}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Mobile-only "+5 More" badge remains at bottom */}
        <div className="flex md:hidden justify-center mt-12">
            <div className="bg-white px-6 py-2 rounded-full text-xs font-bold border border-black/5 shadow-sm">
                +5 More Members
            </div>
        </div>
      </div>
    </section>
  );
};