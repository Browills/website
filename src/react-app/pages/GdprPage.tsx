import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';

const GdprPage: React.FC = () => {
  return (
    <Layout
      title="GDPR Compliance - Browills | Data Protection Rights"
      description="Learn about your GDPR rights and how Browills complies with EU data protection regulations."
    >
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="hero-text text-glow mb-6">GDPR Compliance</h1>
            <p className="text-xl font-inter font-semibold leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              Your data protection rights under the General Data Protection Regulation.
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

            {/* GDPR Overview */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                1. GDPR Overview
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  The General Data Protection Regulation (GDPR) gives EU residents enhanced control 
                  over their personal data. Browills is committed to full GDPR compliance and 
                  protecting your privacy rights.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                2. Your GDPR Rights
              </h2>
              <div className="space-y-6 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Right to Information
                  </h3>
                  <p>You have the right to know what personal data we collect and how we use it.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Right of Access
                  </h3>
                  <p>You can request a copy of all personal data we hold about you.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Right to Rectification
                  </h3>
                  <p>You can request correction of inaccurate personal data.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Right to Erasure
                  </h3>
                  <p>You can request deletion of your personal data in certain circumstances.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Right to Data Portability
                  </h3>
                  <p>You can request transfer of your data to another service provider.</p>
                </div>
              </div>
            </section>

            {/* How to Exercise Rights */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                3. How to Exercise Your Rights
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  To exercise any of your GDPR rights, please contact us at info@browills.com. 
                  We will respond to your request within 30 days as required by GDPR.
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
                Contact Our Data Protection Officer
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  For any GDPR-related questions or to exercise your rights, contact our Data Protection Officer at info@browills.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GdprPage; 