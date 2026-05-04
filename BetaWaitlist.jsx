import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Network, Sparkles } from 'lucide-react';
import { submitLead } from '@/lib/leadSubmit';
import { useLanguage } from '@/contexts/LanguageContext';

const BetaWaitlist = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState('idle');

  const content = {
    fr: {
      eyebrow: 'Programme pilote',
      title: 'Construire la première cohorte Cookon.ai.',
      subtitle:
        'Nous ouvrons un accès accompagné aux restaurants, hôtels, chefs et marques qui veulent tester l’IA sur un cas concret.',
      benefits: [
        {
          icon: Network,
          title: 'Cadrage stratégique',
          text: 'Une session pour définir vos offres, vos contraintes et vos premiers usages prioritaires.',
        },
        {
          icon: Lightbulb,
          title: 'Prototype exploitable',
          text: 'Des livrables prêts à utiliser : menus, fiches, récits, prompts visuels et supports de vente.',
        },
        {
          icon: Sparkles,
          title: 'Signature mémorable',
          text: 'Un accompagnement pour que la technologie renforce votre identité au lieu de la diluer.',
        },
      ],
      formTitle: 'Rejoindre la cohorte',
      name: 'Nom',
      email: 'Email professionnel',
      company: 'Restaurant, hôtel, marque ou projet',
      need: 'Votre besoin principal',
      submit: 'Demander un accès',
      sending: 'Envoi...',
      success: 'Merci, votre demande est prête à être envoyée.',
      error: 'Impossible d’envoyer la demande. Réessayez dans un instant.',
    },
    en: {
      eyebrow: 'Pilot program',
      title: 'Building the first Cookon.ai cohort.',
      subtitle:
        'We are opening guided access to restaurants, hotels, chefs and brands that want to test AI on a concrete use case.',
      benefits: [
        {
          icon: Network,
          title: 'Strategic framing',
          text: 'A session to define your offers, constraints and first priority use cases.',
        },
        {
          icon: Lightbulb,
          title: 'Usable prototype',
          text: 'Ready-to-use outputs: menus, sheets, stories, visual prompts and sales material.',
        },
        {
          icon: Sparkles,
          title: 'Memorable signature',
          text: 'Guidance so technology strengthens your identity instead of diluting it.',
        },
      ],
      formTitle: 'Join the cohort',
      name: 'Name',
      email: 'Work email',
      company: 'Restaurant, hotel, brand or project',
      need: 'Your main need',
      submit: 'Request access',
      sending: 'Sending...',
      success: 'Thank you, your request is ready to send.',
      error: 'Unable to send the request. Please try again.',
    },
  };

  const t = content[lang];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const data = {
      Nom: formData.get('name'),
      Email: formData.get('email'),
      Organisation: formData.get('company'),
      Besoin: formData.get('need'),
    };

    try {
      await submitLead({ formName: 'Programme pilote', data });
      setStatus('success');
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="bg-[hsl(var(--background))] py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_.82fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow text-accent-teal">{t.eyebrow}</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {t.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.subtitle}</p>

            <div className="mt-11 grid gap-4">
              {t.benefits.map((benefit) => (
                <div key={benefit.title} className="grid gap-4 rounded-md border border-black/10 bg-white/50 p-5 sm:grid-cols-[52px_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-950">{benefit.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="panel-dark rounded-md p-6 text-white sm:p-8"
          >
            <h3 className="font-display text-3xl font-semibold text-white">{t.formTitle}</h3>
            <div className="mt-8 space-y-5">
              <input
                name="name"
                required
                placeholder={t.name}
                aria-label={t.name}
                className="h-14 w-full rounded-md border border-white/10 bg-white/10 px-4 text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent-gold"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t.email}
                aria-label={t.email}
                className="h-14 w-full rounded-md border border-white/10 bg-white/10 px-4 text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent-gold"
              />
              <input
                name="company"
                placeholder={t.company}
                aria-label={t.company}
                className="h-14 w-full rounded-md border border-white/10 bg-white/10 px-4 text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent-gold"
              />
              <textarea
                name="need"
                rows="4"
                placeholder={t.need}
                aria-label={t.need}
                className="w-full resize-none rounded-md border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent-gold"
              />

              {status === 'success' && <p className="text-sm font-semibold text-accent-teal">{t.success}</p>}
              {status === 'error' && <p className="text-sm font-semibold text-red-300">{t.error}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-accent-gold px-6 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? t.sending : t.submit}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BetaWaitlist;
