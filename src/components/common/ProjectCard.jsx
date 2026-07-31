import Icon from "../ui/Icon";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="saas-card overflow-hidden p-6 sm:p-8 lg:p-10 relative">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
        {/* Project text details */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="inline-flex rounded border border-current/10 bg-current/5 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wider opacity-70">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl font-display leading-tight">
              {project.title}
            </h3>
            
            {/* Challenge description */}
            <div className="mt-6 border-l border-zinc-200/80 pl-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider opacity-60 font-display">
                The Challenge
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed opacity-80">
                {project.challenge}
              </p>
            </div>

            {/* Solution summary */}
            <div className="mt-5 border-l border-zinc-200/80 pl-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider opacity-60 font-display">
                The Solution
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed opacity-80">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Stats strip & Action Link */}
          <div className="mt-8 border-t border-zinc-200/40 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-8">
                {Object.entries(project.stats || {}).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-50 font-display">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="mt-1 text-base font-bold font-mono">
                      {val}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white text-zinc-950 px-5 py-2.5 text-xs font-bold font-display uppercase tracking-wider hover:bg-zinc-50 transition"
              >
                Launch Project
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Project mockup wrapper */}
        <div className="relative overflow-hidden rounded-xl border border-zinc-200/60 bg-zinc-50 p-2">
          <img
            src={project.image}
            alt={`${project.title} Interface`}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
