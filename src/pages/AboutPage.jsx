import PageHero from '../components/ui/PageHero';
import AboutPageIntro from '../components/sections/about/AboutPageIntro';
import AboutWhoWeAre from '../components/sections/about/AboutWhoWeAre';
import FounderStory from '../components/sections/FounderStory';
import MissionVision from '../components/sections/MissionVision';
import AboutApproach from '../components/sections/about/AboutApproach';
import AboutFocusUdharam from '../components/sections/about/AboutFocusUdharam';
import AboutWhyMatters from '../components/sections/about/AboutWhyMatters';
import { aboutPage, pageHero } from '../data/content';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={pageHero.about.title}
        description={pageHero.about.description}
        image={aboutPage.heroImage}
        breadcrumbs={[{ label: 'About' }]}
      />
      <AboutPageIntro />
      <AboutWhoWeAre />
      <FounderStory />
      <MissionVision />
      <AboutApproach />
      <AboutFocusUdharam />
      <AboutWhyMatters />
    </>
  );
}
