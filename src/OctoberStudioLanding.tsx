import React from "react";
import { LazyMotion, domAnimation, m as motion, useReducedMotion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { ArrowRight, Sparkles, Send, BadgeCheck, Layout, Zap, PenTool, MonitorSmartphone, Instagram, Linkedin, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const fakeImages = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
];

export default function OctoberStudioLanding() {
  const [open, setOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();
  const { t, i18n } = useTranslation();

  const navItems = [
    { href: "#services", label: t("nav.services") },
    { href: "#work", label: t("nav.work") },
    { href: "#process", label: t("nav.process") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen w-full bg-background text-foreground antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="#home" className="flex items-center gap-2">
                <img src="/logo.png" alt="October Studio Logo" className="h-16 w-auto" />
              </a>

              {/* Desktop Nav */}
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
                    className={`px-2 py-1 text-xs ${i18n.language === "fr" ? "bg-white/10" : ""}`}
                    onClick={() => i18n.changeLanguage("fr")}
                  >FR</button>
                  <button
                    className={`px-2 py-1 text-xs ${i18n.language === "en" ? "bg-white/10" : ""}`}
                    onClick={() => i18n.changeLanguage("en")}
                  >EN</button>
                </div>
              </nav>

              {/* Mobile */}
              <button
                aria-label={t("a11y.menu.open")}
                className="inline-flex md:hidden"
                onClick={() => setOpen((v) => !v)}
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
                  <a href="#contact" onClick={() => setOpen(false)}>
                    {t("nav.quote")}
                  </a>
                </Button>
                <div className="flex gap-2">
                  <button className={`px-2 py-1 text-xs border border-white/10 rounded" ${i18n.language === "fr" ? "bg-white/10" : ""}`} onClick={() => i18n.changeLanguage("fr")}>FR</button>
                  <button className={`px-2 py-1 text-xs border border-white/10 rounded" ${i18n.language === "en" ? "bg-white/10" : ""}`} onClick={() => i18n.changeLanguage("en")}>EN</button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
            <div className="absolute -inset-[40%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <motion.div variants={fadeIn} className="lg:col-span-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t("hero.badge")}
                </p>

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
                  <a href="#work" className="text-sm/6 text-neutral-300 hover:text-white">
                    {t("hero.cta.view")}
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-6 text-xs text-neutral-300">
                  <div className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-red-500" />
                    {t("hero.badge.tech1")}
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Zap className="h-4 w-4 text-red-500" />
                    {t("hero.badge.tech2")}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:col-span-5">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="Hero mockup" className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-neutral-900/70 px-3 py-1 text-xs backdrop-blur">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-400" /> {t("hero.mock.live")}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("services.title")}
              </motion.h2>
              <motion.p variants={fadeIn} className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
                {t("services.subtitle")}
              </motion.p>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: <Layout className="h-5 w-5" />, title: t("services.card.1.title"), desc: t("services.card.1.desc") },
                  { icon: <MonitorSmartphone className="h-5 w-5" />, title: t("services.card.2.title"), desc: t("services.card.2.desc") },
                  { icon: <PenTool className="h-5 w-5" />, title: t("services.card.3.title"), desc: t("services.card.3.desc") },
                ].map((s, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <Card className="group h-full rounded-2xl border-white/10 bg-neutral-900/40 backdrop-blur">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-base">
                          <span className="inline-grid place-items-center rounded-xl border border-white/10 p-2 group-hover:scale-110 transition-transform">
                            {s.icon}
                          </span>
                          {s.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-neutral-300">{s.desc}</CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <motion.h2 variants={fadeIn} className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("work.title")}
              </motion.h2>
              <motion.p variants={fadeIn} className="mt-3 max-w-2xl text-neutral-300">
                {t("work.subtitle")}
              </motion.p>

              <motion.div variants={stagger} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fakeImages.map((img, i) => (
                  <motion.a key={i} variants={fadeIn} href="#" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 26 }} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 will-change-transform">
                    <img src={img} alt={`Project ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-neutral-300">{t("work.card.project", { index: i + 1 })}</p>
                        <p className="text-xs text-neutral-400">{t("work.card.meta")}</p>
                      </div>
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

        {/* Process */}
        <section id="process" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("process.title")}
              </motion.h2>

              <div className="mt-12 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-700" />
                <div className="space-y-12">
                  {["01", "02", "03", "04"].map((step, idx) => (
                    <motion.div key={step} variants={fadeIn} className={`relative flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="flex-shrink-0 z-10 h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shadow-lg">
                        {step}
                      </div>
                      <div className="bg-neutral-900 border border-red-600/50 rounded-xl p-6 max-w-md shadow-lg">
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

        {/* About */}
        <section id="about" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="space-y-10">
              <motion.div variants={fadeIn} className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("about.title")}</h2>
                <p className="mt-4 text-neutral-300">
                  {t("about.p1", { cities: (
                    <span className="text-primary font-medium">{t("about.p1.cities")}</span>
                  )})}
                </p>
                <p className="mt-3 text-neutral-300">{t("about.p2")}</p>
              </motion.div>

              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <motion.div variants={fadeIn} className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img src="/ouissam.png" alt={t("founder.1.name") as string} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img src="/hamza.png" alt={t("founder.2.name") as string} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

                {/* Side content */}
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

        {/* Contact */}
        <section id="contact" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
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

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-neutral-400">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
              <nav className="flex items-center gap-6 text-sm text-neutral-400">
                <a href="#" className="hover:text-white">{t("footer.legal")}</a>
                <a href="#" className="hover:text-white">{t("footer.privacy")}</a>
                <a href="#contact" className="hover:text-white">{t("footer.contact")}</a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
}