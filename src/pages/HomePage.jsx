import HeroCarousel from '../components/sections/home/HeroCarousel';
import HomeAboutIntro from '../components/sections/home/HomeAboutIntro';
import HomeFocusAreas from '../components/sections/home/HomeFocusAreas';
import HomeProjectUdharam from '../components/sections/home/HomeProjectUdharam';
import HomeImpact from '../components/sections/home/HomeImpact';
import HomeWhyPrevention from '../components/sections/home/HomeWhyPrevention';
import HomeFounder from '../components/sections/home/HomeFounder';
import PageCTA from '../components/ui/PageCTA';
import '../components/sections/home/HomeSections.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroCarousel />
      <HomeAboutIntro />
      <HomeFocusAreas />
      <HomeProjectUdharam />
      <HomeImpact />
      <HomeWhyPrevention />
      <HomeFounder />
      <PageCTA
        title="Join India's mission for cancer prevention"
        description="Donate or volunteer today and help us protect more families across Bengaluru, Karnataka, and rural India."
        primaryLabel="Donate Now"
        primaryTo="/donate"
        secondaryLabel="Become a Volunteer"
        secondaryTo="/volunteer"
      />
    </div>
  );
}
