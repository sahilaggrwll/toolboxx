import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import {  
  Clipboard, 
  Layers, 
  Code, 
  Zap, 
  Shield,
  Mail, 
  Menu, 
  X,
  ChevronRight,
  CheckCircle,
  Users,
  Smartphone
} from 'lucide-react';

// Enhanced tool data with better descriptions and features
const tools = [
  {
    name: 'Add Anything',
    description: 'Universal clipboard enhancement tool that intelligently formats and organizes any copied content for instant use.',
    features: ['Smart formatting', 'Multi-format support', 'Instant paste', 'Custom templates'],
    icon: <Clipboard size={48} />,
    category: 'Productivity'
  },
  {
    name: 'Shopify Identifier',
    description: 'Chrome extension that instantly detects whether any website is built with Shopify, providing real-time platform identification.',
    features: ['Instant detection', 'Platform identification', 'One-click analysis', 'Browser integration'],
    icon: <Layers size={48} />,
    category: 'E-commerce'
  },
  {
    name: 'Google Maps Extractor',
    description: 'Powerful data extraction tool for Google Maps with automated business information collection and export capabilities.',
    features: ['Bulk data extraction', 'Contact details', 'Location data', 'Export to CSV'],
    icon: <Code size={48} />,
    category: 'Data Mining'
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Sushant',
    role: 'Founder',
    company: 'SDCW',
    content: 'Add Anything has completely transformed our workflow. The smart formatting and instant paste features save us hours every day.',
    avatar: 'S'
  },
  {
    name: 'Santosh',
    role: 'Tech Lead',
    company: 'Star Apps',
    content: 'The Shopify Identifier extension is incredibly accurate and fast. It helps us quickly identify competitor platforms during market research.',
    avatar: 'S'
  },
  {
    name: 'Sparsh',
    role: 'Data Analyst',
    company: 'Independent Consultant',
    content: 'Google Maps Extractor is a game-changer for data collection. The bulk extraction and CSV export features are exactly what I needed.',
    avatar: 'S'
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Zap size={32} />
            <span>ToolBoxX</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('home'); }}>Home</a>
            <a href="#tools" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('tools'); }}>Tools</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('features'); }}>Features</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('testimonials'); }}>Reviews</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('contact'); }}>Contact</a>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="gradient-text">Custom Tools</span> to Supercharge Your Workflow
            </h1>
            <p className="hero-subtitle">
              Bespoke tech solutions and custom Chrome extensions designed specifically for your business needs.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Custom Built</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#tools" className="btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('tools'); }}>
                Explore Tools <ChevronRight size={20} />
              </a>
              <a href="#features" className="btn-secondary" onClick={(e) => { e.preventDefault(); handleNavClick(); scrollToSection('features'); }}>
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="floating-card">
              <div className="card-icon">
                <Zap size={32} />
              </div>
              <h3>Boost Productivity</h3>
              <p>Save hours with intelligent automation</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Custom Development?</h2>
            <p>Tailored solutions designed specifically for your business requirements</p>
          </div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Bespoke Personalization</h3>
              <p>Every solution is crafted from scratch to match your exact business needs, workflows, and team dynamics</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Intelligent Automation</h3>
              <p>Convert time-consuming manual processes into seamless automated workflows that enhance efficiency and reduce errors</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Enterprise Security</h3>
              <p>Bank-grade encryption and privacy controls ensure your sensitive data remains protected and confidential at all times</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section" id="tools">
        <div className="container">
          <div className="section-header">
            <h2>Top Custom Solutions Portfolio</h2>
            <p>Examples of bespoke tools we've built for clients</p>
          </div>
          
          <div className="tools-grid">
            {tools.map((tool, idx) => (
              <motion.div
                className="tool-card"
                key={tool.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="tool-header">
                  <div className="tool-icon">{tool.icon}</div>
                  <div className="tool-meta">
                    <span className="tool-category">{tool.category}</span>
                  </div>
                </div>
                
                <h3>{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                
                <div className="tool-features">
                  {tool.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="feature-item">
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Success stories from businesses using our custom solutions</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                className="testimonial-card"
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header">
          <h2>Ready for Your Custom Solution?</h2>
          <p>Let's discuss how we can build tailored tools to supercharge your team's productivity and workflow.</p>
          </div>
          
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={32} />
                </div>
                <h3>Email</h3>
                <a href="mailto:sahilaggrwll@gmail.com" className="contact-link">sahilaggrwll@gmail.com</a>
                <span className="contact-label">Primary Contact</span>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <Smartphone size={32} />
                </div>
                <h3>Phone Number</h3>
                <p>+91 70560-32744</p>
                <span className="contact-label">Direct Call</span>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <Users size={32} />
                </div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/sahilaggarwall" target="_blank" rel="noopener" className="contact-link">Sahil Aggarwal</a>
                <span className="contact-label">Professional</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 ToolBoxX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
