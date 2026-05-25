import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section
      id="features"
      className="relative min-h-screen flex items-center py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://horizons-cdn.hostinger.com/cea99a70-a833-4205-8479-be281a84663b/f587d9d0a2eae1f243abb2ed66a159d5.jpg')"
      }}
    >
      {/* Dark overlay to ensure text contrast against the busy background */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm tracking-wider text-gray-300 uppercase">Our Foundation</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
              Quality Ingredients,<br />Exceptional Spaces
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Just like a culinary masterpiece requires the finest components, our approach to design relies on carefully selected elements that blend perfectly to create something truly extraordinary. Every detail is intentional.
          </p>
          
          <div className="pt-4">
            <button className="px-8 py-4 bg-white text-black text-sm tracking-widest font-medium hover:bg-gray-200 transition-colors duration-300">
              DISCOVER OUR PROCESS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;