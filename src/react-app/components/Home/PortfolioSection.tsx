import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const portfolioProjects = [
    {
      name: 'Bitsri',
      logo: '/Logos/Bitsri.webp',
      url: 'https://bitsri.com',
      description: 'Bitcoin-native DeFi savings & lending protocol'
    },
    {
      name: 'Polylender',
      logo: '/Logos/Polylender.png',
      url: 'https://polylender.com',
      description: 'Borrow/lend crypto, NFTs, RWA on Base & Ethereum'
    },
    {
      name: 'Polybanker',
      logo: '/Logos/polybanker.png',
      url: 'https://polybanker.com',
      description: 'Decentralized full-stack banking platform'
    },
    {
      name: 'Gegram',
      logo: '/Logos/gegram.webp',
      url: 'https://gegram.com',
      description: 'Network state for gamers offering digital citizenship'
    },
    {
      name: 'ZKStates',
      logo: '/Logos/ZKSTATES.webp',
      url: 'https://zkstates.com',
      description: 'ZK-native infrastructure for public & private institutions'
    },
    {
      name: 'Stabler',
      logo: '/Logos/stabler.webp',
      url: 'https://stabler.in',
      description: 'INR-pegged stablecoin using Chainlink protocols'
    },
    {
      name: 'Zorpeo',
      logo: '/Logos/Zorpeo.webp',
      url: 'https://zorpeo.com',
      description: 'Stablecoin wallet with commerce features'
    },
    {
      name: 'Smart Escrow',
      logo: '/Logos/smartescrow.jpg',
      url: 'https://smartescrow.org',
      description: 'On-chain escrow platform on Polygon'
    },
    {
      name: 'Dozain',
      logo: '/Logos/dozain.webp',
      url: 'https://dozain.com',
      description: 'USDC-based domain marketplace'
    },
    {
      name: '0xUSD',
      logo: '/Logos/0xUSD.webp',
      url: 'https://0xusdollar.com',
      description: 'USD stablecoin with earning capabilities'
    },
    {
      name: '0xEURO',
      logo: '/Logos/0xeuro.webp',
      url: 'https://0xeuro.com',
      description: 'Euro stablecoin for European markets'
    },
    {
      name: '0xStable',
      logo: '/Logos/0xStable.webp',
      url: 'https://0xstable.com',
      description: 'Multi-chain stablecoin ecosystem'
    },
    {
      name: '0xCNY',
      logo: '/Logos/0xcny.jpg',
      url: 'https://0xcny.com',
      description: 'Chinese Yuan stablecoin for global markets'
    },
    {
      name: 'Infosume',
      logo: '/Logos/infosume.jpg',
      url: 'https://infosume.com',
      description: 'Professional networking platform'
    },
    {
      name: 'Milliongram',
      logo: '/Logos/Milliongram.png',
      url: 'https://milliongram.com',
      description: 'Elite social media for high-profile influencers'
    },
    {
      name: 'Finceos',
      logo: '/Logos/finceos.png',
      url: 'https://finceos.com',
      description: 'AI-powered financial management platform'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-browills-black to-gray-900/10">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large text-browills-white">Our Venture Studio</h2>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl font-inter font-semibold text-browills-gray max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We don't just consult. We co-create, invest, and launch frontier tech startups.
          </motion.p>

          <motion.p
            className="text-lg font-inter font-medium text-browills-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From AI-powered financial platforms to stablecoin ecosystems, our portfolio represents 
            the future of decentralized technology and digital innovation.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group relative bg-gradient-to-br from-browills-black to-gray-900/20 border border-browills-gray/20 p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Logo */}
                <div className="aspect-square mb-4 flex items-center justify-center bg-browills-white/5 rounded-lg overflow-hidden group-hover:bg-browills-white/10 transition-colors duration-300">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Name */}
                <h3 className="text-lg font-playfair font-black text-browills-white mb-2 group-hover:text-glow transition-all duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm font-inter font-medium text-browills-gray leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* External Link Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-inter font-bold text-browills-gray uppercase tracking-wider">
                    Live Project
                  </span>
                  <ExternalLink className="h-4 w-4 text-browills-gray group-hover:text-browills-white group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-browills-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Studio CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl font-inter font-semibold text-browills-gray mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Have an idea that could change the world?
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/studio"
              className="btn-primary inline-flex items-center space-x-3 group"
            >
              <span>Explore Our Studio</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center space-x-3 group"
            >
              <span>Pitch Your Idea</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 