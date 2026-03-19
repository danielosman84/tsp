import {
  CTASection,
  ContentSection,
  Footer,
  GroupBrandSelector,
  Header,
  Hero,
  PageShell,
  TrustStrip
} from '../components/prototypeComponents';
import { brandPages, groupHomepageContent, orderedBrandKeys } from '../data/vehicleHireContent';

export default function GroupHomePage() {
  const brands = orderedBrandKeys.map((key) => brandPages[key]);

  return (
    <PageShell theme={groupHomepageContent.theme}>
      <Header {...groupHomepageContent.header} />
      <Hero {...groupHomepageContent.hero} />
      <TrustStrip items={groupHomepageContent.trustStrip} />
      <GroupBrandSelector brands={brands} />
      <ContentSection
        title="How the group is structured"
        paragraphs={[
          'TSP Vehicle Solutions is the B2B and flexi-hire layer for business customers requiring nationwide delivery.',
          'Each daily hire brand retains local identity, local contact routes, and branch-style service for retail and SME customers.'
        ]}
      />
      <CTASection
        title="Need flexible business fleet support?"
        copy="Speak with TSP Vehicle Solutions for Flexi Hire and nationwide business vehicle hire."
        href="/tsp-vehicle-solutions"
        label="Go to TSP Vehicle Solutions"
      />
      <Footer name="Group Homepage" />
    </PageShell>
  );
}
