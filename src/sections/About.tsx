import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn, stagger } from "../lib/animations";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-10">
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("about.title")}</h2>
            <p className="mt-4 text-neutral-300">
              {t("about.p1", { cities: (<span className="text-primary font-medium">{t("about.p1.cities")}</span>) })}
            </p>
            <p className="mt-3 text-neutral-300">{t("about.p2")}</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <motion.div variants={fadeIn} className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              {/* Founder 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src="/ouissam.png" alt={t("founder.1.name") as string}
                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{t("founder.1.name")}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t("founder.1.role")}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {(t("founder.1.tags").split(",").map(s => s.trim())).map((city) => (
                      <span key={city} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">{city}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-neutral-300">{t("founder.1.bio")}</p>
                </div>
              </div>
              {/* Founder 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src="/hamza.png" alt={t("founder.2.name") as string}
                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{t("founder.2.name")}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t("founder.2.role")}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {(t("founder.2.tags").split(",").map(s => s.trim())).map((city) => (
                      <span key={city} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">{city}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-neutral-300">{t("founder.2.bio")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{t("offer.title")}</h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                  {[1,2,3,4].map(i => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {t(`offer.item.${i}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="rounded-xl border border-border bg-background p-4 text-center">
                      <p className="text-xl font-semibold">{t(`offer.metric.${i}.k`)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t(`offer.metric.${i}.v`)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  {t("offer.skills").split(",").map(s => s.trim()).map(tag => (
                    <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">{tag}</span>
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
