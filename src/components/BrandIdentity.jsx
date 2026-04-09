import React from 'react';
import { motion } from 'framer-motion';

const BrandIdentity = () => {
  return (
    <section className="brand-identity">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Prime Experts Cleaning LLC" />
          <h2>The Premier Cleaning Experience in Arizona</h2>
          <p>
            At Prime Experts Cleaning LLC, we specialize in delivering high-end residential, commercial, and post-construction cleaning services. Our mission is to set the gold standard for cleanliness across Gilbert, Chandler, Mesa, and the entire East Valley.
          </p>
          <div style={{ marginTop: '3rem', fontWeight: '800', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Quality • Integrity • Excellence
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIdentity;
