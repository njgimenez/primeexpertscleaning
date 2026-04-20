import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, HardHat, Tent, Wind, Sparkles, Droplets, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="services" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--text-main)', fontSize: '2.5rem', marginBottom: '1rem' }}>Our Premium Services</h2>
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
              style={{ cursor: 'pointer' }}
            >
              <Link to={`/services#${service.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="service-icon">{service.icon}</div>
                <h3 style={{ color: 'var(--text-main)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
                <div className="read-more" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: '700' }}>
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
