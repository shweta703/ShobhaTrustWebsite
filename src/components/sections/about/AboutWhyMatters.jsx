import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { aboutPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './AboutWhyMatters.css';

const { whyMatters } = aboutPage;

export default function AboutWhyMatters() {
  return (
    <section className="about-matters" id="why-it-matters" aria-label={whyMatters.title}>
      <div className="about-matters__bg" aria-hidden="true" />
      <div className="container about-matters__inner">
        <SectionHeader
          label={whyMatters.label}
          title={whyMatters.title}
          description={whyMatters.intro}
          align="center"
          light
        />

        <ul className="about-matters__bullets">
          {whyMatters.bullets.map((text, i) => (
            <AnimateIn key={text} delay={i * 0.07} as="li">
              <motion.div
                className="about-matters__bullet"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              >
                <span className="about-matters__bullet-icon" aria-hidden="true">
                  <HiCheck size={20} />
                </span>
                <span>{text}</span>
              </motion.div>
            </AnimateIn>
          ))}
        </ul>

        <AnimateIn delay={0.2}>
          <p className="about-matters__closing">{whyMatters.closing}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
