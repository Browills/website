import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { HelpCircle, MessageCircle, Mail, Phone, Search, Book, Users, Zap } from 'lucide-react';

const HelpCenterPage: React.FC = () => {
  const faqCategories = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Getting Started',
      faqs: [
        {
          question: 'What services does Browills offer?',
          answer: 'Browills offers three main verticals: AI & Blockchain consulting services, venture studio partnerships, and battle-tested software products. We help startups, enterprises, and institutions build cutting-edge technology solutions.'
        },
        {
          question: 'How do I get started with Browills?',
          answer: 'Simply contact us through our contact form or email info@browills.com. We\'ll schedule a consultation to understand your needs and recommend the best approach for your project.'
        }
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Venture Studio',
      faqs: [
        {
          question: 'How does the venture studio model work?',
          answer: 'We co-create startups from zero to one, providing technical execution in exchange for equity. We become your technical co-founder, handling everything from MVP development to scaling.'
        },
        {
          question: 'What do you look for in venture partners?',
          answer: 'We look for ambitious founders with innovative ideas in AI, blockchain, or emerging tech. We value vision, market understanding, and commitment to building something extraordinary.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'info@browills.com',
      link: 'mailto:info@browills.com'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone Support',
      description: 'Speak with our team',
      contact: '+44 7360 498963',
      link: 'tel:+447360498963'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Contact Form',
      description: 'Send us a detailed message',
      contact: 'Contact Form',
      link: '/contact'
    }
  ];

  return (
    <Layout
      title="Help Center - Browills | Support & FAQs"
      description="Find answers to common questions about Browills services, venture studio, and products. Get the support you need to succeed."
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
              <h1 className="hero-text text-glow mb-8">Help Center</h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold leading-relaxed mb-8" 
                 style={{ color: 'var(--browills-gray)' }}>
                Find answers to your questions and get the support you need
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
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
                  <h3 className="text-2xl font-black" 
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: 'var(--browills-white)'
                      }}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      className="p-6 border border-gray-500/20 card-hover"
                      style={{ 
                        background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-bold mb-4" 
                          style={{ 
                            fontFamily: 'Playfair Display, serif',
                            color: 'var(--browills-white)'
                          }}>
                        {faq.question}
                      </h4>
                      <p className="leading-relaxed" 
                         style={{ 
                           fontFamily: 'Inter, sans-serif',
                           color: 'var(--browills-gray)'
                         }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--browills-black), rgba(75, 85, 99, 0.1))' }}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-large mb-8" style={{ color: 'var(--browills-white)' }}>
              Still Need Help?
            </h2>
            <p className="text-xl font-inter font-semibold max-w-3xl mx-auto leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              Our team is here to help you succeed. Choose your preferred way to get in touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="text-center p-8 border border-gray-500/20 card-hover"
                style={{ 
                  background: 'linear-gradient(to bottom right, var(--browills-black), rgba(75, 85, 99, 0.2))'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6" style={{ color: 'var(--browills-white)' }}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: 'var(--browills-white)'
                    }}>
                  {option.title}
                </h3>
                <p className="mb-4" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                  {option.description}
                </p>
                <a
                  href={option.link}
                  className="inline-block font-bold text-white hover:text-glow transition-all duration-300"
                  style={{ 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {option.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpCenterPage; 