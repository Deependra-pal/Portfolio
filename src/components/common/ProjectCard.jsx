import Icon from "../ui/Icon";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="saas-card overflow-hidden p-6 sm:p-8 lg:p-10 relative">
      {/* Glow highlight */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-emerald/5 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
        {/* Project text details */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="inline-flex rounded-full border border-brand-emerald/20 bg-brand-emerald/5 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-brand-emerald">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl font-display leading-tight">
              {project.title}
            </h3>
            
            {/* Challenge description */}
            <div className="mt-6 border-l border-white/10 pl-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">
                The Challenge
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                {project.challenge}
              </p>
            </div>

            {/* Solution summary */}
            <div className="mt-5 border-l border-brand-emerald/20 pl-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">
                The Solution
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-450">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Stats strip & Action Link */}
          <div className="mt-8 border-t border-white/5 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-8">
                {Object.entries(project.stats || {}).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="mt-1 text-base font-bold text-white">
                      {val}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:border-brand-emerald hover:text-brand-emerald transition"
              >
                Launch Project
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Project mockup wrapper */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950 p-2 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-30 z-10" />
          <img
            src={project.image}
            alt={`${project.title} Interface`}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-102"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
