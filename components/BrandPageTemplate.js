import {
  BookingWidgetBlock,
  ContentSection,
  CTASection,
  FAQTeaser,
  FleetCards,
  Footer,
  Header,
  Hero,
  PageShell,
  RegionSidebar,
  TrustStrip
} from './prototypeComponents';

export default function BrandPageTemplate({ page }) {
  return (
    <PageShell theme={page.theme}>
      <Header {...page.header} />
      <Hero {...page.hero} />
      <TrustStrip items={page.trustStrip} />
      <div className="proto-two-col">
        <main>
          {page.showBookingWidget && <BookingWidgetBlock />}
          <FleetCards {...page.fleetSection} />
          <ContentSection {...page.contentSection} />
          <FAQTeaser items={page.faqItems} />
          {page.ctaSection && <CTASection {...page.ctaSection} />}
        </main>
        <RegionSidebar {...page.sidebar} sourceUrl={page.sourceUrl} />
      </div>
      <Footer name={page.name} />
    </PageShell>
  );
}
