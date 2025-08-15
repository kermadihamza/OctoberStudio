import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Menu } from "lucide-react";
import { setUserLang } from "../lib/langDetector";

export default function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean)=>void }) {
  const { t, i18n } = useTranslation();
  const navItems = [
    { href: "#services", label: t("nav.services") },
    { href: "#work",     label: t("nav.work") },
    { href: "#process",  label: t("nav.process") },
    { href: "#about",    label: t("nav.about") },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="October Studio Logo" className="h-16 w-auto" />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm/6 text-neutral-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <Button asChild className="rounded-2xl">
              <a href="#contact">{t("nav.quote")}</a>
            </Button>

            {/* Lang switch */}
            <div className="ml-3 inline-flex overflow-hidden rounded-xl border border-white/10">
              <button
                onClick={() => { i18n.changeLanguage("fr"); setUserLang("fr"); }}
                className={i18n.language === "fr" ? "bg-white/10 px-2 py-1 text-xs" : "px-2 py-1 text-xs"}
              >FR</button>
              <button
                onClick={() => { i18n.changeLanguage("en"); setUserLang("en"); }}
                className={i18n.language === "en" ? "bg-white/10 px-2 py-1 text-xs" : "px-2 py-1 text-xs"}
              >EN</button>
            </div>
          </nav>

          <button
            aria-label={t("a11y.menu.open")}
            className="inline-flex md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-neutral-300 hover:text-white">
                {item.label}
              </a>
            ))}
            <Button asChild className="rounded-2xl">
              <a href="#contact" onClick={() => setOpen(false)}>{t("nav.quote")}</a>
            </Button>
            <div className="flex gap-2">
              <button
                className={`px-2 py-1 text-xs border border-white/10 rounded ${i18n.language === "fr" ? "bg-white/10" : ""}`}
                onClick={() => { i18n.changeLanguage("fr"); setUserLang("fr"); setOpen(false); }}
              >FR</button>
              <button
                className={`px-2 py-1 text-xs border border-white/10 rounded ${i18n.language === "en" ? "bg-white/10" : ""}`}
                onClick={() => { i18n.changeLanguage("en"); setUserLang("en"); setOpen(false); }}
              >EN</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
