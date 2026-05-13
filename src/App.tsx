import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

// Main Components
import { HeroSection } from './components/HeroSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

// Legal & Secondary Pages
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Disclaimer } from './components/Disclaimer';
import LandingPage from './components/LandingPage';
import PricingSection from './components/PricingSection';

// --- HELPER: SCROLL TO TOP & HASH HANDLING ---
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there's a hash, wait a split second for the component to mount, then scroll
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const Navigation: React.FC<{ isMenuOpen: boolean; setIsMenuOpen: (val: boolean) => void }> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="pointer-events-auto shrink-0">
            <Link to="/" className="block">
              <img src="assets/SANDBYTE-LOGO.png" alt="Logo" className="h-8 md:h-12 w-auto object-contain hover:scale-105 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="hidden md:flex gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-black/5 shadow-sm pointer-events-auto">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="px-6 py-2.5 rounded-full text-sm font-bold text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          <div className="flex items-center gap-2 pointer-events-auto">
            <a href="tel:+917031139797" className="flex items-center justify-center w-11 h-11 bg-white md:bg-[#1A1A1A] text-zinc-900 md:text-white rounded-2xl md:rounded-full md:px-6 md:w-auto shadow-sm md:shadow-lg border border-black/5 md:border-none hover:scale-105 active:scale-95 transition-all">
              <Phone size={18} className="md:mr-2" />
              <span className="hidden md:block text-sm font-bold">Book a Meeting</span>
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm text-zinc-900">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-[#F4F4F4] pt-28 px-6 md:hidden flex flex-col justify-between pb-12">
            <nav className="flex flex-col">
              {navItems.map((item, idx) => (
                <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-zinc-900 py-4 border-b border-black/5 flex justify-between items-end">
                  {item.name}
                  <span className="text-xs font-black text-zinc-300 mb-2">0{idx + 1}</span>
                </Link>
              ))}
            </nav>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">Email Us</p>
                <a href="mailto:hello@sandbyte.site" className="text-xl font-bold block underline underline-offset-4 decoration-zinc-300">hello@sandbyte.site</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HomePage = () => (
  <>
    <div id="work"><HeroSection /></div>
    <LandingPage />
    <div id="services"><Features /></div>
    <div id="testimonials"><Testimonials /></div>
    <TeamSection />
    <div id="pricing"><PricingSection /></div>
  </>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Router>
      <ScrollHandler /> {/* Replaced ScrollToTop with smarter ScrollHandler */}
      <div className="min-h-screen bg-[#F4F4F4] text-[#1A1A1A] selection:bg-zinc-900 selection:text-white overflow-x-hidden font-sans">
        
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 origin-left z-[60]" style={{ scaleX }} />

        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className={`relative transition-all duration-700 ${isMenuOpen ? 'blur-2xl scale-95 opacity-50' : 'blur-0 scale-100 opacity-100'}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
          <Footer />
        </main>

        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-5%] left-[-10%] w-[80%] h-[40%] bg-blue-100/40 blur-[80px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[80%] h-[40%] bg-zinc-200/60 blur-[80px] rounded-full" />
        </div>
      </div>
    </Router>
  );
};

export default App;