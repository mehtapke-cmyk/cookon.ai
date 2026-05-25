
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleReadMore = () => {
    const section = document.getElementById('features');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 flex items-center overflow-hidden bg-[#FAF7F2]">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="space-y-8 max-w-xl"
          >
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-gray-500 uppercase font-medium">
                The Future of Gastronomy
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-gray-900 leading-tight">
                Cook on AI
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Innovative spectacular culinary solutions powered by artificial intelligence. Discover a new era of personalized recipes, smart meal planning, and extraordinary dining experiences.
            </p>
            
            <button 
              onClick={handleReadMore} 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-colors duration-300 group"
            >
              <span>DISCOVER MORE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* RIGHT SIDE - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5 group">
              <img 
                src="https://horizons-cdn.hostinger.com/cea99a70-a833-4205-8479-be281a84663b/remplace_le_texte_que_tu_a_ecrite_par_cook_on_ai_et_dans_la_bulle_tu_ecris_un_slogan_du_type_innovative_spectacular_cullinary_solutions_image_1-YtFF9.png" 
                alt="Cook on AI App Interface Mockup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Slogan Bubble Overlay */}
              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 p-6 md:p-8 rounded-2xl border-[2px] border-[#FFD700] bg-black/45 backdrop-blur-sm flex items-center justify-center text-center shadow-[0_0_20px_rgba(255,215,0,0.15)]">
                <p className="premium-slogan text-3xl md:text-4xl leading-snug">
                  Innovative Spectacular Culinary Solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
