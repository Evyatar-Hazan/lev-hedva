import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import heLocale from './locales/he.json';
import enLocale from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      he: { translation: heLocale },
      en: { translation: enLocale },
    },
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
