import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiUsers, HiCalendar, HiCollection, HiHeart } from 'react-icons/hi';
import { impactStats, homePage } from '../../data/content';
import SectionHeader from '../ui/SectionHeader';
import './Impact.css';

const iconMap = {
  users: HiUsers,
  calendar: HiCalendar,
  project: HiCollection,
  heart: HiHeart,
};

function Counter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatValue({ stat, inView }) {
  if (stat.animate === false) {
    return <span>{stat.value}</span>;
  }
  return <Counter value={stat.value} suffix={stat.suffix || ''} inView={inView} />;
}

export default function Impact({ showHeader = true, showClosing = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="impact" id="impact" ref={ref}>
      <div className="impact__overlay" />
      <div className="container impact__inner">
        {showHeader && (
          <SectionHeader
            label="Our Impact"
            title="Creating Measurable Change"
            description="Every awareness session, screening camp, and preventive initiative brings us closer to a cancer-aware India."
            light
          />
        )}

        <div className="impact__grid">
          {impactStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                className="impact__card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="impact__icon" aria-hidden="true">
                  <Icon size={28} />
                </span>
                <div className="impact__value">
                  <StatValue stat={stat} inView={inView} />
                </div>
                <p className="impact__label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {showClosing && (
          <p className="impact__closing">{homePage.impact.closing}</p>
        )}
      </div>
    </section>
  );
}
