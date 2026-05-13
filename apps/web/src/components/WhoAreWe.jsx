
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const WhoAreWe = () => {
  const { lang } = useLanguage();

  const content = {
    fr: {
      title: "Qui Sommes-Nous ?",
      text: "Cookonai révolutionne l'industrie hôtelière et gastronomique. Nous combinons l'intelligence artificielle avec l'art culinaire pour créer des expériences inoubliables. Destiné aux hôtels, chaînes hôtelières et restaurants, notre système opérationnel améliore la qualité culinaire, optimise les services et crée le spectacle qui captive vos clients."
    },
    en: {
      title: "Who Are We?",
      text: "Cookonai revolutionizes the hospitality and gastronomic industry. We combine artificial intelligence with culinary art to create unforgettable experiences. Designed for hotels, hotel chains, and restaurants, our operational system improves culinary quality, optimizes services, and creates the spectacle that captivates your guests."
    }
  };

  // Splitting text to highlight certain words
  const renderHighlightedText = (text) => {
    const highlights = [
      "intelligence artificielle", "art culinaire", "spectacle", 
      "artificial intelligence", "culinary art", "spectacle"
    ];
    
    let result = [text];
    
    highlights.forEach(phrase => {
      result = result.flatMap(part => {
        if (typeof part !== 'string') return [part];
        const parts = part.split(new RegExp(`(${phrase})`, 'gi'));
        return parts.map((p, i) => 
          p.toLowerCase() === phrase.toLowerCase() 
            ? <span key={`${phrase}-${i}`} className="text-accent-gold font-serif italic">{p}</span> 
            : p
        );
      });
    });
    
    return result;
  };

  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden bg-[hsl(var(--background))]">
      {/* Subtle Luxury Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1683719228269-7398188955af" 
          alt="Luxury Hotel Interior" 
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background))]/90 to-[hsl(var(--background))]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-[hsl(var(--background))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Decorative left column */}
          <div className="hidden lg:flex col-span-2 flex-col items-center h-full pt-10">
            <div className="w-[1px] h-32 bg-accent-gold/30" />
            <div className="w-3 h-3 rotate-45 border border-accent-gold my-4 glow-gold" />
            <div className="w-[1px] flex-grow bg-gradient-to-b from-accent-gold/30 to-transparent" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 space-y-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground tracking-tight">
              {content[lang].title}
            </h2>
            
            <p className="text-xl md:text-2xl leading-[1.8] text-foreground-muted font-light text-balance">
              {renderHighlightedText(content[lang].text)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
