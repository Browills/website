// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import StudioPage from './pages/StudioPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import GdprPage from './pages/GdprPage';
import HelpCenterPage from './pages/HelpCenterPage';
import DocumentationPage from './pages/DocumentationPage';

// Blog posts
import FutureAIEnterpriseBeyondAutomation from './pages/blog-posts/future-ai-enterprise-beyond-automation';
import ZeroKnowledgeProofsPrivacyRevolution from './pages/blog-posts/zero-knowledge-proofs-privacy-revolution';
import TokenomicsPlaybook from './pages/blog-posts/tokenomics-playbook';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/gdpr" element={<GdprPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          
          {/* Blog post routes */}
          <Route path="/blog/future-ai-enterprise-beyond-automation" element={<FutureAIEnterpriseBeyondAutomation />} />
          <Route path="/blog/zero-knowledge-proofs-privacy-revolution" element={<ZeroKnowledgeProofsPrivacyRevolution />} />
          <Route path="/blog/tokenomics-playbook" element={<TokenomicsPlaybook />} />
          
          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
