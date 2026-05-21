import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "À propos", code: "01" },
  { href: "#skills", label: "Compétences", code: "02" },
  { href: "#projects", label: "Projets", code: "03" },
  { href: "#contact", label: "Contact", code: "04" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

        <nav className="hidden md:flex items-center gap-1">
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
            ./hire-me
          </a>
          <a
            href="/Merouane_Lakdim_CV_Ingenieur_Electronique_Emb.pdf"
            download
            className="ml-3 px-4 py-2 border border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Télécharger CV
          </a>
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
