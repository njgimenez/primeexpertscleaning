import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToHash = (hash, attempts = 0) => {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    // Small extra offset so the navbar doesn't cover the section title
    const yOffset = -90;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else if (attempts < 10) {
    // Retry until the element is mounted (Framer Motion may delay it)
    setTimeout(() => scrollToHash(hash, attempts + 1), 80);
  }
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Short initial delay to let the page/components mount first
      setTimeout(() => scrollToHash(hash), 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

