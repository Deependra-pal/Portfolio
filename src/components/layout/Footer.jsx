import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import {
  company,
  contact,
  serviceGroups,
  socialLinks,
} from "../../data/company";

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
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 relative overflow-hidden bg-grid-saas">
      {/* 1. Header Newsletter Banner */}
      <div className="border-b border-zinc-800 py-14 bg-zinc-950">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h3 className="text-lg font-bold text-white sm:text-xl font-display">
              Stay ahead in digital execution.
            </h3>
            <p className="mt-2 text-xs text-zinc-500">
              Subscribe to our monthly briefing on headless web tech, mobile engineering, and SEO updates.
            </p>
          </div>
          
          <div className="w-full max-w-sm">
            {subscribed ? (
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-xs text-zinc-300">
                &bull; Subscribed successfully to Probey briefings.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex flex-col gap-2">
                <div className="flex rounded-md border border-zinc-800 bg-zinc-900/50 p-1 focus-within:border-zinc-700">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-2.5 text-xs text-white placeholder-zinc-650 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-white px-5 py-2.5 text-xxs font-bold text-zinc-950 transition hover:bg-zinc-200 font-display uppercase tracking-wider focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                {error && <span className="pl-4 text-[10px] text-red-500">{error}</span>}
              </form>
            )}
          </div>
        </Container>
      </div>

      {/* 2. Main Columns Directory Grid */}
      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-6 relative">
        {/* Column 1 & 2: Branding Column */}
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-850 bg-zinc-900 text-xs font-bold text-white shadow-sm">
              P
            </span>
            <span className="text-sm font-bold text-white transition-colors group-hover:text-zinc-300 font-display">
              {company.name}
            </span>
          </Link>
          <p className="mt-5 text-xs leading-relaxed text-zinc-500 max-w-xs font-semibold">
            {company.approachStatement}
          </p>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href || "#"}
                aria-label={social.label}
                target={social.href && social.href !== "#" ? "_blank" : undefined}
                rel={social.href && social.href !== "#" ? "noopener noreferrer" : undefined}
                className="grid h-8 w-8 place-items-center rounded-md border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:text-white"
              >
                <Icon name={social.key} className="h-4 w-4" strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Services */}
        <nav aria-label="Services links">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Services</h4>
          <ul className="mt-4 space-y-2 text-xs">
            {serviceGroups.slice(0, 2).map((group) => (
              <li key={group.key}>
                <Link
                  to={`/${group.slug}`}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {group.label} Detail
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-zinc-400 transition-colors hover:text-white">
                All Capabilities
              </Link>
            </li>
          </ul>
        </nav>

        {/* Column 4: Company Info */}
        <nav aria-label="Company details">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Company</h4>
          <ul className="mt-4 space-y-2 text-xs">
            <li>
              <Link to="/about" className="text-zinc-400 transition-colors hover:text-white">
                Who We Are
              </Link>
            </li>
            <li>
              <a href="https://probeyservices.com/blog/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
                Our Blog
              </a>
            </li>
            <li>
              <a href="https://probeyservices.com/careers/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 5: Resources */}
        <nav aria-label="Compliance guidelines">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Resources</h4>
          <ul className="mt-4 space-y-2 text-xs">
            <li>
              <a href="https://probeyservices.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://probeyservices.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 6: Contact details */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-zinc-500 font-semibold">
            <li className="flex items-start gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
              <a href={`mailto:${primaryEmail}`} className="hover:text-white transition">
                {primaryEmail}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
              <span>{primaryPhone.numbers[0]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-zinc-400 mt-0.5" />
              <span className="leading-relaxed">
                HQ &mdash; Noida Sec 63
              </span>
            </li>
          </ul>
        </div>
      </Container>

      {/* 3. Bottom Legal Section */}
      <div className="border-t border-zinc-800 bg-zinc-950/90">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[10px] text-zinc-500 sm:flex-row font-mono">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. CIN U74999UP2019PTC124494. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>{company.presence.eyebrow}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{company.presence.title}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
