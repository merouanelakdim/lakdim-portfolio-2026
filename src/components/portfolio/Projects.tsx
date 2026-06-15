import { useState } from "react";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/portfolio";
import { siteCopy } from "@/data/site-copy";
import { useLanguage } from "@/context/language-context";

const filters: ("Tous" | ProjectCategory)[] = ["Tous", "Hardware", "Firmware", "IoT", "FPGA", "IA", "Logiciel", "Industriel"];

const getTranslatedProject = (project: Project, language: "fr" | "en") => {
  const detail = siteCopy[language].projects.details?.[project.id as keyof typeof siteCopy.en.projects.details];
  return detail ? { ...project, ...detail } : project;
};

export const Projects = () => {
  const { language } = useLanguage();
  const copy = siteCopy[language];
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "Tous" ? projects : projects.filter((project) => project.category.includes(active as ProjectCategory));

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// 03</span>
          <h2 className="text-3xl md:text-4xl font-bold">{copy.projects.title}</h2>
          <span className="flex-1 h-px bg-border" />
          <span className="hidden md:inline font-mono text-xs text-muted-foreground">[ {filtered.length} / {projects.length} ]</span>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-10">{copy.projects.intro}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => {
            const isActive = active === filter;
            const label = filter === "Tous" ? copy.projects.filters.all : copy.projects.filters[filter as ProjectCategory];
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-glow"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center font-mono text-muted-foreground py-12">{copy.projects.empty}</div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => {
  const { language } = useLanguage();
  const copy = siteCopy[language];
  const translatedProject = getTranslatedProject(project, language);

  return (
    <article
      onClick={onOpen}
      className="group relative bg-card border border-border overflow-hidden cursor-pointer hover:border-primary transition-all hover:-translate-y-1 duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={translatedProject.image}
          alt={translatedProject.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.category.map((category) => (
            <span key={category} className="font-mono text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur text-primary px-2 py-1 border border-primary/30">
              {category}
            </span>
          ))}
        </div>
        <div className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground bg-background/80 backdrop-blur px-2 py-1">
          {project.year}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
          {translatedProject.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{translatedProject.short}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-primary uppercase tracking-widest">{copy.projects.seeDetails}</span>
          <ArrowUpRight size={16} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const { language } = useLanguage();
  const translatedProject = getTranslatedProject(project, language);

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-card border border-border max-w-3xl w-full my-auto shadow-card-elevated"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3 bg-background/50">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-phosphor/70" />
            <span className="ml-3">~/projects/{project.id}</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="aspect-[16/9] overflow-hidden bg-muted relative">
          <img src={translatedProject.image} alt={translatedProject.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {project.category.map((category) => (
              <span key={category} className="font-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 border border-primary/30">
                {category}
              </span>
            ))}
            <span className="font-mono text-[10px] text-muted-foreground ml-auto">{project.year}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{translatedProject.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{translatedProject.description}</p>

          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">// highlights</div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-phosphor mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">// stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-foreground border border-border bg-background px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>// pour échanger sur ce projet :</span>
            <a href="#contact" onClick={onClose} className="text-primary hover:text-primary-glow uppercase tracking-widest">./contact →</a>
          </div>
        </div>
      </div>
    </div>
  );
};
