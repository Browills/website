# Browills Website Build Prompt

## 🎯 Project Overview
Build a sophisticated, dark-themed website for Browills that embodies the "We Build the Impossible" brand identity. The website should be built using modern web technologies, optimized for performance, and ready for production deployment. 

**Core Design Philosophy**: Clean alignment and professional appearance are the ultimate requirements. Every element must be perfectly aligned, with generous spacing and a legendary, bold aesthetic that commands attention.

## 🏗️ Technical Stack

### Core Technologies (Current Implementation)
- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 6.3.5
- **Backend Framework**: Hono 4.7.7
- **Runtime**: Cloudflare Workers
- **Language**: TypeScript 5.8.3
- **Styling**: CSS (to be enhanced with TailwindCSS + Framer Motion)
- **Deployment**: Wrangler 4.16.1 (Cloudflare CLI)
- **Package Manager**: npm

### Current Project Structure
```
src/
├── react-app/          # Frontend React application
│   ├── App.tsx         # Main React component
│   ├── main.tsx        # React entry point
│   ├── index.css       # Global styles
│   ├── App.css         # Component styles
│   └── assets/         # Static assets
└── worker/             # Backend Cloudflare Worker
    └── index.ts        # Hono API routes
```

### Enhanced Dependencies (To Add)
- **Styling**: TailwindCSS + Framer Motion
- **Email Integration**: EmailJS.com
- **Forms**: React Hook Form
- **Icons**: Lucide React or Heroicons
- **Analytics**: Cloudflare Analytics or Plausible

### Development Requirements
- TypeScript for type safety ✅ (Already configured)
- ESLint for code quality ✅ (Already configured)
- Prettier for code formatting (to be added)
- Husky for pre-commit hooks (to be added)
- Jest/Vitest for testing (to be added)

## 🎨 Design Specifications

### Theme
- **Primary Background**: #000000 (Black)
- **Primary Text**: #FFFFFF (White)
- **Secondary Text**: #CCCCCC (Light Gray)

### Typography - Legendary & Bold
- **Primary Headings**: Playfair Display (Black/Extra Bold)
- **Secondary Headings**: Inter (Black/Extra Bold) 
- **Body Text**: Inter (Medium/Semi-Bold)
- **Monospace**: JetBrains Mono (Bold)
- **Font Sizes**:
  - H1: 96px (mobile: 56px) - Extra Large & Bold
  - H2: 64px (mobile: 40px) - Large & Bold
  - H3: 40px (mobile: 28px) - Medium & Bold
  - Body: 18px (Bold) - Readable & Strong
  - Small: 16px (Medium)
- **Font Weight Requirements**: All text should appear strong and commanding
- **Letter Spacing**: Wide letter spacing for headings (0.02em - 0.05em)
- **Line Height**: Generous line spacing (1.6x for body, 1.2x for headings)

### Animations
- Smooth scroll with inertia
- Text fade-in on scroll
- Parallax hover effects
- Subtle glitch effects on hover
- Page transitions
- Loading states

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Hamburger menu for mobile
- Responsive images and videos
- Touch-friendly interactions

## 🏗️ Page Structure & Layout

### Universal Header
- **Logo**: Use Browills logo from logos folder (not text)
- **Navigation**: Clean, centered navigation menu
- **Alignment**: Perfect center alignment with generous spacing
- **Mobile**: Hamburger menu that maintains logo prominence

### Universal Footer
- **Layout**: Clean 3-column layout with perfect alignment
- **Content**: 
  - Column 1: Company info and tagline
  - Column 2: Quick links (Services, Studio, Products, Contact)
  - Column 3: Legal links (Privacy, Terms, Cookies, GDPR)
- **Alignment**: All elements perfectly aligned and spaced
- **Contact**: info@browills.com prominently displayed

### 1. Homepage (`/`)
```typescript
interface HomePageProps {
  hero: {
    title: "We Build the Impossible";
    subtitle: "Browills - An AI & Blockchain Technology company";
    description: string;
    ctaButtons: Array<{
      text: string;
      link: string;
    }>;
  };
  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  // ... other sections
}
```

#### Components
- Hero Section (Bold, Legendary Typography)
- Services Overview (Clean Grid Layout)
- Venture Studio Preview (Logo Grid)
- Products Showcase (Card Layout)
- Contact CTA (Prominent Button)

### 2. About Page (`/about`)
- Company Story (Bold narrative)
- Vision & Mission (Clean layout)
- Why "We Build the Impossible" (Hero section)
- Company Values (Grid layout)
- **Perfect Alignment**: All sections centered and evenly spaced

### 3. Services Page (`/services`)
- AI & Data Engineering
- Blockchain & Web3
- IT Services & Infrastructure
- Business & Tech Consulting
- Zero Knowledge Systems

### 4. Venture Studio (`/studio`)
- Portfolio Grid (Logo + Name only)
- Each project links to external website
- Partnership Model
- How to Apply

### 5. Products Page (`/products`)
- Product Categories
- Product Cards
- API Documentation Links
- Integration Guides

### 6. Contact Page (`/contact`)
```typescript
interface ContactForm {
  name: string;
  email: string;
  company?: string;
  projectType: 'services' | 'studio' | 'products';
  message: string;
  budgetRange?: string;
}
```

#### Contact Information Display
```
Browills
An AI & Blockchain Technology company

Email: info@browills.com
Phone: +447360498963

Office: London, United Kingdom
```

