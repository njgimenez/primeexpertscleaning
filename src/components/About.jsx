import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h2 className="section-title">Your Trusted Partner in Clean</h2>
          <p className="about-text">
            We are your trusted partner for professional cleaning services, dedicated to keeping your home or business spotless, fresh, and inviting. With reliable service and attention to detail, we take pride in delivering results you can see and feel.
          </p>
          <p className="about-text">
            From sparkling windows to refreshed floors and beautifully cleaned spaces, we’re here to make your property look its absolute best. Let us take the stress out of cleaning so you can focus on what matters most.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <img
            src={`${import.meta.env.BASE_URL}about-professional.png`}
            alt="Professional Cleaning Service"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
