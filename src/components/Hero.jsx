import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <span style={{
            color: 'var(--gold)',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            ✦ Premium Cleaning Services ✦
          </span>
          <h1>
            <span className="accent-script" style={{ display: 'block', textAlign: 'center' }}>Your home deserves</span>
            <span className="main-title" style={{ display: 'block', textAlign: 'center' }}>EXPERT <br />Cleaning</span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '0.5rem auto', width: '100%', maxWidth: '250px' }}>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
              <span style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>✦</span>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
            </span>
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', fontWeight: '500', maxWidth: '550px' }}>
            Experience the gold standard in cleanliness. We don't just clean; we restore, protect, and elevate your environment with unmatched precision.
          </p>
          <div className="hero-btns" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Start Your Experience</a>
            <a href="#services" style={{ fontWeight: '800', color: 'var(--gold)', borderBottom: '3px solid var(--gold)', paddingBottom: '4px', transition: 'var(--transition)' }}>Explore Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
