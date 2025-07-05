import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Layout from '../components/Layout/Layout';

const TermsPage: React.FC = () => {
  return (
    <Layout
      title="Terms of Service - Browills | Service Terms and Conditions"
      description="Read Browills' terms of service for our AI & blockchain consulting, venture studio, and product offerings."
    >
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="hero-text text-glow mb-6">Terms of Service</h1>
            <p className="text-xl font-inter font-semibold leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              These terms govern your use of Browills services and website.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="flex items-center gap-3 text-sm font-medium" 
                 style={{ color: 'var(--browills-gray)' }}>
              <Clock className="h-5 w-5" />
              <span>Last updated: December 2024</span>
            </div>

            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  By accessing and using Browills' website and services, you accept and agree to be bound 
                  by the terms and provision of this agreement. These terms apply to all visitors, users, 
                  and clients of our services.
                </p>
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                2. Services Description
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  Browills provides AI & blockchain technology consulting, venture studio partnerships, 
                  and software products. Specific terms for each service type may be outlined in 
                  separate agreements.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                3. Intellectual Property
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  All content, trademarks, and intellectual property on this website and in our 
                  services remain the property of Browills unless otherwise specified in writing.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                4. Governing Law
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  These terms are governed by the laws of the United Kingdom. Any disputes will be 
                  resolved in the courts of England and Wales.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                Contact Us
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  Questions about these terms? Contact us at info@browills.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage; 