
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const slides = [
  {
    id: 'sight',
    title: { fr: 'La Vision', en: 'The Sight' },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    text: {
      fr: "L'intelligence artificielle révèle de nouvelles perspectives visuelles. Nos algorithmes analysent et composent des dressages d'une esthétique absolue, transformant chaque assiette en œuvre d'art.",
      en: "Artificial intelligence reveals new visual perspectives. Our algorithms analyze and compose plating of absolute aesthetics, transforming each plate into a work of art."
    }
  },
  {
    id: 'taste',
    title: { fr: 'Le Goût', en: 'The Taste' },
    image: 'https://images.unsplash.com/photo-1681270496598-13c5365730c8',
    text: {
      fr: "La data au service de la saveur. Nous cartographions les profils aromatiques pour créer des accords inédits, repoussant les frontières de la haute gastronomie.",
      en: "Data at the service of flavor. We map aromatic profiles to create unprecedented pairings, pushing the boundaries of haute gastronomy."
    }
  },
  {
    id: 'touch',
    title: { fr: 'La Texture', en: 'The Touch' },
    image: 'https://images.unsplash.com/photo-1675481681706-b734d934f84e',
    text: {
      fr: "L'alliance de la main du Chef et de la précision algorithmique. Des contrastes de textures calculés au millimètre pour une sensation en bouche inoubliable.",
      en: "The alliance of the Chef's hand and algorithmic precision. Texture contrasts calculated to the millimeter for an unforgettable mouthfeel."
    }
  },
  {
    id: 'smell',
    title: { fr: "L'Arôme", en: 'The Aroma' },
    image: 'https://images.unsplash.com/photo-1702818818041-bcb320ec6ba3',
    text: {
      fr: "La science de l'olfaction. Des parfums diffusés et contrôlés pour anticiper la dégustation et éveiller la mémoire émotionnelle de vos convives.",
      en: "The science of olfaction. Diffused and controlled fragrances to anticipate the tasting and awaken the emotional memory of your guests."
    }
  },
  {
    id: 'sound',
    title: { fr: "L'Ambiance", en: 'The Sound' },
    image: 'https://images.unsplash.com/photo-1659281986931-5289205e196a',
    text: {
      fr: "Une scénographie sonore générative s'adaptant au rythme du repas. La lumière et le son se synchronisent avec l'expérience culinaire.",
      en: "A generative sound scenography adapting to the rhythm of the meal. Light and sound synchronize with the culinary experience."
    }
  },
  {
    id: 'spectacle',
    title: { fr: 'Le Spectacle', en: 'The Spectacle' },
    image: 'https://images.unsplash.com/photo-1632905681354-73ab72908407',
    text: {
      fr: "L'apothéose sensorielle. Le repas transcende sa fonction première pour devenir un spectacle total, immersif et mémorable.",
      en: "The sensory apotheosis. The meal transcends its primary function to become a total, immersive, and memorable spectacle."
    }
  }
];

const PhilosophyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { lang } = useLanguage();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section 
      id="philosophy"
      className="relative w-full h-[90vh] min-h-[700px] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title[lang]}
              className="w-full h-full object-cover"
            />
            {/* Deep Mysterious Purple/Black Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05000A] via-[#05000A]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent mix-blend-multiply" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="max-w-2xl mt-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent-gold font-serif italic text-xl">
                  0{currentIndex + 1}
                </span>
                <span className="w-16 h-[1px] bg-accent-gold/50"></span>
                <span className="text-accent-cyan tracking-[0.2em] text-xs uppercase font-bold">Notre Philosophie</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display text-foreground mb-8 drop-shadow-2xl">
                {slides[currentIndex].title[lang]}
              </h2>
              <p className="text-lg md:text-xl text-foreground-muted font-light leading-relaxed border-l-2 border-accent-purple pl-6">
                {slides[currentIndex].text[lang]}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Luxury Navigation Controls */}
      <div className="absolute bottom-0 inset-x-0 p-8 md:p-16 flex items-center justify-between z-20 max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/10 glass-dark flex items-center justify-center text-foreground hover:border-accent-cyan transition-all duration-500 hover:scale-105 group glow-cyan"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 group-hover:text-accent-cyan transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/10 glass-dark flex items-center justify-center text-foreground hover:border-accent-cyan transition-all duration-500 hover:scale-105 group glow-cyan"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 group-hover:text-accent-cyan transition-colors" />
          </button>
        </div>

        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-700 h-[2px] ${
                idx === currentIndex 
                  ? 'w-16 bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' 
                  : 'w-6 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyCarousel;
