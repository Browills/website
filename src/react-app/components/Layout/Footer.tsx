import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Studio', path: '/studio' },
    { name: 'Products', path: '/products' },
  ];

  const supportLinks = [
    { name: 'Documentation', path: '/documentation' },
    { name: 'Help Center', path: '/help-center' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'GDPR', path: '/gdpr' },
  ];

  return (
    <footer className="bg-browills-black border-t border-browills-gray/20 mt-24 w-full">
      <div className="w-full max-w-none px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center">
          {/* Column 1: Company Info */}
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="/Logos/Browillslogo.png" 
              alt="Browills Logo" 
              className="h-12 w-auto mb-2 mx-auto"
            />
            <h3 className="text-lg font-playfair font-black text-browills-white">Browills</h3>
            <p className="text-sm text-browills-gray">
              An AI & Blockchain Technology Company
            </p>
          </motion.div>

          {/* Column 2: Company */}
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-black text-browills-white">
              Company
            </h4>
            <nav className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-browills-gray hover:text-browills-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-black text-browills-white">
              Quicklinks
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-browills-gray hover:text-browills-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 4: Support */}
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-black text-browills-white">
              Support
            </h4>
            <nav className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-browills-gray hover:text-browills-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 5: Legal */}
          <motion.div
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-black text-browills-white">
              Legal
            </h4>
            <nav className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-browills-gray hover:text-browills-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-browills-gray/20 mt-8 pt-6 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 w-full">
            <p className="text-sm text-browills-gray">
              © {currentYear} Browills. All rights reserved.
            </p>
            <p className="text-sm text-browills-gray">
              info@browills.com | +44 7360 498963 | UK
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 