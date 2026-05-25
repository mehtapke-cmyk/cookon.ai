import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { title: 'Pourquoi Cook On AI', href: '#pourquoi-cook-on-ai' },
    { title: 'À propos', href: '#a-propos' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'hsl(30 30% 92%)',
      borderTop: '1px solid rgba(62,37,19,.12)',
      padding: '3.5rem 0 0',
      fontFamily: "'Manrope', Arial, sans-serif",
      color: '#352114',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.25rem' }}>

        {/* Grille principale */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem',
          justifyContent: 'space-between',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(62,37,19,.1)',
        }}>
          {/* Logo + description */}
          <div style={{ maxWidth: '28ch' }}>
            <img
              src="/assets/cookonai-logo.png"
              alt="Cookon.ai"
              style={{ height: '76px', width: 'auto', marginBottom: '1rem', display: 'block' }}
            />
            <p style={{ color: '#7d5c47', fontSize: '.9rem', lineHeight: 1.65, margin: 0 }}>
              Intelligence culinaire pour restaurants, hôtels, chefs et marques food-tech.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span style={{
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '.16em',
              fontSize: '.7rem',
              color: '#b8947e',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>Pages</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '.65rem' }}>
              {quickLinks.map(link => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={e => handleScroll(e, link.href)}
                    style={{ color: '#7d5c47', fontSize: '.875rem', fontWeight: 600 }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <span style={{
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '.16em',
              fontSize: '.7rem',
              color: '#b8947e',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>Suivre</span>
            <div style={{ display: 'flex', gap: '.75rem' }}>
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '42px', height: '42px',
                    background: 'rgba(62,37,19,.08)',
                    border: '1px solid rgba(62,37,19,.12)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7d5c47',
                  }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bas de page MK */}
        <div style={{
          padding: '1.75rem 0 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <small style={{ color: '#b8947e', fontSize: '.75rem' }}>
            © {new Date().getFullYear()} Cookon.ai — Tous droits réservés.
          </small>

          {/* Branding MK */}
          <div style={{
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '.45rem',
          }}>
            <span style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              fontSize: '4rem',
              opacity: 0.07,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 0,
            }}>🇫🇷</span>
            <p style={{
              margin: 0,
              color: '#7d5c47',
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '.95rem',
              position: 'relative',
              zIndex: 1,
            }}>Propulsé par elle</p>
            <img
              src="/assets/mk-logo.png"
              alt="MK Création originale"
              style={{ height: '44px', width: 'auto', position: 'relative', zIndex: 1, filter: 'saturate(.8)' }}
            />
            <p style={{
              margin: 0,
              color: '#b8947e',
              fontSize: '.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.14em',
              position: 'relative',
              zIndex: 1,
            }}>Création originale · Conçu à Argelès-sur-Mer</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
