// SEO Utilities for Browills Website
// Provides centralized SEO management, structured data generation, and metadata helpers

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonicalUrl: string;
  structuredData?: object;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

// Base URL for the website
export const BASE_URL = 'https://browills.com';

// Default SEO values
export const DEFAULT_SEO = {
  title: 'Browills - We Build the Impossible | AI & Blockchain Technology Company',
  description: 'Browills is an AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible. Services, venture studio, and cutting-edge products.',
  keywords: 'AI consulting, blockchain development, Web3 services, venture studio London, DeFi development, zero knowledge systems, enterprise AI, machine learning, smart contracts, digital transformation',
  ogImage: `${BASE_URL}/Logos/Browillslogo.png`,
  siteName: 'Browills',
  twitterHandle: '@browills',
};

// Organization structured data (used across the site)
export const ORGANIZATION_DATA = {
  "@type": "Organization",
  "name": "Browills",
  "legalName": "Browills",
  "description": "An AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible.",
  "url": BASE_URL,
  "logo": `${BASE_URL}/Logos/Browillslogo.png`,
  "image": `${BASE_URL}/Logos/Browillslogo.png`,
  "foundingDate": "2024",
  "industry": "Technology",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447360498963",
    "email": "info@browills.com",
    "contactType": "customer service",
    "areaServed": "Global",
    "availableLanguage": "en"
  },
  "sameAs": [
    BASE_URL
  ]
};

// Generate breadcrumb structured data
export const generateBreadcrumbs = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Generate WebPage structured data
export const generateWebPageData = (
  name: string,
  description: string,
  url: string,
  breadcrumbs?: BreadcrumbItem[]
) => {
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Browills",
      "url": BASE_URL
    },
    "mainEntity": ORGANIZATION_DATA
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    (webPageData as any).breadcrumb = generateBreadcrumbs(breadcrumbs);
  }

  return webPageData;
};

// Generate Article/BlogPosting structured data
export const generateArticleData = (
  title: string,
  description: string,
  url: string,
  date: string,
  author: string,
  category: string,
  readTime: string,
  wordCount?: number
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": DEFAULT_SEO.ogImage,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Browills",
      "logo": {
        "@type": "ImageObject",
        "url": DEFAULT_SEO.ogImage
      },
      "url": BASE_URL
    },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "inLanguage": "en-US",
    "articleSection": category,
    "timeRequired": readTime,
    ...(wordCount && { "wordCount": wordCount })
  };
};

