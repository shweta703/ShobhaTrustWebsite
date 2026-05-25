import { motion } from 'framer-motion';
import { donatePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import './DonatePageIntro.css';

const { intro } = donatePage;

export default function DonatePageIntro() {
  return (
    <section className="donate-intro section" id="donate-intro" aria-labelledby="donate-intro-heading">
      <div className="donate-intro__glow" aria-hidden="true" />
      <div className="container donate-intro__inner">
        <AnimateIn>
          <h2 className="donate-intro__tagline" id="donate-intro-heading">
            {intro.tagline}
          </h2>
        </AnimateIn>

        <div className="donate-intro__prose">
          {intro.paragraphs.map((p, i) => (
            <AnimateIn key={i} delay={0.06 + i * 0.06} as="p" className="donate-intro__p">
              {p}
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.15}>
          <motion.figure
            className="donate-intro__highlight"
            initial={false}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <blockquote>{intro.closing}</blockquote>
          </motion.figure>
        </AnimateIn>

        <AnimateIn delay={0.22}>
          <div className="donate-intro__ctas">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById('make-a-donation')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {intro.primaryCta.label}
            </Button>
            <Button to={intro.secondaryCta.to} variant="outline" size="lg">
              {intro.secondaryCta.label}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
