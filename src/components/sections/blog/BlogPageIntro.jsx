import { motion } from 'framer-motion';
import { blogPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import './BlogPageIntro.css';

const { intro } = blogPage;

export default function BlogPageIntro() {
  return (
    <section className="blog-intro section" id="blog-intro" aria-labelledby="blog-intro-heading">
      <div className="blog-intro__glow" aria-hidden="true" />
      <div className="container blog-intro__grid">
        <div className="blog-intro__copy">
          <AnimateIn>
            <h2 className="blog-intro__tagline" id="blog-intro-heading">
              {intro.tagline}
            </h2>
          </AnimateIn>
          <div className="blog-intro__prose">
            {intro.paragraphs.map((p, i) => (
              <AnimateIn key={i} delay={0.06 + i * 0.06} as="p" className="blog-intro__p">
                {p}
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.15}>
          <motion.figure
            className="blog-intro__highlight"
            initial={false}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <span className="blog-intro__highlight-label">Our belief</span>
            <blockquote className="blog-intro__highlight-quote">{intro.closing}</blockquote>
          </motion.figure>
        </AnimateIn>
      </div>
    </section>
  );
}
