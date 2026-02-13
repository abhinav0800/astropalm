import { useLanguage } from '../context/LanguageContext';

/**
 * Short alias for translations in components
 */
export const useTranslation = () => {
  const { t, language, changeLanguage } = useLanguage();
  
  return {
    t,
    lang: language,
    setLang: changeLanguage
  };
};
