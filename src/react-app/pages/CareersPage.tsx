import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import { MapPin, Clock, Users, ArrowRight, Building, Globe, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI systems and machine learning infrastructure that powers our next-generation products.',
      requirements: [
        'Masters/PhD in Computer Science, AI, or related field',
        'Extensive experience with PyTorch, TensorFlow, or JAX',
        'Production experience with LLMs, computer vision, or NLP',
        'Strong background in distributed systems and cloud platforms',
        'Experience with MLOps and model deployment at scale'
      ],
      responsibilities: [
        'Design and implement novel AI architectures',
        'Lead technical decisions for AI product development',
        'Mentor junior engineers and drive technical excellence',
        'Collaborate with research teams on cutting-edge algorithms',
        'Optimize AI systems for production deployment'
      ]
    },
    {
      id: '2',
      title: 'Blockchain Protocol Developer',
      department: 'Engineering',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and optimize blockchain protocols, smart contracts, and DeFi infrastructure for our venture studio portfolio.',
      requirements: [
        'Strong experience with Solidity, Rust, or Move',
        'Deep understanding of blockchain consensus mechanisms',
        'Experience with DeFi protocols and tokenomics',
        'Knowledge of cryptographic primitives and zero-knowledge proofs',
        'Familiarity with cross-chain protocols and Layer 2 solutions'
      ],
      responsibilities: [
        'Develop secure and efficient smart contracts',
        'Design tokenomics and protocol economics',
        'Conduct security audits and optimization',
        'Research and implement new blockchain technologies',
        'Collaborate with ventures on technical architecture'
      ]
    },
    {
      id: '3',
      title: 'Product Manager - AI/Blockchain',
      department: 'Product',
      location: 'London, UK / Hybrid',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Drive product strategy and execution for our AI and blockchain products, working closely with engineering and business teams.',
      requirements: [
        'Technical background in AI, blockchain, or related fields',
        'Proven track record of shipping successful products',
        'Experience with agile development methodologies',
        'Strong analytical and data-driven decision making',
        'Excellent communication and stakeholder management skills'
      ],
      responsibilities: [
        'Define product roadmap and strategy',
        'Work with engineering teams on technical requirements',
        'Conduct market research and competitive analysis',
        'Manage product launches and go-to-market strategies',
        'Analyze product metrics and user feedback'
      ]
    },
    {
      id: '4',
      title: 'Venture Partner',
      department: 'Venture Studio',
      location: 'London, UK / Global',
      type: 'Partnership',
      experience: '8+ years',
      description: 'Lead venture studio initiatives, identify promising opportunities, and guide startups from ideation to scale.',
      requirements: [
        'Entrepreneurial experience in tech or deep tech',
        'Strong network in AI, blockchain, or emerging tech',
        'Experience with startup funding and scaling',
        'Track record of successful exits or significant value creation',
        'Strategic thinking and business development skills'
      ],
      responsibilities: [
        'Source and evaluate new venture opportunities',
        'Provide strategic guidance to portfolio companies',
        'Lead business development and partnership initiatives',
        'Support fundraising and growth strategies',
        'Represent Browills in industry events and conferences'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours and quarterly team meetups.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Cutting-Edge Projects',
      description: 'Work on impossible problems using the latest AI and blockchain technologies.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Equity Participation',
      description: 'Share in the success of our ventures with competitive equity packages.'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Learning & Development',
      description: 'Continuous learning budget, conference attendance, and skill development.'
    }
  ];

  return (
    <Layout
      title="Careers - Join Browills | Build the Impossible"
      description="Join our team of AI and blockchain pioneers. Work on cutting-edge technology, build the impossible, and shape the future of digital innovation."
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
                Build the Impossible
              </h1>
              <p className="text-xl md:text-2xl font-inter font-semibold text-browills-gray leading-relaxed">
                Join a team of exceptional engineers, researchers, and visionaries pushing the boundaries 
                of AI and blockchain technology. Shape the future while building legendary solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-gradient-to-b from-browills-black to-gray-900/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-large text-browills-white text-glow mb-8">
              Why Browills?
            </h2>
            <p className="text-xl font-inter font-semibold text-browills-gray max-w-3xl mx-auto leading-relaxed">
              We're not just building products — we're pioneering the technologies that will define 
              the next decade. Work with world-class talent on problems that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-browills-black to-gray-900/20 border border-browills-gray/20 p-8 text-center card-hover"
              >
                <div className="text-browills-white mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="heading-medium text-browills-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-browills-gray font-inter font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gradient-to-b from-gray-900/10 to-browills-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-large text-browills-white text-glow mb-8">
              Open Positions
            </h2>
            <p className="text-xl font-inter font-semibold text-browills-gray max-w-3xl mx-auto leading-relaxed">
              Join our mission to build the impossible. We're looking for exceptional talent 
              to join our growing team of pioneers.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-browills-black to-gray-900/20 border border-browills-gray/20 p-8 card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Job Info */}
                  <div className="lg:col-span-1">
                    <h3 className="heading-medium text-browills-white mb-4">
                      {job.title}
                    </h3>
                    <div className="space-y-3 text-browills-gray">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span className="font-inter font-semibold">{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-inter font-semibold">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-inter font-semibold">{job.type} • {job.experience}</span>
                      </div>
                    </div>
                    <p className="text-browills-gray font-inter font-medium mt-6 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Requirements & Responsibilities */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xl font-playfair font-black text-browills-white mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-browills-gray font-inter font-medium flex items-start space-x-2">
                            <span className="text-browills-white mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-playfair font-black text-browills-white mb-4">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-browills-gray font-inter font-medium flex items-start space-x-2">
                            <span className="text-browills-white mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-8 pt-6 border-t border-browills-gray/20">
                  <motion.a
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
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
                Don't See Your Role?
              </h2>
              <p className="text-xl font-inter font-semibold text-browills-gray mb-8 leading-relaxed">
                We're always looking for exceptional talent. If you're passionate about AI, blockchain, 
                or building the impossible, we'd love to hear from you.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3 text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage; 