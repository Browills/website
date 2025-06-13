import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { ExternalLink, ArrowRight, Rocket, Target } from 'lucide-react';

const StudioPage: React.FC = () => {
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
    }
  ];

  const studioServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Idea-to-MVP Co-creation',
      description: 'We work alongside founders to transform concepts into functional products, providing technical expertise and strategic guidance.'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Equity-based Tech Execution',
      description: 'Our team becomes your technical co-founder, building your product in exchange for equity partnership.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Full-stack Support',
      description: 'From technology to tokenomics, branding to go-to-market strategy, we provide comprehensive startup support.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Engineering + Product Teams',
      description: 'Access to our experienced engineering and product teams on-demand, scaling with your needs.'
    }
  ];

  return (
    <Layout
      title="Venture Studio - Browills | Co-creating Frontier Tech Startups"
      description="Browills Venture Studio co-creates, invests in, and launches frontier tech startups. From AI to blockchain, we build the impossible together."
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-text text-glow mb-8">
                Our Venture Studio
              </h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold leading-relaxed mb-8" 
                 style={{ color: 'var(--browills-gray)' }}>
                We don't just consult. We co-create, invest, and launch frontier tech startups.
              </p>
              <p className="text-xl font-inter font-medium leading-relaxed" 
                 style={{ color: 'var(--browills-gray)' }}>
                From AI-powered financial platforms to stablecoin ecosystems, our portfolio represents 
                the future of decentralized technology and digital innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Partner */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--browills-black), rgba(75, 85, 99, 0.1))' }}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large mb-6" style={{ color: 'var(--browills-white)' }}>How We Partner</h2>
            <p className="text-xl font-inter font-semibold max-w-3xl mx-auto leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              We become your technical co-founder, building breakthrough solutions together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-8 border border-gray-500/20 card-hover"
                style={{ 
                  background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6" style={{ color: 'var(--browills-white)' }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--browills-white)'
                    }}>
                  {service.title}
                </h3>
                <p className="font-medium leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large mb-8" style={{ color: 'var(--browills-white)' }}>
              Our Portfolio
            </h2>
            <p className="text-xl font-inter font-semibold max-w-3xl mx-auto leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              16 frontier tech startups built from zero to one
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="p-6 border border-gray-500/20 card-hover"
                style={{ 
                  background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                }}
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
                  <div className="aspect-square mb-4 flex items-center justify-center rounded-lg overflow-hidden"
                       style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-16 h-16 object-contain"
                      style={{ transition: 'transform 0.3s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>

                  {/* Project Name */}
                  <h3 className="text-lg font-black mb-2 text-glow" 
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: 'var(--browills-white)'
                      }}>
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-medium leading-relaxed mb-3" 
                     style={{ 
                       fontFamily: 'Inter, sans-serif',
                       color: 'var(--browills-gray)'
                     }}>
                    {project.description}
                  </p>

                  {/* External Link Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider" 
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: 'var(--browills-gray)'
                          }}>
                      Live Project
                    </span>
                    <ExternalLink className="h-4 w-4" 
                                  style={{ 
                                    color: 'var(--browills-gray)',
                                    transition: 'all 0.3s ease'
                                  }} />
                  </div>
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
            <p className="text-xl font-inter font-semibold mb-8" 
               style={{ color: 'var(--browills-gray)' }}>
              Have an idea that could change the world?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3 group"
              >
                <span>Pitch Your Idea</span>
                <ArrowRight className="h-5 w-5" style={{ transition: 'transform 0.3s ease' }} />
              </a>
              
              <a
                href="mailto:info@browills.com"
                className="btn-secondary inline-flex items-center space-x-3 group"
              >
                <span>Partner with Us</span>
                <ArrowRight className="h-5 w-5" style={{ transition: 'transform 0.3s ease' }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default StudioPage; 