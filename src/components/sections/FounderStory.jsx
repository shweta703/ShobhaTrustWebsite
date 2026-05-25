import { founderStory } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import './FounderStory.css';

export default function FounderStory() {
  return (
    <section className="section founder-story" id="our-story">
      <div className="container founder-story__grid">
        <AnimateIn direction="left">
          <div className="founder-story__image-wrap">
            <img src={founderStory.image} alt={founderStory.imageAlt} loading="lazy" />
          </div>
        </AnimateIn>

        <div className="founder-story__content">
          <AnimateIn>
            <span className="founder-story__label">{founderStory.label}</span>
            <h2>{founderStory.title}</h2>
            {founderStory.leadParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </AnimateIn>

          <AnimateIn delay={0.12}>
            <blockquote className="founder-story__quote">
              <p>&ldquo;{founderStory.quote}&rdquo;</p>
              <footer>
                <cite>{founderStory.name}</cite>
                <span>{founderStory.role}</span>
              </footer>
            </blockquote>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="founder-story__closing">{founderStory.closingParagraph}</p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
