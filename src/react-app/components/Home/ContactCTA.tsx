import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact-section" className="section-padding bg-gradient-to-t from-browills-black to-gray-900/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-16"
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
              <h2 className="heading-large text-browills-white">Let's Build Together</h2>
            </motion.div>
            
            <motion.p
              className="text-xl md:text-2xl font-inter font-semibold text-browills-gray leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to turn your vision into reality? Whether you need cutting-edge technology solutions, 
              venture partnership, or access to our products, we're here to make the impossible possible.
            </motion.p>
          </motion.div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <motion.div
              className="group p-6 border border-browills-gray/20 bg-gradient-to-br from-browills-black to-gray-900/20 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Mail className="h-8 w-8 text-browills-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-playfair font-black text-browills-white mb-2">Email Us</h3>
              <a
                href="mailto:info@browills.com"
                className="text-browills-gray hover:text-browills-white hover:text-glow transition-all duration-300 font-inter font-semibold"
              >
                info@browills.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="group p-6 border border-browills-gray/20 bg-gradient-to-br from-browills-black to-gray-900/20 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Phone className="h-8 w-8 text-browills-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-playfair font-black text-browills-white mb-2">Call Us</h3>
              <a
                href="tel:+447360498963"
                className="text-browills-gray hover:text-browills-white hover:text-glow transition-all duration-300 font-inter font-semibold"
              >
                +44 7360 498963
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              className="group p-6 border border-browills-gray/20 bg-gradient-to-br from-browills-black to-gray-900/20 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-8 w-8 text-browills-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-playfair font-black text-browills-white mb-2">Visit Us</h3>
              <p className="text-browills-gray font-inter font-semibold">
                London, United Kingdom
              </p>
            </motion.div>
          </div>

          {/* Main CTA Button */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg font-inter font-semibold text-browills-gray"
              whileHover={{ scale: 1.02 }}
            >
              Got a project in mind? Let's discuss how we can help.
            </motion.p>
            
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-3 group text-xl px-12 py-6"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Company Tagline */}
          <motion.div
            className="mt-16 pt-8 border-t border-browills-gray/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-playfair font-black text-browills-white text-glow mb-6">
              "We Build the Impossible"
            </p>
            <p className="text-xl md:text-2xl font-bold text-browills-gray max-w-4xl mx-auto leading-relaxed tracking-wide"
               style={{ 
                 fontFamily: 'Playfair Display, serif',
                 fontWeight: '700',
                 letterSpacing: '0.02em'
               }}>
              We bring AI, blockchain, and product mastery under one roof by delivering 
              mission-critical solutions for innovators, institutions, and next-generation enterprises.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 