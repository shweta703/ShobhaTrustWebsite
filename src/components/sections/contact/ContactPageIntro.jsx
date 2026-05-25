import { motion } from 'framer-motion';
import { contactPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import './ContactPageIntro.css';

const { intro } = contactPage;

export default function ContactPageIntro() {
  return (
    <section className="contact-intro section" id="contact-intro" aria-labelledby="contact-intro-heading">
      <div className="contact-intro__glow" aria-hidden="true" />
      <div className="container contact-intro__inner">
        <AnimateIn>
          <h2 className="contact-intro__tagline" id="contact-intro-heading">
            {intro.tagline}
          </h2>
        </AnimateIn>

        <div className="contact-intro__prose">
          {intro.paragraphs.map((p, i) => (
            <AnimateIn key={i} delay={0.06 + i * 0.06} as="p" className="contact-intro__p">
              {p}
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.18}>
          <motion.p
            className="contact-intro__closing"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            {intro.closing}
          </motion.p>
        </AnimateIn>
      </div>
    </section>
  );
}
