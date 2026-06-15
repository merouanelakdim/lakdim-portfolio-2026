import { stats, timeline } from "@/data/portfolio";
import { siteCopy } from "@/data/site-copy";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2, Circle } from "lucide-react";

export const About = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// 01</span>
          <h2 className="text-3xl md:text-4xl font-bold">{copy.about.title}</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-20 border border-border">
          {stats.map((stat) => (
            <div key={stat.code} className="bg-background p-6 group hover:bg-card transition-colors">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                {stat.code}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{copy.about.statsLabels[stat.code as keyof typeof copy.about.statsLabels] ?? stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-5 text-muted-foreground leading-relaxed">
            {copy.about.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <a
              href="/Merouane_Lakdim_CV_Ingenieur_Electronique_Emb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {copy.about.downloadCv}
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
              {copy.about.timelineHeader}
            </div>
            <ol className="relative space-y-6 border-l border-border pl-8">
              {timeline.map((entry, index) => {
                const translated = copy.about.timeline[index] ?? entry;
                return (
                  <li key={index} className="relative group">
                    <span className="absolute -left-[42px] top-1 flex items-center justify-center w-7 h-7 bg-background border border-border rounded-full">
                      {entry.status === "active" ? (
                        <Circle size={12} className="text-phosphor fill-phosphor animate-pulse-glow rounded-full" />
                      ) : (
                        <CheckCircle2 size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </span>
                    <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">{entry.year}</div>
                    <h3 className="text-lg font-semibold text-foreground">{translated.title}</h3>
                    <div className="text-xs text-muted-foreground mb-1">{translated.org}</div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{translated.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
