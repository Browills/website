import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Rocket, 
  Settings, 
  ArrowRight,
  Zap,
  Building2
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'services',
      icon: <Brain className="h-12 w-12" />,
      title: 'Services',
      description: 'We help startups, enterprises, and governments turn vision into technology.',
      features: [
        'AI & Data Engineering',
        'Blockchain & Web3 Solutions',
        'IT Services & Infrastructure',
        'Business & Tech Consulting',
        'Zero Knowledge Systems'
      ],
      link: '/services',
      color: 'border-blue-500/20 hover:border-blue-500/40'
    },
    {
      id: 'studio',
      icon: <Rocket className="h-12 w-12" />,
      title: 'Venture Studio',
      description: 'We co-build frontier tech startups from zero to one. Your idea, our partnership, execution together.',
      features: [
        'Idea-to-MVP Co-creation',
        'Equity-based Tech Execution',
        'Full-stack Support',
        'Engineering + Product Teams',
        'Strategic Advisory'
      ],
      link: '/studio',
      color: 'border-green-500/20 hover:border-green-500/40'
    },
    {
      id: 'products',
      icon: <Settings className="h-12 w-12" />,
      title: 'Products',
      description: 'Battle-tested tools born from real problems we\'ve solved. Available as Products and licensed APIs.',
      features: [
        'Fintech & Payments',
        'Web3 Infrastructure',
        'Digital Commerce',
        'GovTech & Enterprise',
        'Social & Professional Networks'
      ],
      link: '/products',
      color: 'border-purple-500/20 hover:border-purple-500/40'
    }
  ];

  return (
    <section id="services-section" className="section-padding bg-browills-black">
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
            <h2 className="heading-large text-browills-white">Our Capabilities</h2>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl font-inter font-semibold text-browills-gray max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Three distinct approaches to building the future of technology
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative p-8 border-2 ${service.color} bg-gradient-to-br from-browills-black to-gray-900/20 card-hover`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <motion.div
                className="text-browills-white mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="heading-medium text-browills-white mb-4 group-hover:text-glow transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="body-text text-browills-gray mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start space-x-3 text-browills-gray"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 bg-browills-white rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                to={service.link}
                className="inline-flex items-center space-x-2 font-inter font-bold text-browills-white hover:text-glow transition-all duration-300 group-hover:translate-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-browills-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-browills-gray mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-xl font-inter font-semibold">
              Ready to build something extraordinary?
            </p>
          </motion.div>
          
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center space-x-3 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 