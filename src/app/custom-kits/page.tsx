import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomKits() {
  return (
    <main id="main">
      <PageHero
        label="Customised Kits"
        title={<>Kits Built Around<br />Your Brand.</>}
        lead="Curated kits for hotels, corporate teams and events — with optional laser engraving and custom packaging."
        image={{ src: '/images/hero-bathroom.png', alt: 'EcoKit bamboo amenities arranged on a bathroom countertop', width: 1024, height: 1024 }}
        actions={<><Link href="/quote" className="btn btn--primary btn--lg">Request a Quote <span className="btn-arrow" aria-hidden="true">→</span></Link><Link href="/hospitality" className="btn btn--secondary btn--lg">For Hotels</Link></>}
      />
      

    {/* What You Can Customise */}
    <section className="section bg-beige" aria-labelledby="customise-heading">
      <div className="container">
        <div className="text-center" style={{maxWidth: '520px', marginInline: 'auto', marginBottom: 'var(--space-12)', }} data-reveal>
          <span className="section-label" style={{justifyContent: 'center', }}>Customisation Options</span>
          <h2 id="customise-heading">Every Detail,<br />Your Way.</h2>
        </div>
        <div className="grid-3">
          <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', }} data-reveal>
            <div style={{fontSize: '2rem', marginBottom: 'var(--space-3)', }} aria-hidden={true}>📦</div>
            <h3 className="h4" style={{marginBottom: 'var(--space-2)', }}>Packaging</h3>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', lineHeight: '1.6', }}>Choose from kraft boxes, cotton pouches or jute bags. Printed or plain. Ribbon-tied or folded.</p>
          </div>
          <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', }} data-reveal data-delay="100">
            <div style={{fontSize: '2rem', marginBottom: 'var(--space-3)', }} aria-hidden={true}>🔖</div>
            <h3 className="h4" style={{marginBottom: 'var(--space-2)', }}>Logo & Branding</h3>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', lineHeight: '1.6', }}>Laser-engrave your logo on bamboo products or print on packaging. We refine your artwork for bamboo.</p>
          </div>
          <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', }} data-reveal data-delay="200">
            <div style={{fontSize: '2rem', marginBottom: 'var(--space-3)', }} aria-hidden={true}>🧴</div>
            <h3 className="h4" style={{marginBottom: 'var(--space-2)', }}>Product Mix</h3>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', lineHeight: '1.6', }}>Select products from our full catalogue. Mix oral care, bath and travel items to fit your guest profile.</p>
          </div>
          <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', }} data-reveal data-delay="100">
            <div style={{fontSize: '2rem', marginBottom: 'var(--space-3)', }} aria-hidden={true}>🎨</div>
            <h3 className="h4" style={{marginBottom: 'var(--space-2)', }}>Colour Story</h3>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', lineHeight: '1.6', }}>Match your brand palette. We source packaging in coordinated tones for a cohesive unboxing.</p>
          </div>
          <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', }} data-reveal data-delay="200">
            <div style={{fontSize: '2rem', marginBottom: 'var(--space-3)', }} aria-hidden={true}>💌</div>
            <h3 className="h4" style={{marginBottom: 'var(--space-2)', }}>Welcome Card</h3>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', lineHeight: '1.6', }}>A personalised message card, printed on recycled paper. Your words, your tone.</p>
          </div>
          <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)', }} data-reveal data-delay="300">
            <div style={{fontSize: '2rem', marginBottom: 'var(--space-3)', }} aria-hidden={true}>📋</div>
            <h3 className="h4" style={{marginBottom: 'var(--space-2)', }}>Brand Inserts</h3>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', lineHeight: '1.6', }}>Property maps, QR code cards, loyalty offers or sustainability pledge cards — all insertable.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Kit Examples */}
    <section className="section bg-cream" id="examples" aria-labelledby="examples-heading">
      <div className="container">
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'var(--space-8)', }} data-reveal>
          <div>
            <span className="section-label">Kit Examples</span>
            <h2 id="examples-heading">See What’s Possible.</h2>
          </div>
        </div>
        <div className="kit-examples-grid">
          <article className="kit-example-card" data-reveal aria-label="Hotel Welcome Kit example">
            <div className="kit-example-card__image">
              <Image src="/images/hotel-kit-flatlay.png" alt="EcoKit Hotel Welcome Kit with bamboo toothbrush, loofah, soap and jute bag" width={600} height={450} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="kit-example-card__body">
              <p style={{fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '0.25rem', }}>Hotels & Resorts</p>
              <h3 className="kit-example-card__name">Hotel Welcome Kit</h3>
              <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-soft)', }}>Six curated essentials. Engraved with your hotel mark. Wrapped in kraft with ribbon.</p>
              <div className="kit-example-card__products">
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Bamboo Toothbrush</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Loofah</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Soap</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Slippers</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Comb</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Shower Cap</span>
              </div>
            </div>
          </article>
          <article className="kit-example-card" data-reveal data-delay="100" aria-label="Corporate Joining Kit example">
            <div className="kit-example-card__image">
              <Image src="/images/hospitality-scene.png" alt="EcoKit Corporate Joining Kit for new employees" width={600} height={450} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="kit-example-card__body">
              <p style={{fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '0.25rem', }}>Corporate</p>
              <h3 className="kit-example-card__name">Corporate Joining Kit</h3>
              <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-soft)', }}>Welcome your people with intention. A thoughtful first impression on day one.</p>
              <div className="kit-example-card__products">
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Bamboo Comb</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Loofah</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Soap</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Jute Bag</span>
              </div>
            </div>
          </article>
          <article className="kit-example-card" data-reveal data-delay="200" aria-label="Spa and Wellness Kit example">
            <div className="kit-example-card__image">
              <Image src="/images/loofah-lifestyle.png" alt="EcoKit Spa and Wellness Kit with natural loofah and organic products" width={600} height={450} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="kit-example-card__body">
              <p style={{fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '0.25rem', }}>Wellness</p>
              <h3 className="kit-example-card__name">Spa & Wellness Kit</h3>
              <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-soft)', }}>Natural, plant-derived products curated for retreat environments.</p>
              <div className="kit-example-card__products">
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Loofah</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Body Lotion</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Soap</span>
                <span className="tag" style={{fontSize: '0.75rem', padding: '0.2rem 0.625rem', }}>Shower Gel</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* Laser Engraving */}
    <section className="section bg-beige" id="engraving" aria-labelledby="engraving-heading">
      <div className="container">
        <div className="engraving-showcase">
          <div data-reveal="left">
            <span className="section-label">Laser Engraving</span>
            <h2 id="engraving-heading" style={{marginBottom: 'var(--space-4)', }}>
              Your Brand,<br />Carved in Bamboo.
            </h2>
            <p style={{color: 'var(--color-charcoal-soft)', marginBottom: 'var(--space-6)', maxWidth: '420px', }}>
              Laser engraving is the most permanent way to carry your brand. Not a sticker. Not ink. The depth of the bamboo itself, shaped to carry your mark.
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', }}>
              <div style={{display: 'flex', gap: 'var(--space-2)', alignItems: 'center', }}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-forest)', }} aria-hidden={true}></div>
                <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', }}>Available on: Bamboo Comb, Toothbrush, Shaving Kit, Custom pieces</p>
              </div>
              <div style={{display: 'flex', gap: 'var(--space-2)', alignItems: 'center', }}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-forest)', }} aria-hidden={true}></div>
                <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', }}>MOQ: 500 units · Turnaround: 15 days</p>
              </div>
              <div style={{display: 'flex', gap: 'var(--space-2)', alignItems: 'center', }}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-forest)', }} aria-hidden={true}></div>
                <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', }}>Free artwork preparation and review included</p>
              </div>
            </div>
            <Link href="/quote" className="btn btn--primary btn--lg">Start Engraving Enquiry <span className="btn-arrow" aria-hidden={true}>→</span></Link>
          </div>
          <div data-reveal="right">
            <div className="engraving-before-after-grid">
              <div className="before-after-item">
                <Image src="/images/bamboo-macro.png" alt="Bamboo comb before engraving showing natural grain" width={400} height={400} sizes="(max-width: 900px) 100vw, 50vw" />
                <div className="before-after-item__tag"><span className="badge badge--beige">Before</span></div>
              </div>
              <div className="before-after-item">
                <Image src="/images/engraving-closeup.png" alt="Bamboo comb after laser engraving showing crisp brand mark" width={400} height={400} sizes="(max-width: 900px) 100vw, 50vw" />
                <div className="before-after-item__tag"><span className="badge badge--sage">After</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="final-cta" aria-labelledby="custom-cta-heading">
      <div className="container" style={{position: 'relative', zIndex: '1', }}>
        <h2 id="custom-cta-heading" data-reveal>Ready to Build<br />Something Memorable?</h2>
        <p data-reveal data-delay="100">Fill in a few details about your property and we’ll come back with a proposal within 24 hours.</p>
        <div style={{display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', }} data-reveal data-delay="200">
          <Link href="/quote" className="btn btn--light btn--lg">Build Your Kit <span className="btn-arrow" aria-hidden={true}>→</span></Link>
          <Link href="/contact" className="btn btn--secondary btn--lg" style={{borderColor: 'rgba(255,255,255,0.4)', color: 'white', }}>Talk to Us</Link>
        </div>
      </div>
    </section>

  
    </main>
  );
}






