import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
            Premium Cleaning Services
          </span>
          <h1 style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Expert Care for <br />Your Prime Spaces.</h1>
          <p style={{ color: '#0f172a', fontWeight: '700', maxWidth: '550px' }}>
            Experience the gold standard in cleanliness. We don't just clean; we restore, protect, and elevate your environment with unmatched precision.
          </p>
          <div className="hero-btns" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2.5rem' }}>
            <a href="#contact" className="btn-primary">Start Your Experience</a>
            <a href="#services" style={{ fontWeight: '800', color: 'var(--navy)', borderBottom: '3px solid var(--accent)', paddingBottom: '4px' }}>Explore Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
