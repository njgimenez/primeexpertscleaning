import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import HousecallProButton from '../components/HousecallProButton';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="page-header section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="header-content"
          >
            <h1 style={{ fontFamily: 'var(--font-prata)', marginBottom: '1.5rem' }}>
              <span className="accent-script" style={{ display: 'block' }}>Excellence in every detail</span>
              Cleaning Services in Gilbert, Chandler &amp; the East Valley
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem auto', width: '100%', maxWidth: '300px' }}>
                <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
                <span style={{ color: 'var(--gold)', fontSize: '1.5rem' }}>✦</span>
                <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.5 }}></span>
              </span>
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '740px', margin: '0 auto' }}>
              Residential, commercial, post construction, Airbnb, window, pressure washing and floor cleaning services for homes and businesses across the East Valley.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="services-detail section-padding">
        <div className="container">
          {services.map((service, index) => (
            <div id={service.id} key={service.id} className={`service-detail-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-detail-grid">
                <div className="service-detail-text">
                  <div className="service-icon-box">
                    <service.Icon size={48} />
                  </div>
                  <h2 className="service-title-large">{service.title}</h2>
                  <p className="service-full-desc">{service.fullDesc}</p>

                  <ul className="service-features-list">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={18} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-action">
                    <HousecallProButton className="btn-primary btn-gold-to-orange" />
                    <Link to={`/services/${service.slug}`} className="btn-secondary-gold">SEE MORE</Link>
                  </div>
                </div>

                <div className="service-detail-img-container">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}gallery/${service.image}`}
                      alt={`${service.title} by Prime Experts Cleaning`}
                      className="service-main-image"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
