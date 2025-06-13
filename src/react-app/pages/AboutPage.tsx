import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { Heart, Zap, Users, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, turning science fiction into reality through cutting-edge AI and blockchain solutions.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Partnership Mindset',
      description: 'We don\'t just deliver solutions – we become your technology partner, invested in your long-term success and growth.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Impact',
      description: 'Our technology solutions address global challenges, creating positive change for communities, enterprises, and governments worldwide.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Ethical Technology',
      description: 'We build technology that respects privacy, promotes transparency, and empowers individuals while serving the greater good.'
    }
  ];

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Browills",
    "description": "Learn about Browills' mission to build the impossible through AI and blockchain technology",
    "url": "https://browills.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Browills",
      "description": "An AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible",
      "url": "https://browills.com",
      "logo": "https://browills.com/Logos/Browillslogo.png",
      "foundingDate": "2024",
      "industry": "Technology",
      "keywords": ["AI", "Blockchain", "Web3", "Technology Consulting", "Venture Studio"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London", 
        "addressCountry": "GB"
      }
    }
  };

  return (
    <Layout
      title="About Browills - We Build the Impossible | AI & Blockchain Experts"
      description="Learn about Browills' mission to build the impossible through AI and blockchain technology. Discover our story, vision, and commitment to innovation."
      keywords="about Browills, AI blockchain company, technology experts, venture studio, innovation, mission, vision, company story, London technology company"
      ogImage="https://browills.com/Logos/Browillslogo.png"
      canonicalUrl="https://browills.com/about"
      structuredData={aboutStructuredData}
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
                We Build the Impossible
              </h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold text-browills-gray leading-relaxed">
                The story of Browills begins with a simple belief: that the most ambitious technological 
                challenges of our time are not barriers, but opportunities waiting to be unlocked.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gradient-to-b from-browills-black to-gray-900/10">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-large text-browills-white mb-8">Our Story</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <p className="body-text text-browills-white leading-relaxed">
                    Browills was founded on the principle that artificial intelligence and blockchain 
                    technology represent the next frontier of human innovation. We saw a world where 
                    traditional barriers between impossible ideas and reality could be dissolved through 
                    the right combination of technology, expertise, and partnership.
                  </p>
                  <p className="body-text text-browills-gray leading-relaxed">
                    Today, we operate as a unique hybrid: part technology consultancy, part venture studio, 
                    part product company. This multi-faceted approach allows us to engage with challenges 
                    from multiple angles, whether that's solving complex enterprise problems, co-creating 
                    revolutionary startups, or building the infrastructure tools that power tomorrow's 
                    digital economy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-browills-black to-gray-900/20 border border-browills-gray/20 p-8"
              >
                <div className="text-center">
                  <img 
                    src="/Logos/Browillslogo.png" 
                    alt="Browills Logo" 
                    className="h-24 w-auto mx-auto mb-6"
                  />
                  <h3 className="heading-medium text-browills-white mb-4">
                    Browills Limited UK
                  </h3>
                  <p className="body-text text-browills-gray">
                    Operating from London, we serve clients globally, bringing British innovation 
                    and regulatory expertise to the forefront of AI and blockchain development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-browills-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-large text-browills-white mb-6">Our Mission</h2>
              <p className="body-text text-browills-gray leading-relaxed mb-6">
                To empower organizations and individuals to achieve the impossible through 
                revolutionary AI and blockchain solutions that transform industries, create 
                new opportunities, and build a more connected, intelligent future.
              </p>
              <p className="text-lg font-inter font-semibold text-browills-white">
                We blend artificial intelligence, blockchain technologies, and venture expertise 
                to deliver cutting-edge solutions for the world's next great businesses.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-large text-browills-white mb-6">Our Vision</h2>
              <p className="body-text text-browills-gray leading-relaxed mb-6">
                A world where the impossible becomes inevitable, where artificial intelligence 
                and blockchain technology unlock human potential, solve global challenges, and 
                create unprecedented opportunities for innovation and growth.
              </p>
              <p className="text-lg font-inter font-semibold text-browills-white">
                We envision a future where every ambitious idea has the technological foundation 
                to become reality, and where the barriers between vision and execution disappear.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why "We Build the Impossible" */}
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
                Why "We Build the Impossible"
              </h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-inter font-semibold text-browills-gray leading-relaxed">
                  The word "impossible" represents everything that conventional thinking says cannot be done. 
                  But we've learned that impossibility is often just a limitation of current technology, 
                  current thinking, or current approaches.
                </p>
                <p className="body-text text-browills-white leading-relaxed">
                  At Browills, we specialize in the space between what is and what could be. We take on 
                  projects that others might shy away from, challenges that require not just technical 
                  skill but innovative thinking, and partnerships that demand long-term commitment to 
                  breakthrough solutions.
                </p>
                <p className="body-text text-browills-gray leading-relaxed">
                  From zero-knowledge privacy systems to AI-powered financial platforms, from 
                  blockchain-native governance to decentralized identity solutions – we build 
                  the technologies that will define the next decade of digital transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-browills-black">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large text-browills-white mb-8">Our Values</h2>
            <p className="text-xl font-inter font-semibold text-browills-gray max-w-3xl mx-auto leading-relaxed">
              The principles that guide every project, partnership, and product we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-8 border border-browills-gray/20 bg-gradient-to-br from-browills-black to-gray-900/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-browills-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="heading-medium text-browills-white mb-4 group-hover:text-glow transition-all duration-300">
                  {value.title}
                </h3>
                <p className="body-text text-browills-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 