#### EmailJS Integration
```typescript
// emailjs.config.ts
export const EMAILJS_CONFIG = {
  serviceID: 'browills_email',
  templateID: 'contact_form',
  userID: 'YOUR_USER_ID',
  toEmail: 'info@browills.com'
};
```

#### Layout Requirements
- **Form Alignment**: Perfectly centered form with generous spacing
- **Typography**: Bold labels and strong visual hierarchy
- **Contact Info**: Clean, aligned contact details section

## 📄 Legal Pages

### Terms of Service
- Service Usage Terms
- Intellectual Property Rights
- Limitation of Liability
- Dispute Resolution
- Governing Law (UK)

### Privacy Policy
- GDPR Compliance
- Data Collection
- Data Usage
- User Rights
- Cookie Policy
- Data Protection Officer Contact

### Cookie Policy
- Cookie Types
- Usage Purpose
- User Consent
- Management Options

## 🔒 Security Requirements

### Essential Security Headers
```nginx
# Security Headers
Content-Security-Policy: default-src 'self';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### GDPR Compliance
- Cookie Consent Banner
- Privacy Policy Link
- Data Processing Agreements
- User Data Export
- Data Deletion Requests

## 🚀 Performance Optimization

### Core Web Vitals Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### Optimization Techniques
- Image Optimization
- Code Splitting
- Lazy Loading
- Caching Strategy
- CDN Integration

## 📈 SEO Requirements

### Meta Tags
```typescript
interface MetaTags {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard: string;
}
```

### Sitemap
- XML Sitemap
- Robots.txt
- Structured Data

## 🔄 CI/CD Pipeline

### Current Configuration
- [x] Vite + React setup
- [x] Hono backend with API routes
- [x] Cloudflare Workers deployment ready
- [x] TypeScript configuration
- [x] ESLint configuration
- [ ] TailwindCSS integration
- [ ] Framer Motion animations
- [ ] Email integration
- [ ] Content management
- [ ] Analytics setup

### Wrangler Configuration (wrangler.json)
```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "website",
  "main": "./src/worker/index.ts",
  "compatibility_date": "2025-04-01",
  "compatibility_flags": ["nodejs_compat"],
  "observability": {
    "enabled": true
  },
  "upload_source_maps": true,
  "assets": {
    "not_found_handling": "single-page-application"
  }
}
```

### Deployment Commands
```bash
# Development
npm run dev

# Build and check
npm run check

# Deploy to Cloudflare Workers
npm run deploy
```

## 📝 Content Management

### Sanity.io Schema
```typescript
// schemas/page.ts
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    },
    // ... other fields
  ]
}
```

## 🎯 Testing Requirements

### Unit Tests
- Component Testing
- Integration Testing
- E2E Testing
- Accessibility Testing

### Performance Testing
- Lighthouse Scores
- Load Testing
- Stress Testing

## 📦 Dependencies

### Current Dependencies (package.json)
```json
{
  "dependencies": {
    "hono": "4.7.7",
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  "devDependencies": {
    "@cloudflare/vite-plugin": "1.2.4",
    "@eslint/js": "9.25.1",
    "@types/node": "22.15.19",
    "@types/react": "19.0.10",
    "@types/react-dom": "19.0.4",
    "@vitejs/plugin-react": "4.4.1",
    "eslint": "9.27.0",
    "eslint-plugin-react-hooks": "5.2.0",
    "eslint-plugin-react-refresh": "0.4.20",
    "globals": "15.15.0",
    "typescript": "5.8.3",
    "typescript-eslint": "8.31.0",
    "vite": "6.3.5",
    "wrangler": "4.16.1"
  }
}
```

### Additional Dependencies to Add
```json
{
  "dependencies": {
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "@emailjs/browser": "^4.0.0",
    "react-hook-form": "^7.48.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "prettier": "^3.0.0",
    "@tailwindcss/typography": "^0.5.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0"
  }
}
```

### Current Scripts (package.json)
```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "cf-typegen": "wrangler types",
    "check": "tsc && vite build && wrangler deploy --dry-run",
    "deploy": "wrangler deploy",
    "dev": "vite",
    "lint": "eslint .",
    "preview": "npm run build && vite preview"
  }
}
```

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] All tests passing
- [ ] Performance metrics met
- [ ] SEO requirements met
- [ ] Legal pages complete
- [ ] GDPR compliance verified
- [ ] Security headers configured
- [ ] Analytics implemented
- [ ] Email integration tested

### Post-deployment
- [ ] SSL certificate verified
- [ ] DNS records configured
- [ ] CDN caching tested
- [ ] Backup system verified
- [ ] Monitoring alerts set up
- [ ] Error tracking configured

## 📞 Support & Maintenance

### Monitoring
- Error tracking (Sentry)
- Performance monitoring
- Uptime monitoring
- Security scanning

### Backup Strategy
- Daily database backups
- Weekly full backups
- Monthly archive backups

## 🔄 Update Process
1. Create feature branch
2. Implement changes
3. Run tests
4. Create PR
5. Code review
6. Merge to main
7. Deploy to staging
8. Verify changes
9. Deploy to production

---

**Note**: This prompt should be used as a comprehensive guide for building the Browills website. All components should be built with scalability, maintainability, and performance in mind. The website should reflect the sophisticated, dark-themed design while maintaining excellent user experience and accessibility standards. 