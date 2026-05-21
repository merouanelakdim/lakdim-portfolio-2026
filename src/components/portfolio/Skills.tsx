import { skills } from "@/data/portfolio";
import { Cpu, Terminal, Code2, Factory, CircuitBoard, Wrench, ChevronRight } from "lucide-react";

const iconMap: Record<string, typeof Cpu> = {
  Cpu, Terminal, Code2, Factory, CircuitBoard, Wrench,
};

const techMarquee = [
  "STM32", "ESP32", "ARM Cortex-M", "VHDL", "Verilog", "KiCad", "LTspice",
  "Cadence", "Linux", "Yocto", "Buildroot", "Python", "C/C++", "FastAPI",
  "Docker", "GitLab CI", "OpenCV", "YOLO", "Modbus", "BLE", "LoRa", "TIA Portal",
];

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-card/20 border-y border-border">
      <div className="container">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// 02</span>
          <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2>
          <span className="flex-1 h-px bg-border" />
          <span className="hidden md:inline font-mono text-xs text-muted-foreground">[ {skills.length} modules ]</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skills.map((s, idx) => {
            const Icon = iconMap[s.icon] ?? Cpu;
            return (
              <article
                key={s.id}
                className="group relative bg-background p-6 hover:bg-card transition-colors"
              >
                <div className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}/{String(skills.length).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                </div>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground group/item">
                      <ChevronRight size={14} className="text-primary mt-0.5 shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                      <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Tech marquee */}
        <div className="relative mt-16 overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-sm text-muted-foreground">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-primary">▸</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
