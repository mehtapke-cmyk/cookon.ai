
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  const handleReadMore = () => {
    const section = document.getElementById('about');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const text = {
    fr: "Transformez votre restaurant en expérience culinaire spectaculaire avec l'intelligence artificielle.",
    en: "Transform your restaurant into a spectacular culinary experience with artificial intelligence."
  };

  const btnText = {
    fr: "DÉCOUVRIR L'EXPÉRIENCE",
    en: "DISCOVER THE EXPERIENCE"
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[hsl(var(--background))] pt-20">
      
      {/* Light Background & Faint Subtle Tech Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }} 
        />
        
        {/* Faint ambient radial gradients for tech feel */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[hsl(var(--accent-cyan))]/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[hsl(var(--accent-purple))]/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(var(--accent-gold))]/5 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
          className="max-w-4xl mx-auto space-y-12 flex flex-col items-center"
        >
          {/* Modern Minimalist Geometric Logo */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-[1.5px] border-accent-gold rotate-45 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-accent-gold" />
              </div>
              <span className="text-xl md:text-2xl font-sans tracking-[0.25em] text-foreground font-medium uppercase">
                Cookonai
              </span>
            </div>
          </div>
          
          {/* Contemporary Typography for Hero Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-[hsl(var(--foreground))] leading-[1.15] text-balance">
            {text[lang]}
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button 
              onClick={handleReadMore} 
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] border border-transparent text-sm tracking-[0.15em] uppercase font-semibold overflow-hidden rounded-sm transition-all duration-500 hover:bg-accent-gold hover:text-white hover:shadow-xl hover:shadow-[hsl(var(--accent-gold))]/20"
            >
              <span className="relative z-10">{btnText[lang]}</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator - Updated for Light Theme */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-foreground-muted uppercase font-semibold">SCROLL</span>
        <div className="w-[1px] h-12 bg-black/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
