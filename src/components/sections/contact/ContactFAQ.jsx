import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiCheck, HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { contactPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './ContactFAQ.css';

const { faq, info } = contactPage;

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="section section--alt contact-faq" id="faq">
      <div className="container contact-faq__wrap">
        <SectionHeader label={faq.label} title={faq.title} align="center" />

        <div className="contact-faq__list" role="list">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <AnimateIn key={item.question} delay={index * 0.04} as="div" className="contact-faq__item-wrap">
                <article className={`contact-faq__item${isOpen ? ' contact-faq__item--open' : ''}`}>
                  <button
                    type="button"
                    id={buttonId}
                    className="contact-faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className="contact-faq__number">{index + 1}</span>
                    <span className="contact-faq__question">{item.question}</span>
                    <span className="contact-faq__chevron" aria-hidden="true">
                      <HiChevronDown size={22} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="contact-faq__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="contact-faq__panel-inner">
                          {item.lead && <p className="contact-faq__lead">{item.lead}</p>}
                          {item.bullets && (
                            <ul className="contact-faq__bullets">
                              {item.bullets.map((bullet) => (
                                <li key={bullet}>
                                  <HiCheck size={18} aria-hidden="true" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <p>{item.answer}</p>
                          {item.showContactLinks && (
                            <div className="contact-faq__links">
                              <Link to="/contact#get-in-touch">Contact form</Link>
                              {info.email.addresses.map((email) => (
                                <a key={email} href={`mailto:${email}`}>
                                  {email}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
