import { motion } from 'framer-motion';
import { HiLightBulb, HiEye } from 'react-icons/hi';
import { missionVision } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import './MissionVision.css';

export default function MissionVision() {
  const cards = [
    { ...missionVision.vision, icon: HiEye },
    { ...missionVision.mission, icon: HiLightBulb },
  ];

  return (
    <section className="section section--alt mission-vision" id="vision-mission">
      <div className="container">
        <div className="mission-vision__grid">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateIn key={card.label} delay={i * 0.12}>
                <motion.article
                  className="mission-vision__card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="mission-vision__icon" aria-hidden="true">
                    <Icon size={28} />
                  </span>
                  <span className="mission-vision__label">{card.label}</span>
                  <h3 className="mission-vision__title">{card.title}</h3>
                  <p className="mission-vision__text">{card.text}</p>
                </motion.article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
