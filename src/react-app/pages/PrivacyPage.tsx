import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { Lock, Eye, Users, Clock } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy - Browills | Your Privacy Matters"
      description="Learn how Browills protects your privacy and handles your personal data in compliance with GDPR and UK data protection laws."
    >
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="hero-text text-glow mb-6">Privacy Policy</h1>
            <p className="text-xl font-inter font-semibold leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              Your privacy and data protection are fundamental to everything we do at Browills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 border border-gray-500/20" 
                 style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <Lock className="h-8 w-8 mx-auto mb-4" style={{ color: 'var(--browills-white)' }} />
              <h3 className="text-lg font-bold mb-2" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                GDPR Compliant
              </h3>
              <p className="text-sm font-medium" 
                 style={{ 
                   fontFamily: 'Inter, sans-serif',
                   color: 'var(--browills-gray)'
                 }}>
                Full compliance with EU data protection regulations
              </p>
            </div>

            <div className="text-center p-6 border border-gray-500/20" 
                 style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <Eye className="h-8 w-8 mx-auto mb-4" style={{ color: 'var(--browills-white)' }} />
              <h3 className="text-lg font-bold mb-2" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                Transparent
              </h3>
              <p className="text-sm font-medium" 
                 style={{ 
                   fontFamily: 'Inter, sans-serif',
                   color: 'var(--browills-gray)'
                 }}>
                Clear information about data collection and usage
              </p>
            </div>

            <div className="text-center p-6 border border-gray-500/20" 
                 style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <Users className="h-8 w-8 mx-auto mb-4" style={{ color: 'var(--browills-white)' }} />
              <h3 className="text-lg font-bold mb-2" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                User Rights
              </h3>
              <p className="text-sm font-medium" 
                 style={{ 
                   fontFamily: 'Inter, sans-serif',
                   color: 'var(--browills-gray)'
                 }}>
                Full control over your personal data
              </p>
            </div>
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
                1. Introduction
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  Browills ("we", "our", or "us") is committed to protecting and respecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website browills.com or use our services.
                </p>
                <p>
                  This policy applies to all services offered by Browills, including our AI & blockchain 
                  consulting services, venture studio partnerships, and product offerings.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                2. Information We Collect
              </h2>
              <div className="space-y-6 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Personal Information
                  </h3>
                  <p>We may collect personal information that you voluntarily provide, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and professional details</li>
                    <li>Project requirements and business needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    2.2 Technical Information
                  </h3>
                  <p>We automatically collect certain technical information, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                3. How We Use Your Information
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>We use collected information for:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Responding to inquiries and support requests</li>
                  <li>Communicating about projects and business opportunities</li>
                  <li>Website analytics and performance optimization</li>
                  <li>Legal compliance and security purposes</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                4. Information Sharing
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers under strict confidentiality agreements</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                5. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>Under GDPR and UK data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Transfer your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Restriction:</strong> Restrict processing of your personal data</li>
                </ul>
              </div>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                6. Data Security
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  This includes encryption, secure servers, and regular security assessments.
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
                  For questions about this Privacy Policy, please contact us at info@browills.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage; 