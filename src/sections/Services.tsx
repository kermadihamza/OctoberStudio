import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout, MonitorSmartphone, PenTool, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { fadeIn, stagger } from "../lib/animations";

export default function Services() {
  const { t } = useTranslation();

  const cards = [
    { 
      icon: <Layout className="h-5 w-5" />, 
      title: t("services.card.1.title"), 
      desc: t("services.card.1.desc"),
      skills: t("services.card.1.skills") 
    },
    { 
      icon: <MonitorSmartphone className="h-5 w-5" />, 
      title: t("services.card.2.title"), 
      desc: t("services.card.2.desc"),
      skills: t("services.card.2.skills") 
    },
    { 
      icon: <PenTool className="h-5 w-5" />, 
      title: t("services.card.3.title"), 
      desc: t("services.card.3.desc"),
      skills: t("services.card.3.skills") 
    },
    { 
      icon: <Zap className="h-5 w-5" />, 
      title: t("services.card.4.title"), 
      desc: t("services.card.4.desc"),
      skills: t("services.card.4.skills") 
    },
  ];

  return (
    <section id="services" className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn} 
            className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p 
            variants={fadeIn} 
            className="mx-auto mt-3 max-w-2xl text-center text-neutral-300"
          >
            {t("services.subtitle")}
          </motion.p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {cards.map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="group h-full min-h-[200px] flex flex-col justify-between rounded-2xl border-white/10 bg-neutral-900/40 backdrop-blur">
                  <div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-base">
                        <span className="inline-grid place-items-center rounded-xl border border-white/10 p-2 group-hover:scale-110 transition-transform">
                          {s.icon}
                        </span>
                        {s.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="text-neutral-300">
                      <p>{s.desc}</p>
                    </CardContent>
                  </div>

                  {/* Tags spécifiques à chaque carte */}
                  <div className="px-6 pb-6 mt-auto">
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                      {s.skills
                        .split(",")
                        .map((skill) => skill.trim())
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
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
