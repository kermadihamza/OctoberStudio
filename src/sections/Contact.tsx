import React from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Send, Instagram, Linkedin } from "lucide-react";
import { fadeIn, stagger } from "../lib/animations";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeIn} className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("contact.title")}</h2>
                <p className="mt-3 max-w-md text-neutral-300">{t("contact.subtitle")}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
                  <a href="https://www.instagram.com/the.octoberstudio/" target="_blank" rel="noopener noreferrer" aria-label={t("a11y.social.instagram")}>
                    <Instagram className="h-4 w-4 hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/company/theoctoberstudio/" target="_blank" rel="noopener noreferrer" aria-label={t("a11y.social.linkedin")}>
                    <Linkedin className="h-4 w-4 hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
              <form className="grid gap-3">
                <Input placeholder={t("contact.placeholder.name") as string} />
                <Input type="email" placeholder={t("contact.placeholder.email") as string} />
                <Input placeholder={t("contact.placeholder.budget") as string} />
                <Textarea rows={5} placeholder={t("contact.placeholder.message") as string} />
                <Button className="mt-2 w-full rounded-2xl" type="submit">
                  {t("contact.send")} <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-xs text-neutral-400">{t("contact.legal")}</p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
