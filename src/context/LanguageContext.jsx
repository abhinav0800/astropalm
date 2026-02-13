import React, { createContext, useContext, useState, useEffect } from 'react';
import { locales, defaultLanguage, getTranslation } from '../locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_lang') || defaultLanguage;
  });

  const t = (key) => getTranslation(language, key);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('app_lang', newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