// Generate Service structured data
export const generateServiceData = (
  name: string,
  description: string,
  serviceTypes: string[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": ORGANIZATION_DATA,
    "areaServed": "Global",
    "serviceType": serviceTypes,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${BASE_URL}/contact`,
      "serviceSmsNumber": "+447360498963",
      "servicePhone": "+447360498963"
    }
  };
};

// Generate FAQ structured data
export const generateFAQData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// SEO data for specific pages
export const PAGE_SEO_DATA = {
  home: {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
    canonicalUrl: BASE_URL,
    structuredData: generateWebPageData(
      "Browills - We Build the Impossible",
      "AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible",
      BASE_URL,
      [{ name: "Home", url: BASE_URL }]
    )
  },
  
  services: {
    title: "Services - Browills | AI, Blockchain & Technology Solutions",
    description: "Comprehensive AI and blockchain services including data engineering, Web3 development, infrastructure modernization, and zero-knowledge systems.",
    keywords: "AI services, blockchain consulting, Web3 development, machine learning, smart contracts, DeFi development, zero knowledge systems, enterprise AI consulting, data engineering, DevOps services",
    canonicalUrl: `${BASE_URL}/services`,
    structuredData: generateServiceData(
      "AI & Blockchain Technology Services",
      "Comprehensive AI and blockchain services including data engineering, Web3 development, infrastructure modernization, and zero-knowledge systems",
      ["AI & Data Engineering", "Blockchain & Web3 Solutions", "IT Services & Infrastructure", "Business & Tech Consulting", "Zero Knowledge Systems"]
    )
  },

  blog: {
    title: "Blog - Browills | AI & Blockchain Insights",
    description: "Technical insights, industry analysis, and thought leadership on AI, blockchain, Web3, and emerging technologies from the Browills team.",
    keywords: "AI blog, blockchain insights, Web3 analysis, machine learning articles, DeFi research, zero knowledge technology, enterprise AI trends, technical articles",
    canonicalUrl: `${BASE_URL}/blog`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Browills Technical Blog",
      "description": "Technical insights, industry analysis, and thought leadership on AI, blockchain, Web3, and emerging technologies",
      "publisher": ORGANIZATION_DATA,
      "url": `${BASE_URL}/blog`,
      "inLanguage": "en-US"
    }
  },

  about: {
    title: "About Browills - We Build the Impossible | AI & Blockchain Experts",
    description: "Learn about Browills' mission to build the impossible through AI and blockchain technology. Discover our story, vision, and commitment to innovation.",
    keywords: "about Browills, AI blockchain company, technology experts, venture studio, innovation, mission, vision, company story, London technology company",
    canonicalUrl: `${BASE_URL}/about`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Browills",
      "description": "Learn about Browills' mission to build the impossible through AI and blockchain technology",
      "url": `${BASE_URL}/about`,
      "mainEntity": ORGANIZATION_DATA
    }
  },

  contact: {
    title: "Contact Browills - Let's Build the Impossible Together",
    description: "Get in touch with Browills for AI and blockchain solutions. Contact us for services, venture studio partnerships, or product inquiries.",
    keywords: "contact Browills, AI blockchain consulting, get in touch, services inquiry, venture studio contact, project consultation, London AI company",
    canonicalUrl: `${BASE_URL}/contact`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Browills",
      "description": "Get in touch with Browills for AI and blockchain solutions",
      "url": `${BASE_URL}/contact`,
      "mainEntity": ORGANIZATION_DATA
    }
  },

  studio: {
    title: "Venture Studio - Browills | Co-creating Frontier Tech Startups",
    description: "Browills Venture Studio co-creates, invests in, and launches frontier tech startups. From AI to blockchain, we build the impossible together.",
    keywords: "venture studio, tech startup incubator, AI startups, blockchain startups, Web3 ventures, startup co-creation, equity partnerships, London venture studio",
    canonicalUrl: `${BASE_URL}/studio`,
    structuredData: generateWebPageData(
      "Browills Venture Studio",
      "Co-creating, investing in, and launching frontier tech startups",
      `${BASE_URL}/studio`,
      [
        { name: "Home", url: BASE_URL },
        { name: "Venture Studio", url: `${BASE_URL}/studio` }
      ]
    )
  },

  products: {
    title: "Products - Browills | Battle-tested Solutions & APIs",
    description: "Explore Browills' comprehensive product portfolio - from fintech solutions to Web3 infrastructure, digital commerce platforms, and enterprise tools.",
    keywords: "AI products, blockchain solutions, Web3 APIs, fintech tools, DeFi protocols, stablecoin platforms, enterprise software, digital commerce solutions",
    canonicalUrl: `${BASE_URL}/products`,
    structuredData: generateWebPageData(
      "Browills Products",
      "Battle-tested tools and APIs for fintech, Web3, and enterprise applications",
      `${BASE_URL}/products`,
      [
        { name: "Home", url: BASE_URL },
        { name: "Products", url: `${BASE_URL}/products` }
      ]
    )
  }
};

// Utility function to generate meta keywords from content
export const generateKeywords = (
  category: string,
  title: string,
  baseKeywords: string[] = []
): string => {
  const titleWords = title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(' ')
    .filter(word => word.length > 2)
    .slice(0, 5);

  const categoryKeywords = [category.toLowerCase()];
  const defaultKeywords = ['AI technology', 'blockchain', 'Web3', 'technical analysis'];
  
  const allKeywords = [
    ...categoryKeywords,
    ...titleWords,
    ...baseKeywords,
    ...defaultKeywords
  ];

  return [...new Set(allKeywords)].join(', ');
};

// Utility function to create canonical URL
export const createCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
};

// Utility function to truncate description for meta tags
export const truncateDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? `${truncated.substring(0, lastSpace)}...`
    : `${truncated}...`;
};

// Export default SEO helper function
export const getSEOData = (pageKey: keyof typeof PAGE_SEO_DATA): SEOData => {
  const data = PAGE_SEO_DATA[pageKey];
  return {
    ...data,
    ogImage: DEFAULT_SEO.ogImage
  };
}; 