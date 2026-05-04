import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhoAreWe = () => {
  const { lang } = useLanguage();

  const content = {
    fr: {
      eyebrow: 'Méthode',
      title: "Une IA pensée pour la vraie cuisine, pas pour des idées abstraites.",
      text:
        "Cookon.ai accompagne les équipes culinaires dans les étapes qui demandent à la fois goût, méthode et vitesse : concevoir une offre, transformer une intuition en recette, documenter les contraintes, puis raconter le plat de façon claire et désirable.",
      points: [
        'Création guidée par les ingrédients, les marges, les saisons et les contraintes alimentaires.',
        'Formats prêts à exploiter : fiches recettes, argumentaires, contenus, brief photo et parcours client.',
        'Une direction artistique sobre et premium pour que la technologie reste au service de l’expérience.',
      ],
    },
    en: {
      eyebrow: 'Method',
      title: 'AI built for real kitchens, not abstract ideas.',
      text:
        'Cookon.ai supports culinary teams where taste, method and speed meet: shaping an offer, turning intuition into a recipe, documenting constraints and telling the story of the dish clearly.',
      points: [
        'Creation guided by ingredients, margins, seasons and dietary constraints.',
        'Ready-to-use outputs: recipe sheets, sales copy, content, photo briefs and guest journeys.',
        'A refined art direction so technology serves the experience.',
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="method" className="overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75 }}
        >
          <span className="eyebrow text-accent-gold">{t.eyebrow}</span>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{t.text}</p>

          <div className="mt-10 space-y-5">
            {t.points.map((point) => (
              <div key={point} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-teal" />
                <p className="text-base leading-7 text-white/75">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[520px] overflow-hidden rounded-md"
        >
          <img
            src="/assets/cookonai-chef.jpeg"
            alt="Chef dressant une assiette avec précision"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="grid grid-cols-3 gap-3">
              {['Ideate', 'Test', 'Serve'].map((label) => (
                <div key={label} className="rounded-md border border-white/10 bg-black/30 p-4 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAreWe;
