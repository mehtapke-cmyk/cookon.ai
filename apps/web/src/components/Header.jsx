import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    lang,
    toggleLang
  } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    fr: 'QUI SOMMES-NOUS',
    en: 'WHO ARE WE',
    id: 'about'
  }, {
    fr: 'PHILOSOPHIE',
    en: 'PHILOSOPHY',
    id: 'philosophy'
  }, {
    fr: 'SERVICES',
    en: 'SERVICES',
    id: 'features'
  }, {
    fr: 'CONTACT',
    en: 'CONTACT',
    id: 'contact'
  }];
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.8,
      ease: "easeOut"
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <motion.a href="#" onClick={e => scrollToSection(e, 'home')} whileHover={{
            scale: 1.05
          }} className="text-3xl font-display font-bold tracking-wider text-accent-gold text-glow-gold cursor-pointer">
              Cookonai
            </motion.a>

            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => <motion.a key={item.id} href={`#${item.id}`} onClick={e => scrollToSection(e, item.id)} initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="text-sm font-sans tracking-[0.15em] text-foreground-muted transition-all duration-300 hover:text-accent-cyan relative group cursor-pointer">
                  {item[lang]}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[hsl(var(--accent-cyan))] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_hsl(var(--accent-cyan))]" />
                </motion.a>)}

              {/* Language Toggle */}
              <button onClick={toggleLang} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent-gold transition-all duration-300 text-foreground-muted hover:text-accent-gold group" aria-label="Toggle Language">
                <Globe className="w-4 h-4 group-hover:animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  {lang === 'en' ? 'FR' : 'EN'}
                </span>
              </button>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 z-10 text-accent-gold" aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 pt-32 px-6">
            <nav className="flex flex-col items-center justify-start h-full space-y-10">
              {navItems.map(item => <motion.a key={item.id} href={`#${item.id}`} onClick={e => scrollToSection(e, item.id)} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-2xl font-display tracking-widest text-foreground hover:text-accent-cyan transition-colors">
                  {item[lang]}
                </motion.a>)}
              <button onClick={toggleLang} className="flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-accent-gold text-accent-gold">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-bold tracking-widest uppercase">
                  {lang === 'en' ? 'Passer en Français' : 'Switch to English'}
                </span>
              </button>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Header;