import React from 'react';
import { Home, Building2, HardHat, Tent, Wind, Sparkles, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Residential Cleaning',
    icon: <Home size={32} />,
    desc: 'Professional cleaning for your home, tailored to your schedule and needs.'
  },
  {
    title: 'Commercial Cleaning',
    icon: <Building2 size={32} />,
    desc: 'Keep your workspace productive and professional with our business cleaning solutions.'
  },
  {
    title: 'Post Construction',
    icon: <HardHat size={32} />,
    desc: 'Expert debris removal and deep cleaning for new builds and renovations.'
  },
  {
    title: 'Air Bnb Cleaning',
    icon: <Tent size={32} />,
    desc: 'Fast, reliable turnovers to keep your guests happy and your ratings high.'
  },
  {
    title: 'Window Cleaning',
    icon: <Wind size={32} />,
    desc: 'Crystal clear results for a brighter, more vibrant space.'
  },
  {
    title: 'Pressure Washing',
    icon: <Droplets size={32} />,
    desc: 'Restore your exterior surfaces to their original glory.'
  },
  {
    title: 'Floor Cleaning',
    icon: <Sparkles size={32} />,
    desc: 'Deep cleaning and maintenance for all types of flooring.'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--navy)', padding: '8rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>What We Offer</span>
          <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem' }}>Our Premium Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We proudly offer a wide range of services to meet your needs, from routine maintenance to deep, detailed cleans.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
