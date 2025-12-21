const portfolio: {
  id: string;
  title: string;
  description: string;
  techstack?: string[];
  service: string;
  image: string;
  images: string[];
  link: string;
  tag: string;
  about?: string[];
  challenges?: string[];
  objectives?: string[];
  opportunity?: string[];
  solutions?: string[];
  results?: string[];
  roadmap?: string[];
  client?: string[];
  faqs?: { id: number; q: string; a: string }[];
  type: "internal" | "client";
  acquired?: boolean;
}[] = [
    {
      type: "internal",
      id: "crm",
      title: "CRM: The Revenue Engine for High-Velocity Teams.",
      description: "We didn't just build a CRM. We built a revenue engine that cuts data entry by 95%.",
      image: "/portfolio/crm-1.png",
      images: [
        "/portfolio/crm-1.png",
        "/portfolio/crm-2.png",
        "/portfolio/crm-3.png",
        "/portfolio/crm-4.png",
      ],
      link: "https://crm.talentsync.work",
      tag: "AI Revenue Engine",
      techstack: ["Next.js", "PostgreSQL", "OpenAI API", "TailwindCSS"],
      service: "SaaS Product, AI Integration, CRM Development",
      about: [
        "Sales teams hate CRMs because they are data jails. We built a CRM that works for you, not the other way around.",
        "Instead of forcing reps to manually log every interaction, The CRM uses background AI agents to enrich contacts, score intent, and draft outreach automatically. It turns a 20-minute manual workflow into a 30-second review process.",
      ],
      challenges: [
        "The Data Entry Tax: Traditional CRMs cost sales teams 10+ hours a week in manual data entry.",
        "Latency kills momentum: Waiting 3 seconds for a page load breaks a rep's flow. We needed sub-100ms interactions.",
        "Signal extraction: Sales reps miss buying signals because they are buried in noise.",
      ],
      solutions: [
        "Engineered a 'Headless' architecture where the UI is optimistically updated, creating a zero-latency experience regardless of network speed.",
        "Integrated multi-model AI (OpenAI + Anthropic) to score deal health in real-time based on sentiment analysis of email threads.",
        "Built a 'Deal Room' interface that aggregates only actionable tasks, removing the cognitive load of navigating complex menus.",
      ],
      results: [
        "Zero-latency UI interactions (<50ms).",
        "Saved 20+ hours/week per rep in manual data entry.",
        "Managed $2M+ in pipeline with a lean team.",
      ],
      acquired: false,
    },
    {
      type: "internal",
      acquired: true,
      id: "valuemetrix",
      title: "Valuemetrix: Institutional-Grade Analytics for Retail.",
      description:
        "Democratizing Wall Street-grade research. We verified that retail investors could handle institutional data density.",
      techstack: [
        "Next.js",
        "MongoDB",
        "Prisma ORM",
        "Recharts",
        "AI/ML",
        "API Integrations",
      ],
      service:
        "Fintech Engineering, High-Frequency Data, AI Analytics",
      image: "/portfolio/valuemetrix/hero.png",
      images: [
        "/portfolio/valuemetrix/hero.png",
        "/portfolio/valuemetrix/challenges.png",
        "/portfolio/valuemetrix/results.png",
        "/portfolio/valuemetrix/hero.png",
      ],
      link: "https://valuemetrix.io",
      tag: "FINTECH",
      about: [
        "Retail investment tools are usually pretty toys. Valuemetrix is a weapon. We set out to build a platform that gives individual investors the same real-time data density and AI synthesis that hedge funds pay millions for.",
        "This wasn't just about showing charts; it was about processing massive streams of market data and synthesizing them into actionable 'Buy/Sell' narratives using LLMs. TalentSync architected the entire data pipeline and frontend visualization layer.",
      ],
      challenges: [
        "Data Velocity: Processing real-time ticks from 32+ exchanges without crashing the browser.",
        "Regulatory Compliance: Ensuring all financial advice and data handling met strict SEC-level security standards.",
        "Cognitive Overload: Presenting complex financial ratios without overwhelming the user.",
      ],
      solutions: [
        "Built a custom RAG (Retrieval-Augmented Generation) pipeline that ingests live SEC filings and earnings calls to generate instant investment memorandums.",
        "Developed a proprietary caching layer using Redis to serve heavy financial queries in <200ms.",
        "Integrated with 32+ brokerage APIs for direct trade execution, removing the friction between analysis and action.",
      ],
      results: [
        "Achieved 1,000+ weekly active users within 3 months.",
        "4-minute average session time (3x industry average).",
        "Acquired due to the proprietary value of the AI research engine.",
      ],
      roadmap: [
        "Q3 2026: Mobile-first native app (iOS/Android) for trading on the go.",
        "Q4 2026: Social sentiment analysis integration (Reddit/Twitter firehose).",
      ],
      faqs: [
        {
          id: 0,
          q: "How does the AI engine work?",
          a: "It's not just a wrapper. We ingest raw financial data (10-Ks, Earnings Calls) and vector-embed them. When you ask a question, we retrieve the exact context before generating an answer, ensuring high accuracy.",
        },
        {
          id: 1,
          q: "Is this secure?",
          a: "Yes. We use bank-grade encryption (AES-256) for all data at rest and in transit. We never store brokerage credentials directly.",
        },
      ],
    },
    {
      type: "client",
      id: "tezwealth",
      title: "TezWealth: Your Financial Life, Decoded.",
      description: "We unified scattered banking data into a single, intelligent dashboard. Fintech done right.",
      image: "/portfolio/tezwealth/challenges.png",
      images: [
        "/portfolio/tezwealth/challenges.png",
        "/portfolio/tezwealth/hero.png",
        "/portfolio/tezwealth/results.png",
        "/portfolio/tezwealth/results.png",
      ],
      link: "https://tezwealth.ai",
      tag: "AI Personal Finance",
      service:
        "Mobile App Development, Bank Integration, Security Architecture",
      about: [
        "The problem with modern finance is fragmentation. You have a bank app, a trading app, a crypto wallet, and a credit card portal. TezWealth unifies them.",
        "We were tasked with building the 'OS for Money'—a secure, fast, and intelligent layer that sits on top of all your financial institutions. The challenge was making sense of messy transaction data and turning it into clear lifestyle insights.",
      ],
      objectives: [
        "Aggregate data from 50+ banking institutions securely.",
        "Categorize transactions with >95% accuracy using ML models.",
        "Deliver a native mobile experience that feels instant.",
      ],
      solutions: [
        "Architected a scalable Monorepo ensuring feature parity between Web, iOS, and Android.",
        "Implemented an OAuth-based aggregation layer that connects to banks without ever touching user credentials.",
        "Developed a local-first sync engine that allows users to view their data even when offline.",
      ],
      results: [
        "Launch-ready product scaling to thousands of concurrent users.",
        "Processed millions in transaction volume securely.",
        "99.9% uptime across all banking connectors.",
      ],
      faqs: [
        {
          id: 0,
          q: "Is my bank data safe?",
          a: "TezWealth uses read-only access tokens. We cannot move your money, only view it to provide insights. Security is our #1 priority.",
        }
      ],
    },
    {
      type: "internal",
      id: "drafton",
      title: "Drafton: Stop Writing Proposals. Start Closing.",
      description: "Proposal fatigue is real. We killed it. Automated proposal generation for high-volume sales teams.",
      image: "/portfolio/drafton.png",
      images: [
        "/portfolio/draftondashboard.png",
        "/portfolio/draftonproposal.png",
      ],
      link: "https://drafton.io",
      tag: "Sales Automation",
      service:
        "SaaS Engineering, Document Automation, PDF Generation",
      about: [
        "Engineers hate writing docs. Sales reps hate writing proposals. Drafton solves the 'blank page' problem for sales teams.",
        "We built a system that takes raw client requirements and instantly generates a beautifully formatted, legally sound proposal. It transforms a task that used to take 2 hours into a 5-minute review.",
      ],
      challenges: [
        "Formatting Hell: CSS for print/PDF is notoriously difficult to get pixel-perfect.",
        "Dynamic Content: Every client needs something slightly different, but templates are too rigid.",
      ],
      solutions: [
        "Built a React-to-PDF rendering engine that ensures what you see on screen is exactly what the client signs.",
        "Implemented 'Variable Injection' logic that allows dynamic pricing tables and scope definitions to be inserted into static templates.",
      ],
      results: [
        "10x faster proposal turnaround time.",
        "Increased close rates by 15% due to faster response times.",
      ],
      faqs: [
        {
          id: 0,
          q: "Can I use my own branding?",
          a: "Absolutely. Drafton is white-label ready. Bring your own fonts, colors, and logos.",
        }
      ],
    },
    {
      type: "client",
      id: "housepersqft",
      title: "HousePerSqft: Real Estate, reimagined.",
      description:
        "Scaling India's premier property platform with high-performance search and discovery.",
      image: "/portfolio/Housepersqft.png",
      images: [
        "/portfolio/housepersqft-1.png",
        "/portfolio/housepersqft-2.png",
        "/portfolio/housepersqft-2.png",
        "/portfolio/housepersqft-2.png",
      ],
      link: "https://housepersqft.com",
      tag: "PropTech",
      service:
        "Marketplace Development, Geo-Location Search, High-Scale Database",
      client: [
        "HousePerSqft isn't just a listing site; it's a verification engine. In a market flooded with fake listings, they stand for trust.",
        "They needed a platform that could handle complex geo-queries and filter millions of data points instantly to help buyers find the right home.",
      ],
      about: [
        "Building a real estate platform is a database challenge. You have millions of properties, each with dozens of attributes (price, sqft, amenities, location). Querying this efficiently is hard.",
        "We optimized the database schema and search indexing to allow for instant filtering, map-based search, and real-time availability updates.",
      ],
      objectives: [
        "Reduce search latency to <200ms for complex multi-filter queries.",
        "Build a mobile-responsive interface that works seamlessly on low-bandwidth networks.",
      ],
      solutions: [
        "Implemented PostGIS for efficient geospatial searching (finding properties 'near me').",
        "Used aggressive caching strategies at the edge to serve static assets and property images instantly.",
        "Designed a 'guided search' UX that helps users refine their criteria without feeling overwhelmed.",
      ],
      opportunity: [
        "By solving the search latency problem, we directly increased user retention and lead generation for agents.",
      ],
      faqs: [],
    },

    {
      type: "client",
      id: "greekonnect",
      title: "GreeKonnect: A Digital Nation.",
      description: "Connecting the global Greek diaspora through a unified digital ecosystem.",
      image: "/portfolio/greekonnect-hero.png",
      images: ["/portfolio/greekonnect-hero.png"],
      link: "https://greekonnect.com",
      tag: "Community Tech",
      service: "Social Graph Architecture, Community Platform",
      about: [
        "Communities are defined by connection. GreeKonnect is the digital infrastructure for the global Greek diaspora.",
        "We moved beyond simple directories to build a true social graph—connecting professionals, businesses, and events based on shared heritage and location.",
      ],
      solutions: [
        "Built a graph-based data model to handle complex relationships between users, organizations, and events.",
        "Deployed a global CDN network to ensure fast access for users in Athens, New York, and Melbourne alike.",
      ],
      results: [
        "Connected thousands of members worldwide.",
        "Facilitated hundreds of cross-border business partnerships.",
      ],
      faqs: [],
    },
    {
      type: "client",
      id: "freightbooking",
      title: "FreightBooking: Logistics Unlocked.",
      description: "Digitizing one of the world's oldest industries. Instant cargo booking for the Mediterranean.",
      image: "/portfolio/freightbooking-hero.png",
      images: ["/portfolio/freightbooking-hero.png"],
      link: "https://freightbooking.cy",
      tag: "Logistics Tech",
      service: "B2B Marketplace, Complex State Management",
      about: [
        "Logistics is traditionally run on spreadsheets and phone calls. FreightBooking brings it into the cloud.",
        "We digitized the booking workflow, allowing shippers to get instant quotes, book cargo space, and track shipments in real-time, bypassing the manual broker layer.",
      ],
      solutions: [
        "modeled complex shipping logic (container types, routes, inco-terms) into a simple, linear booking interface.",
        "Integrated with vessel tracking APIs to provide real-time visibility into cargo location.",
      ],
      results: [
        "Reduced booking time from days to minutes.",
        "Processed millions in freight volume.",
      ],
      faqs: [],
    },
  ];

export default portfolio;
