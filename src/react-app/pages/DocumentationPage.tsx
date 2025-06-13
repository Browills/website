import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { Book, Code, Download, ExternalLink, Terminal, Zap } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const docCategories = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { name: 'API Overview', description: 'Introduction to Browills APIs', status: 'Available' },
        { name: 'Authentication', description: 'How to authenticate with our services', status: 'Available' },
        { name: 'Rate Limits', description: 'Understanding API rate limits', status: 'Available' },
        { name: 'Error Handling', description: 'Common errors and how to handle them', status: 'Available' }
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      docs: [
        { name: 'Fintech APIs', description: 'Payment and financial service APIs', status: 'Available' },
        { name: 'Web3 Infrastructure', description: 'Blockchain and DeFi APIs', status: 'Available' },
        { name: 'AI Services', description: 'Machine learning and AI APIs', status: 'Available' },
        { name: 'Identity & ZK', description: 'Zero-knowledge and identity APIs', status: 'Coming Soon' }
      ]
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: 'SDKs & Tools',
      description: 'Software development kits and developer tools',
      docs: [
        { name: 'JavaScript SDK', description: 'Node.js and browser SDK', status: 'Available' },
        { name: 'Python SDK', description: 'Python library and examples', status: 'Available' },
        { name: 'CLI Tools', description: 'Command line interface tools', status: 'Available' },
        { name: 'Postman Collection', description: 'API testing collection', status: 'Available' }
      ]
    }
  ];

  const quickLinks = [
    {
      icon: <Download className="h-6 w-6" />,
      title: 'Download SDKs',
      description: 'Get our latest SDKs and tools',
      link: '#'
    },
    {
      icon: <ExternalLink className="h-6 w-6" />,
      title: 'API Playground',
      description: 'Test our APIs interactively',
      link: '#'
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: 'Changelog',
      description: 'Latest updates and changes',
      link: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return '#10B981'; // Green
      case 'Coming Soon':
        return '#F59E0B'; // Yellow
      default:
        return 'var(--browills-gray)';
    }
  };

  return (
    <Layout
      title="Documentation - Browills | API Docs & Developer Resources"
      description="Comprehensive documentation for Browills APIs, SDKs, and developer tools. Get started with our fintech, Web3, and AI services."
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
              <h1 className="hero-text text-glow mb-8">Documentation</h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold leading-relaxed mb-8" 
                 style={{ color: 'var(--browills-gray)' }}>
                Everything you need to integrate and build with Browills
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--browills-black), rgba(75, 85, 99, 0.1))' }}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large mb-8" style={{ color: 'var(--browills-white)' }}>
              Quick Access
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                className="p-6 border border-gray-500/20 card-hover text-center"
                style={{ 
                  background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4" style={{ color: 'var(--browills-white)' }}>
                  {link.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--browills-white)'
                    }}>
                  {link.title}
                </h3>
                <p className="text-sm mb-4" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                  {link.description}
                </p>
                <a
                  href={link.link}
                  className="text-sm font-bold text-white hover:text-glow transition-all duration-300"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Access →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
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
              Documentation Categories
            </h2>
          </motion.div>

          <div className="space-y-16">
            {docCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div style={{ color: 'var(--browills-white)' }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2" 
                        style={{ 
                          fontFamily: 'Playfair Display, serif',
                          color: 'var(--browills-white)'
                        }}>
                      {category.title}
                    </h3>
                    <p style={{ 
                         fontFamily: 'Inter, sans-serif',
                         color: 'var(--browills-gray)'
                       }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.docs.map((doc, docIndex) => (
                    <motion.div
                      key={docIndex}
                      className="p-6 border border-gray-500/20 card-hover"
                      style={{ 
                        background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: docIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold" 
                            style={{ 
                              fontFamily: 'Playfair Display, serif',
                              color: 'var(--browills-white)'
                            }}>
                          {doc.name}
                        </h4>
                        <span 
                          className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: getStatusColor(doc.status),
                            background: `${getStatusColor(doc.status)}20`,
                            border: `1px solid ${getStatusColor(doc.status)}40`
                          }}
                        >
                          {doc.status}
                        </span>
                      </div>
                      <p className="mb-4" 
                         style={{ 
                           fontFamily: 'Inter, sans-serif',
                           color: 'var(--browills-gray)'
                         }}>
                        {doc.description}
                      </p>
                      <a
                        href="#"
                        className="text-sm font-bold text-white hover:text-glow transition-all duration-300"
                        style={{ 
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {doc.status === 'Available' ? 'Read Documentation →' : 'Coming Soon'}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--browills-black), rgba(75, 85, 99, 0.1))' }}>
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large mb-8" style={{ color: 'var(--browills-white)' }}>
              Need Help?
            </h2>
            <p className="text-xl font-inter font-semibold leading-relaxed mb-8" 
               style={{ color: 'var(--browills-gray)' }}>
              Can't find what you're looking for? Our developer support team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/help-center"
                className="btn-primary inline-flex items-center space-x-3 group"
              >
                <span>Visit Help Center</span>
                <ExternalLink className="h-5 w-5" style={{ transition: 'transform 0.3s ease' }} />
              </a>
              
              <a
                href="/contact"
                className="btn-secondary inline-flex items-center space-x-3 group"
              >
                <span>Contact Support</span>
                <ExternalLink className="h-5 w-5" style={{ transition: 'transform 0.3s ease' }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentationPage; 