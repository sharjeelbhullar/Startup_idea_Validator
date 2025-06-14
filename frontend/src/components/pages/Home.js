import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: "Startup Idea Validator",
      description: "Validate your startup idea with AI-powered market research. Get insights on competitors, market need, and your unique angle.",
      link: "/validator",
      icon: "🔍",
      color: "#4CAF50"
    },
    {
      title: "Business Plan Generator",
      description: "Generate a comprehensive business plan and pitch deck. Get AI-powered insights on problem, solution, market, and monetization.",
      link: "/business-plan",
      icon: "📊",
      color: "#2196F3"
    },
    {
      title: "MVP Builder Assistant",
      description: "Get a detailed MVP roadmap with tech stack recommendations, user stories, database schema, and feature planning.",
      link: "/mvp-builder",
      icon: "⚡",
      color: "#FF9800"
    },
    {
      title: "Funding Advisor",
      description: "Find the right investors and accelerators for your startup. Get AI-generated email templates and pitch suggestions.",
      link: "/funding-advisor",
      icon: "💰",
      color: "#9C27B0"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="animate-fade-in">Transform Your Startup Idea Into Reality</h1>
          <p className="animate-fade-in-delay">Your AI-powered companion for idea validation, business planning, MVP development, and funding guidance.</p>
          <div className="hero-buttons animate-fade-in-delay-2">
            <Link to="/validator" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image animate-slide-in">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Powerful Tools for Your Startup Journey</h2>
          <p>Everything you need to validate, plan, build, and fund your startup idea</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ '--feature-color': feature.color }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to={feature.link} className="btn btn-feature">Try Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to transform your idea into a successful startup</p>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Validate Your Idea</h3>
            <p>Get instant market research and competitor analysis</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Create Your Plan</h3>
            <p>Generate a comprehensive business plan and pitch deck</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Build Your MVP</h3>
            <p>Get a detailed roadmap for your minimum viable product</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Secure Funding</h3>
            <p>Find the right investors and create compelling pitches</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Startup Journey?</h2>
          <p>Join thousands of entrepreneurs who have transformed their ideas into successful businesses</p>
          <Link to="/validator" className="btn btn-primary btn-large">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 