import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import './PageHero.css';

export default function PageHero({ label, title, description, image, breadcrumbs = [] }) {
  const hasImage = Boolean(image);

  return (
    <section
      className={`page-hero${hasImage ? ' page-hero--has-image' : ''}`}
      style={hasImage ? { '--page-hero-image': `url(${image})` } : undefined}
    >
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__content">
        {breadcrumbs.length > 0 && (
          <motion.nav
            className="page-hero__breadcrumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label}>
                <HiChevronRight size={14} aria-hidden="true" />
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </span>
            ))}
          </motion.nav>
        )}

        {label && (
          <motion.span
            className="page-hero__label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {label}
          </motion.span>
        )}

        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            className="page-hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
