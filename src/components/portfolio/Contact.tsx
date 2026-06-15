import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";
import { siteCopy } from "@/data/site-copy";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/merouane-lakdim/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/merouanelakdim",
    label: "GitHub",
    icon: Github,
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const copy = siteCopy[language];
  const contact = copy.contact;
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formspreeEndpoint) {
      toast({
        title: language === "fr" ? "Formspree non configuré" : "Formspree not configured",
        description: contact.formspreeMissing,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `${contact.subjectPrefix} ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast({ title: language === "fr" ? "Message envoyé" : "Message sent", description: contact.toastSuccess });
      setTimeout(() => setSent(false), 4000);
    } catch {
      toast({
        title: language === "fr" ? "Erreur d'envoi" : "Send error",
        description: contact.toastError,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-card/20 border-t border-border">
      <div className="container">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// 04</span>
          <h2 className="text-3xl md:text-4xl font-bold">{contact.title}</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {contact.heading[0]}<br />
                {contact.heading[1]}<br />
                {contact.heading[2]}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{contact.body}</p>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <a href="mailto:Merouane@lakdim.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background group-hover:border-primary group-hover:text-primary transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{contact.email}</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">Merouane@lakdim.com</div>
                </div>
              </a>
              <a href="tel:+33745654194" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background group-hover:border-primary group-hover:text-primary transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{contact.phone}</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">+33 7 45 65 41 94</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{contact.location}</div>
                  <div className="text-foreground">{contact.city}</div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 border border-phosphor/30 bg-phosphor/5 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-phosphor animate-pulse-glow" />
              <span className="text-phosphor uppercase tracking-widest">{contact.status}</span>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{contact.social}</div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background text-foreground hover:border-primary hover:text-primary transition-all"
                    aria-label={label}
                  >
                    <Icon size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-background border border-border p-6 md:p-8 space-y-5 shadow-card-elevated"
          >
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground border-b border-border pb-3">
              <span>{contact.formTitle}</span>
              <span className="text-phosphor">{contact.ready}</span>
            </div>

            <div>
              <label htmlFor="name" className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                {"> "}{contact.fields.name}
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-primary py-2 font-mono text-sm text-foreground outline-none transition-colors"
                placeholder={contact.placeholders.name}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                {"> "}{contact.fields.email}
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-primary py-2 font-mono text-sm text-foreground outline-none transition-colors"
                placeholder={contact.placeholders.email}
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                {"> "}{contact.fields.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-border focus:border-primary p-3 font-mono text-sm text-foreground outline-none transition-colors resize-none"
                placeholder={contact.placeholders.message}
              />
            </div>

            <button
              type="submit"
              disabled={sent || loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary-glow transition-all hover:shadow-glow disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Send size={14} /> {contact.sending}
                </>
              ) : sent ? (
                <>
                  <Check size={14} /> {contact.sent}
                </>
              ) : (
                <>
                  <Send size={14} /> {contact.send}
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="container mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} · Merouane Lakdim · {contact.footerText}</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-phosphor animate-pulse-glow" />
          <span>{contact.footerBuild}</span>
        </div>
      </div>
    </section>
  );
};
