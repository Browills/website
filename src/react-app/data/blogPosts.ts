export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  // Existing posts from BlogPage.tsx
  {
    id: '1',
    title: 'The Future of AI in Enterprise: Beyond Automation',
    excerpt: 'Exploring how artificial intelligence is transforming enterprise operations beyond simple automation, focusing on intelligent decision-making, predictive analytics, and adaptive systems.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    slug: 'future-ai-enterprise-beyond-automation',
    author: 'Browills Team'
  },
  {
    id: '2',
    title: 'Zero-Knowledge Proofs: The Privacy Revolution',
    excerpt: 'Understanding how zero-knowledge cryptography is reshaping digital privacy, from blockchain applications to enterprise identity verification systems.',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Blockchain & Privacy',
    slug: 'zero-knowledge-proofs-privacy-revolution',
    author: 'Browills Team'
  },
  {
    id: '3',
    title: 'Building Scalable DeFi Infrastructure: Lessons from Production',
    excerpt: 'Real-world insights from deploying DeFi protocols at scale, covering smart contract optimization, security considerations, and user experience design.',
    date: '2025-01-05',
    readTime: '15 min read',
    category: 'DeFi & Web3',
    slug: 'building-scalable-defi-infrastructure',
    author: 'Browills Team'
  },
  {
    id: '4',
    title: 'Multi-Agent AI Systems: Coordinating Intelligent Workflows',
    excerpt: 'How multiple AI agents can work together to solve complex problems, featuring practical implementations and architectural patterns.',
    date: '2024-12-28',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    slug: 'multi-agent-ai-systems-workflows',
    author: 'Browills Team'
  },
  {
    id: '5',
    title: 'Stablecoin Architecture: Design Principles for Global Markets',
    excerpt: 'Technical deep-dive into stablecoin design, covering collateralization mechanisms, price stability algorithms, and regulatory compliance.',
    date: '2024-12-20',
    readTime: '14 min read',
    category: 'DeFi & Web3',
    slug: 'stablecoin-architecture-global-markets',
    author: 'Browills Team'
  },
  {
    id: '6',
    title: 'From Startup to Scale: Technical Leadership in High-Growth Environments',
    excerpt: 'Navigating the technical challenges of scaling from MVP to production, covering team building, architecture decisions, and technology choices.',
    date: '2024-12-15',
    readTime: '9 min read',
    category: 'Technology Leadership',
    slug: 'startup-scale-technical-leadership',
    author: 'Browills Team'
  },

  // New posts from blog.md
  {
    id: '7',
    title: 'Why Most Enterprises Fail at AI – And How to Fix It',
    excerpt: 'Examining the common pitfalls in enterprise AI implementation and providing actionable strategies for successful AI transformation.',
    date: '2024-12-10',
    readTime: '11 min read',
    category: 'AI & Machine Learning',
    slug: 'why-enterprises-fail-at-ai',
    author: 'Browills Team'
  },
  {
    id: '8',
    title: 'Beyond LLMs: Real-World AI Use Cases That Drive Revenue',
    excerpt: 'Exploring practical AI applications beyond large language models that create measurable business value and competitive advantages.',
    date: '2024-12-05',
    readTime: '13 min read',
    category: 'AI & Machine Learning',
    slug: 'beyond-llms-real-world-ai-use-cases',
    author: 'Browills Team'
  },
  {
    id: '9',
    title: 'The Rise of Multi-Agent AI: Coordination, Autonomy, and the Future of Work',
    excerpt: 'How coordinated AI systems are reshaping automation, decision-making, and the future of human-AI collaboration in enterprise environments.',
    date: '2024-11-30',
    readTime: '16 min read',
    category: 'AI & Machine Learning',
    slug: 'rise-of-multi-agent-ai',
    author: 'Browills Team'
  },
  {
    id: '10',
    title: 'How to Architect Scalable AI Systems for High-Stakes Environments',
    excerpt: 'Design principles and architectural patterns for building AI systems that perform reliably in mission-critical applications.',
    date: '2024-11-25',
    readTime: '18 min read',
    category: 'AI & Machine Learning',
    slug: 'architect-scalable-ai-systems',
    author: 'Browills Team'
  },
  {
    id: '11',
    title: 'AI vs AGI: Where Are We Really Headed in 2025?',
    excerpt: 'A realistic assessment of artificial intelligence progress and the timeline toward artificial general intelligence.',
    date: '2024-11-20',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    slug: 'ai-vs-agi-2025',
    author: 'Browills Team'
  },
  {
    id: '12',
    title: 'Zero-Knowledge Infrastructure for Enterprises: What, Why, and How',
    excerpt: 'Comprehensive guide to implementing zero-knowledge systems in enterprise environments for privacy and verification.',
    date: '2024-11-15',
    readTime: '20 min read',
    category: 'Blockchain & Privacy',
    slug: 'zk-infrastructure-enterprises',
    author: 'Browills Team'
  },
  {
    id: '13',
    title: 'The Future of On-Chain Privacy: Beyond Tornado Cash',
    excerpt: 'Exploring next-generation privacy solutions for blockchain applications and their implications for decentralized finance.',
    date: '2024-11-10',
    readTime: '14 min read',
    category: 'Blockchain & Privacy',
    slug: 'future-on-chain-privacy',
    author: 'Browills Team'
  },
  {
    id: '14',
    title: 'ZK Rollups vs Validiums: Which Will Power the Next Billion Users?',
    excerpt: 'Technical comparison of layer-2 scaling solutions and their potential to bring blockchain technology to mainstream adoption.',
    date: '2024-11-05',
    readTime: '15 min read',
    category: 'Blockchain & Privacy',
    slug: 'zk-rollups-vs-validiums',
    author: 'Browills Team'
  },
  {
    id: '15',
    title: 'Building Blockchain Systems That Don\'t Break: Lessons from Production',
    excerpt: 'Hard-learned lessons from deploying blockchain systems at scale, covering security, performance, and reliability.',
    date: '2024-10-30',
    readTime: '17 min read',
    category: 'Blockchain & Privacy',
    slug: 'building-blockchain-systems-production',
    author: 'Browills Team'
  },
  {
    id: '16',
    title: 'Cross-Chain Bridges in 2025: Security, Liquidity, and Abstraction',
    excerpt: 'The evolution of cross-chain infrastructure and its role in creating a seamless multi-chain ecosystem.',
    date: '2024-10-25',
    readTime: '13 min read',
    category: 'Blockchain & Privacy',
    slug: 'cross-chain-bridges-2025',
    author: 'Browills Team'
  },
  {
    id: '17',
    title: 'The Tokenomics Playbook: Designing Resilient Digital Economies',
    excerpt: 'Frameworks and principles for designing sustainable token economies that align incentives and drive adoption.',
    date: '2024-10-20',
    readTime: '19 min read',
    category: 'DeFi & Web3',
    slug: 'tokenomics-playbook',
    author: 'Browills Team'
  },
  {
    id: '18',
    title: 'How to Build Trustless Escrow Systems for Global Commerce',
    excerpt: 'Technical guide to implementing blockchain-based escrow systems that enable secure global transactions.',
    date: '2024-10-15',
    readTime: '16 min read',
    category: 'DeFi & Web3',
    slug: 'trustless-escrow-systems',
    author: 'Browills Team'
  },
  {
    id: '19',
    title: 'Stablecoins Aren\'t Dead: What the Next Generation Looks Like',
    excerpt: 'Evolution of stablecoin technology and design patterns for the next wave of digital currencies.',
    date: '2024-10-10',
    readTime: '12 min read',
    category: 'DeFi & Web3',
    slug: 'next-generation-stablecoins',
    author: 'Browills Team'
  },
  {
    id: '20',
    title: 'DeFi UX is Broken — Here\'s How We\'re Fixing It',
    excerpt: 'User experience challenges in decentralized finance and innovative solutions to make DeFi accessible to everyone.',
    date: '2024-10-05',
    readTime: '11 min read',
    category: 'DeFi & Web3',
    slug: 'fixing-defi-ux',
    author: 'Browills Team'
  },
  {
    id: '21',
    title: 'DAOs, Governance, and the Next Frontier in Web3 Coordination',
    excerpt: 'Exploring decentralized autonomous organizations and their role in coordinating global collaboration.',
    date: '2024-09-30',
    readTime: '14 min read',
    category: 'DeFi & Web3',
    slug: 'daos-governance-web3-coordination',
    author: 'Browills Team'
  },
  {
    id: '22',
    title: 'How We Think About Product at Browills: From Vision to Code',
    excerpt: 'Our product development philosophy and methodologies for building technology that solves real problems.',
    date: '2024-09-25',
    readTime: '10 min read',
    category: 'Product, Infra & Venture Tech',
    slug: 'product-philosophy-browills',
    author: 'Browills Team'
  },
  {
    id: '23',
    title: 'Founders, Don\'t Build Alone: The Case for Venture Studios in Emerging Tech',
    excerpt: 'Why the venture studio model is particularly effective for deep tech and emerging technology startups.',
    date: '2024-09-20',
    readTime: '13 min read',
    category: 'Product, Infra & Venture Tech',
    slug: 'venture-studios-emerging-tech',
    author: 'Browills Team'
  },
  {
    id: '24',
    title: 'B2B SaaS for AI & Web3: What Startups Must Get Right in 2025',
    excerpt: 'Essential considerations for building successful B2B software businesses in the AI and Web3 space.',
    date: '2024-09-15',
    readTime: '15 min read',
    category: 'Product, Infra & Venture Tech',
    slug: 'b2b-saas-ai-web3-2025',
    author: 'Browills Team'
  },
  {
    id: '25',
    title: 'Digital Infrastructure for Sovereign Systems: The Browills Framework',
    excerpt: 'Our approach to building digital infrastructure that maintains sovereignty while enabling global interoperability.',
    date: '2024-09-10',
    readTime: '18 min read',
    category: 'Product, Infra & Venture Tech',
    slug: 'digital-infrastructure-sovereign-systems',
    author: 'Browills Team'
  },
  {
    id: '26',
    title: 'What It Takes to Build Systems That Matter: A CTO\'s Manifesto',
    excerpt: 'Reflections on technical leadership and the principles for building technology that creates lasting impact.',
    date: '2024-09-05',
    readTime: '12 min read',
    category: 'Product, Infra & Venture Tech',
    slug: 'build-systems-that-matter-cto-manifesto',
    author: 'Browills Team'
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const categories = [
  'All', 
  'AI & Machine Learning', 
  'Blockchain & Privacy', 
  'DeFi & Web3', 
  'Technology Leadership',
  'Product, Infra & Venture Tech'
];
