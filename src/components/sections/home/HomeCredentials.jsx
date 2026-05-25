import { HiShieldCheck } from 'react-icons/hi';
import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import './HomeCredentials.css';

const defaultCredentials = homePage.credentials;

export default function HomeCredentials({ eyebrow, title, lead, items } = {}) {
  const credentials = {
    eyebrow: eyebrow ?? defaultCredentials.eyebrow,
    title: title ?? defaultCredentials.title,
    lead: lead ?? defaultCredentials.lead,
    items: items ?? defaultCredentials.items,
  };

  return (
    <section className="home-credentials" aria-labelledby="credentials-heading">
      <div className="home-credentials__ambient" aria-hidden="true" />
      <div className="container home-credentials__wrap">
        <header className="home-credentials__header">
          <AnimateIn>
            <span className="home-credentials__eyebrow">{credentials.eyebrow}</span>
            <h2 id="credentials-heading" className="home-credentials__title">
              {credentials.title}
            </h2>
            <p className="home-credentials__lead">{credentials.lead}</p>
          </AnimateIn>
        </header>

        <ul className="home-credentials__grid">
          {credentials.items.map((item, i) => (
            <AnimateIn key={`${item.figure}-${item.caption}`} delay={i * 0.06} as="li">
              <div className="home-credentials__card">
                <HiShieldCheck className="home-credentials__icon" size={18} aria-hidden="true" />
                <p className="home-credentials__figure" aria-label={`${item.figure}: ${item.caption}`}>
                  {item.figure}
                </p>
                <span className="home-credentials__text">{item.caption}</span>
              </div>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
