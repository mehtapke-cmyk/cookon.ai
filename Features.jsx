import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Cpu, Glasses, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [Cpu, ChefHat, Sparkles, Glasses];

const Features = () => {
  const { lang } = useLanguage();

  const content = {
    fr: {
      eyebrow: 'Capacités',
      title: "Ce que Cookon.ai apporte dès la première utilisation.",
      features: [
        {
          title: 'Menus & rentabilité',
          text: 'Composer des cartes cohérentes avec les saisons, les prix, les stocks, les temps de préparation et la marge cible.',
        },
        {
          title: 'R&D recette',
          text: 'Explorer des variantes, substitutions, contraintes allergènes, accords et dressages sans repartir de zéro.',
        },
        {
          title: 'Narration culinaire',
          text: 'Transformer une recette en histoire : pitch serveur, description menu, contenu social, brief photo ou vidéo.',
        },
        {
          title: 'Expérience client',
          text: 'Scénariser le parcours autour d’un plat, d’un événement, d’une offre premium ou d’un lancement de produit.',
        },
      ],
    },
    en: {
      eyebrow: 'Capabilities',
      title: 'What Cookon.ai brings from the first use.',
      features: [
        {
          title: 'Menus & profitability',
          text: 'Compose coherent menus with seasons, prices, stock, prep time and target margin.',
        },
        {
          title: 'Recipe R&D',
          text: 'Explore variations, substitutions, allergen constraints, pairings and plating without starting from scratch.',
        },
        {
          title: 'Culinary storytelling',
          text: 'Turn a recipe into a story: server pitch, menu description, social content, photo or video brief.',
        },
        {
          title: 'Guest experience',
          text: 'Design the journey around a dish, event, premium offer or product launch.',
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
      <img
        src="/assets/cookonai-pizza.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-slate-950/90" />
      <div className="section-shell relative z-10">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent-gold">{t.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="rounded-md border border-white/10 bg-white/[0.055] p-7 backdrop-blur transition-colors hover:border-[hsl(var(--accent-teal))]"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/70">{feature.text}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
