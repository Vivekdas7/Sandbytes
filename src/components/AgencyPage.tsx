import React, { useState, useEffect } from 'react';
import { 
  Globe, Zap, Smartphone, ArrowUpRight, TrendingUp, 
  CheckCircle2, Activity, Cpu, Settings, ChevronRight, 
  Terminal, BarChart3, ShieldCheck, Layers, MousePointer2,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Pricing from './PricingSection';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const AgencyPage = () => {
  const [revenue, setRevenue] = useState(0);

  // Revenue counter animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => (prev >= 312 ? 305 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Web Architecture",
      icon: <Globe className="text-blue-500" />,
      desc: "Next-gen stacks (Next.js 15, Remix) focused on Vercel-speed performance and SEO dominance.",
      features: ["Serverless Tech", "Edge Computing", "Custom CMS"]
    },
    {
      title: "Mobile Ecosystems",
      icon: <Smartphone className="text-purple-500" />,
      desc: "Native-feel experiences using Flutter & React Native with seamless offline capabilities.",
      features: ["iOS & Android", "Biometric Auth", "Push Protocols"]
    },
    {
      title: "Code Ownership",
      icon: <Terminal className="text-emerald-500" />,
      desc: "Full source code transfer under clear IP conditions. Your software is your asset, always.",
      features: ["IP Protection", "Clean Git History", "Doc Handover"]
    },
    {
      title: "Growth Engine",
      icon: <TrendingUp className="text-rose-500" />,
      desc: "Data-driven growth hacking using AI-predictive models for higher ROI on every ad spend.",
      features: ["Performance SEO", "Ad Scaling", "Conversion Logic"]
    }
  ];

 const phoneNumber = "917031139797";

  function setShowModal(arg0: boolean) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="bg-[#FDFCFM] font-sans text-slate-900 selection:bg-purple-200 overflow-x-hidden">
      {/* --- GLOBAL OVERLAYS --- */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Animated Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[60%] h-[60%] bg-purple-200/30 blur-[80px] md:blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[60%] h-[60%] bg-blue-200/30 blur-[80px] md:blur-[120px] rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 md:pt-44 pb-16 md:pb-32 max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.25em]">Est. 2024 • Sandbyte Lab</span>
          </div>
          
          <h1 className="text-[2.75rem] sm:text-7xl md:text-[10rem] font-[1000] tracking-tighter mb-8 leading-[0.85] text-slate-900 animate-slide-up">
            Build the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 italic font-serif pr-2">impossible.</span>
          </h1>
          
          <p className="text-slate-500 text-base md:text-2xl font-medium max-w-2xl leading-relaxed mb-10 md:mb-16 animate-fade-in-delay px-2">
            Architecting high-performance digital products for ambitious brands. We deliver code, clarity, and scalability.
          </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto sm:max-w-none animate-fade-in-delay px-4 sm:px-0">
    
    {/* PRIMARY ACTION: Direct Call / Modal Trigger */}
    <button 
      onClick={() => {
        // If mobile, trigger direct dial; otherwise, open form
        if (window.innerWidth < 768) {
          window.location.href = `tel:+${phoneNumber}`;
        } else {
          setShowModal(true);
        }
      }}
      className="w-full sm:w-auto bg-slate-900 text-white px-8 py-5 rounded-[1.5rem] font-[1000] text-lg hover:bg-purple-600 transition-all shadow-2xl hover:shadow-purple-500/25 active:scale-95 flex items-center justify-center gap-3 group"
    >
      <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-white group-hover:text-purple-600 transition-colors">
        <Phone size={20} className="group-hover:rotate-12 transition-transform" />
      </div>
      <span className="whitespace-nowrap">Free Consultation Call</span>
    </button>

    {/* SECONDARY ACTION: WhatsApp with "Online" Indicator */}
    <a 
      href={`https://wa.me/${phoneNumber}?text=Hi%20Sandbyte!%20I'd%20like%20to%20discuss%20a%20new%20project.`}
      target="_blank"
      rel="noreferrer"
      className="w-full sm:w-auto bg-white border-2 border-slate-100 text-slate-900 px-8 py-5 rounded-[1.5rem] font-[1000] text-lg hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 group relative"
    >
      <div className="relative">
        <MessageCircle size={22} className="text-emerald-500 group-hover:scale-110 transition-transform" />
        {/* Live Pulse Dot */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
        </span>
      </div>
      WhatsApp Us
    </a>
  </div>
        </div>

        {/* --- BRAND MARQUEE --- */}
        <div className="mt-24 md:mt-40 border-y border-slate-100 py-12 overflow-hidden relative group">
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#FDFCFM] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#FDFCFM] to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-16 md:gap-32 items-center whitespace-nowrap opacity-20 grayscale transition-opacity group-hover:opacity-40">
            {['TripuraFly', 'Fliket', 'Gym', 'Safari', 'STRIPE', 'NEXT.JS', 'VERCEL', 'GOOGLE'].map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black tracking-[0.2em]">{brand}</span>
            ))}
            {/* Duplicate for seamless loop */}
         {['TripuraFly', 'Fliket', 'Gym', 'Safari', 'STRIPE', 'NEXT.JS', 'VERCEL', 'GOOGLE'].map((brand, i) => (
              <span key={i+100} className="text-2xl md:text-4xl font-black tracking-[0.2em]">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES / BENTO SECTION --- */}
      <section className="py-20 md:py-40 max-w-7xl mx-auto px-5 md:px-6">
        <div className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-purple-600" />
              <span className="text-purple-600 font-black text-xs uppercase tracking-[0.4em]">Service Spectrum</span>
            </div>
            <h2 className="text-5xl md:text-[6rem] font-[1000] tracking-tighter leading-[0.9]">Full-Stack<br/>Excellence.</h2>
          </div>
          <p className="text-slate-500 max-w-sm font-bold text-lg leading-relaxed">From initial logic to global scaling, we handle the entire lifecycle of your digital product.</p>
        </div>

        {/* Desktop Grid / Mobile Horizontal Snap Scroll */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          {services.map((s, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center group bg-white border border-slate-100 p-10 rounded-[3rem] hover:shadow-4xl hover:border-purple-200 transition-all duration-700 relative overflow-hidden flex flex-col">
              <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-purple-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {React.cloneElement(s.icon, { size: 30, className: "transition-colors duration-500" })}
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 font-medium">{s.desc}</p>
              
              <div className="mt-auto space-y-4">
                <div className="h-[1px] w-full bg-slate-50" />
                {s.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <CheckCircle2 size={14} className="text-purple-500 shrink-0" /> {f}
                  </div>
                ))}
              </div>
              
              {/* Subtle hover decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* --- PRICING COMPONENT --- */}
      <Pricing />

      {/* --- ANALYTICS DASHBOARD SECTION --- */}
      <section className="mx-2 md:mx-10 my-8 md:my-16 py-10 md:py-40 bg-[#090A0F] rounded-[2rem] md:rounded-[6rem] relative overflow-hidden border border-white/5">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
  
  <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-10 md:gap-32 relative z-10">
    
    {/* Dashboard Visual - Compact on Mobile */}
    <div className="w-full lg:w-1/2 order-2 lg:order-1 scale-[0.9] md:scale-100 origin-top">
      <div className="bg-[#0F1117] backdrop-blur-3xl rounded-[2rem] md:rounded-[5rem] p-5 md:p-16 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative">
        <div className="flex flex-row justify-between items-start gap-4 mb-6 md:mb-16">
          <div className="space-y-1 md:space-y-3">
            <h4 className="text-white text-xl md:text-5xl font-[1000] tracking-tighter italic">Global Scale</h4>
            <div className="flex items-center gap-2">
              <div className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-slate-500 font-black text-[8px] md:text-xs uppercase tracking-[0.2em]">Live Metrics</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl md:text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">+{revenue}%</p>
            <p className="text-[8px] md:text-[10px] text-indigo-400 font-black uppercase tracking-widest mt-1">Delta</p>
          </div>
        </div>

        {/* Dynamic Bar Chart - Micro height on mobile */}
        <div className="relative h-24 md:h-80 w-full flex items-end justify-between gap-1 md:gap-3 px-1 overflow-hidden">
          {[50, 70, 45, 90, 60, 100, 80, 55, 85, 40, 75, 95, 65, 80].map((h, i) => (
            <div 
              key={i} 
              className="relative w-full bg-gradient-to-t from-purple-600 via-indigo-500 to-blue-400 rounded-full transition-all duration-1000"
              style={{ 
                height: `${h}%`, 
                animation: `infinitewave 4s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.1}s` 
              }}
            />
          ))}
        </div>

        {/* Status Indicators - Compact on Mobile */}
        <div className="mt-6 md:mt-16 grid grid-cols-3 gap-2 md:gap-4">
          {['Security', 'Velocity', 'Stability'].map((item, i) => (
            <div key={i} className="bg-white/5 p-2 md:p-5 rounded-xl md:rounded-3xl border border-white/5 text-center">
              <p className="text-slate-500 text-[7px] md:text-[10px] font-black uppercase mb-1.5 md:mb-3 tracking-tighter md:tracking-widest">{item}</p>
              <div className="h-0.5 md:h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" style={{ width: `${85 + (i * 4)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Text Content - Responsive sizes */}
    <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
      <h2 className="text-4xl md:text-[8rem] font-[1000] text-white leading-[0.9] tracking-tighter mb-6 md:mb-10 px-4 md:px-0">
        Modern <br className="hidden md:block"/><span className="italic font-serif text-slate-500">Engines.</span>
      </h2>
      <div className="space-y-6 md:space-y-10 max-w-md mx-auto lg:mx-0 px-2">
        <div className="flex gap-4 md:gap-10 items-start text-left group">
          <div className="w-10 h-10 md:w-20 md:h-20 bg-purple-500/10 rounded-xl md:rounded-3xl flex items-center justify-center shrink-0 border border-purple-500/20">
            <Cpu size={20} className="text-purple-400 md:hidden" />
            <Cpu size={32} className="text-purple-400 hidden md:block" />
          </div>
          <div>
            <h4 className="text-white font-black text-lg md:text-2xl mb-1 md:mb-3 tracking-tight">Full Code Ownership</h4>
            <p className="text-slate-400 text-xs md:text-lg leading-relaxed font-medium">Own your future with clean, documented IP transfer.</p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-10 items-start text-left group">
          <div className="w-10 h-10 md:w-20 md:h-20 bg-blue-500/10 rounded-xl md:rounded-3xl flex items-center justify-center shrink-0 border border-blue-500/20">
            <ShieldCheck size={20} className="text-blue-400 md:hidden" />
            <ShieldCheck size={32} className="text-blue-400 hidden md:block" />
          </div>
          <div>
            <h4 className="text-white font-black text-lg md:text-2xl mb-1 md:mb-3 tracking-tight">Security-First Dev</h4>
            <p className="text-slate-400 text-xs md:text-lg leading-relaxed font-medium">SOC2-ready protocols integrated as standard.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- TESTIMONIALS --- */}
      <Testimonials />

      {/* --- CALL TO ACTION --- */}
      <CTA />

      {/* --- FOOTER --- */}
      <Footer />

      {/* --- CUSTOM STYLES & ANIMATIONS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&display=swap');

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes infinitewave { 
          0% { transform: scaleY(0.7); opacity: 0.4; filter: brightness(0.8); } 
          100% { transform: scaleY(1.1); opacity: 1; filter: brightness(1.2); } 
        }
        @keyframes float-slow { 
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); } 
          50% { transform: translateY(-40px) scale(1.05) rotate(5deg); } 
        }
        @keyframes slide-up { from { opacity: 0; transform: translateY(80px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .animate-marquee { animation: marquee 50s linear infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 2.5s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 2s 0.8s ease-out both; }

        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 30s; }
          h1 { word-spacing: -10px; }
        }
      `}</style>
    </div>
  );
};

export default AgencyPage;