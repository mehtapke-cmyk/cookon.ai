import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = [
  { fr: 'Solutions', en: 'Solutions', id: 'solutions' },
  { fr: 'Méthode', en: 'Method', id: 'method' },
  { fr: 'Programme pilote', en: 'Pilot program', id: 'waitlist' },
  { fr: 'Contact', en: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 84, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const headerClass = isScrolled
    ? 'bg-[hsl(var(--background))]/95 shadow-[0_18px_55px_rgb(15_23_32_/_0.12)] border-b border-black/10'
    : 'bg-gradient-to-b from-black/70 to-transparent border-b border-white/10';

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${headerClass}`}
      >
        <div className="section-shell">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#home"
              onClick={(event) => scrollToSection(event, 'home')}
              className="inline-flex items-center"
              aria-label="Cookon.ai accueil"
            >
              <Logo variant={isScrolled ? 'light' : 'dark'} />
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className={`text-sm font-bold uppercase tracking-[0.14em] transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-slate-950'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item[lang]}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                onClick={toggleLang}
                className={`inline-flex h-11 items-center gap-2 rounded-md border px-4 text-xs font-black uppercase tracking-[0.14em] transition-colors ${
                  isScrolled
                    ? 'border-black/10 text-slate-700 hover:border-slate-950 hover:text-slate-950'
                    : 'border-white/20 text-white/80 hover:border-white hover:text-white'
                }`}
                aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
              >
                <Globe className="h-4 w-4" />
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, 'contact')}
                className="inline-flex h-11 items-center rounded-md bg-accent-gold px-5 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                {lang === 'en' ? 'Book a demo' : 'Démo'}
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-md border lg:hidden ${
                isScrolled ? 'border-black/10 text-slate-950' : 'border-white/20 text-white'
              }`}
              aria-label="Menu mobile"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950 px-6 pt-28 text-white lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => scrollToSection(event, item.id)}
                  className="border-b border-white/10 pb-5 font-display text-3xl"
                >
                  {item[lang]}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 text-sm font-black uppercase tracking-[0.14em]"
              >
                <Globe className="h-4 w-4" />
                {lang === 'en' ? 'Passer en français' : 'Switch to English'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
