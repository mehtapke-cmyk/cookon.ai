
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ChooseYourPath = () => {
  const { lang } = useLanguage();

  const content = {
    fr: {
      homeTitle: "Je suis particulier — accédez à Cookonai",
      homeDesc: "Découvrez votre assistant culinaire personnel sur cookonai.com",
      restTitle: "Je veux Cookonai dans mon établissement",
      restDesc: "Pour les restaurants professionnels et les hôtels",
    },
    en: {
      homeTitle: "I'm an individual — access Cookonai",
      homeDesc: "Discover your personal culinary assistant on cookonai.com",
      restTitle: "I want Cookonai in my restaurant",
      restDesc: "For professional restaurants and hotels",
    }
  };

  const t = content[lang];

  return (
    <section className="relative py-24 bg-[hsl(var(--background))] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Home Option */}
          <motion.a
            href="https://cookonai.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group text-left h-full block"
          >
            <div className="glass-dark h-full p-10 rounded-2xl border border-white/10 hover:border-[hsl(var(--mysterious-cyan))]/50 transition-all duration-500 glow-mysterious-cyan flex flex-col items-start relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[hsl(var(--mysterious-cyan))]/10 rounded-full blur-3xl group-hover:bg-[hsl(var(--mysterious-cyan))]/20 transition-colors duration-500" />
              
              <div className="w-16 h-16 rounded-xl bg-[hsl(var(--mysterious-bg))] border border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Home className="w-8 h-8 text-[hsl(var(--mysterious-cyan))]" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display text-white mb-4 leading-tight">
                {t.homeTitle}
              </h3>
              
              <p className="text-white/60 font-light text-lg mb-12 flex-grow">
                {t.homeDesc}
              </p>
              
              <div className="mt-auto flex items-center gap-3 text-[hsl(var(--mysterious-cyan))] font-medium tracking-wide uppercase text-sm">
                <span className="group-hover:tracking-widest transition-all duration-500">Explorer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>
          </motion.a>

          {/* Restaurant Option */}
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group text-left h-full"
          >
            <div className="glass-dark h-full p-10 rounded-2xl border border-white/10 hover:border-[hsl(var(--mysterious-gold))]/50 transition-all duration-500 glow-mysterious-gold flex flex-col items-start relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[hsl(var(--mysterious-gold))]/10 rounded-full blur-3xl group-hover:bg-[hsl(var(--mysterious-gold))]/20 transition-colors duration-500" />
              
              <div className="w-16 h-16 rounded-xl bg-[hsl(var(--mysterious-bg))] border border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Building2 className="w-8 h-8 text-[hsl(var(--mysterious-gold))]" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display text-white mb-4 leading-tight">
                {t.restTitle}
              </h3>
              
              <p className="text-white/60 font-light text-lg mb-12 flex-grow">
                {t.restDesc}
              </p>
              
              <div className="mt-auto flex items-center gap-3 text-[hsl(var(--mysterious-gold))] font-medium tracking-wide uppercase text-sm">
                <span className="group-hover:tracking-widest transition-all duration-500">Explorer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default ChooseYourPath;
