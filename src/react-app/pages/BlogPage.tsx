import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

import { blogPosts, categories } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Browills Technical Blog",
    "description": "Technical insights, industry analysis, and thought leadership on AI, blockchain, Web3, and emerging technologies",
    "publisher": {
      "@type": "Organization",
      "name": "Browills",
      "url": "https://browills.com",
      "logo": "https://browills.com/Logos/Browillslogo.png"
    },
    "url": "https://browills.com/blog",
    "inLanguage": "en-US",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://browills.com/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      }
    }))
  };

  return (
    <Layout
      title="Blog - Browills | AI & Blockchain Insights"
      description="Stay updated with the latest insights on AI, blockchain, and emerging technologies from the Browills team. Expert perspectives on building the impossible."
      keywords="AI blog, blockchain insights, Web3 analysis, machine learning articles, DeFi research, zero knowledge technology, enterprise AI trends, technical articles"
      ogImage="https://browills.com/Logos/Browillslogo.png"
      canonicalUrl="https://browills.com/blog"
      structuredData={blogStructuredData}
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
                Tech Insights & Innovation
              </h1>
              <p className="text-xl md:text-2xl font-inter font-semibold text-browills-gray leading-relaxed">
                Explore the latest developments in AI, blockchain, and emerging technologies. 
                Expert insights from building the impossible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-browills-black to-gray-900/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-inter font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-browills-white text-browills-black'
                    : 'bg-transparent text-browills-gray border border-browills-gray/20 hover:border-browills-white hover:text-browills-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-900/10 to-browills-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-browills-black to-gray-900/20 border border-browills-gray/20 p-8 card-hover group cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.slug}`}
              >
                <div className="space-y-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-browills-gray font-inter font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-4 text-browills-gray">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-inter font-medium">{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-inter font-medium">{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="heading-medium text-browills-white group-hover:text-glow transition-all duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-browills-gray font-inter font-medium leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center space-x-2 text-browills-white group-hover:text-glow transition-all duration-300">
                    <span className="font-inter font-semibold">Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-browills-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-large text-browills-white text-glow mb-8">
                Stay Updated
              </h2>
              <p className="text-xl font-inter font-semibold text-browills-gray mb-8 leading-relaxed">
                Get the latest insights delivered directly to your inbox. Join our newsletter for 
                exclusive content on AI, blockchain, and emerging technologies.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3 text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe to Updates</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage; 