import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Pourquoi Cook On AI', id: 'pourquoi-cook-on-ai' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: 'all 300ms',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: isScrolled ? 'rgba(255,247,239,.95)' : 'linear-gradient(to bottom, rgba(0,0,0,.55), transparent)',
          borderBottom: isScrolled ? '1px solid rgba(62,37,19,.1)' : '1px solid rgba(255,255,255,.08)',
          boxShadow: isScrolled ? '0 8px 32px rgba(97,60,33,.1)' : 'none',
          fontFamily: "'Manrope', Arial, sans-serif",
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.25rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
          }}>
            {/* Logo */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <img
                src="/assets/cookonai-logo.png"
                alt="Cookon.ai"
                style={{
                  height: '70px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
                }}
              />
            </a>

            {/* Navigation desktop */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
              className="hidden lg:flex">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={e => scrollToSection(e, item.id)}
                  style={{
                    fontSize: '.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '.14em',
                    color: isScrolled ? '#7d5c47' : 'rgba(255,255,255,.82)',
                    transition: 'color 200ms',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.target.style.color = isScrolled ? '#352114' : '#fff'}
                  onMouseLeave={e => e.target.style.color = isScrolled ? '#7d5c47' : 'rgba(255,255,255,.82)'}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={e => scrollToSection(e, 'contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.4rem',
                  background: '#ff6b35',
                  color: '#fff',
                  borderRadius: '999px',
                  padding: '.7rem 1.4rem',
                  fontSize: '.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '.12em',
                  textDecoration: 'none',
                  transition: 'all 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e45725'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ff6b35'; e.currentTarget.style.transform = 'none'; }}
              >
                Démo →
              </a>
            </nav>

            {/* Bouton mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(o => !o)}
              className="lg:hidden"
              style={{
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${isScrolled ? 'rgba(62,37,19,.2)' : 'rgba(255,255,255,.2)'}`,
                borderRadius: '50%',
                background: 'transparent',
                color: isScrolled ? '#352114' : '#fff',
                cursor: 'pointer',
              }}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: '#1a1009',
              padding: '7rem 1.5rem 2rem',
              fontFamily: "'Manrope', Arial, sans-serif",
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={e => scrollToSection(e, item.id)}
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '2rem',
                  color: '#fff',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,.1)',
                  paddingBottom: '1.25rem',
                  display: 'block',
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => scrollToSection(e, 'contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: '#ff6b35', color: '#fff',
                borderRadius: '999px', padding: '.9rem 2rem',
                fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.12em',
                fontSize: '.875rem', textDecoration: 'none', marginTop: '1rem',
              }}
            >
              Demander une démo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
