import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn, stagger } from "../lib/animations";
import { Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="space-y-6 lg:space-y-8"
        >
          {/* Intro courte */}
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("about.title")}
            </h2>

            <p className="mt-3 text-neutral-300">
              <Trans
                i18nKey="about.p1"
                values={{ cities: t("about.p1.cities") }}
                components={{
                  c1: <span className="text-primary font-medium" />
                }}
              />
            </p>

            <p className="mt-2 text-neutral-300">{t("about.p2")}</p>
          </motion.div>

          {/* 2 colonnes équilibrées */}
          <div className="grid gap-5 lg:gap-6 lg:grid-cols-12 items-stretch auto-rows-fr">
            {/* FOUNDERS */}
            <motion.div variants={fadeIn} className="lg:col-span-7">
  <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col">
    {/* Titre en haut */}
    <h3 className="text-lg font-semibold">
      {t("about.foundersTitle")}
    </h3>

    {/* Les cartes centrées */}
    <div className="flex-1 flex items-center">
      <div className="grid gap-5 sm:grid-cols-2 w-full">
        {/* Founder 1 */}
        <article className="rounded-xl border border-white/10 bg-background/30 p-4">
          <h4 className="text-base font-semibold">{t("founder.1.name")}</h4>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {t("founder.1.role")}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {t("founder.1.tags")
              .split(",")
              .map((s) => s.trim())
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary"
                >
                  {tag}
                </span>
              ))}
          </div>

          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            {t("founder.1.bio")}
          </p>
        </article>

        {/* Founder 2 */}
        <article className="rounded-xl border border-white/10 bg-background/30 p-4">
          <h4 className="text-base font-semibold">{t("founder.2.name")}</h4>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {t("founder.2.role")}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {t("founder.2.tags")
              .split(",")
              .map((s) => s.trim())
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary"
                >
                  {tag}
                </span>
              ))}
          </div>

          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            {t("founder.2.bio")}
          </p>
        </article>
      </div>
    </div>
  </div>
</motion.div>


            {/* WHAT WE OFFER */}
            <motion.div variants={fadeIn} className="lg:col-span-5">
              <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm flex flex-col">
                <h3 className="text-lg font-semibold">{t("offer.title")}</h3>

                <ul className="mt-3 space-y-2.5 text-sm text-neutral-300">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {t(`offer.item.${i}`)}
                    </li>
                  ))}
                </ul>

                {/* Stats compactes */}
                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border bg-background p-3 text-center"
                    >
                      <p className="text-lg font-semibold">
                        {t(`offer.metric.${i}.k`)}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {t(`offer.metric.${i}.v`)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags skills */}
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  {t("offer.skills")
                    .split(",")
                    .map((s) => s.trim())
                    .map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
