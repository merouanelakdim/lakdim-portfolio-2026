import { useEffect, useState } from "react";
import { Menu, Languages, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { siteCopy } from "@/data/site-copy";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const copy = siteCopy[language];
  const links = [
    { href: "#about", label: copy.nav.about, code: "01" },
    { href: "#skills", label: copy.nav.skills, code: "02" },
    { href: "#projects", label: copy.nav.projects, code: "03" },
    { href: "#contact", label: copy.nav.contact, code: "04" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-mono text-sm flex items-center gap-2 group">
          <span className="text-primary glow-text">{"<"}</span>
          <span className="text-foreground font-semibold tracking-wider">LAKDIM</span>
          <span className="text-secondary glow-phosphor animate-blink">_</span>
          <span className="text-primary">{"/>"}</span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <div className="inline-flex items-center p-1 border border-border bg-background/80 backdrop-blur-sm font-mono text-xs uppercase tracking-widest">
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`inline-flex items-center gap-2 px-3 py-2 transition-all ${
                language === "fr" ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Français"
            >
              <Languages size={14} />
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`inline-flex items-center gap-2 px-3 py-2 transition-all ${
                language === "en" ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <nav className="flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary mr-2">{l.code}.</span>
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary-glow transition-all hover:shadow-glow"
            >
              {copy.nav.hireMe}
            </a>
            <a
              href="/Merouane_Lakdim_CV_Ingenieur_Electronique_Emb.pdf"
              download
              className="ml-3 px-4 py-2 border border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {copy.nav.downloadCv}
            </a>
          </nav>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <div className="inline-flex items-center p-1 border border-border bg-background/80 backdrop-blur-sm font-mono text-[10px] uppercase tracking-widest">
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 transition-all ${
                language === "fr" ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
              aria-label="Français"
            >
              <Languages size={13} />
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 transition-all ${
                language === "en" ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <button
            className="text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm py-3 px-2 text-muted-foreground hover:text-primary border-b border-border/50"
              >
                <span className="text-primary mr-2">{l.code}.</span>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
