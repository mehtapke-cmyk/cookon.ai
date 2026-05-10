
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('cookon_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('cookon_lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
