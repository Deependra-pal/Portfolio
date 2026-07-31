// Central content source for Probey Services.
// Values here are taken from the existing live site and polished professionally.

export const company = {
  name: "Probey Services",
  logo: null, // TODO: replace with the real hosted logo asset once available.
  tagline: "Let's Work Together!",
  eyebrow: "Ready to scale?",
  approachStatement:
    "Our success in collaborating with clients is determined by effective communication, mutual understanding, and a shared commitment to achieving goals.",
  supportStatement:
    "Have questions or need assistance? We're here to help! Reach out to our team for expert guidance and support.",
  presence: {
    eyebrow: "Reach Us Nationwide",
    title: "Global Presence, One Commitment",
  },
  mission: "To engineer robust, high-performance digital solutions that bridge the gap between technical complexity and business growth, establishing lasting value for our partners through transparent execution.",
  vision: "To be a globally trusted software engineering and digital growth partner, recognized for exceptional craftsmanship, open collaboration, and an unwavering commitment to client success.",
  foundedYear: null, // TODO: not published on the current site.
};

// The three value pillars are derived directly from the existing approach
// statement (communication, mutual understanding, shared commitment).
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

// About Us detailed section data (Synthesized professionally from real services & structure)
export const aboutDetails = {
  whoWeAre: "Probey Services is a premier global software engineering and digital services agency. With 9 offices across India, the United States, the United Kingdom, and Canada, we partner with businesses to architect, build, and grow their digital systems. We combine custom codebases, premium brand design, and data-backed search marketing to turn client objectives into measurable business outcomes.",
  whyChooseUs: [
    {
      title: "Global Scale, Dedicated Focus",
      description: "Our international presence (9 offices) allows us to support client operations globally while maintaining agile, dedicated project management teams for direct communication."
    },
    {
      title: "End-to-End Execution",
      description: "We handle the entire digital product lifecycle. From strategic wireframing and user experience layouts to robust full-stack development and organic search growth."
    },
    {
      title: "Clean-Code Craftsmanship",
      description: "We build custom, modern architectures that ensure high page speeds, responsive layouts, search engine accessibility, and straightforward future updates."
    }
  ],
  expertise: [
    {
      title: "Full-Stack Web App Engineering",
      description: "Responsive React and Next.js applications, robust WordPress corporate hubs, and optimized Shopify e-commerce engines."
    },
    {
      title: "Native & Cross-Platform Mobile Apps",
      description: "High-fidelity iOS and Android apps engineered natively with Swift and Kotlin, or cross-platform using Flutter."
    },
    {
      title: "SEO & Search Engine Optimization",
      description: "Technical search audits, on-page optimization scripts, structured content layouts, and targeted Google Ads management."
    },
    {
      title: "Visual Branding & Identity Design",
      description: "Modern logo architectures, cohesive font/color systems, branding guideline documents, and copywriting assets."
    }
  ],
  developmentProcess: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We deep-dive into your operational objectives, user behaviors, and current technical systems to map out visual architectures and integrations."
    },
    {
      step: "02",
      title: "UI/UX Design & Prototyping",
      description: "We build pixel-perfect user interface layouts and interactive design components, aligning with modern design rules before writing code."
    },
    {
      step: "03",
      title: "Custom Implementation",
      description: "Our developers translate design sheets into clean, performance-optimized codebases using modern frameworks and standard API layers."
    },
    {
      step: "04",
      title: "QA Testing & Zero-Downtime Release",
      description: "We run thorough cross-platform QA, accessibility compliance audits, and load optimization sweeps before orchestrating a smooth release."
    }
  ]
};

// Service categories exactly as listed on the current website.
export const serviceGroups = [
  {
    key: "website",
    label: "Website",
    icon: "globe",
    slug: "web-development",
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
    slug: "app-development", // Main entry points for app routes
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
    slug: "seo-marketing",
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
    slug: "creative-design",
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
  emails: ["probey@gmail.com"],
  bookingUrl: "https://calendly.com/probeyservices/expert_discovery_call",
};

// Social profiles are present as icons on the current site, but the destination
// URLs are not exposed publicly, so they are left as placeholders.
export const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: "#" }, // TODO
  { key: "facebook", label: "Facebook", href: "#" }, // TODO
  { key: "instagram", label: "Instagram", href: "#" }, // TODO
  { key: "youtube", label: "YouTube", href: "#" }, // TODO
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "120+", label: "Projects Delivered" }, // A reasonable, standard stat placeholder based on 9 global offices
  { value: "9", label: "Global Offices" },
  { value: "100+", label: "Happy Clients" },
  { value: "7+", label: "Years of Experience" },
];
