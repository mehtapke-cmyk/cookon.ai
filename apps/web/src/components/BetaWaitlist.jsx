
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Network, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/contexts/LanguageContext';

const BetaWaitlist = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState('idle');
  const [spotsRemaining, setSpotsRemaining] = useState(100);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const result = await pb.collection('beta_waitlist').getList(1, 1, { $autoCancel: false });
        setSpotsRemaining(Math.max(0, 100 - result.totalItems));
      } catch (err) {
        console.error('Failed to fetch waitlist count:', err);
      }
    };
    fetchCount();
  }, []);

  const content = {
    fr: {
      title: "Rejoignez Notre Communauté Culinaire",
      subtitle: "Faites partie de la révolution gastronomique propulsée par l'IA. Accédez en avant-première à notre plateforme.",
      communityTitle: "Communauté",
      communityText: "Échangez avec des chefs visionnaires et des restaurateurs innovants du monde entier.",
      adviceTitle: "Conseil & Expertise",
      adviceText: "Bénéficiez d'un accompagnement personnalisé pour intégrer l'IA dans votre établissement.",
      exclusiveTitle: "EXCLUSIVITÉ BETA",
      exclusiveOffer: "Les 100 premiers inscrits reçoivent l'abonnement Standard GRATUIT pendant 1 AN",
      spotsRemaining: "places restantes",
      email: "Votre Email (Requis)",
      name: "Votre Nom (Optionnel)",
      restaurant: "Nom du Restaurant (Optionnel)",
      submit: "Rejoindre la Liste Beta",
      sending: "Envoi en cours...",
      success: "Merci! Vous êtes sur la liste beta.",
      error: "Une erreur s'est produite. Veuillez réessayer.",
      full: "La liste beta est actuellement complète."
    },
    en: {
      title: "Join Our Culinary Community",
      subtitle: "Be part of the AI-powered gastronomic revolution. Get early access to our platform.",
      communityTitle: "Community",
      communityText: "Connect with visionary chefs and innovative restaurateurs from around the world.",
      adviceTitle: "Advice & Expertise",
      adviceText: "Benefit from personalized guidance to integrate AI into your establishment.",
      exclusiveTitle: "BETA EXCLUSIVE",
      exclusiveOffer: "The first 100 subscribers get Standard subscription FREE for 1 YEAR",
      spotsRemaining: "spots remaining",
      email: "Your Email (Required)",
      name: "Your Name (Optional)",
      restaurant: "Restaurant Name (Optional)",
      submit: "Join Beta Waitlist",
      sending: "Sending...",
      success: "Thank you! You're on the beta list.",
      error: "An error occurred. Please try again.",
      full: "The beta list is currently full."
    }
  };

  const t = content[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (spotsRemaining <= 0) return;
    
    setStatus('loading');
    const formData = new FormData(e.target);
    
    try {
      await pb.collection('beta_waitlist').create({
        email: formData.get('email'),
        name: formData.get('name'),
        restaurant_name: formData.get('restaurant'),
      }, { $autoCancel: false });
      
      setStatus('success');
      setSpotsRemaining(prev => Math.max(0, prev - 1));
      e.target.reset();
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="waitlist" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[hsl(var(--accent-purple))]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[hsl(var(--accent-midnight))]/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-foreground-muted/70 font-light">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Features & Offer */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-dark p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">{t.communityTitle}</h3>
                <p className="text-foreground-muted/70 font-light leading-relaxed">{t.communityText}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-dark p-8 rounded-2xl border border-white/5 hover:border-accent-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">{t.adviceTitle}</h3>
                <p className="text-foreground-muted/70 font-light leading-relaxed">{t.adviceText}</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-8 rounded-2xl border border-accent-gold/40 bg-gradient-to-br from-accent-gold/10 to-transparent glow-gold overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/20 blur-3xl rounded-full" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/30 mb-4">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  <span className="text-xs font-bold tracking-widest text-accent-gold uppercase">{t.exclusiveTitle}</span>
                </div>
                <p className="text-2xl font-display text-foreground leading-snug mb-6">
                  {t.exclusiveOffer}
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-display text-accent-cyan text-glow-cyan">
                    {spotsRemaining}
                  </div>
                  <div className="text-sm text-foreground-muted/60 uppercase tracking-widest">
                    {t.spotsRemaining}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <form onSubmit={handleSubmit} className="glass-dark p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-gold to-accent-purple" />
              
              <div className="space-y-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.email}
                    className="w-full bg-black/50 border-b border-white/20 px-4 py-4 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-accent-cyan transition-colors font-light"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.name}
                    className="w-full bg-black/50 border-b border-white/20 px-4 py-4 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-accent-cyan transition-colors font-light"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="restaurant"
                    placeholder={t.restaurant}
                    className="w-full bg-black/50 border-b border-white/20 px-4 py-4 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-accent-cyan transition-colors font-light"
                  />
                </div>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent-cyan text-sm font-medium">
                    {t.success}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-destructive text-sm font-medium">
                    {t.error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || spotsRemaining <= 0}
                  className="w-full group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-transparent border border-accent-gold/50 text-accent-gold text-sm tracking-[0.2em] font-bold overflow-hidden rounded-sm transition-all duration-500 hover:border-accent-gold glow-gold mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 w-full h-full bg-accent-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10">
                    {spotsRemaining <= 0 ? t.full : status === 'loading' ? t.sending : t.submit}
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BetaWaitlist;
