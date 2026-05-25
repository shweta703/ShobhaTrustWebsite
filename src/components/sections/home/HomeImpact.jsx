import { motion } from 'framer-motion';
import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import './HomeImpact.css';

const { impact } = homePage;

export default function HomeImpact() {
  return (
    <section className="home-impact" id="impact">
      <div className="home-impact__overlay" aria-hidden="true" />
      <div className="container home-impact__inner">
        <AnimateIn>
          <span className="home-impact__label">{impact.label}</span>
          <h2 className="home-impact__title">{impact.title}</h2>
        </AnimateIn>

        <div className="home-impact__grid">
          {impact.stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.08}>
              <motion.div
                className="home-impact__card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <strong className="home-impact__value">{stat.value}</strong>
                <p>{stat.label}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2}>
          <p className="home-impact__closing">{impact.closing}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
