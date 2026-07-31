/**
 * PageShell.jsx — Layout shell for all pages.
 * Integrates Lenis smooth scrolling, PageTransition, Navbar, Footer, and ThemeSwitcher.
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
import PageTransition from '../motion/PageTransition';

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
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default PageShell;
