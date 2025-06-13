import React from 'react';
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Home/HeroSection';
import ServicesSection from '../components/Home/ServicesSection';
import ContactCTA from '../components/Home/ContactCTA';

const HomePage: React.FC = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Browills - We Build the Impossible",
    "description": "AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible",
    "url": "https://browills.com/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Browills",
      "description": "An AI & Blockchain technology company",
      "url": "https://browills.com",
      "logo": "https://browills.com/Logos/Browillslogo.png"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://browills.com/"
        }
      ]
    }
  };

  return (
    <Layout
      title="Browills - We Build the Impossible | AI & Blockchain Technology Company"
      description="Browills is an AI & Blockchain technology company helping ambitious startups, enterprises, and institutions build the impossible. We offer services, venture studio partnerships, and cutting-edge products."
      keywords="AI consulting, blockchain development, Web3 services, venture studio London, DeFi development, zero knowledge systems, enterprise AI, machine learning, smart contracts, digital transformation"
      ogImage="https://browills.com/Logos/Browillslogo.png"
      canonicalUrl="https://browills.com/"
      structuredData={homeStructuredData}
    >
      <HeroSection />
      <ServicesSection />
      <ContactCTA />
    </Layout>
  );
};

export default HomePage; 