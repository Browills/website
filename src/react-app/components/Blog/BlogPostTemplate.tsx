import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../Layout/Layout';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  readTime: string;
  category: string;
  author: string;
  previousPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

const BlogPostTemplate: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  content,
  date,
  readTime,
  category,
  author,
  previousPost,
  nextPost
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate URL-friendly slug from title if not provided
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const postUrl = `https://browills.com/blog/${slug}`;
  const postKeywords = `${category.toLowerCase()}, ${title.toLowerCase().split(' ').slice(0, 5).join(', ')}, AI technology, blockchain, Web3, technical analysis`;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "image": "https://browills.com/Logos/Browillslogo.png",
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://browills.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Browills",
      "logo": {
        "@type": "ImageObject",
        "url": "https://browills.com/Logos/Browillslogo.png"
      },
      "url": "https://browills.com"
    },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "url": postUrl,
    "inLanguage": "en-US",
    "articleSection": category,
    "keywords": postKeywords,
    "wordCount": excerpt.split(' ').length * 10, // Rough estimate
    "timeRequired": readTime
  };

  return (
    <Layout
      title={`${title} - Browills Blog`}
      description={excerpt}
      keywords={postKeywords}
      ogImage="https://browills.com/Logos/Browillslogo.png"
      canonicalUrl={postUrl}
      structuredData={articleStructuredData}
    >
      {/* Hero Section */}
      <section className="section-padding bg-browills-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back to Blog */}
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 text-browills-gray hover:text-browills-white transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="font-inter font-semibold">Back to Blog</span>
              </Link>

              {/* Category */}
              <div className="mb-6">
                <span className="px-4 py-2 bg-browills-white text-browills-black font-inter font-semibold text-sm">
                  {category}
                </span>
              </div>

              {/* Title */}
              <h1 className="hero-text text-glow mb-8">
                {title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-browills-gray mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="font-inter font-semibold">{author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-inter font-semibold">{formatDate(date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-inter font-semibold">{readTime}</span>
                </div>
                <button className="flex items-center space-x-2 hover:text-browills-white transition-colors duration-300">
                  <Share className="h-4 w-4" />
                  <span className="font-inter font-semibold">Share</span>
                </button>
              </div>

              {/* Excerpt */}
              <p className="text-xl font-inter font-semibold text-browills-gray leading-relaxed">
                {excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gradient-to-b from-browills-black to-gray-900/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="blog-content text-browills-gray font-inter font-medium leading-relaxed space-y-8">
                {content}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(previousPost || nextPost) && (
        <section className="py-16 bg-gradient-to-b from-gray-900/10 to-browills-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Previous Post */}
                {previousPost && (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link
                      to={`/blog/${previousPost.slug}`}
                      className="block p-6 bg-gradient-to-r from-browills-black to-gray-900/20 border border-browills-gray/20 card-hover group"
                    >
                      <div className="flex items-center space-x-3 text-browills-gray mb-3">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="font-inter font-semibold text-sm">Previous Post</span>
                      </div>
                      <h3 className="text-lg font-playfair font-black text-browills-white group-hover:text-glow transition-all duration-300">
                        {previousPost.title}
                      </h3>
                    </Link>
                  </motion.div>
                )}

                {/* Next Post */}
                {nextPost && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={!previousPost ? 'md:col-start-2' : ''}
                  >
                    <Link
                      to={`/blog/${nextPost.slug}`}
                      className="block p-6 bg-gradient-to-r from-browills-black to-gray-900/20 border border-browills-gray/20 card-hover group"
                    >
                      <div className="flex items-center justify-end space-x-3 text-browills-gray mb-3">
                        <span className="font-inter font-semibold text-sm">Next Post</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-playfair font-black text-browills-white group-hover:text-glow transition-all duration-300 text-right">
                        {nextPost.title}
                      </h3>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

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

export default BlogPostTemplate;
