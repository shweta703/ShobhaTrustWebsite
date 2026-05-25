import { motion } from 'framer-motion';
import { team } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import SectionHeader from '../ui/SectionHeader';
import './Team.css';

export default function Team() {
  return (
    <section className="section team">
      <div className="container">
        <SectionHeader
          label="Our People"
          title="Led by expertise, powered by community"
          description="Shobha Trust brings together medical leaders, grassroots coordinators, and youth ambassadors."
        />

        <div className="team__grid">
          {team.map((member, i) => (
            <AnimateIn key={member.name} delay={i * 0.08}>
              <motion.article
                className="team__card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <img src={member.image} alt={member.name} className="team__photo" loading="lazy" />
                <div className="team__info">
                  <h3>{member.name}</h3>
                  <span className="team__role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
