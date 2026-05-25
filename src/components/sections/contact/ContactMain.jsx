import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiMail, HiHeart, HiPhone } from 'react-icons/hi';
import { contact, contactPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import Button from '../../ui/Button';
import './ContactMain.css';

const { info, form } = contactPage;

export default function ContactMain() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="section section--alt contact-main" id="get-in-touch">
      <div className="container">
        <SectionHeader label={info.label} title={info.title} align="center" />

        <div className="contact-main__grid">
          <AnimateIn direction="left" className="contact-main__info">
            <div className="contact-main__card">
              <span className="contact-main__icon" aria-hidden="true">
                <HiLocationMarker size={22} />
              </span>
              <div>
                <h3>{info.visit.title}</h3>
                <p className="contact-main__org">{info.visit.organization}</p>
                <p className="contact-main__premises">{info.visit.premises}</p>
                <address>
                  {info.visit.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            </div>

            <div className="contact-main__card">
              <span className="contact-main__icon" aria-hidden="true">
                <HiMail size={22} />
              </span>
              <div>
                <h3>{info.email.title}</h3>
                <p className="contact-main__muted">{info.email.description}</p>
                <ul className="contact-main__emails">
                  {info.email.addresses.map((addr) => (
                    <li key={addr}>
                      <a href={`mailto:${addr}`}>{addr}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contact-main__card">
              <span className="contact-main__icon" aria-hidden="true">
                <HiHeart size={22} />
              </span>
              <div>
                <h3>{info.donations.title}</h3>
                <p className="contact-main__muted">{info.donations.description}</p>
              </div>
            </div>

            {contact.phone && (
              <div className="contact-main__card contact-main__card--compact">
                <span className="contact-main__icon" aria-hidden="true">
                  <HiPhone size={22} />
                </span>
                <div>
                  <h3>Call Us</h3>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </div>
              </div>
            )}
          </AnimateIn>

          <AnimateIn direction="right" delay={0.1} className="contact-main__form-wrap">
            <form className="contact-main__form" onSubmit={handleSubmit} noValidate>
              <span className="contact-main__form-label">{form.label}</span>
              <h3 className="contact-main__form-title">{form.title}</h3>
              <p className="contact-main__form-desc">{form.description}</p>

              <div className="contact-main__field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              <div className="contact-main__field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-main__field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="contact-main__field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" variant="primary" size="lg">
                {submitted ? 'Inquiry Sent!' : form.submitLabel}
              </Button>

              {submitted && (
                <motion.p
                  className="contact-main__success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                >
                  {form.successMessage}
                </motion.p>
              )}
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
