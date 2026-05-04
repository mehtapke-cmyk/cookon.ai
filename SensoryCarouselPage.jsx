
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SensoryCarousel from '@/components/SensoryCarousel';

const SensoryCarouselPage = () => {
  return (
    <>
      <Helmet>
        <title>Immersive Experience | Cookon.ai</title>
        <meta name="description" content="Discover the sensory universe of Cookon.ai. An immersive culinary experience awakening sight, smell, taste, touch, and sound." />
      </Helmet>
      
      <div className="relative min-h-screen bg-black">
        {/* Minimal Header Overlay */}
        <header className="absolute top-0 inset-x-0 z-50 p-6 md:p-8 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wider uppercase">Back to Home</span>
          </Link>
          
          <div className="text-2xl font-display font-bold text-white tracking-tight">
            Cookon<span className="text-primary">.ai</span>
          </div>
        </header>

        {/* Main Carousel Content */}
        <main>
          <SensoryCarousel />
        </main>
      </div>
    </>
  );
};

export default SensoryCarouselPage;
