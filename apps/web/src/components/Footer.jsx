
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();

  const links = {
    fr: [
      { label: 'Mentions Légales', href: '#' },
      { label: 'Politique de Confidentialité', href: '#' },
      { label: 'Presse', href: '#' }
    ],
    en: [
      { label: 'Legal Notice', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Press', href: '#' }
    ]
  };

  return (
    <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-3xl font-display font-bold tracking-widest text-accent-gold text-glow-gold">
              Cookonai
            </span>
            <p className="text-foreground-muted/60 mt-2 text-sm tracking-widest uppercase">
              {lang === 'en' ? 'Gastronomy Reimagined' : 'La Gastronomie Réinventée'}
            </p>
          </motion.div>

          <div className="flex gap-8 items-center">
            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-foreground-muted hover:text-accent-cyan text-sm tracking-[0.15em] uppercase transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <p className="text-foreground-muted/50 text-sm tracking-wider">
            © {new Date().getFullYear()} Cookonai. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>

          <div className="flex items-center gap-3 mt-4 md:mt-0 flex-wrap justify-center">
            <span className="text-foreground-muted/60 text-sm tracking-wider">Propulsé par</span>
            <img src="/mk-logo.png" alt="MK" className="h-10 w-auto object-contain" style={{filter:'drop-shadow(0 0 12px rgba(255,255,255,0.15))'}} />
            <span className="text-foreground-muted/60 text-sm tracking-wider italic font-display" style={{backgroundImage:'linear-gradient(90deg,#8b5cf6 0%,#06b6d4 50%,#f97316 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Création Originale by Mehtap Keles</span>
            <span className="text-foreground-muted/60 text-sm tracking-wider">à Argelès-sur-Mer</span>
            <img src="/drapeau-fr-brush.png" alt="France" className="h-6 w-auto object-contain" />
          </div>

          <div className="flex gap-6">
            {links[lang].map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-foreground-muted/50 hover:text-accent-gold text-sm tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
