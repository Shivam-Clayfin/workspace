import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_lang from "../locales/En/en.json"
import ar_lang from "../locales/Ar/ar.json"
import hn_lang from "../locales/Hn/hn.json"
//pomofocous
i18n.use(initReactI18next).init({
  resources: {
    en: {
      Pomo: en_lang
    },
    ar: {
      Pomo: ar_lang,
    },
    hn: {
      Pomo: hn_lang,
    },
  },

  fallbackLng: "en",
  ns: [
    "Pomo",
  ],
  defaultNS: "Pomo",
  fallbackNS: ["Pomo"],
//  debug: process.env.NODE_ENV !== "production",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
    wait: false,
  },
});
export default i18n;
