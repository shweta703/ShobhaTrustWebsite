import PageHero from '../components/ui/PageHero';
import VolunteerPageIntro from '../components/sections/volunteer/VolunteerPageIntro';
import VolunteerWhy from '../components/sections/volunteer/VolunteerWhy';
import VolunteerForm from '../components/sections/volunteer/VolunteerForm';
import { pageHero } from '../data/content';

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title={pageHero.volunteer.title}
        description={pageHero.volunteer.description}
        image={pageHero.volunteer.image}
        breadcrumbs={[{ label: 'Volunteer' }]}
      />
      <VolunteerPageIntro />
      <VolunteerWhy />
      <VolunteerForm />
    </>
  );
}
