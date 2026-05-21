import { stats, timeline } from "@/data/portfolio";
import { CheckCircle2, Circle } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// 01</span>
          <h2 className="text-3xl md:text-4xl font-bold">À propos</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        {/* Stats marquee */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-20 border border-border">
          {stats.map((s) => (
            <div key={s.code} className="bg-background p-6 group hover:bg-card transition-colors">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                {s.code}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Bio */}
          <div className="lg:col-span-5 space-y-5 text-muted-foreground leading-relaxed">
            <p>
               <span className="text-foreground font-medium">je suis Merouane Lakdim</span>, ingénieur en électronique embarquée. J'aime particulièrement la zone où le <span className="text-primary">hardware rencontre le software</span> — drivers, firmware bas niveau, et systèmes Linux embarqués qui doivent tenir en production.
            </p>
            <p>
              Mes terrains de jeu : conception <span className="text-foreground">PCB</span>, firmware sur <span className="text-foreground">STM32 / ESP32</span>, vision artificielle embarquée, IoT industriel, automatisme et FPGA. Je vise toujours des solutions <span className="text-phosphor">fiables, économes et maintenables</span>.
            </p>
            <p>
              Aujourd'hui, je cherche un <span className="text-foreground">CDI à Paris</span> pour rejoindre une équipe ambitieuse, exigeante techniquement, et qui livre des produits réels.
            </p>
            <a
              href="https://www.lakdim.com/assets/Merouane_Lakdim_CV_Ingenieur_Electronique_Emb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
            >
              ./télécharger-cv.pdf
            </a>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
              {">"} ./timeline --reverse
            </div>
            <ol className="relative space-y-6 border-l border-border pl-8">
              {timeline.map((t, i) => (
                <li key={i} className="relative group">
                  <span className="absolute -left-[42px] top-1 flex items-center justify-center w-7 h-7 bg-background border border-border rounded-full">
                    {t.status === "active" ? (
                      <Circle size={12} className="text-phosphor fill-phosphor animate-pulse-glow rounded-full" />
                    ) : (
                      <CheckCircle2 size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </span>
                  <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">{t.year}</div>
                  <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                  <div className="text-xs text-muted-foreground mb-1">{t.org}</div>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
