import { useEffect, useState } from "react";
import { ArrowDown, MapPin, Mail, Phone } from "lucide-react";

const lines = [
  "$ whoami",
  "→ Merouane LAKDIM",
  "$ cat ./role.txt",
  "→ Ingénieur Électronique Embarquée",
  "$ ./status --check",
  "→ [OK] Disponible · CDI · Paris",
];

export const Hero = () => {
  const [typed, setTyped] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar(currentChar + 1), 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setTyped((p) => [...p, line]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [currentChar, currentLine]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-phosphor to-transparent animate-scan opacity-60 pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: terminal + text */}
        <div className="lg:col-span-7 space-y-8">
          {/* status badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-phosphor/30 bg-phosphor/5 rounded-sm font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-phosphor animate-pulse-glow" />
              <span className="relative rounded-full h-2 w-2 bg-phosphor" />
            </span>
            <span className="text-phosphor uppercase tracking-widest">System online · Available for hire</span>
          </div>

          {/* terminal block */}
          <div className="font-mono text-sm md:text-base bg-[hsl(var(--terminal-bg))] border border-border rounded-sm p-5 shadow-card-elevated scan-lines min-h-[200px]">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-warning/70" />
              <span className="w-3 h-3 rounded-full bg-phosphor/70" />
              <span className="ml-2 text-muted-foreground text-xs">~ /home/merouane — zsh</span>
            </div>
            {typed.map((l, i) => (
              <div key={i} className={l.startsWith("$") ? "text-primary" : "text-phosphor"}>
                {l}
              </div>
            ))}
            {currentLine < lines.length && (
              <div className={lines[currentLine].startsWith("$") ? "text-primary" : "text-phosphor"}>
                {lines[currentLine].slice(0, currentChar)}
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-blink align-middle" />
              </div>
            )}
          </div>

          {/* main heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              <span className="block text-foreground">Du <span className="text-primary glow-text">silicium</span></span>
              <span className="block text-muted-foreground/60">au <span className="text-phosphor glow-phosphor">cloud</span>.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Ingénieur en électronique embarquée — je conçois du <span className="text-foreground">hardware</span>, écris du <span className="text-foreground">firmware</span> et bâtis des systèmes <span className="text-foreground">IoT, IA & Linux embarqué</span> qui tiennent en production.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary-glow transition-all hover:shadow-glow"
            >
              ./voir-les-projets
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border bg-background/40 backdrop-blur-sm text-foreground font-mono text-xs uppercase tracking-widest hover:border-phosphor hover:text-phosphor transition-all"
            >
              ./me-contacter
            </a>
          </div>
        </div>

        {/* RIGHT: profile card */}
        <div className="lg:col-span-5 relative">
          <div className="relative corner-brackets bg-gradient-card border border-border p-1 shadow-card-elevated animate-float">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src="/public/images/profile_1.jpg"
                alt="Portrait de Merouane Lakdim, ingénieur électronique embarquée"
                className="w-full h-full object-cover grayscale-[20%] contrast-110"
                loading="eager"
              />
              {/* overlay grid */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--phosphor) / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--phosphor) / 0.2) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              {/* HUD overlays */}
              <div className="absolute top-3 left-3 font-mono text-[10px] text-phosphor uppercase tracking-widest bg-background/70 backdrop-blur px-2 py-1">
                ID · 0x4D4C
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] text-primary uppercase tracking-widest bg-background/70 backdrop-blur px-2 py-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-phosphor animate-pulse" />
                REC
              </div>
              <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-foreground bg-background/80 backdrop-blur p-2 space-y-0.5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">subject:</span>
                  <span>Lakdim Merouane</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">role:</span>
                  <span className="text-primary">Embedded Eng.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">status:</span>
                  <span className="text-phosphor">● ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* contact mini-card */}
          <div className="mt-6 grid grid-cols-1 gap-2 font-mono text-xs">
            <a href="mailto:Merouane@lakdim.com" className="flex items-center gap-3 px-3 py-2.5 border border-border bg-card/40 hover:border-primary hover:text-primary transition-colors">
              <Mail size={14} className="text-primary" /> Merouane@lakdim.com
            </a>
            <a href="tel:+33745654194" className="flex items-center gap-3 px-3 py-2.5 border border-border bg-card/40 hover:border-primary hover:text-primary transition-colors">
              <Phone size={14} className="text-primary" /> +33 7 45 65 41 94
            </a>
            <div className="flex items-center gap-3 px-3 py-2.5 border border-border bg-card/40 text-muted-foreground">
              <MapPin size={14} className="text-primary" /> Paris, France
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
