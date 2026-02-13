import { en } from './en';
import { hi } from './hi';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ko } from './ko';

export const locales = {
  en, // English
  hi, // Hindi
  es, // Spanish
  fr, // French
  it, // Italian
  ko  // Korean
};

export const defaultLanguage = 'en';

export const getTranslation = (lang, key) => {
  const translations = locales[lang] || locales[defaultLanguage];
  return translations[key] || key;
};
