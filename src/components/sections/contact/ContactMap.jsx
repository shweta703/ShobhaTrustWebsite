import { contactPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './ContactMap.css';

const { map } = contactPage;

export default function ContactMap() {
  return (
    <section className="section contact-map" id="location" aria-label={map.title}>
      <div className="container">
        <SectionHeader label={map.label} title={map.title} align="center" />

        <AnimateIn>
          <div className="contact-map__frame">
            <iframe
              title="Shobha Trust — J.P. Nagar, Bengaluru"
              src={map.embed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
