import React, { useState } from "react";
import { m as motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Send, Instagram, Linkedin } from "lucide-react";
import { fadeIn, stagger } from "../lib/animations";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString("fr-FR", {
            dateStyle: "short",
            timeStyle: "short",
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeIn}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12"
          >
            <div className="grid gap-10 md:grid-cols-2">
              {/* Partie gauche */}
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t("contact.title")}
                </h2>
                <p className="mt-3 max-w-md text-neutral-300">
                  {t("contact.subtitle")}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
                  <a
                    href="https://www.instagram.com/the.octoberstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("a11y.social.instagram")}
                  >
                    <Instagram className="h-4 w-4 hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/theoctoberstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("a11y.social.linkedin")}
                  >
                    <Linkedin className="h-4 w-4 hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Formulaire relié à EmailJS */}
              <form onSubmit={handleSubmit} className="grid gap-3">
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.placeholder.name") as string}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.placeholder.email") as string}
                  required
                />
                <Textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.placeholder.message") as string}
                  required
                />
                <Button
                  className="mt-2 w-full rounded-2xl"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "📨 Sending..." : t("contact.send")}
                  {!loading && <Send className="ml-2 h-4 w-4" />}
                </Button>

                {/* Feedback utilisateur */}
                {status === "success" && (
                  <p className="text-center text-sm text-green-400">
                    ✅ {t("contact.success", "Your message has been sent!")}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    ❌ {t("contact.error", "Something went wrong. Please try again.")}
                  </p>
                )}

                <p className="text-center text-xs text-neutral-400">
                  {t("contact.legal")}
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
