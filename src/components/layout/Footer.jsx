import Container from "../ui/Container";
import Icon from "../ui/Icon";
import {
  company,
  contact,
  navLinks,
  offices,
  serviceGroups,
  socialLinks,
} from "../../data/company";

const Footer = () => {
  const primaryPhone = contact.phones[0];
  const primaryEmail = contact.emails[0];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              {company.eyebrow}
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {company.tagline}
            </p>
          </div>
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 lg:self-auto"
          >
            Book a Discovery Call
            <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
          </a>
        </Container>
      </div>

      {/* Main footer grid */}
      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-6">
        <div className="col-span-2">
          <a href="/" className="flex items-center gap-2.5">
            {/* TODO: swap for the official Probey Services logo asset. */}
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
              P
            </span>
            <span className="text-lg font-semibold text-white">
              {company.name}
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {company.approachStatement}
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href || "#"}
                aria-label={social.label}
                target={social.href ? "_blank" : undefined}
                rel={social.href ? "noopener noreferrer" : undefined}
                // TODO: real profile URLs pending (see data/company.js).
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-indigo-400 hover:text-white"
              >
                <Icon name={social.key} className="h-5 w-5" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Company">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceGroups.map((group) => (
              <li key={group.key}>
                <a
                  href={`/services#${group.key}`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {group.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2">
          <h3 className="text-sm font-semibold text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
              <a
                href={`mailto:${primaryEmail}`}
                className="transition-colors hover:text-white"
              >
                {primaryEmail}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
              <span>
                {primaryPhone.region}: {primaryPhone.numbers.join(", ")}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
              <span>
                {offices[0].city} — {offices[0].lines.join(" ")}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 sm:flex-row">
          {/* TODO: confirm the exact copyright line used by the client. */}
          <p>
            © {company.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>{company.presence.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>{company.presence.title}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
