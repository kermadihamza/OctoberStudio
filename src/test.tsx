import React from "react";
import { LazyMotion, domAnimation, m as motion, useReducedMotion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { ArrowRight, Sparkles, Send, BadgeCheck, Layout, Zap, PenTool, MonitorSmartphone, Instagram, Linkedin, Menu } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};


const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projets" },
  { href: "#process", label: "Méthode" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

const fakeImages = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1600&auto=format&fit=crop", // design 1
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop", // bureau dev
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop", // teamwork
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1600&auto=format&fit=crop", // design 1
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop", // bureau dev
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop", // marketing
];

export default function OctoberStudioLanding() {
  const [open, setOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>

<div className="min-h-screen w-full bg-background text-foreground antialiased">
{/* Header */}
<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
            <img 
  src="/logo.png" 
  alt="October Studio Logo" 
  className="h-16 w-auto" 
/>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm/6 text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="rounded-2xl">
                <a href="#contact">Demander un devis</a>
              </Button>
            </nav>

            {/* Mobile */}
            <button
              aria-label="open menu"
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
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="rounded-2xl">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Demander un devis
                </a>
              </Button>
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid gap-10 lg:grid-cols-12 lg:items-center"
          >
            <motion.div variants={fadeIn} className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                <Sparkles className="h-3.5 w-3.5" />
                Agence créative web • Sites, branding & growth
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Des sites qui{" "}
              <span className="bg-gradient-to-tr from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                convertissent
              </span>
              , un design qui{" "}
              <span className="underline decoration-red-500/60 underline-offset-8">
                marque
              </span>.
            </h1>

              <p className="mt-6 max-w-2xl text-neutral-300">
                October Studio conçoit des expériences sur-mesure : landing pages, vitrines, e‑commerce et identités visuelles. Rapides, SEO‑ready et pensées pour la conversion.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#contact" className="inline-flex items-center gap-2">
                    Démarrer mon projet <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <a href="#work" className="text-sm/6 text-neutral-300 hover:text-white">
                  Voir nos projets
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-neutral-300">
              <div className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-red-500" />
                React, WordPress & No-Code
              </div>
              <div className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-red-500" />
                Performance & SEO
              </div>
            </div>

            </motion.div>

            <motion.div variants={fadeIn} className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                  alt="Hero mockup"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-neutral-900/70 px-3 py-1 text-xs backdrop-blur">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-400" /> Live preview
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
              Ce qu’on fait de mieux
            </motion.h2>
            <motion.p variants={fadeIn} className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
              Un socle technique moderne, une exécution design précise et une obsession : la performance.
            </motion.p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Layout className="h-5 w-5" />, title: "Sites vitrines & landing pages",
                  desc: "Du concept à la mise en prod : design, intégration, animations & tracking.",
                },
                {
                  icon: <MonitorSmartphone className="h-5 w-5" />, title: "E‑commerce & no‑code connect",
                  desc: "Boutiques rapides, intégrations Stripe, CMS headless et automations.",
                },
                { icon: <PenTool className="h-5 w-5" />, title: "Branding & UI kits", desc: "Identité visuelle, systèmes de design, guidelines et composants réutilisables." },
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
        Quelques réalisations
      </motion.h2>
      <motion.p variants={fadeIn} className="mt-3 max-w-2xl text-neutral-300">
        Un aperçu de projets récents — mélange de design, motion et exigence technique.
      </motion.p>

      <motion.div variants={stagger} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fakeImages.map((img, i) => (
          <motion.a
            key={i}
            variants={fadeIn}
            href="#"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 will-change-transform"
          >
            <img
              src={img}
              alt={`Project ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-300">Projet {i + 1}</p>
                <p className="text-xs text-neutral-400">Landing • Motion</p>
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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h2
        variants={fadeIn}
        className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Les étapes de votre projet
      </motion.h2>

      <div className="mt-12 relative">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-700" />

        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Découverte & échange",
              desc: "On apprend à vous connaître, on clarifie vos objectifs et on cerne les enjeux de votre projet pour définir la meilleure stratégie."
            },
            {
              step: "02",
              title: "Stratégie & concept",
              desc: "On établit un plan sur-mesure et un concept créatif qui servira de fil rouge à tout le projet."
            },
            {
              step: "03",
              title: "Design & développement",
              desc: "On crée une expérience visuelle unique, puis on la transforme en site performant (WordPress, React, ou autre), optimisé pour le SEO."
            },
            {
              step: "04",
              title: "Mise en ligne & optimisation",
              desc: "On lance votre site, on analyse ses performances et on ajuste pour qu’il reste efficace sur le long terme."
            }
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Point rouge numéroté */}
              <div className="flex-shrink-0 z-10 h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shadow-lg">
                {p.step}
              </div>

              {/* Carte */}
              <div className="bg-neutral-900 border border-red-600/50 rounded-xl p-6 max-w-md shadow-lg">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-neutral-300">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>


{/* About – Founders focus */}
<section id="about" className="py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="space-y-10">
      
      {/* Intro */}
      <motion.div variants={fadeIn} className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Qui sommes-nous ?</h2>
        <p className="mt-4 text-neutral-300">
          Deux associés à la tête d’October Studio, présents entre
          <span className="text-primary font-medium"> Bruxelles</span>, 
          <span className="text-primary font-medium"> Luxembourg</span>, 
          <span className="text-primary font-medium"> Paris</span> et 
          <span className="text-primary font-medium"> Dubaï</span>.
          Nous concevons des sites performants, des marques fortes et des campagnes digitales qui convertissent.
        </p>
        <p className="mt-3 text-neutral-300">
          Du branding au développement web (React, WordPress, no-code), en passant par le SEO, la publicité en ligne et la création de contenu, 
          nous aidons PME, startups et créateurs à se démarquer et à croître.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        
        {/* Founders cards */}
        <motion.div variants={fadeIn} className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
          {/* Founder 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src="/ouissam.png"
              alt="Photo du co-fondateur 1"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Ouissam Mouniri</h3>
              <p className="mt-1 text-sm text-muted-foreground">Co-fondateur · CEO</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['Dubai', 'Moyen-Orient'].map((city) => (
                  <span key={city} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-300">
  <span className="text-red-500">Stratégie digitale</span> & pilotage projet. 
  Expert en <span className="text-red-500">campagnes marketing</span>, génération de leads, 
  performance business et <span className="text-red-500">conception de maquettes impactantes</span>.
</p>

            </div>
          </div>

          {/* Founder 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src="/hamza.png"
              alt="Photo du co-fondateur 2"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Hamza Kermadi</h3>
              <p className="mt-1 text-sm text-muted-foreground">Co-fondateur · CEO</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['Paris', 'Bruxelles', 'Luxembourg'].map((city) => (
                  <span key={city} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary">
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-300">
  Direction créative & branding.
  <br></br>
  <span className="text-primary font-semibold">RPA Developer</span> & 
  <span className="text-primary font-semibold"> Développeur Web</span>, 
  passionné par le design, l'identité visuelle et les expériences digitales engageantes.
</p>

            </div>
          </div>
        </motion.div>

        {/* Side content: valeurs & compétences */}
{/* Side content: valeurs & compétences */}
<motion.div variants={fadeIn} className="lg:col-span-5">
  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
    <h3 className="text-lg font-semibold">Ce que nous offrons</h3>
    <ul className="mt-4 space-y-3 text-sm text-neutral-300">
      <li className="flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
        Sites web haute performance (vitrine, e-commerce, applications sur-mesure)
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
        Stratégies marketing & campagnes publicitaires multicanal
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
        Branding, identité visuelle & création de contenu engageant
      </li>
      <li className="flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
        SEO, analytics & optimisation continue des performances
      </li>
    </ul>

    {/* Engagements & objectifs */}
    <div className="mt-6 grid grid-cols-3 gap-3">
      {[
        { k: '100%', v: 'projets sur-mesure' },
        { k: 'A+', v: 'Perf/SEO visé' },
        { k: '<1s', v: 'Temps de chargement ciblé' },
      ].map((m) => (
        <div key={m.k} className="rounded-xl border border-border bg-background p-4 text-center">
          <p className="text-xl font-semibold">{m.k}</p>
          <p className="mt-1 text-xs text-muted-foreground">{m.v}</p>
        </div>
      ))}
    </div>

    {/* Compétences */}
    <div className="mt-6 flex flex-wrap gap-2 text-xs">
      {[
        'React',
        'WordPress',
        'No-code',
        'SEO',
        'Google Ads',
        'Social Ads',
        'Branding',
        'Motion Design',
        'RPA',
        'UI/UX Design'
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary"
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


      {/* CTA + Contact */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.div variants={fadeIn} className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Parlons de votre projet</h2>
                  <p className="mt-3 max-w-md text-neutral-300">
                    Dites‑nous où vous voulez aller. On revient vers vous sous 24h avec une proposition claire.
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
                    <a href="https://www.instagram.com/the.octoberstudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-4 w-4 hover:text-primary transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/company/theoctoberstudio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4 hover:text-primary transition-colors" />
                    </a>
                  </div>

                </div>
                <form className="grid gap-3">
                  <Input placeholder="Votre nom" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Budget estimé (ex: 2‑5k€)" />
                  <Textarea rows={5} placeholder="Parlez‑nous de votre idée…" />
                  <Button className="mt-2 w-full rounded-2xl" type="submit">
                    Envoyer <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-center text-xs text-neutral-400">En cliquant, vous acceptez notre politique de confidentialité.</p>
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
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} October Studio. Tous droits réservés.</p>
            <nav className="flex items-center gap-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
    </LazyMotion>

  );
}
