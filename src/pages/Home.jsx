/**
 * Home.jsx — Performance-optimized home page.
 *
 * KEY OPTIMIZATIONS:
 * 1. homeFaqs / TESTIMONIALS / MILESTONES are MODULE-LEVEL constants —
 *    they are never recreated on renders. Previously inside the component
 *    body they were reallocated on every state update.
 * 2. filteredProjects uses useMemo — only recomputes when activeCategory changes.
 * 3. handleCtaMouseMove / handleCtaMouseLeave use useCallback — stable refs,
 *    prevents child div re-render propagation.
 * 4. setActiveMilestone(idx) in onUpdate called 60x/sec. Replaced with direct
 *    DOM manipulation via refs. Zero React renders during scroll.
 * 5. animate-bounce → hero-float CSS keyframe (compositor thread, not JS).
 * 6. animate-ping → status-ping CSS keyframe (compositor thread).
 * 7. gsap.registerPlugin removed — called once in main.jsx.
 * 8. Testimonial cards: transition-all → transition-[opacity,transform,filter]
 *    (avoids repainting backdrop-filter on every slide change).
 * 9. hero badge animate-pulse → CSS keyframe (compositor thread).
 */
import { useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Icon from '../components/ui/Icon';
import FAQ from '../components/common/FAQ';
import { contact } from '../data/company';
import { projectsData } from '../data/projects';
import { animateStaggeredReveal, applyMagneticHover, resetMagneticHover } from '../utils/animations';
import AnimatedCounter from '../components/motion/AnimatedCounter';
import TiltCard from '../components/motion/TiltCard';
import Magnetic from '../components/motion/Magnetic';
import ProjectModal from '../components/common/ProjectModal';


// ─── Module-level constants ────────────────────────────────────────────────────
// Defined outside the component so they are created ONCE for the lifetime of
// the module, not re-created on every render.

const HOME_FAQS = [
  {
    question: 'What makes Probey Services different from standard digital agencies?',
    answer: 'We construct custom architectures rather than cheap visual builders. We target sub-second load times and scale capabilities natively.',
  },
  {
    question: 'Do you support global delivery?',
    answer: 'Yes. With 9 offices across India, the US, UK, and Canada, we scale team alignments to match international time zones.',
  },
  {
    question: 'How do we initiate a consultation?',
    answer: 'Book a call directly through our Calendly calendar link or send an inquiry via our contact form.',
  },
];

const TESTIMONIALS = [
  {
    initials: 'SU',
    partner: 'Sunasa E-Commerce Coordinator',
    label: 'Verified Retail Partner • JKL Group',
    quote: 'Probey Services replaced our heavy WordPress templates with a Next.js app. Our storefront load speed dropped under 300ms, and we supported traffic surges during promotion campaigns with zero server crashes.',
  },
  {
    initials: 'SA',
    partner: 'Samyakk Apparel CTO',
    label: 'International Retail Client',
    quote: 'The native iOS storefront application they compiled for our catalog query eliminated visual stutter completely, recovering mobile bounce rates and maximizing conversions.',
  },
  {
    initials: 'PE',
    partner: 'Perfumania CRM Director',
    label: 'Fragrance Distribution Partner',
    quote: 'Their API integration scripts sync our stock inventories in real time with under 1s delays. The abandoned cart checkouts raised automated revenue metrics instantly.',
  },
];

const MILESTONES = [
  { title: 'Deep Database Audits', desc: 'Verifying core index structures and resolving latency bottlenecks before writing logic.' },
  { title: 'High-Fidelity Wireframes', desc: 'Locking down visual properties and layouts dynamically inside Figma drafts.' },
  { title: 'Compiled React & Swift Code', desc: 'Developing production-ready modular repositories bypassing builder templates.' },
  { title: 'Serverless Edge Rollouts', desc: 'Deploying build scripts across 9 global edge node networks for sub-second responses.' },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // activeMilestone: tracked via ref + direct DOM update.
  // Previously used useState which caused React to re-render 60x/sec during scroll.
  const activeMilestoneRef = useRef(0);
  const milestoneTextRef = useRef(null);
  const milestoneProgressBarRef = useRef(null);
  const milestoneDotsRef = useRef([]);
  const milestoneCardsRef = useRef([]);

  // Section Refs
  const mainWrapperRef = useRef(null);
  const heroRef = useRef(null);
  const titleWordsRef = useRef([]);
  const ctaBtnRef = useRef(null);
  const bentoGridRef = useRef(null);
  const timelineRef = useRef(null);
  const projectsGridRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  // filteredProjects: memoized — only recomputes when activeCategory changes
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    if (activeCategory === 'E-Commerce') return projectsData.filter((p) => p.id === 'sunasa' || p.id === 'gueka');
    if (activeCategory === 'Mobile') return projectsData.filter((p) => p.id === 'samyakk');
    if (activeCategory === 'APIs') return projectsData.filter((p) => p.id === 'perfumania' || p.id === 'fragrantors-aroma');
    return projectsData;
  }, [activeCategory]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // 1. SCROLL PROGRESS BAR — scrub linked to body scroll
      gsap.fromTo(
        '.scroll-progress',
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left',
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.15,
          },
        }
      );

      // 2. HERO ENTRANCE — word-by-word stagger reveal
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      if (titleWordsRef.current.length > 0) {
        heroTl.fromTo(
          titleWordsRef.current,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.0, stagger: 0.06, delay: 0.2 }
        );
      }
      heroTl.fromTo(
        '.hero-fade-in',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        '-=0.6'
      );

      // 3. BENTO SERVICES — stagger scale entrance
      animateStaggeredReveal('.bento-anim-card', {
        scale: 0.9,
        duration: 0.9,
        stagger: 0.12,
        ease: 'back.out(1.2)',
        start: 'top 80%',
        trigger: bentoGridRef.current,
      });

      // 4. MILESTONE TRACKER — direct DOM update (zero React re-renders during scroll)
      const milestonesEl = timelineRef.current;
      if (milestonesEl) {
        ScrollTrigger.create({
          trigger: milestonesEl,
          start: 'top center',
          end: 'bottom center',
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * MILESTONES.length),
              MILESTONES.length - 1
            );
            if (idx === activeMilestoneRef.current) return; // skip if same

            activeMilestoneRef.current = idx;

            // Update status text
            if (milestoneTextRef.current) {
              milestoneTextRef.current.textContent = `Timeline status: Step 0${idx + 1} active`;
            }

            // Update progress bar height
            if (milestoneProgressBarRef.current) {
              milestoneProgressBarRef.current.style.height = `${(idx / (MILESTONES.length - 1)) * 130}px`;
            }

            // Update milestone dot styles
            milestoneDotsRef.current.forEach((dot, i) => {
              if (!dot) return;
              if (i <= idx) {
                dot.className = 'grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-mono font-bold border transition-colors duration-300 bg-[#c5e32b] text-zinc-950 border-[#c5e32b] shadow-lg shadow-[#c5e32b]/20';
              } else {
                dot.className = 'grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-mono font-bold border transition-colors duration-300 bg-zinc-900 border-white/10 text-zinc-500';
              }
            });

            // Update milestone dot label colors
            milestoneDotsRef.current.forEach((dot, i) => {
              if (!dot) return;
              const label = dot.nextElementSibling?.querySelector('h4');
              if (label) {
                label.className = `text-xs font-bold font-display transition-colors ${i === idx ? 'text-[#c5e32b]' : 'text-zinc-400'}`;
              }
            });

            // Update milestone cards
            milestoneCardsRef.current.forEach((card, i) => {
              if (!card) return;
              if (i === idx) {
                card.className = 'p-6 rounded-2xl border transition-colors duration-300 bg-white/5 border-[#c5e32b]/20 shadow-2xl';
              } else {
                card.className = 'p-6 rounded-2xl border transition-colors duration-300 bg-white/2 border-white/5 opacity-40';
              }
            });
          },
        });
      }

      // 5. PROJECTS — stagger reveal
      animateStaggeredReveal('.project-anim-card', {
        y: 35,
        duration: 1.0,
        stagger: 0.15,
        ease: 'expo.out',
        trigger: projectsGridRef.current,
        start: 'top 80%',
      });

      // 6. TESTIMONIALS — reveal sweep
      animateStaggeredReveal(testimonialsRef.current, {
        scale: 0.96,
        y: 20,
        duration: 1.2,
        ease: 'circ.out',
        start: 'top 82%',
      });

      // 7. FAQS — stagger row reveal
      animateStaggeredReveal(faqRef.current, {
        y: 20,
        duration: 0.9,
        ease: 'power3.out',
        start: 'top 85%',
      });

    }, mainWrapperRef);

    return () => ctx.revert();
  }, []);

  // Stable magnetic hover handlers (useCallback — no new function on every render)
  const handleCtaMouseMove = useCallback((e) => {
    const btn = ctaBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    applyMagneticHover(btn, x * 0.35, y * 0.35);
  }, []);

  const handleCtaMouseLeave = useCallback(() => {
    resetMagneticHover(ctaBtnRef.current);
  }, []);

  return (
    <div ref={mainWrapperRef} className="bg-[#030f0d] text-[#faf9f6] min-h-screen selection:bg-teal-500/20 relative">

      {/* 1. TOP SCROLL PROGRESS BAR CONTAINER */}
      <div className="fixed top-0 left-0 h-1 bg-[#c5e32b] z-[1000] shadow-[0_0_8px_#c5e32b] scroll-progress w-full" />

      {/* Visual Film Grain Noise overlay */}
      <div className="bg-noise" />

      {/* 1. HERO SECTION (Immersive Dark Mesh Glow Canvas) */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-36 pb-32 border-b border-white/5 bg-gradient-to-b from-[#030f0d] to-[#061a17] text-white min-h-[92vh] flex items-center"
      >
        {/* Dynamic Glow Layer */}
        <div className="absolute inset-0 pointer-events-none radial-glow-mesh opacity-80" />

        <Container className="relative z-10 w-full">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">

            {/* Left Column: Split Headline text reveals & magnetic button hovers */}
            <div className="space-y-8 text-left">
              {/* hero-pulse: CSS keyframe on compositor thread — not JS animate-pulse */}
              <span className="saas-badge bg-teal-950/40 text-teal-350 border-teal-800 select-none hero-pulse">
                ● High-performance compiled software
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-[1.05] tracking-tight text-white select-none">
                {['We', 'build', 'digital', 'systems', 'that', 'shape', 'businesses.'].map((word, idx) => (
                  <span key={idx} className="inline-block overflow-hidden mr-2.5 pb-0 h-fit">
                    <span
                      ref={(el) => (titleWordsRef.current[idx] = el)}
                      className="inline-block transform translate-y-[110%] opacity-0"
                    >
                      {word === 'systems' ? (
                        <span className="text-[#c5e32b] underline decoration-wavy decoration-[#c5e32b]/50">
                          systems
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  </span>
                ))}
              </h1>

              <p className="hero-fade-in text-sm sm:text-base leading-relaxed text-zinc-350 max-w-xl font-medium opacity-0">
                Next-generation Next.js, React headless architectures, and offline-first mobile systems replacing visual builder layouts with compiled sub-second execution logic.
              </p>

              {/* Magnetic CTA button wrapper */}
              <div className="hero-fade-in pt-4 flex flex-wrap items-center gap-6 opacity-0">
                <div
                  className="hover-trigger w-fit"
                  onMouseMove={handleCtaMouseMove}
                  onMouseLeave={handleCtaMouseLeave}
                >
                  <Link
                    ref={ctaBtnRef}
                    to="/contact"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)' }}
                    className="inline-flex items-center justify-center bg-[#c5e32b] hover:bg-[#b0cc20] text-zinc-950 font-bold pl-6 pr-10 py-4 rounded-md text-xs font-display transition duration-300 shadow-lg"
                  >
                    Consult Engineering &rarr;
                  </Link>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-bold font-display uppercase tracking-widest text-[#faf9f6] hover:text-[#c5e32b] transition duration-200 border-b-2 border-white/10 pb-1"
                >
                  Read Capabilities
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Panel graphics overlapping */}
            <div className="hero-fade-in relative w-full max-w-md lg:max-w-none mx-auto select-none opacity-0">

              {/* Main Portrait Frame */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_20px_50px_rgba(13,148,136,0.15)] overflow-hidden aspect-[4/3] max-h-[340px] hover-scale">
                <img
                  src="/assets/hero_engineer.png"
                  alt="Engineering sync supervisor"
                  className="rounded-2xl w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              {/* Floating Tag 1: Git Branch — hero-float runs on compositor thread */}
              <div className="absolute top-6 -left-6 glass-card p-3 rounded-xl flex items-center gap-3.5 shadow-2xl border-white/10 select-none hero-float">
                <span className="flex h-2.5 w-2.5 shrink-0 relative items-center justify-center rounded-full bg-teal-500/20">
                  <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-[#c5e32b] opacity-75" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#c5e32b]" />
                </span>
                <div className="font-mono text-[8px] text-zinc-350">
                  <p className="font-bold text-white uppercase tracking-wider">Deploy: main branch</p>
                  <p className="mt-0.5 text-teal-400">// commit: 8f9a2b7 &bull; node: edge-BOM</p>
                </div>
              </div>

              {/* Floating Tag 2: Dynamic KPIs */}
              <div className="absolute bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-2xl max-w-[200px] border-[#c5e32b]/20">
                <p className="text-[9px] font-extrabold uppercase tracking-widest text-[#c5e32b] font-display">System Integrity</p>
                <div className="mt-3 space-y-2 font-mono text-[9px] text-zinc-300">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Tasks:</span>
                    <span className="font-bold text-white"><AnimatedCounter value="10M+" /></span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Uptime:</span>
                    <span className="font-bold text-teal-400"><AnimatedCounter value="99.99%" /></span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compile:</span>
                    <span className="font-bold text-white"><AnimatedCounter value="12ms" /></span>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </Container>
      </section>

      {/* 2. SERVICES BENTO */}
      <Section id="services" className="bg-[#030f0d] py-32 border-b border-white/5 text-white relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(197,227,43,0.04)_0%,transparent_50%)] z-0" />

        <div className="absolute right-0 top-1/4 text-[11vw] font-extrabold font-display text-white/[0.015] pointer-events-none uppercase select-none z-0 tracking-widest">
          Services
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between px-4">
          <div className="max-w-2xl">
            <span className="saas-badge bg-white/5 text-[#c5e32b] border-white/10">Capabilities</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white font-display">
              Asymmetric Bento services.
            </h2>
          </div>
          <div>
            <Link
              to="/services"
              style={{ clipPath: 'polygon(0 0, 100% 0, 88% 50%, 100% 100%, 0 100%)' }}
              className="inline-flex items-center justify-center bg-[#c5e32b] hover:bg-[#b0cc20] text-zinc-950 font-bold pl-5 pr-8 py-2.5 rounded-md text-xxs font-display transition duration-300 shadow-sm"
            >
              All Capabilities &rarr;
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div ref={bentoGridRef} className="relative z-10 grid gap-6 md:grid-cols-12 max-w-[1400px] mx-auto px-4">

          {/* Card 1: Headless Web (Col span 7) */}
          <div className="glass-card p-8 md:col-span-7 flex flex-col justify-between min-h-[320px] neon-glow-teal cursor-default bento-anim-card opacity-0">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-sm mb-6">
                <Icon name="globe" className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-white font-display">Headless Web Platforms</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300 max-w-md font-medium">
                We replace heavy visual template builders with compile-ready Next.js and custom GraphQL database APIs. Data loading queries resolve in under 18ms at the edge.
              </p>
            </div>
            <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-teal-400 font-mono">
              <span>// EDGE DEPLOYMENTS</span>
              <span>Compiled SSR</span>
            </div>
          </div>

          {/* Card 2: Core Performance (Col span 5) */}
          <div className="glass-card p-8 md:col-span-5 flex flex-col justify-between min-h-[320px] neon-glow-lime cursor-default bento-anim-card opacity-0">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-500/10 text-[#c5e32b] border border-lime-500/20 shadow-sm mb-6">
                <Icon name="zap" className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-white font-display">Performance Targets</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300 font-medium">
                Rigorous Lighthouse testing tuned to score 95+ consistently, preventing customer drop-offs and recovering organic search weights.
              </p>
            </div>
            <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-[#c5e32b] font-mono">
              <span>// GOOGLE CORE WEB VITALS</span>
              <span>99/100 Score</span>
            </div>
          </div>

          {/* Card 3: Caching & Security (Col span 5) */}
          <div className="glass-card p-8 md:col-span-5 flex flex-col justify-between min-h-[320px] neon-glow-lime cursor-default bento-anim-card opacity-0">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-500/10 text-[#c5e32b] border border-lime-500/20 shadow-sm mb-6">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-white font-display">System Integrity</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300 font-medium">
                Serverless database shields, API isolation layers, and custom token keychains ensuring zero server data directory leaks.
              </p>
            </div>
            <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-[#c5e32b] font-mono">
              <span>// ENCRYPTION KEYS</span>
              <span>SHA-256</span>
            </div>
          </div>

          {/* Card 4: Mobile native (Col span 7) */}
          <div className="glass-card p-8 md:col-span-7 flex flex-col justify-between min-h-[320px] neon-glow-teal cursor-default bento-anim-card opacity-0">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-sm mb-6">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-white font-display">iOS & Android Apps</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300 max-w-md font-medium">
                Offline-first mobile interfaces compiled natively using SwiftUI and Kotlin, supported by local database caches for swift catalog navigation.
              </p>
            </div>
            <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-teal-400 font-mono">
              <span>// NATIVE SYSTEM CORE</span>
              <span>SQLite Cache</span>
            </div>
          </div>

        </div>
      </Section>

      {/* 3. TIMELINE & VALUE */}
      <Section id="promise" className="bg-[#061a17] py-32 border-b border-white/5 text-white relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_60%,rgba(13,148,136,0.05)_0%,transparent_50%)] z-0" />

        <div className="absolute left-0 bottom-1/4 text-[11vw] font-extrabold font-display text-white/[0.015] pointer-events-none uppercase select-none z-0 tracking-widest">
          Promise
        </div>

        <div ref={timelineRef} className="relative z-10 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] max-w-[1400px] mx-auto items-center px-4">

          {/* Left Column: Interactive Milestone Visual Indicator */}
          <div className="space-y-8 lg:sticky lg:top-40 relative">
            <span className="saas-badge bg-white/5 text-[#c5e32b] border-white/10">Verification</span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white font-display leading-tight">
              Our Promise to You
            </h2>
            {/* Direct DOM text update — no React re-render on scroll */}
            <p ref={milestoneTextRef} className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-mono">
              Timeline status: Step 01 active
            </p>

            {/* Vertical timeline trace graphic */}
            <div className="relative flex items-center gap-6 border border-white/5 bg-white/2 rounded-2xl p-6 shadow-2xl max-w-md">
              <div className="absolute left-10 top-12 bottom-12 w-0.5 bg-white/5 z-0" />

              {/* Progress bar — height updated via ref, not React state */}
              <div
                ref={milestoneProgressBarRef}
                className="absolute left-10 top-12 w-0.5 bg-[#c5e32b] z-10"
                style={{ height: '0px', transition: 'height 0.3s ease' }}
              />

              <div className="space-y-8 w-full z-20">
                {MILESTONES.map((item, idx) => (
                  <div key={item.title} className="flex items-center gap-5">
                    <span
                      ref={(el) => (milestoneDotsRef.current[idx] = el)}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-mono font-bold border transition-colors duration-300 bg-zinc-900 border-white/10 text-zinc-500"
                    >
                      ✓
                    </span>
                    <div>
                      <h4 className="text-xs font-bold font-display transition-colors text-zinc-400">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Overlapping Tag — hero-float-delayed: CSS keyframe */}
            <div className="absolute -bottom-10 -right-4 glass-card p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 max-w-[190px] hero-float-delayed z-30">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal-950/40 text-teal-400 border border-teal-900/30">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] font-bold text-white uppercase font-display">System Integrity</p>
                <p className="text-[7px] text-teal-400 font-mono mt-0.5">// 42 checkouts verified</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual checklist text rows */}
          <div className="space-y-6 relative">
            <p className="text-sm leading-relaxed text-zinc-350 max-w-xl font-medium">
              We coordinate transparent milestones in shared Slack and Git rooms. Below is the workflow logic that ensures project delivery:
            </p>

            <div className="space-y-6 font-sans">
              {MILESTONES.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (milestoneCardsRef.current[idx] = el)}
                  className="p-6 rounded-2xl border transition-colors duration-300 bg-white/2 border-white/5 opacity-40"
                >
                  <h3 className="text-base font-bold text-white font-display">
                    0{idx + 1} / {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-350 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* 4. ASYMMETRIC MASONRY PROJECTS GRID & CATEGORY FILTER */}
      <Section id="projects" className="bg-[#030f0d] py-32 border-b border-white/5 relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_30%,rgba(197,227,43,0.03)_0%,transparent_55%)] z-0" />

        <div className="absolute left-10 top-1/3 text-[11vw] font-extrabold font-display text-white/[0.015] pointer-events-none uppercase select-none z-0 tracking-widest">
          Works
        </div>

        <Container className="relative z-10 mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between text-left">
          <div>
            <span className="saas-badge bg-white/5 text-teal-400 border-white/10">Portfolio</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-white font-display">
              Shipped systems in action.
            </h2>
          </div>

          {/* Category Filter Navigation */}
          <div className="flex flex-wrap gap-2 relative z-20">
            {['All', 'E-Commerce', 'Mobile', 'APIs'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-xxs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-[#c5e32b] text-zinc-950 shadow-md font-extrabold'
                    : 'bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>

        {/* Asymmetric Masonry Grid */}
        <div ref={projectsGridRef} className="relative z-10 grid gap-8 md:grid-cols-2 max-w-[1400px] mx-auto px-4">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group glass-card cursor-pointer overflow-hidden flex flex-col justify-between project-anim-card opacity-0 ${
                idx % 3 === 0 ? 'md:col-span-2 aspect-video md:aspect-[2.2/1] p-8 sm:p-10' : 'aspect-square p-6 sm:p-8'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="saas-badge bg-white/5 text-teal-400 border-white/5">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-xl sm:text-3xl font-bold font-display text-white group-hover:text-[#c5e32b] transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white transition-transform group-hover:rotate-45 group-hover:bg-[#c5e32b] group-hover:text-zinc-950 duration-300">
                  <Icon name="arrowUpRight" className="h-5 w-5" />
                </span>
              </div>

              {/* Large Image Frame */}
              <div className="my-6 rounded-xl border border-white/10 bg-[#061a17]/40 p-1.5 overflow-hidden aspect-video flex-grow shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>

              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono border-t border-white/5 pt-4">
                <span>// CLIENT VERIFICATION</span>
                <span className="text-[#c5e32b]">Click to zoom specs &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. DYNAMIC 3D DECK TESTIMONIAL CAROUSEL */}
      <Section id="testimonials" className="bg-[#061a17] py-32 border-b border-white/5 relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(13,148,136,0.06)_0%,transparent_50%)] z-0" />

        <div className="absolute right-10 bottom-10 text-[11vw] font-extrabold font-display text-white/[0.015] pointer-events-none uppercase select-none z-0 tracking-widest">
          Reviews
        </div>

        <Container className="relative z-10 max-w-4xl text-center px-4">
          <span className="saas-badge bg-white/5 text-[#c5e32b] border-white/10">Verifications</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white font-display">
            Our Clients Loves Us
          </h2>

          {/* 3D Stack Deck Slider */}
          <div ref={testimonialsRef} className="relative w-full max-w-xl mx-auto min-h-[300px] mt-16 flex items-center justify-center opacity-0">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === activeTestimonial;
              const isPrev = idx === (activeTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
              const isNext = idx === (activeTestimonial + 1) % TESTIMONIALS.length;

              let styleClass = 'opacity-0 scale-75 pointer-events-none translate-x-[150%]';
              if (isActive) styleClass = 'opacity-100 scale-100 z-30 translate-x-0';
              if (isPrev) styleClass = 'opacity-40 scale-85 z-10 -translate-x-[70%] blur-[2px]';
              if (isNext) styleClass = 'opacity-40 scale-85 z-10 translate-x-[70%] blur-[2px]';

              return (
                <div
                  key={idx}
                  className={`absolute w-full max-w-md p-8 glass-card border-white/10 rounded-3xl transition-[opacity,transform,filter] duration-500 ease-out select-none flex flex-col justify-between min-h-[260px] shadow-2xl ${styleClass}`}
                >
                  <div className="text-left">
                    <span className="text-6xl text-teal-850 leading-none select-none font-display">"</span>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-medium font-display mt-[-10px]">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 border-t border-white/5 pt-4">
                    <div className="h-10 w-10 rounded-full bg-teal-900 border border-white/10 flex items-center justify-center font-bold font-mono text-xs text-white">
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white font-display">{t.partner}</h4>
                      <p className="text-[9px] text-[#c5e32b] uppercase tracking-wider mt-0.5">{t.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Slider Buttons */}
          <div className="mt-8 flex justify-center gap-4 relative z-20">
            <button
              onClick={() => setActiveTestimonial((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/2 hover:bg-white/10 text-white transition-colors shadow-sm hover:border-white/20 font-display"
            >
              &larr;
            </button>
            <button
              onClick={() => setActiveTestimonial((v) => (v + 1) % TESTIMONIALS.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/2 hover:bg-white/10 text-white transition-colors shadow-sm hover:border-white/20 font-display"
            >
              &rarr;
            </button>
          </div>
        </Container>
      </Section>

      {/* 6. FAQ ACCORDION */}
      <Section id="faqs" className="bg-[#f4f2ee] pt-32 pb-32 relative overflow-hidden border-b border-zinc-200">
        <div ref={faqRef} className="relative z-10 text-center max-w-3xl mx-auto mb-14 opacity-0 px-4">
          <span className="saas-badge bg-zinc-200 text-zinc-850 border-zinc-300/60 font-semibold">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-950 font-display">
            Answers to cooperation queries
          </h2>
        </div>
        <div className="relative z-10 px-4">
          <FAQ faqs={HOME_FAQS} />
        </div>
      </Section>

      {/* --- FLOATING SPECIFICATION PREVIEW MODAL --- */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;

