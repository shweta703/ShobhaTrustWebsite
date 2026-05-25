import { motion } from 'framer-motion';
import { HiCheck, HiShieldCheck } from 'react-icons/hi';
import { donatePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './DonateConfidence.css';

const { confidence } = donatePage;

export default function DonateConfidence() {
  return (
    <section className="section section--alt donate-confidence" id="donate-confidence">
      <div className="container donate-confidence__grid">
        <div className="donate-confidence__header-wrap">
          <SectionHeader label={confidence.label} title={confidence.title} align="left" />
          <AnimateIn delay={0.08}>
            <p className="donate-confidence__intro">{confidence.intro}</p>
            <p className="donate-confidence__we-are">{confidence.weAreLabel}</p>
          </AnimateIn>
        </div>

        <ul className="donate-confidence__badges">
          {confidence.badges.map((badge, i) => (
            <AnimateIn key={badge} delay={0.06 * i} as="li">
              <motion.div
                className="donate-confidence__badge"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <span className="donate-confidence__check" aria-hidden="true">
                  <HiCheck size={18} />
                </span>
                <span>{badge}</span>
              </motion.div>
            </AnimateIn>
          ))}
        </ul>

        <AnimateIn delay={0.2} className="donate-confidence__shield-wrap">
          <div className="donate-confidence__shield-card">
            <HiShieldCheck size={48} aria-hidden="true" />
            <p>{confidence.closing}</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
