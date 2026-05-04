import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  const content = {
    fr: {
      eyebrow: 'Plateforme IA pour la cuisine moderne',
      title: 'Cookon.ai',
      subtitle:
        "L'intelligence culinaire qui aide restaurants, hôtels, chefs et marques food-tech à imaginer, tester et raconter des expériences gastronomiques mémorables.",
      primary: 'Demander une démonstration',
      secondary: 'Explorer les solutions',
      proof: ['Menus augmentés', 'R&D culinaire', 'Expériences immersives'],
    },
    en: {
      eyebrow: 'AI platform for modern cuisine',
      title: 'Cookon.ai',
      subtitle:
        'Culinary intelligence for restaurants, hotels, chefs and food-tech brands that want to design, test and tell memorable dining experiences.',
      primary: 'Book a demo',
      secondary: 'Explore solutions',
      proof: ['Augmented menus', 'Culinary R&D', 'Immersive experiences'],
    },
  };

  const t = content[lang];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 84, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92dvh] overflow-hidden bg-slate-950 text-white">
      <img
        src="/assets/cookonai-plate.jpeg"
        alt="Assiette noire et ingrédients sur une table de cuisine"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,32,.92),rgba(15,23,32,.72)_44%,rgba(15,23,32,.16))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(41,183,166,.32),transparent_30%),radial-gradient(circle_at_42%_78%,rgba(242,169,59,.25),transparent_24%)]" />

      <div className="section-shell relative z-10 flex min-h-[92dvh] items-center pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent-gold" />
            <span className="eyebrow text-white/80">{t.eyebrow}</span>
          </div>

          <h1 className="text-6xl font-black leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
            {t.title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-white/80 sm:text-2xl sm:leading-10">
            {t.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-accent-gold px-7 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              {t.primary}
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/20 px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-slate-950"
            >
              {t.secondary}
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {t.proof.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
