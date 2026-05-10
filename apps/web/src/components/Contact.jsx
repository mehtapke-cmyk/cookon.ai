
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const content = {
    fr: {
      title: "Initier le Dialogue",
      subtitle: "Rejoignez la révolution culinaire",
      name: "Votre Nom",
      email: "Votre Email",
      message: "Votre Message",
      submit: "ENVOYER LA DEMANDE",
      sending: "ENVOI...",
      success: "Message reçu. Nous vous contacterons bientôt.",
      error: "Une erreur s'est produite. Veuillez réessayer."
    },
    en: {
      title: "Initiate Dialogue",
      subtitle: "Join the culinary revolution",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      submit: "SEND INQUIRY",
      sending: "SENDING...",
      success: "Message received. We will contact you shortly.",
      error: "An error occurred. Please try again."
    }
  };

  const t = content[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      await pb.collection('contact_submissions').create(data, { $autoCancel: false });
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1591707620051-e7d406eaa546" 
          alt="Digital Connection" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05000A] via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--accent-burgundy))]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl lg:text-6xl font-display font-medium text-foreground mb-4">
                {t.title}
              </h2>
              <p className="text-xl text-foreground-muted/70 font-light">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-gold transition-colors">
                  <Mail className="w-5 h-5 text-foreground group-hover:text-accent-gold transition-colors" />
                </div>
                <span className="text-foreground text-lg tracking-wide">contact@cookon.ai</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-cyan transition-colors">
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-accent-cyan transition-colors" />
                </div>
                <span className="text-foreground text-lg tracking-wide">LinkedIn / Cookon.ai</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-gold transition-colors">
                  <Instagram className="w-5 h-5 text-foreground group-hover:text-accent-gold transition-colors" />
                </div>
                <span className="text-foreground text-lg tracking-wide">@cookon.ai</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark p-8 md:p-12 rounded-2xl border border-white/5 space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.name}
                  className="w-full bg-black/50 border-b border-white/20 px-4 py-4 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-accent-gold transition-colors font-light"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.email}
                  className="w-full bg-black/50 border-b border-white/20 px-4 py-4 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-accent-gold transition-colors font-light"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder={t.message}
                  className="w-full bg-black/50 border-b border-white/20 px-4 py-4 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:border-accent-gold transition-colors font-light resize-none"
                />
              </div>

              {status === 'success' && (
                <p className="text-accent-cyan text-sm">{t.success}</p>
              )}
              {status === 'error' && (
                <p className="text-destructive text-sm">{t.error}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-transparent border border-accent-cyan/50 text-accent-cyan text-sm tracking-[0.2em] font-bold overflow-hidden rounded-sm transition-all duration-500 hover:border-accent-cyan glow-cyan mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 w-full h-full bg-accent-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">{status === 'loading' ? t.sending : t.submit}</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
