import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { ArrowRight, BadgeCheck, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { fadeIn, stagger } from "../lib/animations";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Fond galaxy */}
      <div className="absolute inset-0 -z-10 animate-galaxy" />
      <div className="stars" />
      <div className="stars-2" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="show"
          animate="show"
          variants={stagger}
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={fadeIn}
            className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            <Trans
              i18nKey="hero.title"
              components={{
                c1: <span className="bg-gradient-to-tr from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent" />,
                c2: <span className="underline decoration-red-500/60 underline-offset-8" />
              }}
            />
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 max-w-2xl text-neutral-300">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 flex gap-4 flex-wrap justify-center">
            <Button asChild size="lg" className="rounded-2xl">
              <a href="#contact" className="inline-flex items-center gap-2">
                {t("hero.cta.start")} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <a href="#work" className="text-sm/6 text-neutral-300 hover:text-white">
              {t("hero.cta.view")}
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-8 flex items-center gap-6 text-xs text-neutral-300">
            <div className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-red-500" />
              {t("hero.badge.tech1")}
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-red-500" />
              {t("hero.badge.tech2")}
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-red-500" />
              {t("hero.badge.tech3")}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
