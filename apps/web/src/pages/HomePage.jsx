
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ChooseYourPath from '@/components/ChooseYourPath';
import WhoAreWe from '@/components/WhoAreWe';
import PhilosophyCarousel from '@/components/PhilosophyCarousel';
import BetaWaitlist from '@/components/BetaWaitlist';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Cookon.ai - Spectacular Culinary Intelligence</title>
        <meta name="description" content="Transform your restaurant into a spectacular culinary experience with artificial intelligence. Elevating hospitality and gastronomy." />
      </Helmet>
      
      <div className="min-h-screen bg-[hsl(var(--background))] text-foreground font-sans selection:bg-accent-gold/30 selection:text-foreground">
        <Header />
        
        <main>
          <Hero />
          
          <ChooseYourPath />
          
          {/* Subtle separator */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
          
          <WhoAreWe />
          <PhilosophyCarousel />
          
          {/* Subtle separator */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />
          
          <BetaWaitlist />
          
          {/* Subtle separator */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
          
          <Features />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
