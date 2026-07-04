import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ClipboardCheck, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import { getServiceBySlug, serviceAreas } from '../data/services';
import HousecallProButton from '../components/HousecallProButton';

const setMeta = (name, content, attr = 'name') => {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setCanonical = (href) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (!service) return;

    const canonical = `${window.location.origin}/services/${service.slug}`;
    document.title = service.seoTitle;
    setMeta('description', service.metaDescription);
    setMeta('og:title', service.seoTitle, 'property');
    setMeta('og:description', service.metaDescription, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', canonical, 'property');
    setCanonical(canonical);
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <article className="service-single-page">
      <header
        className="service-hero"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(6, 15, 26, 0.9), rgba(13, 27, 42, 0.68)), url(${import.meta.env.BASE_URL}gallery/${service.image})` }}
      >
        <div className="container service-hero-content">
          <Link to="/services" className="back-link">
            <ArrowLeft size={18} />
            All services
          </Link>
          <span className="eyebrow service-hero-eyebrow">Prime Experts Cleaning LLC</span>
          <h1>{service.h1}</h1>
          <p>{service.intro}</p>
          <div className="service-hero-actions">
            <HousecallProButton />
            <a href="#service-details" className="btn-secondary-gold">SEE MORE</a>
          </div>
        </div>
      </header>

      <section id="service-details" className="service-single-section">
        <div className="container service-single-grid">
          <div className="service-single-main">
            <span className="section-pretitle">Service Overview</span>
            <h2>What our {service.title.toLowerCase()} service includes</h2>
            <p>{service.overview}</p>

            <div className="detail-block">
              <h3>
                <CheckCircle2 size={24} />
                Detailed cleaning scope
              </h3>
              <ul className="rich-list">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h3>
                <Sparkles size={24} />
                Benefits for your property
              </h3>
              <ul className="rich-list two-column">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h3>
                <ClipboardCheck size={24} />
                How the service works
              </h3>
              <ol className="process-list">
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="detail-block">
              <h3>
                <HelpCircle size={24} />
                Frequently asked questions
              </h3>
              <div className="faq-list">
                {service.faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="service-sidebar">
            <div className="sidebar-card">
              <service.Icon size={38} />
              <h2>{service.title}</h2>
              <p>Professional cleaning service available across {serviceAreas}.</p>
              <HousecallProButton />
            </div>

            <div className="sidebar-card">
              <h3>Ideal for</h3>
              <ul>
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card area-card">
              <MapPin size={24} />
              <h3>Service areas</h3>
              <p>{serviceAreas}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="service-cta-band">
        <div className="container">
          <h2>Ready to schedule {service.title.toLowerCase()}?</h2>
          <p>Contact Prime Experts Cleaning and tell us about your property, timing and cleaning priorities.</p>
          <HousecallProButton />
        </div>
      </section>
    </article>
  );
};

export default ServiceDetailPage;
