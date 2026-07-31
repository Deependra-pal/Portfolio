/**
 * ThemeSwitcher.jsx
 * Premium floating theme switcher panel — fixed bottom-right.
 *
 * Design:
 * - Glassmorphism container pill
 * - 3 equal circular theme buttons (one per theme)
 * - Active button glows with the theme's accent colour
 * - GSAP hover: button lifts y-3, icon scales, glow intensifies
 * - Tooltip on hover (CSS only — no JS state)
 * - Persists through ThemeContext (localStorage)
 */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../../contexts/ThemeContext';

// Individual theme button with GSAP hover
const ThemeButton = ({ themeData, isActive, onSelect }) => {
  const btnRef = useRef(null);
  const dotRef = useRef(null);
  const { id, name, accent, description } = themeData;

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onEnter = () => {
      gsap.to(btn, {
        y: -4,
        scale: 1.06,
        boxShadow: `0 0 20px ${accent}55, 0 8px 28px rgba(0,0,0,0.4)`,
        duration: 0.28,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(btn, {
        y: 0,
        scale: 1,
        boxShadow: isActive
          ? `0 0 14px ${accent}44, 0 4px 12px rgba(0,0,0,0.3)`
          : '0 2px 8px rgba(0,0,0,0.25)',
        duration: 0.3,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    btn.addEventListener('mouseenter', onEnter);
    btn.addEventListener('mouseleave', onLeave);
    return () => {
      btn.removeEventListener('mouseenter', onEnter);
      btn.removeEventListener('mouseleave', onLeave);
    };
  }, [isActive, accent]);

  // When active state changes, animate the box shadow
  useEffect(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      boxShadow: isActive
        ? `0 0 14px ${accent}44, 0 4px 12px rgba(0,0,0,0.3)`
        : '0 2px 8px rgba(0,0,0,0.25)',
      duration: 0.35,
      ease: 'power3.out',
    });
  }, [isActive, accent]);

  return (
    <div className="relative group/btn flex flex-col items-center gap-1.5">
      <button
        ref={btnRef}
        onClick={() => onSelect(id)}
        aria-label={`Switch to ${name} theme`}
        title={name}
        style={{
          backgroundColor: isActive ? `${accent}18` : 'rgba(255,255,255,0.05)',
          borderColor: isActive ? `${accent}66` : 'rgba(255,255,255,0.12)',
          boxShadow: isActive
            ? `0 0 14px ${accent}44, 0 4px 12px rgba(0,0,0,0.3)`
            : '0 2px 8px rgba(0,0,0,0.25)',
        }}
        className="
          relative h-10 w-10 rounded-full border
          backdrop-blur-sm cursor-pointer
          flex items-center justify-center
          transition-colors duration-300
        "
      >
        {/* Accent dot — the visual identity marker */}
        <span
          ref={dotRef}
          style={{ backgroundColor: accent }}
          className={`rounded-full transition-all duration-300 ${isActive ? 'h-4 w-4 shadow-lg' : 'h-3 w-3'}`}
        />

        {/* Active ring pulse */}
        {isActive && (
          <span
            style={{ borderColor: `${accent}55` }}
            className="absolute inset-0 rounded-full border animate-ping opacity-40"
          />
        )}
      </button>

      {/* Label below button */}
      <span
        style={{ color: isActive ? accent : undefined }}
        className={`text-[8px] font-bold font-mono uppercase tracking-widest transition-colors duration-300 ${
          isActive ? '' : 'text-white/30'
        }`}
      >
        T{themeData.index + 1}
      </span>

      {/* Tooltip on hover */}
      <div
        className="
          absolute bottom-full mb-3 left-1/2 -translate-x-1/2
          pointer-events-none select-none
          opacity-0 group-hover/btn:opacity-100
          transition-opacity duration-200
          whitespace-nowrap
        "
      >
        <div
          className="rounded-lg border border-white/10 bg-zinc-950/95 backdrop-blur-md px-3 py-2 shadow-2xl"
        >
          <p
            style={{ color: accent }}
            className="text-[10px] font-bold font-display uppercase tracking-wider"
          >
            {themeData.label}
          </p>
          <p className="mt-0.5 text-[9px] text-zinc-400 font-mono">{description}</p>
        </div>
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-zinc-900/95" />
      </div>
    </div>
  );
};

// Main switcher container
const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  const containerRef = useRef(null);

  // Entrance animation on mount
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9998] opacity-0"
      style={{ willChange: 'transform' }}
    >
      {/* Glassmorphism pill container */}
      <div
        className="
          flex items-end gap-3 px-4 py-3 rounded-2xl
          border border-white/10
          bg-zinc-950/80 backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        "
      >
        {/* Label */}
        <div className="flex flex-col justify-end pb-1 mr-1">
          <span className="text-[8px] font-bold font-mono uppercase tracking-[0.2em] text-white/25">
            Style
          </span>
        </div>

        {/* Theme buttons */}
        {themes.map((t, index) => (
          <ThemeButton
            key={t.id}
            themeData={{ ...t, index }}
            isActive={theme === t.id}
            onSelect={setTheme}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
