import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main id="main">
      <PageHero
        label="About EcoKit"
        title={<>Sustainable Care,<br />Naturally.</>}
        lead="EcoKit makes everyday personal-care and hospitality essentials from renewable materials — bamboo, wheat straw and natural fibres."
        image={{ src: '/images/sustainability-journey.jpg', alt: 'Natural materials used by EcoKit: jute, loofah, wheat, cotton and eucalyptus', width: 1376, height: 768 }}
      />
      

    {/* Story */}
    <section className="section bg-cream" aria-labelledby="story-heading">
      <div className="container">
        <div className="brand-story__split">
          <div className="brand-story__text" data-reveal>
            <span className="section-label">The Problem We Saw</span>
            <h2 id="story-heading" style={{marginBottom: 'var(--space-4)', }}>A Better Way<br />Had to Exist.</h2>
            <p style={{marginBottom: 'var(--space-4)', }}>Walk into most hotel bathrooms and you’ll find the same thing: a row of tiny plastic bottles, a plastic-handled toothbrush, a synthetic loofah that will spend the next 500 years in a landfill.</p>
            <p style={{marginBottom: 'var(--space-4)', }}>These aren’t choices hotels make carelessly. They’re the result of a market that prioritized cost and convenience over quality and impact.</p>
            <p>We believed that if we built better alternatives — ones that actually felt premium, performed reliably, and were genuinely good for the planet — hotels would choose them. We were right.</p>
          </div>
          <div className="brand-story__image" data-reveal="right">
            <Image src="/images/about-craftsmanship.jpg" alt="EcoKit artisan hand-sanding bamboo toothbrush handle in warm workshop sunlight" width={600} height={750} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="section band--ink" aria-labelledby="mission-heading">
      <div className="container container--narrow text-center" data-reveal>
        <span className="section-label" style={{justifyContent: 'center', }}>Our Mission</span>
        <h2 id="mission-heading" style={{marginBottom: 'var(--space-6)', marginTop: 'var(--space-3)', }}>Make sustainable choices feel obvious.</h2>
        <p className="mission-text">
          ”Not because it’s a trend.<br />Not because it’s a regulation.<br />Because it’s simply the right way to make things.”
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="section bg-cream" aria-labelledby="values-heading">
      <div className="container">
        <div className="text-center" style={{maxWidth: '520px', marginInline: 'auto', marginBottom: 'var(--space-12)', }} data-reveal>
          <span className="section-label" style={{justifyContent: 'center', }}>What We Stand For</span>
          <h2 id="values-heading">Six Things We<br />Won’t Compromise On.</h2>
        </div>
        <div className="values-grid">
          <div className="value-card" data-reveal>
            <p className="value-card__number">01</p>
            <p className="value-card__title">Quality First</p>
            <p className="value-card__desc">Every product is tested against conventional alternatives. We ship it only when it performs better — or equal — in the hands of real guests.</p>
          </div>
          <div className="value-card" data-reveal data-delay="100">
            <p className="value-card__number">02</p>
            <p className="value-card__title">Radical Transparency</p>
            <p className="value-card__desc">We tell you where materials come from, how products are made, and what happens when they’re done. No vague claims.</p>
          </div>
          <div className="value-card" data-reveal data-delay="200">
            <p className="value-card__number">03</p>
            <p className="value-card__title">Honest Craftsmanship</p>
            <p className="value-card__desc">We work with artisans who take pride in what they make. Not factories that treat products as units. The difference is visible — and tangible.</p>
          </div>
          <div className="value-card" data-reveal data-delay="100">
            <p className="value-card__number">04</p>
            <p className="value-card__title">Material Integrity</p>
            <p className="value-card__desc">Bamboo, wheat straw, cotton, jute, natural fibres. No synthetic substitutes masquerading as natural. What you read is what you hold.</p>
          </div>
          <div className="value-card" data-reveal data-delay="200">
            <p className="value-card__number">05</p>
            <p className="value-card__title">Responsible Innovation</p>
            <p className="value-card__desc">We’re always looking at what’s next — not for novelty, but to serve our customers and the planet better.</p>
          </div>
          <div className="value-card" data-reveal data-delay="300">
            <p className="value-card__number">06</p>
            <p className="value-card__title">Long-term Thinking</p>
            <p className="value-card__desc">We build relationships, not transactions. Our best customers have been with us from the start — and we intend to earn that trust every time.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sustainability */}
    <section className="section bg-beige" id="sustainability" aria-labelledby="sustain-heading">
      <div className="container">
        <div className="text-center" style={{maxWidth: '520px', marginInline: 'auto', marginBottom: 'var(--space-12)', }} data-reveal>
          <span className="section-label" style={{justifyContent: 'center', }}>Our Materials</span>
          <h2 id="sustain-heading">What We’re Made Of.</h2>
        </div>
        <div className="grid-2" style={{gap: 'var(--space-4)', }}>
          <div className="material-item" data-reveal>
            <div className="material-item__icon" aria-hidden={true}>🎋</div>
            <div>
              <p className="material-item__title">Bamboo</p>
              <p className="material-item__desc">The fastest-growing plant on earth. Harvested without irrigation or pesticides. Fully biodegradable. Our foundation material for combs, toothbrushes and shaving kits.</p>
            </div>
          </div>
          <div className="material-item" data-reveal data-delay="100">
            <div className="material-item__icon" aria-hidden={true}>🌾</div>
            <div>
              <p className="material-item__title">Wheat Straw</p>
              <p className="material-item__desc">Made from agricultural residue that would otherwise be burned. Sturdy, flexible and completely compostable at the end of its life.</p>
            </div>
          </div>
          <div className="material-item" data-reveal data-delay="100">
            <div className="material-item__icon" aria-hidden={true}>🧶</div>
            <div>
              <p className="material-item__title">Natural Fibres</p>
              <p className="material-item__desc">Cotton canvas for slippers, jute for bags, loofah fibres from gourds. All grown without synthetic inputs. All biodegradable within months.</p>
            </div>
          </div>
          <div className="material-item" data-reveal data-delay="200">
            <div className="material-item__icon" aria-hidden={true}>📦</div>
            <div>
              <p className="material-item__title">Kraft Packaging</p>
              <p className="material-item__desc">All packaging uses unbleached kraft paper or recycled cardboard. No plastic wrap, no foam inserts, no unnecessary waste.</p>
            </div>
          </div>
          <div className="material-item" data-reveal data-delay="200">
            <div className="material-item__icon" aria-hidden={true}>🌊</div>
            <div>
              <p className="material-item__title">Natural Loofah</p>
              <p className="material-item__desc">Not synthetic — grown from the luffa plant. Fully biodegradable. Returns to the earth within weeks of composting.</p>
            </div>
          </div>
          <div className="material-item" data-reveal data-delay="300">
            <div className="material-item__icon" aria-hidden={true}>🧴</div>
            <div>
              <p className="material-item__title">Plant-Based Formulas</p>
              <p className="material-item__desc">Shampoos, conditioners and body products use plant-based actives. No parabens, no sulphates, no synthetic fragrances.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="final-cta" aria-labelledby="about-cta-heading">
      <div className="container" style={{position: 'relative', zIndex: '1', }}>
        <h2 id="about-cta-heading" data-reveal>Partner With a Brand<br />That Actually Cares.</h2>
        <p data-reveal data-delay="100">We’d like to learn about your property and how we can help you make the switch feel seamless.</p>
        <div style={{display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', }} data-reveal data-delay="200">
          <Link href="/contact" className="btn btn--light btn--lg">Get in Touch <span className="btn-arrow" aria-hidden={true}>→</span></Link>
          <Link href="/products" className="btn btn--secondary btn--lg" style={{borderColor: 'rgba(255,255,255,0.4)', color: 'white', }}>Explore Products</Link>
        </div>
      </div>
    </section>

  
    </main>
  );
}






