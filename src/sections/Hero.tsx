import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { ArrowRight, BadgeCheck, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { fadeIn, stagger } from "../lib/animations";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 md:opacity-40">
        <div className="absolute -inset-[40%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 md:from-amber-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <motion.div initial="show" animate="show" variants={stagger} className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div variants={fadeIn} className="lg:col-span-7">
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              <Trans
                i18nKey="hero.title"
                components={{
                  c1: <span className="bg-gradient-to-tr from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent" />,
                  c2: <span className="underline decoration-red-500/60 underline-offset-8" />
                }}
              />
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-300">{t("hero.subtitle")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#contact" className="inline-flex items-center gap-2">
                  {t("hero.cta.start")} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a href="#work" className="text-sm/6 text-neutral-300 hover:text-white">{t("hero.cta.view")}</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-neutral-300">
              <div className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-red-500" />{t("hero.badge.tech1")}</div>
              <div className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-red-500" />{t("hero.badge.tech2")}</div>
              <div className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-red-500" />{t("hero.badge.tech3")}</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                alt="Hero mockup"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="sync"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-neutral-900/70 px-3 py-1 text-xs backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-400" /> {t("hero.mock.live")}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
