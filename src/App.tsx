import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import OctoberStudioLanding from "./OctoberStudioLanding";
import { detectInitialLang } from "./lib/langDetector";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = detectInitialLang();
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return <OctoberStudioLanding />;
}
