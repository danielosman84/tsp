import Link from 'next/link';
import { bookingIframe } from '../data/vehicleHireContent';

export function PageShell({ theme, children }) {
  return (
    <div className="proto-shell" style={{ '--brand': theme.brand, '--brand-dark': theme.brandDark }}>
      {children}
    </div>
  );
}

export function Header({ title, subtitle, ctaHref, ctaLabel }) {
  return (
    <header className="proto-header">
      <Link href="/" className="proto-logo">TSP Vehicle Hire Group</Link>
      <nav>
        <Link href="/tsp-vehicle-solutions">Business Hire</Link>
        <Link href="/tsp-car-and-van-hire">Swindon</Link>
        <Link href="/am-hire">Newcastle</Link>
        <Link href="/robinson-goss">Tredington</Link>
        <Link href="/compass-self-drive">Kilmarnock</Link>
      </nav>
      {ctaHref && <Link className="proto-cta" href={ctaHref}>{ctaLabel}</Link>}
      {(title || subtitle) && (
        <div className="proto-header-copy">
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
    </header>
  );
}

export function Hero({ title, subtitle, points = [] }) {
  return (
    <section className="proto-hero">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </section>
  );
}

export function TrustStrip({ items }) {
  return <section className="proto-trust">{items.map((item) => <span key={item}>{item}</span>)}</section>;
}

export function FleetCards({ title, cards }) {
  return (
    <section className="proto-section">
      <h3>{title}</h3>
      <div className="proto-grid">
        {cards.map((card) => (
          <article key={card.title} className="proto-card">
            <h4>{card.title}</h4>
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BookingWidgetBlock() {
  return (
    <section className="proto-section">
      <h3>Online Booking</h3>
      <p>Reserve your vehicle in minutes.</p>
      <div className="proto-iframe-wrap">
        <iframe title="Daily hire booking" style={{ width: '100%', height: '425px' }} src={bookingIframe} frameBorder="0" scrolling="no" />
      </div>
    </section>
  );
}

export function ContentSection({ title, paragraphs }) {
  return (
    <section className="proto-section">
      <h3>{title}</h3>
      {paragraphs.map((para) => <p key={para}>{para}</p>)}
    </section>
  );
}

export function RegionSidebar({ title, lines, sourceUrl }) {
  return (
    <aside className="proto-sidebar">
      <h4>{title}</h4>
      {lines.map((line) => <p key={line}>{line}</p>)}
      {sourceUrl && (
        <p>
          <a href={sourceUrl} target="_blank" rel="noreferrer">Source website</a>
        </p>
      )}
    </aside>
  );
}

export function FAQTeaser({ items }) {
  return (
    <section className="proto-section">
      <h3>FAQs</h3>
      <ul className="proto-faq">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export function GroupBrandSelector({ brands }) {
  return (
    <section className="proto-section">
      <h3>Explore the group</h3>
      <div className="proto-grid">
        {brands.map((brand) => (
          <Link key={brand.key} href={`/${brand.key}`} className="proto-card selector" style={{ borderTop: `4px solid ${brand.theme.brand}` }}>
            <strong>{brand.name}</strong>
            <p>{brand.type}</p>
            <small>{brand.header.subtitle}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CTASection({ title, copy, href, label }) {
  return (
    <section className="proto-cta-block">
      <h3>{title}</h3>
      <p>{copy}</p>
      <Link className="proto-cta" href={href}>{label}</Link>
    </section>
  );
}

export function Footer({ name }) {
  return <footer className="proto-footer">{name} • TSP Vehicle Hire Group</footer>;
}
