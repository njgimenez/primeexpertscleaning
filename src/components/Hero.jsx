import React from 'react';
import { motion } from 'framer-motion';
import HousecallProButton from './HousecallProButton';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <span className="eyebrow hero-eyebrow">Premium Cleaning Services</span>
          <h1>
            <span className="accent-script">Your home deserves</span>
            <span className="main-title">
              House Cleaning Services <br />
              in Gilbert, Chandler &amp; East Valley, Arizona
            </span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '0.5rem auto', width: '100%', maxWidth: '250px' }}>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
              <span style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>✦</span>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
            </span>
          </h1>
          <p className="hero-copy">
            Experience the gold standard in cleanliness. We don&apos;t just clean; we restore, protect, and elevate your environment with unmatched precision.
          </p>
          <div className="hero-btns">
            <HousecallProButton />
            <a href="#services" style={{ fontWeight: '800', color: 'var(--gold)', borderBottom: '3px solid var(--gold)', paddingBottom: '4px', transition: 'var(--transition)' }}>Explore Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
