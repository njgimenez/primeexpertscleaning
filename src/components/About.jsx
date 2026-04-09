import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: 'var(--navy)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Trusted Partner in Clean</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            We are your trusted partner for professional cleaning services, dedicated to keeping your home or business spotless, fresh, and inviting. With reliable service and attention to detail, we take pride in delivering results you can see and feel.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
            From sparkling windows to refreshed floors and beautifully cleaned spaces, we’re here to make your property look its absolute best. Let us take the stress out of cleaning so you can focus on what matters most.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="about-image"
          style={{ 
            height: '400px', 
            background: 'var(--silver-light)', 
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--navy)',
            fontWeight: '600'
          }}
        >
          {/* Placeholder for About Image */}
          Professional Service
        </motion.div>
      </div>
    </section>
  );
};

export default About;
