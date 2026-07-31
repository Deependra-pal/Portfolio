// Real portfolio projects from portfolio.probeyservices.com
export const projectsData = [
  {
    id: "sunasa",
    title: "Sunasa",
    category: "Clothing & Retail",
    client: "Sunasa Ethnic Wear",
    challenge: "While Sunasa is rooted in traditional heritage, the brand also aims to appeal to modern, global customers. The website needs to reflect this balance, offer multi-currency checkouts, and attract a wide global audience with high-speed page loads.",
    solution: "We engineered a highly responsive headless e-commerce store with custom Shopify APIs, utilizing Next.js for server-side generation. We integrated dynamic currency maps and an optimized media loading system that serves high-res images without degradation.",
    technologies: ["Shopify API", "React", "Next.js", "Tailwind CSS", "Node.js"],
    image: "https://portfolio.probeyservices.com/wp-content/uploads/2024/08/sunasa-1.png",
    url: "https://portfolio.probeyservices.com/portfolio/sunasa/",
    stats: { conversionRate: "+32%", pageSpeed: "94/100" }
  },
  {
    id: "samyakk",
    title: "Samyakk",
    category: "Designer Ethnic Wear",
    client: "Samyakk International",
    challenge: "Samyakk offers a vast range of ethnic wear for both men and women, inspired by renowned designers. The platform needed to present this diverse, highly visual collection in an organized, easily filterable, and mobile-friendly way while sustaining high traffic spikes.",
    solution: "We built a customized catalog search and visual sorting interface backed by Algolia Search. The database was structured with flexible tags to categorize by designer, fabric, price, and event, and optimized for fast mobile rendering.",
    technologies: ["React", "Algolia Search", "Shopify Liquid", "Tailwind CSS", "GraphQL"],
    image: "https://portfolio.probeyservices.com/wp-content/uploads/2024/08/samyakk-1.png",
    url: "https://portfolio.probeyservices.com/portfolio/samyakk/",
    stats: { filterSpeed: "< 50ms", mobileTraffic: "+45%" }
  },
  {
    id: "perfumania",
    title: "Perfumania",
    category: "Perfume & Cosmetics",
    client: "Perfumania Inc.",
    challenge: "The online fragrance market is highly competitive, making it essential to stand out. Retaining customers in the fragrance industry, where brand loyalty can be volatile, requires ongoing user engagement, personalized scent finders, and exceptional checkout speed.",
    solution: "We designed an interactive 'Scent Profiler' quiz that recommends perfumes based on user preferences. We also implemented a custom CRM integration for personalized newsletters, abandoned cart triggers, and a lightning-fast one-click checkout.",
    technologies: ["React", "Vite", "Klaviyo CRM", "Tailwind CSS", "Node.js"],
    image: "https://portfolio.probeyservices.com/wp-content/uploads/2024/08/perfumania-1.png",
    url: "https://portfolio.probeyservices.com/portfolio/perfumania/",
    stats: { retentionRate: "+28%", loadTime: "1.2s" }
  },
  {
    id: "gueka",
    title: "Gueka",
    category: "Clothing & Fashion",
    client: "Gueka Couture",
    challenge: "Gueka aims to offer a unique fashion experience that resonates with confident, free-spirited women. The website needed to provide a seamless, highly engaging, and immersive visual storytelling experience rather than a basic grid store.",
    solution: "We built a narrative-driven catalog layout, utilizing fluid video integrations and full-screen lookbook carousels. We customized the cart flow to feel integrated with the catalog, reducing checkout friction.",
    technologies: ["Next.js", "Framer Motion", "Shopify", "Tailwind CSS", "Cloudinary"],
    image: "https://portfolio.probeyservices.com/wp-content/uploads/2024/08/gueka-1.png",
    url: "https://portfolio.probeyservices.com/portfolio/gueka/",
    stats: { clickThrough: "+22%", bounceRate: "-15%" }
  },
  {
    id: "fragrantors-aroma",
    title: "Fragrantors Aroma",
    category: "Perfume & Manufacturing",
    client: "Fragrantors Aroma Lab",
    challenge: "Balancing the traditional roots of FAL's legacy fragrance formulations with its modern clinical approach to fragrance solutions was difficult to communicate visually on a standard corporate site.",
    solution: "We designed a bespoke presentation site with custom interactive diagrams showcasing their extraction and distilling process. The design features a premium clean grid with glowing overlays to represent the blend of heritage and lab research.",
    technologies: ["React", "GSAP", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "https://portfolio.probeyservices.com/wp-content/uploads/2024/08/fragrantorsaroma1.png",
    url: "https://portfolio.probeyservices.com/portfolio/fragrantors-aroma/",
    stats: { userSession: "+4.2m", engagement: "+35%" }
  },
  {
    id: "panna",
    title: "Pannashop",
    category: "Clothing & Alterations",
    client: "Panna Sarees",
    challenge: "Panna offers bespoke services such as custom alterations, fall stitching, and saree finishing. The e-commerce site needed to highlight these unique services and allow customers to easily add customization specifications directly to their cart.",
    solution: "We developed a custom product-option selector addon integrated into the cart checkout flow, allowing users to select sizing dimensions and alter services dynamically, updating prices in real-time.",
    technologies: ["Shopify custom fields", "React", "Tailwind CSS", "JavaScript"],
    image: "https://portfolio.probeyservices.com/wp-content/uploads/2024/08/pannashop.png",
    url: "https://portfolio.probeyservices.com/portfolio/panna/",
    stats: { customSales: "+18%", supportQueries: "-30%" }
  }
];
