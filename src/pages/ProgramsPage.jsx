import PageHero from '../components/ui/PageHero';
import ProgramsPageIntro from '../components/sections/programs/ProgramsPageIntro';
import ProgramsEventsImpact from '../components/sections/programs/ProgramsEventsImpact';
import ProgramsCategories from '../components/sections/programs/ProgramsCategories';
import ProgramsUdharam from '../components/sections/programs/ProgramsUdharam';
import Gallery from '../components/sections/Gallery';
import { programsPage, pageHero } from '../data/content';

const { gallery: galleryContent } = programsPage;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title={pageHero.programs.title}
        description={pageHero.programs.description}
        image={pageHero.programs.image}
        breadcrumbs={[{ label: 'Programs' }]}
      />
      <ProgramsPageIntro />
      <ProgramsEventsImpact />
      <ProgramsCategories />
      <ProgramsUdharam />
      <Gallery
        label={galleryContent.label}
        title={galleryContent.title}
        description={galleryContent.description}
        items={galleryContent.items}
        sectionId="programs-gallery"
        altBackground={false}
        hideCaptions
        compact
      />
    </>
  );
}
