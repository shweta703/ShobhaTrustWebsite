import PageHero from '../components/ui/PageHero';
import DonatePageIntro from '../components/sections/donate/DonatePageIntro';
import DonateConfidence from '../components/sections/donate/DonateConfidence';
import DonatePayment from '../components/sections/donate/DonatePayment';
import { pageHero } from '../data/content';

export default function DonatePage() {
  return (
    <>
      <PageHero
        title={pageHero.donate.title}
        description={pageHero.donate.description}
        image={pageHero.donate.image}
        breadcrumbs={[{ label: 'Donate' }]}
      />
      <DonatePageIntro />
      <DonateConfidence />
      <DonatePayment />
    </>
  );
}
