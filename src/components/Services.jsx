import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services-heading">
          <span className="eyebrow">
            What We Offer
          </span>
          <h2 className="services-title">
            <span className="accent-script">Crafting excellence</span>
            <span>Our Premium Services</span>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto', width: '100%', maxWidth: '250px' }}>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
              <span style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>✦</span>
              <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
            </span>
          </h2>
          <p className="services-intro">
            We proudly offer a wide range of services to meet your needs, from routine maintenance to deep, detailed cleans.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
              style={{ cursor: 'pointer' }}
            >
                <div className="service-icon"><service.Icon size={32} /></div>
                <h3 style={{ color: 'var(--white)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.intro}</p>
                <div className="read-more" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontWeight: '700' }}>
                  Read More <ArrowRight size={16} />
                </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
