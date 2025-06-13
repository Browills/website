import { Hono } from "hono";

type Bindings = {
  ASSETS: any;
};

const app = new Hono<{ Bindings: Bindings }>();

// SEO metadata for different routes
const SEO_DATA = {
  '/': {
    title: 'Browills - We Build the Impossible | AI & Blockchain Technology Company',
    description: 'Browills is an AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible. Services, venture studio, and cutting-edge products.',
    keywords: 'AI consulting, blockchain development, Web3 services, venture studio London, DeFi development, zero knowledge systems, enterprise AI, machine learning, smart contracts, digital transformation',
  },
  '/services': {
    title: 'Services - Browills | AI, Blockchain & Technology Solutions',
    description: 'Comprehensive AI and blockchain services including data engineering, Web3 development, infrastructure modernization, and zero-knowledge systems.',
    keywords: 'AI services, blockchain consulting, Web3 development, machine learning, smart contracts, DeFi development, zero knowledge systems, enterprise AI consulting',
  },
  '/blog': {
    title: 'Blog - Browills | AI & Blockchain Insights',
    description: 'Technical insights, industry analysis, and thought leadership on AI, blockchain, Web3, and emerging technologies from the Browills team.',
    keywords: 'AI blog, blockchain insights, Web3 analysis, machine learning articles, DeFi research, zero knowledge technology, enterprise AI trends',
  },
  '/about': {
    title: 'About Browills - We Build the Impossible | AI & Blockchain Experts',
    description: 'Learn about Browills\' mission to build the impossible through AI and blockchain technology. Discover our story, vision, and commitment to innovation.',
    keywords: 'about Browills, AI blockchain company, technology experts, venture studio, innovation, mission, vision, company story',
  },
  '/contact': {
    title: 'Contact Browills - Let\'s Build the Impossible Together',
    description: 'Get in touch with Browills for AI and blockchain solutions. Contact us for services, venture studio partnerships, or product inquiries.',
    keywords: 'contact Browills, AI blockchain consulting, get in touch, services inquiry, venture studio contact, project consultation',
  },
  '/studio': {
    title: 'Venture Studio - Browills | Co-creating Frontier Tech Startups',
    description: 'Browills Venture Studio co-creates, invests in, and launches frontier tech startups. From AI to blockchain, we build the impossible together.',
    keywords: 'venture studio, tech startup incubator, AI startups, blockchain startups, Web3 ventures, startup co-creation, equity partnerships',
  },
  '/products': {
    title: 'Products - Browills | Battle-tested Solutions & APIs',
    description: 'Explore Browills\' comprehensive product portfolio - from fintech solutions to Web3 infrastructure, digital commerce platforms, and enterprise tools.',
    keywords: 'AI products, blockchain solutions, Web3 APIs, fintech tools, DeFi protocols, stablecoin platforms, enterprise software',
  },
  '/careers': {
    title: 'Careers - Join Browills | Build the Impossible',
    description: 'Join our team of AI and blockchain pioneers. Work on cutting-edge technology, build the impossible, and shape the future of digital innovation.',
    keywords: 'AI blockchain careers, technology jobs, software engineer positions, London tech jobs, startup careers, innovation roles',
  },
  '/documentation': {
    title: 'Documentation - Browills | API Docs & Developer Resources',
    description: 'Comprehensive documentation for Browills APIs, SDKs, and developer tools. Get started with our fintech, Web3, and AI services.',
    keywords: 'API documentation, developer resources, technical guides, SDK documentation, Web3 APIs, AI tools documentation',
  }
};

