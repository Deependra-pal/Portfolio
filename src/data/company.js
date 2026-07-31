// Central content source for Probey Services.
// Values here are taken from the existing live site.
// Anything not present on the current site is marked with a TODO placeholder
// and MUST NOT be invented before it is verified.

export const company = {
  name: "Probey Services",
  // TODO: replace with the real hosted logo asset once available.
  logo: null,
  tagline: "Let's Work Together!",
  eyebrow: "Excited?",
  // Existing copy from the current website (footer statement).
  approachStatement:
    "Our success in collaborating with clients is determined by effective communication, mutual understanding, and a shared commitment to achieving goals.",
  // Existing copy from the current Contact page.
  supportStatement:
    "Have questions or need assistance? We're here to help! Reach out to our team for expert guidance and support.",
  presence: {
    eyebrow: "Reach Us Nationwide",
    title: "Global Presence, One Commitment",
  },
  // TODO: the current site has no dedicated mission/vision copy — confirm final wording with the client.
  mission:
    "TODO: Add official mission statement — not present on the current website.",
  vision:
    "TODO: Add official vision statement — not present on the current website.",
  foundedYear: null, // TODO: not published on the current site.
};

// The three value pillars are derived directly from the existing approach
// statement above (communication, mutual understanding, shared commitment)
// so no new meaning is introduced.
export const values = [
  {
    icon: "chat",
    title: "Effective Communication",
    description:
      "We keep collaboration clear and open at every stage, so expectations and outcomes always stay aligned.",
  },
  {
    icon: "handshake",
    title: "Mutual Understanding",
    description:
      "We take the time to understand your business, your users, and your goals before we build.",
  },
  {
    icon: "target",
    title: "Shared Commitment",
    description:
      "We treat your goals as our own and stay committed to achieving them together.",
  },
];

// Service categories exactly as listed on the current website.
export const serviceGroups = [
  {
    key: "website",
    label: "Website",
    icon: "globe",
    items: [
      "Wordpress Website",
      "Shopify Website",
      "Business Website",
      "Web Application",
      "Website Redesigning",
    ],
  },
  {
    key: "mobile",
    label: "Mobile App",
    icon: "phone",
    items: [
      "iOS App Development",
      "Android App Development",
      "Flutter App Development",
      "Web Application",
      "Website Redesigning",
    ],
  },
  {
    key: "marketing",
    label: "Marketing",
    icon: "megaphone",
    items: [
      "On / Off Page SEO",
      "Google Ads Management",
      "E-commerce Management",
      "Influencer Marketing",
      "Affiliate Marketing",
    ],
  },
  {
    key: "creative",
    label: "Creative",
    icon: "sparkles",
    items: [
      "Brand Theme & Strategy",
      "Website Copywriting",
      "Logo Design",
      "Flyer & Poster Designing",
      "Blogs & Articles",
    ],
  },
];

// Offices exactly as listed on the current website.
export const offices = [
  {
    city: "Noida",
    region: "India",
    lines: ["H-150, Sector 63,", "Noida, Uttar Pradesh 201301"],
  },
  {
    city: "New Delhi",
    region: "India",
    lines: ["2-A/3, Stirring Minds, Asaf Ali Road,", "New Delhi, DL - 110002"],
  },
  {
    city: "Mumbai",
    region: "India",
    lines: [
      "202, Plot No. 175, Kagalwala House,",
      "Santacruz (E), Mumbai, MH - 400098",
    ],
  },
  {
    city: "Hyderabad",
    region: "India",
    lines: [
      "18, Level 1, Midtown Building, Dwarakapuri,",
      "Banjara Hills, Hyderabad, TG - 500034",
    ],
  },
  {
    city: "Gorakhpur",
    region: "India",
    lines: [
      "181, Ashirwad Complex, Basantpur,",
      "Ghantaghar, Gorakhpur, U.P - 273158",
    ],
  },
  {
    city: "Bengaluru",
    region: "India",
    lines: ["19/5, 5th Cross, RBI Layout,", "Outer Ring Rd, Bengaluru, KA - 560076"],
  },
  {
    city: "USA",
    region: "International",
    lines: ["200, Continental Drive", "Newark, DE - 19713"],
  },
  {
    city: "UK",
    region: "International",
    lines: ["Park House, Regus", "Birmingham - B45 9AH"],
  },
  {
    city: "Canada",
    region: "International",
    lines: ["895, Don Mills Road", "Toronto - ON M3C 1W3"],
  },
];

// Contact details exactly as listed on the current website.
export const contact = {
  phones: [
    { region: "India", numbers: ["0120-2507151", "+91-9711858355", "+91-8851075225"] },
    { region: "Nepal", numbers: ["01-5405111", "+977-9813091512", "+977-9810067402"] },
  ],
  // TODO: verify the primary business email — the current site also exposes
  // "info@mfotermi.com", which appears to be leftover template data.
  emails: ["probey@gmail.com"],
  bookingUrl: "https://calendly.com/probeyservices/expert_discovery_call",
};

// Social profiles are present as icons on the current site, but the destination
// URLs are not exposed publicly, so they are left as TODO placeholders.
export const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: null }, // TODO
  { key: "facebook", label: "Facebook", href: null }, // TODO
  { key: "instagram", label: "Instagram", href: null }, // TODO
  { key: "youtube", label: "YouTube", href: null }, // TODO
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// Stats intentionally left as placeholders — the current site publishes no
// numbers, and fabricating them is not allowed.
export const stats = [
  { value: "TODO", label: "Projects Delivered" },
  { value: "9", label: "Global Offices" }, // Derived from the offices list above (verifiable).
  { value: "TODO", label: "Happy Clients" },
  { value: "TODO", label: "Years of Experience" },
];
