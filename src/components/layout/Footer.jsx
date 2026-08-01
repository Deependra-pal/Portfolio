import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import {
  company,
  contact,
  serviceGroups,
  socialLinks,
} from "../../data/company";

// ─── SocialIconButton ─────────────────────────────────────────────────────────
// Individual premium social button with GSAP hover.
// Uses refs to avoid any React re-renders during hover.
const SocialIconButton = ({ social }) => {
  const btnRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const icon = iconRef.current;
    if (!btn || !icon) return;

    // Read the active theme's accent colour at hover time so the effect
    // automatically matches whichever theme is active — no re-renders needed.
    const getAccent = () => {
      const t = document.documentElement.getAttribute("data-theme");
      if (t === "cyber")   return "#38bdf8";
      if (t === "luxury")  return "#b8860b";
      return "#c5e32b"; // forest (default)
    };

    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
      gsap.to(btn, {
        x,
        y,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onEnter = () => {
      const accent = getAccent();
      gsap.to(btn, {
        y: -4,
        borderColor: `${accent}55`,
        boxShadow: `0 0 18px ${accent}22, 0 6px 20px rgba(0,0,0,0.25)`,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });
      gsap.to(icon, {
        scale: 1.15,
        rotate: 8,
        color: accent,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        borderColor: "rgba(255, 255, 255, 0.10)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        duration: 0.5,
        ease: "elastic.out(1.1, 0.4)",
        overwrite: "auto",
      });
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        color: "#a1a1aa",
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    btn.addEventListener("mousemove", onMouseMove);


    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };

  }, []);


  return (
    <a
      ref={btnRef}
      href={social.href || "#"}
      aria-label={social.label}
      target={social.href && social.href !== "#" ? "_blank" : undefined}
      rel={social.href && social.href !== "#" ? "noopener noreferrer" : undefined}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderColor: "rgba(255, 255, 255, 0.10)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
      className="
        grid h-10 w-10 shrink-0 place-items-center
        rounded-full border
        backdrop-blur-sm
        cursor-pointer
      "
    >
      <span ref={iconRef} style={{ color: "#a1a1aa" }} className="flex items-center justify-center">
        <Icon name={social.key} className="h-4 w-4" strokeWidth={1.8} />
      </span>
    </a>
  );
};