// Function to inject SEO meta tags into HTML
function injectSEOMetaTags(html: string, path: string): string {
  const seoData = SEO_DATA[path as keyof typeof SEO_DATA] || SEO_DATA['/'];
  const canonicalUrl = `https://browills.com${path === '/' ? '' : path}`;
  
  // Create meta tags
  const metaTags = `
    <meta name="title" content="${seoData.title}" />
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    
    <!-- Twitter -->
    <meta property="twitter:title" content="${seoData.title}" />
    <meta property="twitter:description" content="${seoData.description}" />
    <meta property="twitter:url" content="${canonicalUrl}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />
  `;
  
  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${seoData.title}</title>`);
  
  // Inject additional meta tags after existing meta tags
  html = html.replace(/<meta name="robots"[^>]*>/, (match) => {
    return match + metaTags;
  });
  
  return html;
}

// API Routes
app.get('/api/', (c) => c.json({ 
  name: 'Browills API',
  version: '1.0.0',
  description: 'API for Browills - We Build the Impossible',
  status: 'operational',
  endpoints: {
    health: '/api/health',
    contact: '/api/contact',
    services: '/api/services',
    blog: '/api/blog'
  }
}));

app.get('/api/health', (c) => c.json({ 
  status: 'healthy', 
  timestamp: new Date().toISOString(),
  service: 'Browills Website API'
}));

app.get('/api/services', (c) => c.json({
  services: [
    {
      id: 'ai-data-engineering',
      name: 'AI & Data Engineering',
      description: 'AI strategy, ML model development, data engineering pipelines, computer vision, NLP, and predictive analytics',
      features: ['AI Strategy & Deployment', 'ML Model Development', 'Data Engineering & Pipelines', 'Computer Vision & NLP', 'Predictive Analytics', 'Multi-agent Systems']
    },
    {
      id: 'blockchain-web3',
      name: 'Blockchain & Web3 Solutions',
      description: 'Smart contract development, protocol architecture, tokenomics, DeFi design, and zero-knowledge systems',
      features: ['Smart Contract Development', 'Protocol Architecture', 'Tokenomics & DeFi Design', 'ZK Systems & L2 Integrations', 'DAO Governance', 'RWA Tokenization']
    },
    {
      id: 'it-infrastructure',
      name: 'IT Services & Infrastructure',
      description: 'Cloud migration, DevOps, custom software development, enterprise IT modernization',
      features: ['Cloud Migration & DevOps', 'Custom App Development', 'Enterprise IT Modernization', 'SaaS Infrastructure', 'API & Backend Development', 'Security Integration']
    },
    {
      id: 'business-consulting',
      name: 'Business & Tech Consulting',
      description: 'Digital transformation strategy, product-market fit advisory, technical due diligence',
      features: ['Digital Transformation', 'Product-Market Fit Advisory', 'Technical Due Diligence', 'Go-to-Market Strategies', 'Product Management', 'Talent Sourcing']
    },
    {
      id: 'zero-knowledge',
      name: 'Zero Knowledge & Identity Systems',
      description: 'Custom ZK systems development, credentialing, privacy-preserving verification',
      features: ['Custom ZK Systems', 'Privacy-Preserving Verification', 'Government/Enterprise ZK', 'Digital Identity Infrastructure', 'Credentialing Systems', 'Sovereign Identity']
    }
  ]
}));

app.get('/api/blog', (c) => c.json({
  categories: [
    'AI & Machine Learning',
    'Blockchain & Privacy',
    'DeFi & Web3',
    'Product & Infrastructure',
    'Venture Tech'
  ],
  featuredPosts: [
    {
      title: 'Why Most Enterprises Fail at AI – And How to Fix It',
      excerpt: 'Examining the common pitfalls in enterprise AI implementation and providing actionable strategies for successful AI transformation.',
      category: 'AI & Machine Learning',
      slug: 'why-enterprises-fail-at-ai'
    },
    {
      title: 'Zero-Knowledge Proofs: The Privacy Revolution',
      excerpt: 'Understanding zero-knowledge cryptography and its transformative potential for enterprise privacy and verification systems.',
      category: 'Blockchain & Privacy',
      slug: 'zero-knowledge-proofs-privacy-revolution'
    },
    {
      title: 'The Tokenomics Playbook: Designing Resilient Digital Economies',
      excerpt: 'A comprehensive guide to designing sustainable token economies that align incentives and drive long-term value creation.',
      category: 'DeFi & Web3',
      slug: 'tokenomics-playbook'
    }
  ]
}));

// Handle contact form submissions
app.post('/api/contact', async (c) => {
  try {
    const formData = await c.req.json();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    // In a real implementation, you would:
    // 1. Validate email format
    // 2. Sanitize inputs
    // 3. Send email via EmailJS or another service
    // 4. Store in database if needed
    
    // For now, return success
    return c.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Handle all other routes - serve the React app with SEO enhancements
app.get('*', async (c) => {
  try {
    const url = new URL(c.req.url);
    const path = url.pathname;
    
    // Get the static HTML file
    const response = await c.env.ASSETS.fetch(c.req);
    
    if (response.status === 404) {
      // Return 404 for actual missing assets
      if (path.includes('.')) {
        return new Response('Not Found', { status: 404 });
      }
      
      // For routes, serve the index.html with SEO injection
      const indexResponse = await c.env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
      if (indexResponse.ok) {
        let html = await indexResponse.text();
        html = injectSEOMetaTags(html, path);
        
        return new Response(html, {
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=300', // 5 minutes cache
            'X-Robots-Tag': 'index, follow',
          },
        });
      }
    }
    
    // For existing assets, serve as-is with proper headers
    const newResponse = new Response(response.body, response);
    
    // Add caching headers for static assets
    if (path.includes('.')) {
      newResponse.headers.set('Cache-Control', 'public, max-age=86400'); // 1 day cache for assets
    }
    
    return newResponse;
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
});

export default app;
