import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { blogPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './BlogWhyMatters.css';

const { whyMatters } = blogPage;

export default function BlogWhyMatters() {
  return (
    <section className="blog-matters section" id="why-blog-matters">
      <div className="blog-matters__bg" aria-hidden="true" />
      <div className="container blog-matters__inner">
        <SectionHeader
          label={whyMatters.label}
          title={whyMatters.title}
          description={whyMatters.intro}
          align="center"
          light
        />

        <ul className="blog-matters__list">
          {whyMatters.bullets.map((text, i) => (
            <AnimateIn key={text} delay={i * 0.06} as="li">
              <motion.div
                className="blog-matters__item"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              >
                <span className="blog-matters__check" aria-hidden="true">
                  <HiCheck size={20} />
                </span>
                <span>{text}</span>
              </motion.div>
            </AnimateIn>
          ))}
        </ul>

        <AnimateIn delay={0.2}>
          <div className="blog-matters__goal">
            <span className="blog-matters__goal-label">Our goal is simple</span>
            <p>{whyMatters.goal}</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
