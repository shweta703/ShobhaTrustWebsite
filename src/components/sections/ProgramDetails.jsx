import { motion } from 'framer-motion';
import { programs } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import './ProgramDetails.css';

export default function ProgramDetails() {
  return (
    <section className="section section--alt program-details">
      <div className="container">
        <AnimateIn>
          <h2 className="program-details__heading">Program deep dives</h2>
          <p className="program-details__intro">
            Each initiative is designed to reach underserved communities with compassion, expertise, and
            sustainable impact.
          </p>
        </AnimateIn>

        <div className="program-details__list">
          {programs.map((program, i) => (
            <AnimateIn key={program.id} delay={i * 0.05}>
              <article id={program.id} className="program-details__item">
                <span className="program-details__tag">{program.tag}</span>
                <h3>{program.title}</h3>
                <p>{program.longDescription || program.description}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
