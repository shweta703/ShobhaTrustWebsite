import { motion } from 'framer-motion';
import { programsPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './ProgramsEventsImpact.css';

const { impact } = programsPage;

export default function ProgramsEventsImpact() {
  return (
    <section className="section section--alt programs-impact" id="events-impact">
      <div className="programs-impact__ambient" aria-hidden="true" />
      <div className="container programs-impact__wrap">
        <SectionHeader
          label={impact.label}
          title={impact.title}
          description={impact.subtitle}
          align="center"
        />

        <ul className="programs-impact__grid">
          {impact.stats.map((stat, i) => (
            <AnimateIn key={stat.fullTitle ?? stat.title} delay={i * 0.07} as="li">
              <motion.article
                className="programs-impact__card"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                {stat.value ? (
                  <p className="programs-impact__value">{stat.value}</p>
                ) : null}
                <h3 className="programs-impact__stat-title">
                  {stat.fullTitle ?? stat.title}
                </h3>
                <p className="programs-impact__desc">{stat.description}</p>
              </motion.article>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
