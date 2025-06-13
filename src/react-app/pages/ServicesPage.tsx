import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { 
  Brain, 
  Blocks, 
  Server, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Zap,
  Code,
  Database,
  Cpu,
  Network,
  Lock
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai',
      icon: <Brain className="h-12 w-12" />,
      title: 'AI & Data Engineering',
      description: 'Transform your business with intelligent systems that learn, adapt, and optimize.',
      features: [
        'AI strategy & deployment',
        'ML model development',
        'Data engineering & pipelines',
        'Computer vision, NLP, predictive analytics',
        'AI workflow automation',
        'Multi-agent systems development'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Apache Spark', 'Kubernetes'],
      color: 'border-blue-500/20 hover:border-blue-500/40'
    },
    {
      id: 'blockchain',
      icon: <Blocks className="h-12 w-12" />,
      title: 'Blockchain & Web3 Solutions',
      description: 'Build the future of decentralized technology with secure, scalable blockchain solutions.',
      features: [
        'Smart contract development (Solidity, Move, etc.)',
        'Protocol architecture & security audits',
        'Tokenomics & DeFi design',
        'ZK systems, L2 integrations',
        'DAO governance setup',
        'NFT-based commerce and licensing'
      ],
      technologies: ['Ethereum', 'Polygon', 'Solana', 'Move', 'Rust', 'Hardhat'],
      color: 'border-green-500/20 hover:border-green-500/40'
    },
    {
      id: 'infrastructure',
      icon: <Server className="h-12 w-12" />,
      title: 'IT Services & Infrastructure',
      description: 'Modernize your technology stack with cloud-native, scalable infrastructure solutions.',
      features: [
        'Cloud migration & DevOps',
        'Custom app & software development',
        'Enterprise IT modernization',
        'SaaS infrastructure & integrations',
        'API & backend infrastructure',
        'Security integration'
      ],
      technologies: ['AWS', 'Google Cloud', 'Docker', 'Terraform', 'Node.js', 'Python'],
      color: 'border-purple-500/20 hover:border-purple-500/40'
    },
    {
      id: 'consulting',
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Business & Tech Consulting',
      description: 'Strategic guidance to navigate digital transformation and achieve sustainable growth.',
      features: [
        'Digital transformation strategy',
        'Product-market fit advisory',
        'Technical due diligence',
        'Go-to-market and scaling strategies',
        'Product management consulting',
        'Talent sourcing & vendor strategy'
      ],
      technologies: ['Agile', 'Lean Startup', 'Design Thinking', 'OKRs', 'Data Analytics'],
      color: 'border-orange-500/20 hover:border-orange-500/40'
    },
    {
      id: 'zk',
      icon: <Shield className="h-12 w-12" />,
      title: 'Zero Knowledge & Identity Systems',
      description: 'Privacy-preserving solutions that enable verification without revealing sensitive data.',
      features: [
        'Custom ZK systems development',
        'Credentialing and privacy-preserving verification',
        'Government/enterprise-grade ZK deployments',
        'Digital identity infrastructure',
        'Privacy-first architecture design',
        'Compliance & regulatory frameworks'
      ],
      technologies: ['ZK-SNARKs', 'ZK-STARKs', 'Circom', 'Cairo', 'Semaphore', 'Aztec'],
      color: 'border-red-500/20 hover:border-red-500/40'
    }
  ];

  const capabilities = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end development from frontend to backend, mobile to web.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Architecture',
      description: 'Design and implement scalable data systems that grow with your business.'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Maximize efficiency and speed across all system components.'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Integration Expertise',
      description: 'Seamlessly connect disparate systems and third-party services.'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Security First',
      description: 'Built-in security measures and compliance with industry standards.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Rapid Deployment',
      description: 'Fast iteration cycles with continuous integration and deployment.'
    }
  ];

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Blockchain Technology Services",
    "description": "Comprehensive AI and blockchain services including data engineering, Web3 development, infrastructure modernization, and zero-knowledge systems",
    "provider": {
      "@type": "Organization",
      "name": "Browills",
      "url": "https://browills.com"
    },
    "areaServed": "Global",
    "serviceType": [
      "AI & Data Engineering",
      "Blockchain & Web3 Solutions", 
      "IT Services & Infrastructure",
      "Business & Tech Consulting",
      "Zero Knowledge Systems"
    ]
  };

  return (
    <Layout
      title="Services - Browills | AI, Blockchain & Technology Solutions"
      description="Comprehensive AI and blockchain services including data engineering, Web3 development, infrastructure modernization, and zero-knowledge systems."
      keywords="AI services, blockchain consulting, Web3 development, machine learning, smart contracts, DeFi development, zero knowledge systems, enterprise AI consulting, data engineering, DevOps services"
      ogImage="https://browills.com/Logos/Browillslogo.png"
      canonicalUrl="https://browills.com/services"
      structuredData={servicesStructuredData}
    >
      {/* Hero Section */}
      <section className="section-padding bg-browills-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-text text-glow mb-8">
                Technology Services
              </h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold text-browills-gray leading-relaxed">
                We help startups, enterprises, and governments turn vision into technology. 
                Our offerings span AI, Blockchain, Web3, BioTech, Robotics, Renewables, 
                Drones and Digital Infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-browills-black to-gray-900/10">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large text-browills-white mb-8">Our Service Areas</h2>
            <p className="text-xl font-inter font-semibold text-browills-gray max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to solve complex challenges and drive innovation
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="heading-medium text-browills-white mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="body-text text-browills-gray leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-playfair font-black text-browills-white mb-4">
                        What We Deliver
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-browills-white rounded-full mt-2 flex-shrink-0" />
                            <span className="text-browills-gray font-inter font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-playfair font-black text-browills-white mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-browills-gray/10 border border-browills-gray/20 text-browills-gray font-inter font-medium text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    className={`group p-8 border-2 ${service.color} bg-gradient-to-br from-browills-black to-gray-900/20 card-hover`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <div className="text-browills-white mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {service.icon}
                      </div>
                      <h4 className="text-2xl font-playfair font-black text-browills-white mb-4 group-hover:text-glow transition-all duration-300">
                        {service.title}
                      </h4>
                      <div className="w-16 h-0.5 bg-browills-white mx-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-browills-black">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large text-browills-white mb-8">Core Capabilities</h2>
            <p className="text-xl font-inter font-semibold text-browills-gray max-w-3xl mx-auto leading-relaxed">
              The foundational strengths that power every solution we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="group p-6 border border-browills-gray/20 bg-gradient-to-br from-browills-black to-gray-900/20 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-browills-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-playfair font-black text-browills-white mb-3 group-hover:text-glow transition-all duration-300">
                  {capability.title}
                </h3>
                <p className="text-browills-gray font-inter font-medium leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-t from-browills-black to-gray-900/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-large text-browills-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl font-inter font-semibold text-browills-gray leading-relaxed mb-12">
                Let's discuss how our technology services can help you achieve the impossible. 
                From strategy to implementation, we're your partners in innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-3 group text-xl px-12 py-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.a>
                
                <motion.a
                  href="mailto:info@browills.com"
                  className="btn-secondary inline-flex items-center space-x-3 group text-xl px-12 py-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discuss Your Needs</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage; 