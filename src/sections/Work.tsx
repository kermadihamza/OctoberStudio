import React from "react";
import { m as motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, stagger } from "../lib/animations";
import { useTranslation } from "react-i18next";

type Project = {
  img: string;
  title: string;
  href?: string;
  fit?: "cover" | "contain";
  objectPosition?: string; // 'left' | 'center' | 'right' | '50% 40%'
};

const projects: Project[] = [
  { img: "/nooz.png",     title: "Nooz Production", href: "#", fit: "cover",  objectPosition: "center" },
  { img: "/bestride.png", title: "Be Stride",                      fit: "cover",  objectPosition: "center" },
  { img: "/keweb.png",    title: "Keweb",                          fit: "cover",  objectPosition: "center" },
  { img: "/basement.png", title: "Basement",                       fit: "cover",  objectPosition: "left" },
];

export default function Work() {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {t("work.title")}
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="mt-3 max-w-2xl text-neutral-300"
          >
            {t("work.subtitle")}
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          >
            {projects.map((p, i) => (
              <motion.a
                key={i}
                variants={fadeIn}
                href={p.href || "#"}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className={`h-full w-full rounded-xl ${
                    p.fit === "contain"
                      ? "object-contain bg-neutral-900"
                      : "object-cover"
                  } transition-transform duration-500 group-hover:scale-[1.03]`}
                  style={{ objectPosition: p.objectPosition || "center" }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{p.title}</p>
                  <div className="rounded-full bg-white/10 p-2 backdrop-blur">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
