import React from 'react';
import { Home, Building2, HardHat, Tent, Wind, Sparkles, Droplets, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    icon: <Home size={32} />,
    desc: 'Professional cleaning for your home, tailored to your schedule and needs.'
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    icon: <Building2 size={32} />,
    desc: 'Keep your workspace productive and professional with our business cleaning solutions.'
  },
  {
    id: 'post-construction',
    title: 'Post Construction',
    icon: <HardHat size={32} />,
    desc: 'Expert debris removal and deep cleaning for new builds and renovations.'
  },
  {
    id: 'airbnb',
    title: 'Air Bnb Cleaning',
    icon: <Tent size={32} />,
    desc: 'Fast, reliable turnovers to keep your guests happy and your ratings high.'
  },
  {
    id: 'window',
    title: 'Window Cleaning',
    icon: <Wind size={32} />,
    desc: 'Crystal clear results for a brighter, more vibrant space.'
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    icon: <Droplets size={32} />,
    desc: 'Restore your exterior surfaces to their original glory.'
  },
  {
    id: 'floor',
    title: 'Floor Cleaning',
    icon: <Sparkles size={32} />,
    desc: 'Deep cleaning and maintenance for all types of flooring.'
  }
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
            What We Offer
          </span>
          <h2 style={{ color: 'var(--white)', fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-prata)' }}>
            <span className="accent-script" style={{ display: 'block' }}>Crafting excellence</span>
            Our Premium Services
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto', width: '100%', maxWidth: '250px' }}>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
              <span style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>✦</span>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
            </span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8' }}>
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
              style={{ cursor: 'pointer' }}
            >
              <Link to={`/services#${service.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="service-icon">{service.icon}</div>
                <h3 style={{ color: 'var(--white)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                <div className="read-more" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontWeight: '700' }}>
                  Read More <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
