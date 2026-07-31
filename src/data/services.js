// Services data matching portfolio-content.md specifications
export const servicesData = {
  "web-development": {
    id: "web-development",
    title: "Web Development",
    subtitle: "Headless web architectures engineered for growth.",
    description: "Pre-rendered web applications, Next.js systems, and high-performance Shopify storefronts. We replace heavy, unstable web builders with fast compiled codebases. By separating your presentation layer from the database, we deliver pages that load instantly, rank higher on search, and scale to thousands of simultaneous users.",
    overviewTitle: "Decoupling frontend visual layouts from database cores",
    overview: "In modern web systems, performance directly dictates conversion metrics. Standard WordPress or Shopify sites load excessive plugins and CSS files that cause high bounce rates. Probey Services designs custom frontend layouts using React and Next.js, pulling data from databases via fast API channels. This ensures your site loads instantly, remains secure from common breaches, and is easily maintainable.",
    
    // Business Problems We Solve (Objections) vs Our Solutions (Fixes)
    challenges: [
      {
        title: "High Bounce Rates & Ad Waste",
        description: "Websites that take longer than 3 seconds to render drive away up to 40% of ad click-throughs, wasting marketing budgets."
      },
      {
        title: "Abandoned Checkout Pipelines",
        description: "Bloated checkout systems and complex visual inputs cause checkout drop-offs."
      },
      {
        title: "Server Crashes During Campaign Spikes",
        description: "Server resources overload during email blasts or ad campaigns."
      }
    ],
    solutions: [
      {
        title: "Probey Speed Fix",
        description: "Pre-rendering static HTML pages on edge servers to deliver content in under 1 second."
      },
      {
        title: "Probey Flow Fix",
        description: "Custom, optimized single-page checkouts with integrated address lookups."
      },
      {
        title: "Probey Edge Fix",
        description: "Deploying on serverless CDN environments (Vercel, Cloudflare Edge) that auto-scale to meet traffic peaks."
      }
    ],

    // Types of Solutions We Build (Solutions list in content file)
    solutionsList: [
      {
        title: "Headless E-commerce Frontends",
        description: "Custom Next.js storefronts pulled from Shopify or BigCommerce APIs."
      },
      {
        title: "React Web Portals",
        description: "Secure dashboard systems, custom client database views, and corporate portals."
      },
      {
        title: "Bespoke Corporate Hubs",
        description: "Optimized marketing sites backed by headless CMS systems (Sanity, WordPress REST)."
      },
      {
        title: "Custom API Integrations",
        description: "Connecting CRM databases, shipping providers, and billing engines."
      }
    ],
    
    // Key Benefits
    benefits: [
      {
        title: "Sub-second Page Speeds",
        description: "Improve user sessions and lower cost-per-click metrics."
      },
      {
        title: "Custom SEO Architecture",
        description: "Semantic markup and sitemaps designed for top organic rankings."
      },
      {
        title: "Security Isolation",
        description: "Decoupled frontends keep database servers hidden and protected from direct threats."
      },
      {
        title: "Simplified Content Updates",
        description: "Intuitive editors allow team content changes without developer assistance."
      }
    ],
    
    // Features
    features: [
      {
        icon: "activity",
        title: "Full Mobile Responsiveness",
        description: "Visual adaptability from phones to ultra-wide displays."
      },
      {
        icon: "zap",
        title: "Automated Image Optimization",
        description: "Next-gen webp encoding with responsive sizing."
      },
      {
        icon: "target",
        title: "Analytics Integrations",
        description: "Structured GA4 and GTM tracking for conversions."
      },
      {
        icon: "shield",
        title: "Technical SEO Schema",
        description: "Schema.org markup to display rich results in search engines."
      }
    ],
    
    // Development Workflow
    workflow: [
      {
        step: "01",
        title: "Technical Discovery",
        description: "Finalize system architecture, catalog specifications, and data limits."
      },
      {
        step: "02",
        title: "Figma Prototyping",
        description: "Build interactive wireframes outlining navigation structures."
      },
      {
        step: "03",
        title: "API Coding",
        description: "Set up repositories, write semantic code, and connect APIs."
      },
      {
        step: "04",
        title: "DNS migration & QA",
        description: "Cross-browser validation and DNS launch orchestration."
      }
    ],
    
    technologies: ["Next.js", "React", "Vite", "Tailwind CSS", "GraphQL", "Node.js", "Shopify Storefront API", "WordPress REST API"],
    industries: ["Clothing & E-commerce", "Perfume & Cosmetics", "Food & Restaurants", "Finance & Visa", "Real Estate", "NGOs & Foundations"],
    
    faqs: [
      {
        question: "What is a headless e-commerce store?",
        answer: "It separates your frontend design (Next.js) from the backend database (Shopify). This guarantees sub-second page loads while retaining Shopify's robust cart tools."
      },
      {
        question: "Will a redesign affect our current search rankings?",
        answer: "No. We map all old URLs with proper 301 redirects and retain matching schema structures, ensuring your search authority remains protected."
      },
      {
        question: "Do we need a developer to update blog posts or products?",
        answer: "No. We build easy CMS panels (Sanity, WordPress, Shopify) that allow you to manage text and images independently."
      }
    ],
    ctaTitle: "Scale your website's performance",
    ctaDesc: "Get in touch with our web engineers to audit your site's speed and outline a headless roadmap.",
    ctaButton: "Book Web Discovery Session"
  },
  "app-development": {
    id: "app-development",
    title: "App Development",
    subtitle: "Secure, compiled mobile apps built for scale.",
    description: "Native iOS (Swift), Native Android (Kotlin), and unified cross-platform Flutter platforms. We design and engineer mobile applications that deliver smooth transitions, secure user storage, and offline capabilities.",
    overviewTitle: "Compiled performance built to guidelines",
    overview: "Mobile users expect immediate feedback and smooth rendering. We build apps that align with Apple's HIG and Google's Material Design. By writing optimized compiled code, we ensure battery-efficient background tasks and secure API structures. Whether targeting native devices or cross-platform Flutter engines, we focus on responsive, secure delivery.",
    
    // Business Problems We Solve (Objections) vs Our Solutions (Fixes)
    challenges: [
      {
        title: "Sluggish Interfaces & Battery Drain",
        description: "HTML5 wrapper apps feel sluggish and exhaust device battery resources."
      },
      {
        title: "UI Drift Across Device Matrices",
        description: "Interface layouts display differently across various Android and iOS screen sizes."
      },
      {
        title: "Security & Data Vulnerabilities",
        description: "Insecure local storage exposes user data and API calls to leaks."
      }
    ],
    solutions: [
      {
        title: "Probey Native Fix",
        description: "Writing compiled Swift and Kotlin, guaranteeing 60fps frame rates and optimized background processing."
      },
      {
        title: "Probey Layout Fix",
        description: "Implementing shared Flutter layout engines with strict responsive constraints to ensure unified visual rendering."
      },
      {
        title: "Probey Encryption Fix",
        description: "Implementing hardware-level Keychain encryption and FaceID/biometric access controls."
      }
    ],

    // Types of Solutions We Build (Solutions list in content file)
    solutionsList: [
      {
        title: "Native iOS Applications",
        description: "SwiftUI systems built natively for Apple platforms."
      },
      {
        title: "Native Android Applications",
        description: "Kotlin apps optimized for diverse device matrices."
      },
      {
        title: "Cross-Platform Flutter Apps",
        description: "Single codebase delivery targeting both app stores simultaneously."
      },
      {
        title: "B2C E-commerce Apps",
        description: "Integrated retail apps featuring push notification loops and instant payments."
      }
    ],
    
    // Key Benefits
    benefits: [
      {
        title: "Direct User Access",
        description: "Push alerts keep your business visible on the user's home screen."
      },
      {
        title: "Offline Capabilities",
        description: "Secure local SQLite databases allow users to access key info without internet."
      },
      {
        title: "Biometric Verification",
        description: "FaceID/Fingerprint support provides secure, frictionless logins."
      },
      {
        title: "Store Approval Guarantee",
        description: "We build strictly to App Store review guidelines, ensuring smooth submissions."
      }
    ],
    
    // Features
    features: [
      {
        icon: "chat",
        title: "Frictionless Push Notifications",
        description: "Automated alerts via FCM and APNs to drive user retention."
      },
      {
        icon: "pin",
        title: "Map & Location Services",
        description: "Integrated GPS maps and geolocation features."
      },
      {
        icon: "activity",
        title: "Offline Syncing",
        description: "Automated local changes sync once internet reconnects."
      },
      {
        icon: "sparkles",
        title: "Apple Pay & Google Pay",
        description: "Single-tap checkout configurations."
      }
    ],
    
    // Development Workflow
    workflow: [
      {
        step: "01",
        title: "Product Blueprinting",
        description: "Map user workflows, database structures, and api boundaries."
      },
      {
        step: "02",
        title: "Interface Prototyping",
        description: "Design high-fidelity wireframes following Apple and Google guidelines."
      },
      {
        step: "03",
        title: "App Dev Coding",
        description: "MVVM state engineering, local database setups, and API connections."
      },
      {
        step: "04",
        title: "TestFlight Audit & Release",
        description: "Test compilation runs, device matrix testing, and managing App Store submissions."
      }
    ],
    
    technologies: ["Swift", "SwiftUI", "Xcode", "Kotlin", "Jetpack Compose", "Android Studio", "Flutter", "Dart", "Firebase", "SQLite"],
    industries: ["Clothing & E-commerce", "Doctors & Clinics", "Hotels & Resorts", "Tour & Travel", "Finance & Insurance", "NGOs"],
    
    faqs: [
      {
        question: "Should we build natively or using Flutter?",
        answer: "For apps requiring complex graphics, Bluetooth tools, or deep OS features, native Swift/Kotlin is best. For e-commerce and catalog apps, Flutter offers native speed at half the development cost."
      },
      {
        question: "Will you manage the App Store submission process?",
        answer: "Yes. We guide you through developer account setup and manage submissions to both stores, resolving any review questions."
      },
      {
        question: "Can the app work offline?",
        answer: "Yes. We integrate local SQLite database caches, allowing users to access key data offline and sync updates when back online."
      }
    ],
    ctaTitle: "Design your mobile roadmap",
    ctaDesc: "Schedule an engineering briefing to discuss your feature list, database requirements, and API scopes.",
    ctaButton: "Book Mobile App Session"
  }
};
