import { useState } from 'react';
import { motion } from 'framer-motion';
import { volunteerPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import Button from '../../ui/Button';
import './VolunteerForm.css';

const { form } = volunteerPage;

const initialState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  profession: '',
  interest: '',
  availability: '',
};

export default function VolunteerForm() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState(initialState);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="section volunteer-form-section" id="volunteer-form">
      <div className="container volunteer-form-section__wrap">
        <SectionHeader label={form.label} title={form.title} description={form.description} align="center" />

        <AnimateIn>
          <form className="volunteer-form" onSubmit={handleSubmit} noValidate>
            <div className="volunteer-form__row">
              <div className="volunteer-form__field">
                <label htmlFor="vol-name">Full Name</label>
                <input
                  id="vol-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              <div className="volunteer-form__field">
                <label htmlFor="vol-email">Email Address</label>
                <input
                  id="vol-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="volunteer-form__row">
              <div className="volunteer-form__field">
                <label htmlFor="vol-phone">Phone Number</label>
                <input
                  id="vol-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="volunteer-form__field">
                <label htmlFor="vol-city">City</label>
                <input
                  id="vol-city"
                  name="city"
                  type="text"
                  required
                  autoComplete="address-level2"
                  value={formState.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
              </div>
            </div>

            <div className="volunteer-form__field">
              <label htmlFor="vol-profession">Profession / Background</label>
              <input
                id="vol-profession"
                name="profession"
                type="text"
                required
                value={formState.profession}
                onChange={handleChange}
                placeholder="e.g. Student, Healthcare professional, Corporate"
              />
            </div>

            <div className="volunteer-form__row">
              <div className="volunteer-form__field">
                <label htmlFor="vol-interest">Area of Interest</label>
                <select
                  id="vol-interest"
                  name="interest"
                  required
                  value={formState.interest}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {form.interests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="volunteer-form__field">
                <label htmlFor="vol-availability">Availability</label>
                <select
                  id="vol-availability"
                  name="availability"
                  required
                  value={formState.availability}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select availability
                  </option>
                  {form.availability.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg">
              {submitted ? 'Application Sent!' : form.submitLabel}
            </Button>

            {submitted && (
              <motion.p
                className="volunteer-form__success"
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
    </section>
  );
}
