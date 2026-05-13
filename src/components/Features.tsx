import { motion } from 'framer-motion';
import { ShieldCheck, Star, Zap, UserCheck, Palette } from 'lucide-react';

const features = [
  { title: "Quality obsessed", desc: "We operate with a single standard. If it's not world-class, it doesn't ship.", icon: ShieldCheck },
  { title: "Talent only", desc: "You work directly with talent. No juniors. No outsourcing.", icon: Star },
  { title: "1:1 implementation", desc: "Our development team delivers true 1:1, pixel-perfect builds.", icon: Zap },
  { title: "Dedicated PM", desc: "A single point of contact, fully invested in the project's success.", icon: UserCheck },
  { title: "Built to Scale Your Brand", desc: "Performance creatives tested across Meta and Instagram to maximize ROAS at every stage.", icon: Palette },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-20">Why Choose SandByte?</h2>
      
      {/* 
          UPDATED: 
          - Changed grid-cols-1 to grid-cols-2 for mobile grid.
          - Kept md:grid-cols-3 for desktop.
          - Adjusted gap-x-4 for mobile to fit two columns.
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-4 md:gap-x-12 justify-center">
        {features.map((f, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center space-y-3 md:space-y-4"
          >
            <div className="p-3 md:p-4 bg-white rounded-2xl shadow-sm mb-1 md:mb-2 border border-zinc-50">
              <f.icon size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm md:text-xl font-bold px-2">{f.title}</h3>
            <p className="text-zinc-500 text-[10px] md:text-sm lg:text-base leading-relaxed max-w-[160px] md:max-w-xs">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};