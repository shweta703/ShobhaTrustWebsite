import { motion } from 'framer-motion';
import { HiHeart, HiUserAdd } from 'react-icons/hi';
import Button from '../ui/Button';
import AnimateIn from '../ui/AnimateIn';
import './DonateCTA.css';

const cards = [
  {
    icon: HiHeart,
    title: 'Start Donating',
    description: 'Support our mission 365 days a year. Even the smallest contribution can help change a life.',
    cta: 'Donate Now',
    variant: 'secondary',
  },
  {
    icon: HiUserAdd,
    title: 'Join as Volunteer',
    description: 'Become a volunteer and feel the benefits instantly. Help us reach more communities across India.',
    cta: 'Volunteer Today',
    variant: 'white',
  },
];

export default function DonateCTA() {
  return (
    <section className="donate-cta" id="donate">
      <div className="donate-cta__bg" aria-hidden="true" />
      <div className="container">
        <AnimateIn>
          <div className="donate-cta__header">
            <span className="donate-cta__label">Take Action</span>
            <h2>Today is the day to lend a helping hand</h2>
            <p>Your contribution powers cancer prevention, health awareness, and community empowerment programs.</p>
          </div>
        </AnimateIn>

        <div className="donate-cta__grid">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimateIn key={card.title} delay={i * 0.1}>
                <motion.div
                  className="donate-cta__card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="donate-cta__icon" aria-hidden="true">
                    <Icon size={32} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Button href="#contact" variant={card.variant} size="md">
                    {card.cta}
                  </Button>
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
