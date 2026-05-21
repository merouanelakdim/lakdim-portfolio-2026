import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formspreeEndpoint) {
      toast({
        title: "Formspree non configuré",
        description: "Ajoutez VITE_FORMSPREE_ENDPOINT dans votre fichier .env pour activer l'envoi direct.",
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
          _subject: `Contact portfolio · ${form.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message envoyé", description: "Votre message a bien été transmis via Formspree." });
      setTimeout(() => setSent(false), 4000);
    } catch {
      toast({
        title: "Erreur d'envoi",
        description: "Le message n'a pas pu être envoyé. Vérifiez l'URL Formspree et réessayez.",
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
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Une <span className="text-primary glow-text">opportunité</span>,<br/>
                un <span className="text-phosphor">projet</span>,<br/>
                une <span className="text-foreground">question</span> ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Je réponds rapidement. Que ce soit pour un poste en CDI, une mission technique ou simplement échanger sur l'embarqué — n'hésitez pas.
              </p>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <a href="mailto:Merouane@lakdim.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background group-hover:border-primary group-hover:text-primary transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">email</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">Merouane@lakdim.com</div>
                </div>
              </a>
              <a href="tel:+33745654194" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background group-hover:border-primary group-hover:text-primary transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">phone</div>
                  <div className="text-foreground group-hover:text-primary transition-colors">+33 7 45 65 41 94</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-background">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">location</div>
                  <div className="text-foreground">Paris, France</div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 border border-phosphor/30 bg-phosphor/5 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-phosphor animate-pulse-glow" />
              <span className="text-phosphor uppercase tracking-widest">cdi · disponible immédiatement</span>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">social</div>
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

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-background border border-border p-6 md:p-8 space-y-5 shadow-card-elevated"
          >
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground border-b border-border pb-3">
              <span>// new_message.txt</span>
              <span className="text-phosphor">● ready</span>
            </div>

            <div>
              <label htmlFor="name" className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                {"> "}name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-primary py-2 font-mono text-sm text-foreground outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                {"> "}email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-primary py-2 font-mono text-sm text-foreground outline-none transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                {"> "}message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-border focus:border-primary p-3 font-mono text-sm text-foreground outline-none transition-colors resize-none"
                placeholder="Bonjour Merouane, ..."
              />
            </div>

            <button
              type="submit"
              disabled={sent || loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary-glow transition-all hover:shadow-glow disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Send size={14} /> envoi...
                </>
              ) : sent ? (
                <>
                  <Check size={14} /> ./envoyé
                </>
              ) : (
                <>
                  <Send size={14} /> ./envoyer
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} · Merouane Lakdim · All systems operational.</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-phosphor animate-pulse-glow" />
          <span>build: v1.0 · engineer-terminal</span>
        </div>
      </div>
    </section>
  );
};
