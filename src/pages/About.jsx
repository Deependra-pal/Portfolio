import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import StatsStrip from "../components/about/StatsStrip";
import MissionVision from "../components/about/MissionVision";
import OurApproach from "../components/about/OurApproach";
import WhatWeDo from "../components/about/WhatWeDo";
import GlobalPresence from "../components/about/GlobalPresence";
import CtaSection from "../components/about/CtaSection";

const About = () => (
  <div className="min-h-screen bg-white text-slate-900 antialiased">
    <Navbar />
    <main>
      <AboutHero />
      <StatsStrip />
      <MissionVision />
      <OurApproach />
      <WhatWeDo />
      <GlobalPresence />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default About;
