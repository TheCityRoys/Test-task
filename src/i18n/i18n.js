import i18n from 'i18next'
import enMainTranslation from './translations/en.json';
import ltMainTranslation from './translations/lt.json';
import lvMainTranslation from './translations/lv.json';
import eeMainTranslation from './translations/ee.json';
import ruMainTranslation from './translations/ru.json';
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translations: enMainTranslation,
  },
  lt: {
    translations: ltMainTranslation,
  },
  lv: {
    translations: lvMainTranslation,
  },
  ee: {
    translations: eeMainTranslation,
  },
  ru: {
    translations: ruMainTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('locale') || 'en',
    fallbackLng: 'en',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  })

export default i18n;
