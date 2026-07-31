// Lightweight inline-SVG icon set (no external icon dependency).
// Each icon is drawn on a 24x24 grid and inherits `currentColor`.

const paths = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M10 6l9-3v18l-9-3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3Z" />
      <path d="M18 14l.9 2.2L21 17l-2.1.8L18 20l-.9-2.2L15 17l2.1-.8L18 14Z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  handshake: (
    <>
      <path d="M12 8l-2-2a2 2 0 0 0-3 0L3 10v4l3 3" />
      <path d="M12 8l2-2a2 2 0 0 1 3 0l4 4v4l-3 3" />
      <path d="M9 14l2 2 2-2 2 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4 6-7.2 6-10a6 6 0 1 0-12 0c0 2.8 2 6 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 5 8-5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  check: <path d="m5 12 5 5L20 7" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
    </>
  ),
  facebook: (
    <path d="M14 9V7a1 1 0 0 1 1-1h2V3h-3a4 4 0 0 0-4 4v2H8v3h2v9h3v-9h2.5l.5-3H13" />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17 7v.01" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="m11 9 4 3-4 3V9Z" />
    </>
  ),
};

const Icon = ({ name, className = "h-6 w-6", strokeWidth = 1.8, ...rest }) => {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  );
};

export default Icon;
