import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { 
  CreditCard, 
  Link as LinkIcon, 
  Globe, 
  Users, 
  ExternalLink, 
  ArrowRight, 
  Building,
  Briefcase,
  Smartphone,
  Database,
  TrendingUp,
  Lock
} from 'lucide-react';

const ProductsPage: React.FC = () => {
  const productCategories = [
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: 'Fintech & Payments',
      description: 'Revolutionary payment solutions powered by stablecoin technology',
      products: [
        {
          name: 'Zorpeo Pay API',
          description: 'Accept stablecoin payments with auto-conversion',
          url: 'https://zorpeo.com',
          status: 'Live'
        },
        {
          name: 'Stabler Vaults',
          description: 'High-yield vaults in INR-stablecoins',
          url: 'https://stabler.in',
          status: 'Coming Soon'
        },
        {
          name: '0xStable Ecosystem',
          description: 'Multi-chain stablecoin platform',
          url: 'https://0xstable.com',
          status: 'Live'
        },
        {
          name: '0xCNY',
          description: 'Chinese Yuan stablecoin',
          url: 'https://0xcny.com',
          status: 'Live'
        },
        {
          name: '0xEURO',
          description: 'Euro stablecoin',
          url: 'https://0xeuro.com',
          status: 'Live'
        },
        {
          name: '0xUSD',
          description: 'USD stablecoin with earning features',
          url: 'https://0xusd.com',
          status: 'Live'
        }
      ]
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: 'Web3 Infrastructure',
      description: 'Battle-tested infrastructure tools for decentralized applications',
      products: [
        {
          name: 'Smartescrow Infra',
          description: 'Escrow-as-a-Service toolkit for marketplaces',
          url: 'https://smartescrow.org',
          status: 'Live'
        },
        {
          name: 'ZKStates SDK',
          description: 'ZK-based identity and proof infrastructure',
          url: 'https://zkstates.com',
          status: 'Live'
        },
        {
          name: 'Polylend Core',
          description: 'Borrow/lend infrastructure module',
          url: 'https://polylender.com',
          status: 'Live'
        }
      ]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Digital Commerce',
      description: 'Next-generation commerce platforms with blockchain integration',
      products: [
        {
          name: 'Dozain Domains',
          description: 'Domain auction + trading with on-chain escrow',
          url: 'https://dozain.com',
          status: 'Live'
        }
      ]
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: 'GovTech & Enterprise',
      description: 'Sovereign-grade solutions for institutions and governments',
      products: [
        {
          name: 'ZKStates SDK',
          description: 'Zero-knowledge identity + credentials for government/enterprise',
          url: 'https://zkstates.com',
          status: 'Live'
        },
        {
          name: 'Custom-Built Solutions',
          description: 'White-label platforms for partners',
          url: '/contact',
          status: 'On Demand'
        }
      ]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Social & Professional Networks',
      description: 'Advanced networking platforms for the digital age',
      products: [
        {
          name: 'Infosume',
          description: 'Professional networking platform',
          url: 'https://infosume.com',
          status: 'Live'
        },
        {
          name: 'Milliongram',
          description: 'Elite social media for high-profile influencers',
          url: 'https://milliongram.com',
          status: 'Live'
        },
        {
          name: 'Finceos',
          description: 'AI-powered financial management platform',
          url: 'https://finceos.com',
          status: 'Live'
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return '#10B981'; // Green
      case 'Coming Soon':
        return '#F59E0B'; // Yellow
      case 'On Demand':
        return '#8B5CF6'; // Purple
      default:
        return 'var(--browills-gray)';
    }
  };

  return (
    <Layout
      title="Products - Browills | Battle-tested Solutions & APIs"
      description="Explore Browills' comprehensive product portfolio - from fintech solutions to Web3 infrastructure, digital commerce platforms, and enterprise tools."
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
                Our Products
              </h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold leading-relaxed mb-8" 
                 style={{ color: 'var(--browills-gray)' }}>
                Battle-tested tools born from real problems we've solved
              </p>
              <p className="text-xl font-inter font-medium leading-relaxed" 
                 style={{ color: 'var(--browills-gray)' }}>
                At Browills, we don't just consult — we build. Explore a growing suite of 
                proprietary and venture-incubated platforms available as Products and licensed APIs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="mb-6">
                    <h2 className="heading-large" style={{ color: 'var(--browills-white)' }}>
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-xl font-inter font-semibold max-w-3xl mx-auto leading-relaxed" 
                     style={{ color: 'var(--browills-gray)' }}>
                    {category.description}
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      className="p-8 border border-gray-500/20 card-hover"
                      style={{ 
                        background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-black text-glow" 
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              color: 'var(--browills-white)'
                            }}>
                          {product.name}
                        </h3>
                        <span 
                          className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: getStatusColor(product.status),
                            background: `${getStatusColor(product.status)}20`,
                            border: `1px solid ${getStatusColor(product.status)}40`
                          }}
                        >
                          {product.status}
                        </span>
                      </div>

                      <p className="font-medium leading-relaxed mb-6" 
                         style={{ 
                           fontFamily: 'Inter, sans-serif',
                           color: 'var(--browills-gray)'
                         }}>
                        {product.description}
                      </p>

                      <a
                        href={product.url}
                        target={product.url.startsWith('http') ? "_blank" : "_self"}
                        rel={product.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider group"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          color: 'var(--browills-white)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <span>
                          {product.status === 'On Demand' ? 'Request Access' : 
                           product.status === 'Coming Soon' ? 'Learn More' : 'Explore Product'}
                        </span>
                        {product.url.startsWith('http') ? (
                          <ExternalLink className="h-4 w-4" 
                                        style={{ 
                                          transition: 'transform 0.3s ease'
                                        }} />
                        ) : (
                          <ArrowRight className="h-4 w-4" 
                                      style={{ 
                                        transition: 'transform 0.3s ease'
                                      }} />
                        )}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & API Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--browills-black), rgba(75, 85, 99, 0.1))' }}>
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="heading-large" style={{ color: 'var(--browills-white)' }}>
                API Documentation & Integration
              </h2>
            </div>
            
            <p className="text-xl font-inter font-semibold leading-relaxed mb-8" 
               style={{ color: 'var(--browills-gray)' }}>
              Ready to integrate our solutions into your platform? Access comprehensive API documentation, 
              SDKs, and developer tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 border border-gray-500/20" 
                   style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <Lock className="h-8 w-8 mb-4 mx-auto" style={{ color: 'var(--browills-white)' }} />
                <h3 className="text-lg font-bold mb-2" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--browills-white)'
                    }}>
                  Secure APIs
                </h3>
                <p className="text-sm font-medium" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                  Enterprise-grade security with comprehensive authentication
                </p>
              </div>

              <div className="p-6 border border-gray-500/20" 
                   style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <TrendingUp className="h-8 w-8 mb-4 mx-auto" style={{ color: 'var(--browills-white)' }} />
                <h3 className="text-lg font-bold mb-2" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--browills-white)'
                    }}>
                  Scalable Infrastructure
                </h3>
                <p className="text-sm font-medium" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                  Built to handle millions of requests with 99.9% uptime
                </p>
              </div>

              <div className="p-6 border border-gray-500/20" 
                   style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <Smartphone className="h-8 w-8 mb-4 mx-auto" style={{ color: 'var(--browills-white)' }} />
                <h3 className="text-lg font-bold mb-2" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--browills-white)'
                    }}>
                  Developer-Friendly
                </h3>
                <p className="text-sm font-medium" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                  Comprehensive docs, SDKs, and 24/7 developer support
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3 group"
              >
                <span>Get API Access</span>
                <ArrowRight className="h-5 w-5" style={{ transition: 'transform 0.3s ease' }} />
              </a>
              
              <a
                href="mailto:info@browills.com"
                className="btn-secondary inline-flex items-center space-x-3 group"
              >
                <span>Request Demo</span>
                <ArrowRight className="h-5 w-5" style={{ transition: 'transform 0.3s ease' }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage; 