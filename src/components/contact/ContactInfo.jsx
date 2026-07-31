import Icon from "../ui/Icon";
import { contact, socialLinks } from "../../data/company";

const InfoCard = ({ children }) => (
  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7">
    {children}
  </div>
);

const CardHead = ({ icon, title }) => (
  <div className="flex items-center gap-3">
    <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600">
      <Icon name={icon} className="h-5 w-5" />
    </span>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col gap-5">
    {/* Call Us */}
    <InfoCard>
      <CardHead icon="phone" title="Call Us" />
      <div className="mt-5 space-y-4">
        {contact.phones.map((entry) => (
          <div key={entry.region}>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {entry.region}
            </p>
            <ul className="mt-1.5 space-y-1">
              {entry.numbers.map((number) => (
                <li key={number}>
                  <a
                    href={`tel:${number.replace(/[^+\d]/g, "")}`}
                    className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </InfoCard>

    {/* Email Us */}
    <InfoCard>
      <CardHead icon="mail" title="Email Us" />
      <ul className="mt-5 space-y-2">
        {contact.emails.map((email) => (
          <li key={email}>
            <a
              href={`mailto:${email}`}
              className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
            >
              {email}
            </a>
          </li>
        ))}
      </ul>
    </InfoCard>

    {/* Follow Our Social Media */}
    <InfoCard>
      <CardHead icon="sparkles" title="Follow Our Social Media" />
      <div className="mt-5 flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.key}
            href={social.href || "#"}
            aria-label={social.label}
            target={social.href ? "_blank" : undefined}
            rel={social.href ? "noopener noreferrer" : undefined}
            // TODO: real profile URLs pending (see data/company.js).
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Icon name={social.key} className="h-5 w-5" strokeWidth={1.6} />
          </a>
        ))}
      </div>
    </InfoCard>
  </div>
);

export default ContactInfo;
