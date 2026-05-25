import { motion } from 'framer-motion';
import { aboutPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import SectionHeader from '../../ui/SectionHeader';
import './AboutFocusUdharam.css';

const { focus } = aboutPage;

export default function AboutFocusUdharam() {
  return (
    <section className="section section--alt about-focus" id="project-udharam" aria-label={focus.title}>
      <div className="container about-focus__grid">
        <AnimateIn direction="left" className="about-focus__media">
          <motion.div
            className="about-focus__image-wrap"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35 }}
          >
            <img src={focus.image} alt={focus.imageAlt} className="about-focus__image" loading="lazy" />
          </motion.div>
        </AnimateIn>

        <div className="about-focus__content">
          <SectionHeader label={focus.label} title={focus.title} align="left" />
          <AnimateIn delay={0.1}>
            <p className="about-focus__lead">{focus.description}</p>
            <p className="about-focus__body">{focus.body}</p>
            <Button to={focus.cta.to} variant="primary" size="lg">
              {focus.cta.label}
            </Button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
