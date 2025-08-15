import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-neutral-400">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <nav className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">{t("footer.legal")}</a>
            <a href="#" className="hover:text-white">{t("footer.privacy")}</a>
            <a href="#contact" className="hover:text-white">{t("footer.contact")}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
