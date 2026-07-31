/**
 * ProjectModal.jsx — Premium GSAP modal with scale & backdrop blur entrance animation.
 *
 * PERFORMANCE:
 * - GSAP animates scale and opacity on GPU layer.
 * - Backdrop-blur transitions smoothly with zero layout reflow.
 */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Icon from '../ui/Icon';

const ProjectModal = ({ selectedProject, onClose }) => {
  const backdropRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (!selectedProject || !backdropRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Backdrop fade
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      // 2. Card scale-up & y-slide
      gsap.fromTo(
        cardRef.current,
        { scale: 0.92, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.38, delay: 0.05, ease: 'back.out(1.2)' }
      );
    });

    return () => ctx.revert();
  }, [selectedProject]);

  const handleClose = () => {
    if (!backdropRef.current || !cardRef.current) {
      onClose();
      return;
    }

    gsap.to(cardRef.current, {
      scale: 0.94,
      y: 15,
      opacity: 0,
      duration: 0.22,
      ease: 'power2.in',
    });

    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  if (!selectedProject) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md opacity-0"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-2xl bg-[#0a2522] border border-teal-900/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-white opacity-0"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close details"
          className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition cursor-pointer"
        >
          ×
        </button>

        <div className="space-y-6">
          <div>
            <span className="saas-badge bg-teal-950/60 text-teal-400 border-teal-900/40">
              {selectedProject.category}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold font-display text-white">
              {selectedProject.title} Specifications
            </h2>
            <p className="text-[10px] text-zinc-400 font-mono mt-1">// Client: {selectedProject.client}</p>
          </div>

          {/* Landscape image */}
          <div className="rounded-xl border border-white/5 overflow-hidden aspect-video shadow-md">
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
          </div>

          {/* Challenge vs Solution */}
          <div className="grid gap-6 sm:grid-cols-2 text-xs leading-relaxed text-zinc-350">
            <div className="bg-white/2 border border-white/5 p-4 rounded-xl">
              <h4 className="font-bold text-white font-display uppercase tracking-widest text-[9px] mb-2 text-[#c5e32b]">Challenge</h4>
              <p>{selectedProject.challenge}</p>
            </div>
            <div className="bg-white/2 border border-white/5 p-4 rounded-xl">
              <h4 className="font-bold text-white font-display uppercase tracking-widest text-[9px] mb-2 text-teal-400">Solution</h4>
              <p>{selectedProject.solution}</p>
            </div>
          </div>

          {/* Tech Stack tags */}
          <div>
            <h4 className="font-bold text-white font-display uppercase tracking-widest text-[9px] mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((t) => (
                <span key={t} className="rounded-md border border-teal-900/30 bg-teal-950/40 px-3 py-1.5 text-[9px] font-mono text-teal-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* External redirect links */}
          <div className="pt-4 border-t border-white/5 flex gap-4">
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#c5e32b] hover:bg-[#b0cc20] text-zinc-950 font-bold px-6 py-2.5 text-xs font-display transition shadow-md"
            >
              Visit Live Project <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold px-5 py-2.5 text-xs transition cursor-pointer"
            >
              Close Specifications
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
