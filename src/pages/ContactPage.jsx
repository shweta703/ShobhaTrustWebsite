import PageHero from '../components/ui/PageHero';
import ContactPageIntro from '../components/sections/contact/ContactPageIntro';
import ContactMain from '../components/sections/contact/ContactMain';
import ContactFAQ from '../components/sections/contact/ContactFAQ';
import ContactMap from '../components/sections/contact/ContactMap';
import ContactCTA from '../components/sections/contact/ContactCTA';
import { pageHero } from '../data/content';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={pageHero.contact.title}
        description={pageHero.contact.description}
        image={pageHero.contact.image}
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <ContactPageIntro />
      <ContactMain />
      <ContactFAQ />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
