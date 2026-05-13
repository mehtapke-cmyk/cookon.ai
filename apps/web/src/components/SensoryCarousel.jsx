
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const slides = [
  {
    id: 'intro',
    title: { fr: 'Introduction', en: 'Introduction' },
    image: 'https://images.unsplash.com/photo-1518645666305-5f5e7469e52a',
    text: {
      fr: "Cookonai vous invite à une expérience culinaire immersive, où chaque plat raconte une histoire et éveille vos sens. Découvrez une cuisine pensée pour séduire les palais les plus exigeants. Bienvenue dans l'univers Cookonai.",
      en: "Cookonai invites you to an immersive culinary experience, where every dish tells a story and awakens your senses. Discover cuisine designed to seduce the most discerning palates. Welcome to the Cookonai universe."
    }
  },
  {
    id: 'sight',
    title: { fr: 'La Vue', en: 'The Sight' },
    image: 'https://images.unsplash.com/photo-1701540747569-46bf364bbbb0',
    text: {
      fr: "Des assiettes soigneusement dressées, aux couleurs chaudes et élégantes. Chaque présentation est une œuvre d'art pensée pour séduire le regard. La beauté visuelle est le premier acte de notre histoire culinaire.",
      en: "Carefully plated dishes with warm and elegant colors. Each presentation is a work of art designed to captivate the eye. Visual beauty is the first act of our culinary story."
    }
  },
  {
    id: 'smell',
    title: { fr: "L'Odorat", en: 'The Smell' },
    image: 'https://images.unsplash.com/photo-1553940237-90ffaa51bb74',
    text: {
      fr: "Des arômes envoûtants, mêlant mystère et chaleur. Chaque senteur promet une découverte sensorielle unique. Les parfums de notre cuisine vous transportent dans un voyage olfactif inoubliable.",
      en: "Captivating aromas, blending mystery and warmth. Each scent promises a unique sensory discovery. The fragrances of our cuisine transport you on an unforgettable olfactory journey."
    }
  },
  {
    id: 'taste',
    title: { fr: 'Le Goût', en: 'The Taste' },
    image: 'https://images.unsplash.com/photo-1702818818041-bcb320ec6ba3',
    text: {
      fr: "Une cuisine raffinée, équilibrée, qui marie tradition et innovation. Chaque bouchée révèle des saveurs harmonieuses et surprenantes. Pour les palais avertis qui cherchent l'excellence.",
      en: "Refined, balanced cuisine that marries tradition and innovation. Each bite reveals harmonious and surprising flavors. For discerning palates seeking excellence."
    }
  },
  {
    id: 'touch',
    title: { fr: 'Le Toucher', en: 'The Touch' },
    image: 'https://images.unsplash.com/photo-1629805483088-875dc896c9ee',
    text: {
      fr: "Des textures délicates et surprenantes, offrant une sensation de luxe. Chaque élément est pensé pour caresser le palais et les doigts. Le toucher devient une dimension essentielle de notre expérience.",
      en: "Delicate and surprising textures, offering a sensation of luxury. Each element is designed to caress the palate and fingers. Touch becomes an essential dimension of our experience."
    }
  },
  {
    id: 'sound',
    title: { fr: "L'Ouïe", en: 'The Sound' },
    image: 'https://images.unsplash.com/photo-1541282549037-db1a85be13da',
    text: {
      fr: "Un univers sonore discret et raffiné, qui accompagne chaque dégustation. L'ambiance chaleureuse enveloppe les convives d'une sérénité bienveillante. Le silence éloquent de la satisfaction complète notre histoire.",
      en: "A discreet and refined sonic universe that accompanies each tasting. The warm ambiance envelops guests in benevolent serenity. The eloquent silence of satisfaction completes our story."
    }
  }
];

const SensoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState('en');
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <div 
      className="relative w-full h-full min-h-[100dvh] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title[lang]}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 drop-shadow-lg">
                {slides[currentIndex].title[lang]}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
                {slides[currentIndex].text[lang]}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300"
          aria-label="Toggle Language"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wider uppercase">
            {lang === 'en' ? 'FR' : 'EN'}
          </span>
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentIndex 
                  ? 'w-8 h-2 bg-primary' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SensoryCarousel;
