import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import './HomeWhyPrevention.css';

const { whyPrevention } = homePage;

export default function HomeWhyPrevention() {
  return (
    <section className="section home-why">
      <div className="container home-why__inner">
        <AnimateIn>
          <span className="home-why__label">{whyPrevention.label}</span>
          <h2>{whyPrevention.title}</h2>
          {whyPrevention.paragraphs.map((p, i) => (
            <p key={i} className="home-why__text">
              {p}
            </p>
          ))}
        </AnimateIn>

        <div className="home-why__highlights">
          {whyPrevention.highlights.map((item, i) => (
            <AnimateIn key={item} delay={0.1 + i * 0.08}>
              <div className="home-why__pill">{item}</div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
