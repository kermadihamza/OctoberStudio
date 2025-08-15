import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn, stagger } from "../lib/animations";

export default function Process() {
  const { t } = useTranslation();
  return (
    <section id="process" className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.h2 variants={fadeIn} className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("process.title")}
          </motion.h2>

          <div className="mt-8 relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-700" />
            <div className="space-y-12">
              {["01", "02", "03", "04"].map((step, idx) => (
                <motion.div
                  key={step}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-bold shadow-lg">
                    {step}
                  </div>
                  <div className="max-w-md rounded-xl border border-red-600/50 bg-neutral-900 p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-white">{t(`process.step.${step}.title`)}</h3>
                    <p className="mt-2 text-neutral-300">{t(`process.step.${step}.desc`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
