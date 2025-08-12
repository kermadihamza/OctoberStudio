import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { detectInitialLang } from "./lib/langDetector";
import fr from "./locales/fr/translation.json";
import en from "./locales/en/translation.json";

const initial = detectInitialLang(); // "fr" si pays francophone / navigateur FR, sinon "en"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: initial,          // démarre directement avec la bonne langue
    fallbackLng: "en",     // si une clé manque
    interpolation: { escapeValue: false },
  });

export default i18n;

// (facultatif) exposer en debug:
// @ts-ignore
if (typeof window !== "undefined") window.i18next = i18n;
