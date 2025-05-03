import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from '../enums/Language';

const fallbackLang =
  (localStorage.getItem('appLanguage') as Language) || Language.EN;

const missingKeys: Record<string, string> = {};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: fallbackLang,
    debug: import.meta.env.DEV,
    saveMissing: true,
    pluralSeparator: '_',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/translations/{{lng}}.json',
      addPath: '/locales/translations/{{lng}}.missing.json',
    },
    missingKeyHandler: (lng, ns, key) => {
      const compositeKey = `${lng}.${ns}.${key}`;
      if (!missingKeys[compositeKey]) {
        missingKeys[compositeKey] = key;

        console.warn(`🈳 Missing i18n key: "${compositeKey}"`);

        const stored = localStorage.getItem('missing-i18n-keys');
        const current = stored ? JSON.parse(stored) : {};
        current[compositeKey] = key;
        localStorage.setItem(
          'missing-i18n-keys',
          JSON.stringify(current, null, 2),
        );
      }
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
