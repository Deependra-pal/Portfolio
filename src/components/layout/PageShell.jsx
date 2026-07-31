/**
 * PageShell.jsx — Layout shell for all pages.
 *
 * PERFORMANCE NOTES:
 * - gsap.registerPlugin removed — done once in main.jsx.
 * - ScrollTrigger.refresh() removed — it forces a full DOM layout measurement
 *   of ALL scroll triggers on every page navigation. This was the root cause of
 *   the visible layout recalc jank when switching pages.
 *   If individual pages need a refresh, they can call it scoped to their own
 *   context (almost never needed with correctly configured triggers).
 * - Lenis duration kept at 1.2 — matches existing feel exactly.
 */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CustomCursor from '../common/CustomCursor';
import ThemeSwitcher from '../common/ThemeSwitcher';


const PageShell = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Link Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // NOTE: ScrollTrigger.refresh() intentionally removed.
    // It was forcing a full layout reflow of all triggers on every page nav.
    // Triggers are correctly configured with once:true and correct start values,
    // so they do not need a forced refresh to function correctly.

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-void-black text-[#faf9f6] antialiased selection:bg-teal-500/20">
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default PageShell;
