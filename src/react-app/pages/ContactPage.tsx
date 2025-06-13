import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { Mail, Phone, MapPin, ArrowRight, User, Building, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: 'services' | 'studio' | 'products';
  message: string;
  budgetRange?: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'services',
    message: '',
    budgetRange: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For demo purposes, we'll simulate email sending
      // In production, configure EmailJS with your service details
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'services',
        message: '',
        budgetRange: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: 'services', label: 'Services & Consulting' },
    { value: 'studio', label: 'Venture Studio Partnership' },
    { value: 'products', label: 'Products & APIs' }
  ];

  const budgetRanges = [
    { value: '10k-50k', label: '$10K - $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k-500k', label: '$100K - $500K' },
    { value: '500k+', label: '$500K+' },
    { value: 'equity', label: 'Equity Partnership' }
  ];

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Browills",
    "description": "Get in touch with Browills for AI and blockchain solutions",
    "url": "https://browills.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Browills",
      "email": "info@browills.com",
      "telephone": "+447360498963",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447360498963",
        "email": "info@browills.com",
        "contactType": "customer service",
        "areaServed": "Global",
        "availableLanguage": "en"
      }
    }
  };

  return (
    <Layout
      title="Contact Browills - Let's Build the Impossible Together"
      description="Get in touch with Browills for AI and blockchain solutions. Contact us for services, venture studio partnerships, or product inquiries."
      keywords="contact Browills, AI blockchain consulting, get in touch, services inquiry, venture studio contact, project consultation, London AI company"
      ogImage="https://browills.com/Logos/Browillslogo.png"
      canonicalUrl="https://browills.com/contact"
      structuredData={contactStructuredData}
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
                Let's Build Together
              </h1>
              <p className="text-2xl md:text-3xl font-inter font-semibold text-browills-gray leading-relaxed">
                Ready to turn your vision into reality? Whether you need cutting-edge technology solutions, 
                venture partnership, or access to our products, we're here to make the impossible possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-padding bg-gradient-to-b from-browills-black to-gray-900/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="heading-large text-browills-white mb-8">Get In Touch</h2>
                  <p className="body-text text-browills-gray leading-relaxed mb-8">
                    We'd love to hear about your project and explore how we can help you build the impossible. 
                    Reach out to us through any of the channels below, or use the contact form to send us 
                    detailed information about your requirements.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-4 border border-browills-gray/20 bg-gradient-to-r from-browills-black to-gray-900/20 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="h-6 w-6 text-browills-white flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-playfair font-black text-browills-white">Email</h3>
                      <a
                        href="mailto:info@browills.com"
                        className="text-browills-gray hover:text-browills-white hover:text-glow transition-all duration-300 font-inter font-semibold"
                      >
                        info@browills.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 border border-browills-gray/20 bg-gradient-to-r from-browills-black to-gray-900/20 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="h-6 w-6 text-browills-white flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-playfair font-black text-browills-white">Phone</h3>
                      <a
                        href="tel:+447360498963"
                        className="text-browills-gray hover:text-browills-white hover:text-glow transition-all duration-300 font-inter font-semibold"
                      >
                        +44 7360 498963
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 border border-browills-gray/20 bg-gradient-to-r from-browills-black to-gray-900/20 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <MapPin className="h-6 w-6 text-browills-white flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-playfair font-black text-browills-white">Office</h3>
                      <p className="text-browills-gray font-inter font-semibold">
                        London, United Kingdom
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Company Info */}
                <div className="pt-8 border-t border-browills-gray/20">
                  <h3 className="heading-medium text-browills-white mb-4">Browills</h3>
                  <p className="text-lg font-inter font-semibold text-browills-gray mb-2">
                    An AI & Blockchain Technology company
                  </p>
                  <p className="text-xl font-playfair font-black text-browills-white text-glow">
                    "We Build the Impossible"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <h2 className="heading-large text-browills-white mb-8">Send Us a Message</h2>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-lg font-inter font-bold text-browills-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    className="w-full px-4 py-3 bg-browills-black border-2 border-browills-gray/20 text-browills-white font-inter focus:border-browills-white focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-inter font-bold text-browills-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className="w-full px-4 py-3 bg-browills-black border-2 border-browills-gray/20 text-browills-white font-inter focus:border-browills-white focus:outline-none transition-colors duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-lg font-inter font-bold text-browills-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    name="company"
                    className="w-full px-4 py-3 bg-browills-black border-2 border-browills-gray/20 text-browills-white font-inter focus:border-browills-white focus:outline-none transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-lg font-inter font-bold text-browills-white mb-2">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={handleChange}
                    name="projectType"
                    className="w-full px-4 py-3 bg-browills-black border-2 border-browills-gray/20 text-browills-white font-inter focus:border-browills-white focus:outline-none transition-colors duration-300 [&>option]:bg-browills-black [&>option]:text-browills-white"
                    style={{ 
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      colorScheme: 'dark'
                    }}
                  >
                    <option value="" className="bg-browills-black text-browills-white" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-browills-black text-browills-white" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-lg font-inter font-bold text-browills-white mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={handleChange}
                    name="budgetRange"
                    className="w-full px-4 py-3 bg-browills-black border-2 border-browills-gray/20 text-browills-white font-inter focus:border-browills-white focus:outline-none transition-colors duration-300 [&>option]:bg-browills-black [&>option]:text-browills-white"
                    style={{ 
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      colorScheme: 'dark'
                    }}
                  >
                    <option value="" className="bg-browills-black text-browills-white" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value} className="bg-browills-black text-browills-white" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-lg font-inter font-bold text-browills-white mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-browills-black border-2 border-browills-gray/20 text-browills-white font-inter focus:border-browills-white focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell us about your project, challenges, and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-3 group text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-browills-black"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-green-900/20 border border-green-500/20 text-green-400"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-inter font-semibold">
                      Message sent successfully! We'll get back to you within 24 hours.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-red-900/20 border border-red-500/20 text-red-400"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-inter font-semibold">
                      Failed to send message. Please try again or contact us directly.
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 