// ─── SocialIconRow ─────────────────────────────────────────────────────────────
const SocialIconRow = ({ socialLinks }) => (
  <div className="flex items-center gap-3">
    {socialLinks.map((social) => (
      <SocialIconButton key={social.key} social={social} />
    ))}
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const primaryPhone = contact.phones[0];
  const primaryEmail = contact.emails[0];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="relative pt-0 bg-transparent">

      {/* 1. OVERLAPPING LIME GREEN CTA BANNER (Mockup Part 6 alignment) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] px-4 z-20">
        <div className="relative overflow-hidden rounded-2xl border-2 border-white bg-[#c5e32b] p-6 sm:p-8 md:p-10 shadow-xl max-w-5xl mx-auto text-zinc-950">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">

            {/* Left Column: Portrait portrait & overlay direct badge */}
            <div className="relative shrink-0 w-24 sm:w-28 mx-auto sm:mx-0">
              <div className="rounded-xl border border-white bg-zinc-900/10 overflow-hidden aspect-[3/4] shadow-sm">
                <img src="/assets/cta_consultant.png" alt="Consultant Engineer" className="w-full h-full object-cover animate-pulse" />
              </div>

              {/* Teal contact info badge overlapping photo bottom exactly like mockup */}
              <div className="absolute bottom-[-8px] left-[50%] -translate-x-1/2 bg-[#0d9488] text-white px-2.5 py-1 text-[7px] font-mono rounded-md shadow-md border border-teal-500 w-max leading-none text-center select-none font-bold uppercase tracking-wider">
                +91 97739 01990 &bull; info@probey
              </div>
            </div>

            {/* Right Column: Title text & direct booking CTA with flag notch button */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center sm:text-left w-full">
              <div className="max-w-xl space-y-1">
                <h3 className="text-xl font-bold leading-tight sm:text-2xl font-display text-zinc-950">
                  Speak with our Engineers Today
                </h3>
                <p className="text-xs text-zinc-800 font-semibold leading-relaxed">
                  Let's review your codebase logic, query latency bottlenecks, and headless scaling strategy in a free 30-minute capabilities session.
                </p>
              </div>
              <div className="shrink-0 flex justify-center sm:justify-start">
                <a
                  href={contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ clipPath: "polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)" }}
                  className="bg-zinc-950 hover:bg-zinc-900 text-white font-bold pl-6 pr-10 py-3 rounded-md text-xs font-display transition shadow-md inline-flex items-center gap-1.5"
                >
                  Book Discovery Call &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. DEEP GREEN FOOTER CONTAINER */}
      <footer className="bg-[#041f1a] text-teal-200/50 relative bg-grid-saas pt-16 overflow-hidden">

        {/* Concentric wave lines on the right side matching the mockup */}
        <div className="absolute right-0 top-0 bottom-0 w-[180px] pointer-events-none opacity-15 hidden lg:block z-0">
          <svg className="w-full h-full stroke-white stroke-1" fill="none">
            <path d="M 180,40 Q 60,200 180,360" />
            <path d="M 180,60 Q 80,200 180,340" />
            <path d="M 180,80 Q 100,200 180,320" />
            <path d="M 180,100 Q 120,200 180,300" />
          </svg>
        </div>

        {/* Main Footer Links Grid (4 mockup columns layout) */}
        <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:items-start text-zinc-300 border-b border-teal-950/40 relative z-10">

          {/* Column 1: Useful Links */}
          <nav aria-label="Useful Links" className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Useful Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-[#c5e32b] transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#c5e32b] transition">Contact Us</Link></li>
              <li><Link to="/services" className="hover:text-[#c5e32b] transition">Capabilities</Link></li>
              <li><a href="https://probeyservices.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5e32b] transition">Terms of Service</a></li>
              <li><a href="https://probeyservices.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5e32b] transition">Privacy Policy</a></li>
            </ul>
          </nav>

          {/* Column 2: Careers & Insights */}
          <nav aria-label="Company Insights" className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Careers</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://probeyservices.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5e32b] transition">Our Blog</a></li>
              <li><a href="https://probeyservices.com/careers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5e32b] transition">Careers Directory</a></li>
              <li><a href="mailto:careers@probeyservices.com" className="hover:text-[#c5e32b] transition">Apply Directly</a></li>
              <li><span className="text-[10px] text-zinc-500 font-mono tracking-wider">// Sector 63, Noida</span></li>
            </ul>
          </nav>

          {/* Column 3: Resources */}
          <nav aria-label="Resources" className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://probeyservices.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5e32b] transition">Security Guidelines</a></li>
              <li><Link to="/services" className="hover:text-[#c5e32b] transition">Next.js Headless Docs</Link></li>
              <li><Link to="/contact" className="hover:text-[#c5e32b] transition">Calendly Booking</Link></li>
              <li><span className="text-[10px] text-zinc-500 font-mono tracking-wider">// CIN U74999UP2019PTC124494</span></li>
            </ul>
          </nav>

          {/* Column 4: Newsletter Subscription Input with Flag Notch Button */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">Subscribe</h4>
            <p className="text-xxs leading-relaxed text-zinc-400 font-medium">
              Join our community to receive updates on headless storefronts and core web performance audits.
            </p>

            {subscribed ? (
              <div className="rounded-lg bg-teal-950/60 border border-teal-900/40 p-3 text-[10px] text-teal-300 font-mono">
                ✓ Briefings enabled.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex bg-[#061a17]/50 border border-teal-900/60 rounded-lg p-0.5 focus-within:border-teal-700">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    style={{ clipPath: "polygon(0 0, 100% 0, 84% 50%, 100% 100%, 0 100%)" }}
                    className="bg-white hover:bg-zinc-100 text-zinc-950 font-bold pl-4 pr-6 py-2 text-xs font-display rounded-r-md transition shrink-0 select-none"
                  >
                    Send
                  </button>
                </div>
                {error && <span className="text-[10px] text-red-400 pl-1">{error}</span>}
              </form>
            )}
          </div>

        </Container>

        {/* 3. Bottom Logo & Social Media Icons Row */}
        <Container className="py-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between border-t border-white/5 relative z-10">

          {/* LEFT — Brand block: real Probey Services logo as anchor */}
          <Link
            to="/"
            className="group flex items-center gap-5 w-fit select-none"
            aria-label="Probey Services home"
          >
            {/* Real logo — glow on hover only */}
            <div
              className="
                shrink-0 rounded-2xl p-2
                bg-teal-500/10
                border border-teal-500/20
                shadow-[0_0_20px_rgba(197,227,43,0.06)]
                transition-[box-shadow,border-color] duration-300 ease-out
                group-hover:shadow-[0_0_40px_rgba(197,227,43,0.32)]
                group-hover:border-teal-400/50
              "
            >
              <img
                src="/assets/probey_logo.webp"
                alt="Probey Services"
                className="h-10 w-auto object-contain block"
                loading="lazy"
              />
            </div>

            {/* Brand tagline below */}
            <div className="flex flex-col leading-none gap-1">
              <span className="text-xl font-black text-white font-display uppercase tracking-[0.14em] transition-colors group-hover:text-white">
                Probey <span className="text-[#c5e32b]">Services</span>
              </span>
              <span className="text-[10px] text-teal-400/60 font-mono tracking-[0.18em] uppercase font-medium">
                Engineering &bull; Digital &bull; Growth
              </span>
            </div>
          </Link>

          {/* RIGHT — Premium glassmorphism social icon buttons with GSAP hover */}
          <SocialIconRow socialLinks={socialLinks} />

        </Container>

        {/* 4. Deep Legal Credits */}
        <div className="border-t border-white/5 bg-[#031c18]/90 py-6 relative z-10">
          <Container className="flex flex-col items-center justify-between gap-3 text-[10px] text-teal-200/40 sm:flex-row font-mono">
            <div className="flex gap-4">
              <a href="https://probeyservices.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200/80 transition">Privacy Policy</a>
              <span>&bull;</span>
              <a href="https://probeyservices.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200/80 transition">Terms of Service</a>
              <span>&bull;</span>
              <span className="text-teal-200/60">HQ: Sector 63, Noida</span>
            </div>
            <p>
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </Container>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
