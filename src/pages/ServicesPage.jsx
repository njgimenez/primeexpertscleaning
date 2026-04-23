import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, HardHat, Tent, Wind, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    icon: <Home size={48} />,
    fullDesc: 'Transform your living space into a sanctuary with our comprehensive residential cleaning services. We understand that every home is unique, which is why we offer personalized cleaning plans that fit your lifestyle and preferences.',
    features: [
      'Deep kitchen sanitization including appliances',
      'Complete bathroom scrubbing and disinfection',
      'Dusting of all surfaces, including hard-to-reach areas',
      'Floor vacuuming and mopping for all types of surfaces',
      'Detail-oriented cleaning of baseboards and window sills'
    ],
    image: 'sparkling_kitchens.png'
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    icon: <Building2 size={48} />,
    fullDesc: 'A clean workplace is a productive workplace. Our commercial cleaning solutions are designed to maintain a professional, healthy environment for your employees and clients alike.',
    features: [
      'Office space and workstation sanitization',
      'Common area and breakroom maintenance',
      'Restroom detailing and supply restocking',
      'Trash removal and recycling management',
      'Floor care specialized for high-traffic environments'
    ],
    image: 'office_sanitize.png'
  },
  {
    id: 'post-construction',
    title: 'Post Construction',
    icon: <HardHat size={48} />,
    fullDesc: 'Building your dream space is stressful enough; let us handle the mess that comes after. We specialize in removing fine construction dust and debris to make your new property move-in ready.',
    features: [
      'Industrial-grade dust removal from all surfaces',
      'Cleaning of inside cabinets and drawers',
      'Window track and frame detailing',
      'Polishing of all fixtures and hardware',
      'Floor scrubbing to remove paint and grout residue'
    ],
    image: 'floor_scrubbing.png'
  },
  {
    id: 'airbnb',
    title: 'Air Bnb Cleaning',
    icon: <Tent size={48} />,
    fullDesc: 'Maintain your Superhost status with our specialized vacation rental turnovers. We provide fast, reliable cleaning and staging to ensure every guest walks into a 5-star experience.',
    features: [
      'Rapid turnover service to meet check-in times',
      'Linen changing and laundry service management',
      'Restocking of guest essential amenities',
      'Visual inspection and reporting of property status',
      'High-touch surface disinfection for guest safety'
    ],
    image: 'airbnb_turnover.png'
  },
  {
    id: 'window',
    title: 'Window Cleaning',
    icon: <Wind size={48} />,
    fullDesc: 'Let the Arizona sun shine through crystal clear glass. Our professional window cleaning removes streaks, dust, and hard water spots for a brighter perspective both inside and out.',
    features: [
      'Interior and exterior window pane cleaning',
      'Screen cleaning and dust removal',
      'Track and sill detailing',
      'Removal of hard water stains',
      'Commercial storefront and residential window care'
    ],
    image: 'detail_dusting.png'
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    icon: <Droplets size={48} />,
    fullDesc: 'Blast away years of built-up dirt, grime, and environmental stains. Our high-pressure cleaning restores the curb appeal of your driveways, sidewalks, and exterior walls.',
    features: [
      'Driveway and sidewalk revitalization',
      'Exterior wall and siding cleaning',
      'Patio and deck deep cleaning',
      'Oil stain and tire mark removal',
      'Eco-friendly cleaning solutions used'
    ],
    image: 'carpet_restoration.png'
  },
  {
    id: 'floor',
    title: 'Floor Cleaning',
    icon: <Sparkles size={48} />,
    fullDesc: 'Experience the beauty of flawlessly clean floors. Whether it is tile and grout, hardwood, or luxury vinyl, we have the specialized equipment to restore your flooring.',
    features: [
      'Tile and grout deep cleaning and restoration',
      'Hardwood floor polishing and protection',
      'Luxury vinyl and laminate care',
      'Carpet deep extraction and spot treatment',
      'Protective sealant application'
    ],
    image: 'floor_scrubbing.png'
  }
];

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
            <h1>Our Specialized Cleaning Services</h1>
            <p>From routine maintenance to complex restoration, we provide top-tier cleaning solutions tailored to your specific needs.</p>
          </motion.div>
        </div>
      </header>

      <section className="services-detail section-padding">
        <div className="container">
          {services.map((service, index) => (
            <div
              id={service.id}
              key={service.id}
              className={`service-detail-item ${index % 2 === 0 ? '' : 'reverse'}`}
            >
              <motion.div
                className="service-detail-content"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="service-header">
                  <span className="service-icon-large" style={{ color: 'var(--accent)' }}>{service.icon}</span>
                  <h2 style={{ color: 'var(--text-main)' }}>{service.title}</h2>
                </div>
                <p className="service-full-desc" style={{ color: 'var(--text-muted)' }}>{service.fullDesc}</p>
                <ul className="service-features" style={{ color: 'var(--text-main)' }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle2 size={20} className="feature-icon" style={{ color: 'var(--accent)' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary">Book This Service</a>
              </motion.div>
              <motion.div
                className="service-detail-image"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}gallery/${service.image}`} 
                  alt={service.title} 
                  className="rounded-image shadow-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
