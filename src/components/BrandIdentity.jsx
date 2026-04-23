import React from 'react';
import { motion } from 'framer-motion';

const BrandIdentity = () => {
  return (
    <div className="brand-identity-wrapper">
      {/* Logo Section - White Background */}
      <section className="logo-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="logo-full"
          >
            <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Prime Experts Cleaning LLC" />
          </motion.div>
        </div>

        {/* Mountain Divider */}
        <div className="mountain-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 L200,80 L400,0 L600,100 L800,0 L1000,80 L1200,0 V120 H0 Z" fill="var(--navy)"></path>
          </svg>
        </div>
      </section>

      {/* Content Section - Dark Background */}
      <section className="brand-content-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Premier Cleaning Experience in Arizona</h2>
            <p className="brand-text">
              At Prime Experts Cleaning LLC, we specialize in delivering high-end residential, commercial, and post-construction cleaning services. Our mission is to set the gold standard for cleanliness across Gilbert, Chandler, Mesa, and the entire East Valley.
            </p>
            <div className="brand-motto" style={{ color: 'var(--gold)', opacity: 1 }}>
              Quality • Integrity • Excellence
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandIdentity;
