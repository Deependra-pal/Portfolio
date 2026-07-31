import Icon from "../ui/Icon";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <div className="saas-card overflow-hidden p-6 sm:p-8 lg:p-10 relative">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
        {/* Project text details */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="inline-flex rounded border border-zinc-850 bg-zinc-900 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl font-display leading-tight">
              {project.title}
            </h3>
            
            {/* Challenge description */}
            <div className="mt-6 border-l border-zinc-800 pl-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-550 font-display">
                The Challenge
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {project.challenge}
              </p>
            </div>

            {/* Solution summary */}
            <div className="mt-5 border-l border-zinc-800 pl-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-550 font-display">
                The Solution
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Stats strip & Action Link */}
          <div className="mt-8 border-t border-zinc-800 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-8">
                {Object.entries(project.stats || {}).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-550 font-display">
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
                className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:border-zinc-700 transition"
              >
                Launch Project
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Project mockup wrapper */}
        <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-2">
          <img
            src={project.image}
            alt={`${project.title} Interface`}
            className="w-full h-auto object-cover rounded transition-transform duration-500 hover:scale-101"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
