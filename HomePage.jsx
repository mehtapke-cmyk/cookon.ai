
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
        <html lang="fr" />
        <title>Cookon.ai - Intelligence culinaire pour restaurants, chefs et marques food-tech</title>
        <meta
          name="description"
          content="Cookon.ai aide restaurants, hôtels, chefs indépendants et startups food-tech à créer des menus, expériences et contenus culinaires augmentés par l'IA."
        />
        <link rel="canonical" href="https://cookon.ai/" />
      </Helmet>
      
      <div className="min-h-screen bg-[hsl(var(--background))] font-sans selection:bg-[hsl(var(--accent-gold))] selection:text-slate-950">
        <Header />
        
        <main>
          <Hero />
          <ChooseYourPath />
          <WhoAreWe />
          <PhilosophyCarousel />
          <BetaWaitlist />
          <Features />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
