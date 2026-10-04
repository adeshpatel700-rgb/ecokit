import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';

export default function Hospitality() {
  return (
    <main id="main">
      <PageHero
        label="Hospitality Solutions"
        title={<>Amenities Your Guests<br />Will Remember.</>}
        lead="Eco-friendly bathroom and room essentials for hotels, resorts, villas and wellness retreats — supplied in bulk and branded to your property."
        image={{ src: '/images/hospitality-scene.png', alt: 'Hotel room with EcoKit amenities on the bedside table', width: 1024, height: 1024 }}
        actions={<><Link href="/quote" className="btn btn--primary btn--lg">Request a Quote <span className="btn-arrow" aria-hidden="true">→</span></Link><Link href="/products" className="btn btn--secondary btn--lg">Browse Products</Link></>}
      />
      

    {/* Industries We Serve */}
    <section className="section bg-cream" aria-labelledby="industries-heading">
      <div className="container">
        <div className="text-center" style={{maxWidth: '560px', marginInline: 'auto', marginBottom: 'var(--space-12)', }} data-reveal>
          <span className="section-label" style={{justifyContent: 'center', }}>Industries We Serve</span>
          <h2 id="industries-heading">Every Property.<br />Every Standard.</h2>
        </div>
        <div className="industry-grid">
          <div className="industry-card" style={{background: 'var(--color-beige)', border: '1.5px solid var(--color-beige-dark)', color: 'var(--color-charcoal)', }} data-reveal>
            <div className="industry-card__icon" style={{color: 'var(--color-forest)', background: 'var(--color-forest-mist)', }} aria-hidden={true}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 22V9l9-7 9 7v13"/><rect x="9" y="14" width="6" height="8"/></svg></div>
            <h3 className="industry-card__name" style={{color: 'var(--color-charcoal)', }}>Hotels</h3>
            <p className="industry-card__desc" style={{color: 'var(--color-charcoal-soft)', }}>Full bathroom amenity ranges. Consistent quality across every room, every stay.</p>
          </div>
          <div className="industry-card" style={{background: 'var(--color-beige)', border: '1.5px solid var(--color-beige-dark)', color: 'var(--color-charcoal)', }} data-reveal data-delay="100">
            <div className="industry-card__icon" style={{color: 'var(--color-forest)', background: 'var(--color-forest-mist)', }} aria-hidden={true}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></div>
            <h3 className="industry-card__name" style={{color: 'var(--color-charcoal)', }}>Luxury Resorts</h3>
            <p className="industry-card__desc" style={{color: 'var(--color-charcoal-soft)', }}>Spa-grade natural products that match the luxury your guests expect.</p>
          </div>
          <div className="industry-card" style={{background: 'var(--color-beige)', border: '1.5px solid var(--color-beige-dark)', color: 'var(--color-charcoal)', }} data-reveal data-delay="200">
            <div className="industry-card__icon" style={{color: 'var(--color-forest)', background: 'var(--color-forest-mist)', }} aria-hidden={true}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <h3 className="industry-card__name" style={{color: 'var(--color-charcoal)', }}>Boutique Hotels</h3>
            <p className="industry-card__desc" style={{color: 'var(--color-charcoal-soft)', }}>Custom-branded kits that tell your property’s story from the bathroom shelf.</p>
          </div>
          <div className="industry-card" style={{background: 'var(--color-beige)', border: '1.5px solid var(--color-beige-dark)', color: 'var(--color-charcoal)', }} data-reveal data-delay="300">
            <div className="industry-card__icon" style={{color: 'var(--color-forest)', background: 'var(--color-forest-mist)', }} aria-hidden={true}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M15 3v18"/></svg></div>
            <h3 className="industry-card__name" style={{color: 'var(--color-charcoal)', }}>Airbnb & Villas</h3>
            <p className="industry-card__desc" style={{color: 'var(--color-charcoal-soft)', }}>Impress every guest with amenities that generate 5-star reviews.</p>
          </div>
          <div className="industry-card" style={{background: 'var(--color-beige)', border: '1.5px solid var(--color-beige-dark)', color: 'var(--color-charcoal)', }} data-reveal data-delay="100">
            <div className="industry-card__icon" style={{color: 'var(--color-forest)', background: 'var(--color-forest-mist)', }} aria-hidden={true}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
            <h3 className="industry-card__name" style={{color: 'var(--color-charcoal)', }}>Corporate Offices</h3>
            <p className="industry-card__desc" style={{color: 'var(--color-charcoal-soft)', }}>Washroom and welcome amenities that reflect your workplace values.</p>
          </div>
          <div className="industry-card" style={{background: 'var(--color-beige)', border: '1.5px solid var(--color-beige-dark)', color: 'var(--color-charcoal)', }} data-reveal data-delay="200">
            <div className="industry-card__icon" style={{color: 'var(--color-forest)', background: 'var(--color-forest-mist)', }} aria-hidden={true}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h3 className="industry-card__name" style={{color: 'var(--color-charcoal)', }}>Wellness Retreats</h3>
            <p className="industry-card__desc" style={{color: 'var(--color-charcoal-soft)', }}>Natural products that align with your wellness philosophy.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Hotels Choose EcoKit */}
    <section className="section bg-beige" aria-labelledby="why-heading">
      <div className="container">
        <div className="text-center" style={{maxWidth: '520px', marginInline: 'auto', marginBottom: 'var(--space-12)', }} data-reveal>
          <span className="section-label" style={{justifyContent: 'center', }}>Why EcoKit</span>
          <h2 id="why-heading">What Hotels Actually<br />Need From a Supplier.</h2>
        </div>
        <div className="why-grid">
          <div className="why-item" data-reveal>
            <div className="why-item__icon" aria-hidden={true}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <p className="why-item__title">Consistent Quality</p>
            <p className="why-item__desc">Every batch meets the same standard. Your guests won’t notice variation — only excellence.</p>
          </div>
          <div className="why-item" data-reveal data-delay="100">
            <div className="why-item__icon" aria-hidden={true}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <p className="why-item__title">Pan-India Delivery</p>
            <p className="why-item__desc">Reliable logistics to any property — city hotel or remote resort.</p>
          </div>
          <div className="why-item" data-reveal data-delay="200">
            <div className="why-item__icon" aria-hidden={true}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <p className="why-item__title">Custom Branding</p>
            <p className="why-item__desc">Your logo, laser-engraved on bamboo, printed on packaging. No templates.</p>
          </div>
          <div className="why-item" data-reveal data-delay="300">
            <div className="why-item__icon" aria-hidden={true}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <p className="why-item__title">Bulk Pricing</p>
            <p className="why-item__desc">Transparent pricing tiers starting at 100 units. Better margins as you scale.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Journey / Process */}
    <section className="section bg-cream" aria-labelledby="journey-heading">
      <div className="container">
        <div className="grid-2" style={{gap: 'var(--space-16)', alignItems: 'center', }}>
          <div data-reveal="left">
            <span className="section-label">Our Process</span>
            <h2 id="journey-heading" style={{marginBottom: 'var(--space-8)', }}>How We Work<br />With You.</h2>
            <div className="journey-timeline">
              <div className="journey-step">
                <div className="journey-step__dot" aria-hidden={true}>1</div>
                <div>
                  <p className="journey-step__title">Initial Consultation</p>
                  <p className="journey-step__desc">We learn about your property, guest profile and existing amenity preferences.</p>
                </div>
              </div>
              <div className="journey-step">
                <div className="journey-step__dot" aria-hidden={true}>2</div>
                <div>
                  <p className="journey-step__title">Product Selection</p>
                  <p className="journey-step__desc">Together we build a product list that matches your room type and standards.</p>
                </div>
              </div>
              <div className="journey-step">
                <div className="journey-step__dot" aria-hidden={true}>3</div>
                <div>
                  <p className="journey-step__title">Brand Customisation</p>
                  <p className="journey-step__desc">Your logo and brand details applied to packaging and engraved products.</p>
                </div>
              </div>
              <div className="journey-step">
                <div className="journey-step__dot" aria-hidden={true}>4</div>
                <div>
                  <p className="journey-step__title">Sample Approval</p>
                  <p className="journey-step__desc">We send pre-production samples. You approve before we scale.</p>
                </div>
              </div>
              <div className="journey-step">
                <div className="journey-step__dot" aria-hidden={true}>5</div>
                <div>
                  <p className="journey-step__title">Production & Delivery</p>
                  <p className="journey-step__desc">15-day standard production. Delivered to your property, ready to use.</p>
                </div>
              </div>
              <div className="journey-step">
                <div className="journey-step__dot" aria-hidden={true}>6</div>
                <div>
                  <p className="journey-step__title">Long-term Partnership</p>
                  <p className="journey-step__desc">Monthly or quarterly replenishment. Dedicated account support.</p>
                </div>
              </div>
            </div>
          </div>
          <div data-reveal="right">
            <div className="img-reveal">
              <Image src="/images/hotel-kit-flatlay.png" alt="EcoKit hotel amenity kit flat-lay showing the complete product range for hospitality use" width={700} height={875} style={{borderRadius: 'var(--radius-xl)', width: '100%', }} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Procurement FAQ */}
    <section className="section bg-beige" id="procurement" aria-labelledby="procurement-heading">
      <div className="container">
        <div className="procurement-box">
          <div className="procurement-grid">
            <div data-reveal="left">
              <span className="section-label">Procurement</span>
              <h2 id="procurement-heading" style={{marginBottom: 'var(--space-4)', }}>Questions From<br />Procurement Teams.</h2>
              <p style={{color: 'var(--color-charcoal-soft)', marginBottom: 'var(--space-6)', maxWidth: '400px', }}>
                We’ve worked with hotel procurement heads long enough to know what they actually need to know before saying yes.
              </p>
              <Link href="/quote" className="btn btn--primary btn--lg">Start a Conversation <span className="btn-arrow" aria-hidden={true}>→</span></Link>
            </div>
            <div data-reveal="right">
              <div className="procurement-qa">
                <div className="qa-item">
                  <p className="qa-item__q">What’s the minimum order quantity?</p>
                  <p className="qa-item__a">Standard individual products start at 100 units. Custom kits start at 50 sets. Laser engraving from 500 units.</p>
                </div>
                <div className="qa-item">
                  <p className="qa-item__q">Can we order on a monthly basis?</p>
                  <p className="qa-item__a">Yes. We offer standing monthly or quarterly supply agreements with fixed pricing and priority production slots.</p>
                </div>
                <div className="qa-item">
                  <p className="qa-item__q">How long does production take?</p>
                  <p className="qa-item__a">Standard orders: 7–10 days. Custom branded orders: 15–20 days. Rush orders available on request.</p>
                </div>
                <div className="qa-item">
                  <p className="qa-item__q">Do you offer private label / white label?</p>
                  <p className="qa-item__a">Yes. Full private label with your brand name, packaging design and product selection is available at MOQ 500 units.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="final-cta" aria-labelledby="hosp-cta-heading">
      <div className="container" style={{position: 'relative', zIndex: '1', }}>
        <span className="section-label" style={{justifyContent: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-4)', }}>Let’s Work Together</span>
        <h2 id="hosp-cta-heading" data-reveal>Let’s Build Your<br />Hospitality Kit Together.</h2>
        <p data-reveal data-delay="100">Tell us about your property and we’ll design a kit that fits your guests, your brand and your budget.</p>
        <div style={{display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', }} data-reveal data-delay="200">
          <Link href="/quote" className="btn btn--light btn--lg">Request a Quote <span className="btn-arrow" aria-hidden={true}>→</span></Link>
          <Link href="/contact" className="btn btn--secondary btn--lg" style={{borderColor: 'rgba(255,255,255,0.4)', color: 'white', }}>Contact Us</Link>
        </div>
      </div>
    </section>

  
    </main>
  );
}






