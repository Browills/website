import React from 'react';
import Layout from '../components/Layout/Layout';
import { Cookie, Settings, Clock } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <Layout
      title="Cookie Policy - Browills | How We Use Cookies"
      description="Learn about Browills' cookie usage and how to manage your cookie preferences for an optimal browsing experience."
    >
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="hero-text text-glow mb-6">Cookie Policy</h1>
            <p className="text-xl font-inter font-semibold leading-relaxed" 
               style={{ color: 'var(--browills-gray)' }}>
              Understanding how we use cookies to improve your browsing experience.
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

            {/* What are Cookies */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                1. What Are Cookies
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your 
                  preferences and analyzing website usage.
                </p>
              </div>
            </section>

            {/* Cookie Types */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                2. Types of Cookies We Use
              </h2>
              <div className="space-y-6 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Essential Cookies
                  </h3>
                  <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Analytics Cookies
                  </h3>
                  <p>We use analytics cookies to understand how visitors interact with our website.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--browills-white)' }}>
                    Performance Cookies
                  </h3>
                  <p>These cookies help us improve website performance and user experience.</p>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-3xl font-black mb-6" 
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    color: 'var(--browills-white)'
                  }}>
                3. Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4 text-base leading-relaxed" 
                   style={{ 
                     fontFamily: 'Inter, sans-serif',
                     color: 'var(--browills-gray)'
                   }}>
                <p>
                  You can control and manage cookies through your browser settings. Most browsers 
                  allow you to block or delete cookies, though this may affect website functionality.
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
                  Questions about our cookie policy? Contact us at info@browills.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiesPage; 