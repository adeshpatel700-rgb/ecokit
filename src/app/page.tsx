import HomeFeatured from '@/components/HomeFeatured';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main id="main">
      

    {/* ── SECTION 1: HERO ── */}
    <section className="hero" data-hero="dark" aria-label="Hero section">
      <div className="hero__image">
        <Image
          src="/images/hero-bathroom.png"
          alt="Luxury boutique hotel bathroom with EcoKit bamboo amenities arranged on limestone countertop in warm morning sunlight"
          width={1920}
          height={1080} priority sizes="100vw" />
      </div>
      <div className="hero__overlay" aria-hidden={true}></div>
      <div className="hero__content container">
        <p className="hero__label">For Modern Hospitality</p>
        <h1 className="hero__headline">Sustainability,<br />Designed To Be<br />Experienced.</h1>
        <p className="hero__sub">Premium eco-friendly hospitality essentials, thoughtfully crafted for hotels, businesses and conscious properties.</p>
        <div className="hero__actions">
          <Link href="/products" className="btn btn--light btn--lg">
            Explore Products <span className="btn-arrow" aria-hidden={true}>→</span>
          </Link>
          <Link href="/hospitality" className="btn btn--secondary btn--lg" style={{borderColor: 'rgba(255,255,255,0.5)', color: 'white', }}>
            Hospitality Solutions
          </Link>
        </div>
      </div>
    </section>

    {/* ── VALUES TICKER ── */}
    <div className="ticker" aria-hidden={true}>
      <div className="ticker__inner">
        <span className="ticker__item"><span className="ticker__dot"></span> Bamboo Sourced Responsibly</span>
        <span className="ticker__item"><span className="ticker__dot"></span> 100% Biodegradable Packaging</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Custom Laser Engraving</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Pan-India Delivery</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Bulk Orders Welcome</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Trusted by 200+ Properties</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Bamboo Sourced Responsibly</span>
        <span className="ticker__item"><span className="ticker__dot"></span> 100% Biodegradable Packaging</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Custom Laser Engraving</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Pan-India Delivery</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Bulk Orders Welcome</span>
        <span className="ticker__item"><span className="ticker__dot"></span> Trusted by 200+ Properties</span>
      </div>
    </div>

    {/* ── SECTION 2: BRAND STORY ── */}
    <section className="brand-story section" aria-labelledby="story-heading">
      <div className="container">

        {/* Story Block 1 */}
        <div className="brand-story__split" style={{marginBottom: 'var(--space-16)', }}>
          <div className="brand-story__text" data-reveal>
            <span className="section-label">Our Thinking</span>
            <blockquote className="brand-story__quote">
              “We don’t believe sustainability should feel like compromise.”
            </blockquote>
            <p style={{marginBottom: 'var(--space-4)', }}>
              The hospitality industry generates staggering amounts of single-use plastic waste. Not because hotels don’t care — but because the alternatives have always felt inferior. Cheaper. Forgettable.
            </p>
            <p>
              EcoKit was built on a different assumption. That the right material, handled with care, can feel as refined as anything it replaces.
            </p>
          </div>
          <div className="brand-story__image" data-reveal="right">
            <Image
              src="/images/bamboo-macro.png"
              alt="Close-up of EcoKit bamboo comb and toothbrush showing natural grain texture in warm morning light"
              width={600}
              height={750} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>

        {/* Story Block 2 */}
        <div className="brand-story__split brand-story__split--reverse">
          <div className="brand-story__text" data-reveal>
            <span className="section-label">Our Process</span>
            <blockquote className="brand-story__quote">
              “Every product begins with one question.”
            </blockquote>
            <p style={{marginBottom: 'var(--space-3)', }}>
              How can we reduce waste without sacrificing the experience guests deserve?
            </p>
            <p style={{marginBottom: 'var(--space-6)', }}>
              From raw bamboo selection to final packaging, each decision is made with that question in mind. Small choices, made consistently, create lasting impact.
            </p>
            <Link href="/about" className="btn btn--ghost">
              Our Story <span className="btn-arrow" aria-hidden={true}>→</span>
            </Link>
          </div>
          <div className="brand-story__image" data-reveal="left">
            <Image
              src="/images/hotel-kit-flatlay.png"
              alt="EcoKit hotel welcome kit flat-lay featuring bamboo products arranged on warm oak wood with kraft packaging"
              width={600}
              height={750} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>

      </div>
    </section>

    {/* ── MANIFESTO ── */}
    <div className="manifesto" role="complementary" aria-label="Brand manifesto">
      <div className="container container--narrow">
        <p className="manifesto__text" data-reveal>
          ”Small everyday choices create<br /><em>lasting impact.</em>”
        </p>
      </div>
    </div>

    {/* ── SECTION 3: CATEGORIES ── */}
    <section className="categories section" aria-labelledby="categories-heading">
      <div className="container">
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'var(--space-8)', }}>
          <div data-reveal>
            <span className="section-label">Our Collections</span>
            <h2 id="categories-heading">Crafted for<br />Every Occasion.</h2>
          </div>
          <Link href="/products" className="btn btn--secondary hidden-mobile" data-reveal="right">
            View All Products
          </Link>
        </div>

        <div className="category-grid">
          {/* Oral Care */}
          <Link href="/products?category=oral-care" className="category-card" data-reveal aria-label="Oral Care collection">
            <Image className="category-card__image" src="/images/bamboo-macro.png" alt="Bamboo toothbrush and comb for oral care collection" width={600} height={800} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="category-card__overlay" aria-hidden={true}></div>
            <div className="category-card__content">
              <h3 className="category-card__title">Oral Care</h3>
              <p className="category-card__desc">Bamboo toothbrushes, combs and tongue cleaners</p>
              <span className="category-card__arrow">Explore <span aria-hidden={true}>→</span></span>
            </div>
          </Link>

          {/* Bath */}
          <Link href="/products?category=bath-body" className="category-card" data-reveal data-delay="100" aria-label="Bath collection">
            <Image className="category-card__image" src="/images/loofah-lifestyle.png" alt="Natural loofah beside stone bathtub for bath collection" width={600} height={800} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="category-card__overlay" aria-hidden={true}></div>
            <div className="category-card__content">
              <h3 className="category-card__title">Bath & Body</h3>
              <p className="category-card__desc">Natural loofahs, soaps and shower gels</p>
              <span className="category-card__arrow">Explore <span aria-hidden={true}>→</span></span>
            </div>
          </Link>

          {/* Hospitality */}
          <Link href="/hospitality" className="category-card" data-reveal data-delay="200" aria-label="Hospitality solutions">
            <Image className="category-card__image" src="/images/hospitality-scene.png" alt="Luxury hotel room with EcoKit amenities on bedside table" width={600} height={800} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="category-card__overlay" aria-hidden={true}></div>
            <div className="category-card__content">
              <h3 className="category-card__title">Hospitality</h3>
              <p className="category-card__desc">Complete amenity kits for hotels and resorts</p>
              <span className="category-card__arrow">Explore <span aria-hidden={true}>→</span></span>
            </div>
          </Link>

          {/* Travel */}
          <Link href="/products?category=travel-essentials" className="category-card" data-reveal data-delay="100" aria-label="Travel collection">
            <Image className="category-card__image" src="/images/hotel-kit-flatlay.png" alt="Jute travel bag and bamboo travel kit" width={600} height={800} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="category-card__overlay" aria-hidden={true}></div>
            <div className="category-card__content">
              <h3 className="category-card__title">Travel</h3>
              <p className="category-card__desc">Jute bags, travel kits and on-the-go essentials</p>
              <span className="category-card__arrow">Explore <span aria-hidden={true}>→</span></span>
            </div>
          </Link>

          {/* Hair */}
          <Link href="/products?category=hair-care" className="category-card" data-reveal data-delay="200" aria-label="Hair care collection">
            <Image className="category-card__image" src="/images/bamboo-macro.png" alt="Bamboo comb and hair care products" width={600} height={800} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="category-card__overlay" aria-hidden={true}></div>
            <div className="category-card__content">
              <h3 className="category-card__title">Hair Care</h3>
              <p className="category-card__desc">Shampoo, conditioner and bamboo combs</p>
              <span className="category-card__arrow">Explore <span aria-hidden={true}>→</span></span>
            </div>
          </Link>

          {/* Business Kits */}
          <Link href="/custom-kits" className="category-card" data-reveal data-delay="300" aria-label="Custom Business Kits">
            <Image className="category-card__image" src="/images/engraving-closeup.png" alt="Laser engraved bamboo comb for custom business kit" width={600} height={800} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="category-card__overlay" aria-hidden={true}></div>
            <div className="category-card__content">
              <h3 className="category-card__title">Business Kits</h3>
              <p className="category-card__desc">Custom-branded kits for corporate and gifting</p>
              <span className="category-card__arrow">Explore <span aria-hidden={true}>→</span></span>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* ── SECTION 4: FEATURED PRODUCTS ── */}
    <section className="products-showcase section" aria-labelledby="products-heading">
      <div className="container">
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: 'var(--space-8)', }}>
          <div data-reveal>
            <span className="section-label">Featured</span>
            <h2 id="products-heading">Products Worth<br />Picking Up.</h2>
          </div>
        </div>
        <HomeFeatured />

        <div className="text-center" style={{marginTop: 'var(--space-8)', }} data-reveal>
          <Link href="/products" className="btn btn--secondary btn--lg">
            Explore Full Collection <span className="btn-arrow" aria-hidden={true}>→</span>
          </Link>
        </div>
      </div>
    </section>

    {/* ── SECTION 5: HOSPITALITY ── */}
    <section className="hospitality-section section" aria-labelledby="hospitality-heading">
      <div className="container" style={{position: 'relative', zIndex: '1', }}>
        <div style={{maxWidth: '640px', }}>
          <span className="section-label">For Businesses</span>
          <h2 id="hospitality-heading" style={{marginBottom: 'var(--space-4)', }} data-reveal>
            Amenities That Reflect<br />Your Property’s Character.
          </h2>
          <p style={{color: 'rgba(255,255,255,0.72)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', maxWidth: '480px', }} data-reveal data-delay="100">
            Your guests notice everything. The materials in their hands. The thought behind each detail. EcoKit helps you deliver that moment of quiet luxury — consistently, at scale.
          </p>
        </div>

        <div className="industry-grid">
          {/* Hotel */}
          <div className="industry-card" data-reveal>
            <div className="industry-card__icon" aria-hidden={true}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V9l9-7 9 7v13"/><rect x="9" y="14" width="6" height="8"/></svg>
            </div>
            <h3 className="industry-card__name">Hotels & Resorts</h3>
            <p className="industry-card__desc">Full amenity ranges. Bulk pricing. Consistent supply.</p>
          </div>

          {/* Boutique */}
          <div className="industry-card" data-reveal data-delay="100">
            <div className="industry-card__icon" aria-hidden={true}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <h3 className="industry-card__name">Boutique Hotels</h3>
            <p className="industry-card__desc">Custom branded kits that match your property’s identity.</p>
          </div>

          {/* Airbnb */}
          <div className="industry-card" data-reveal data-delay="200">
            <div className="industry-card__icon" aria-hidden={true}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="industry-card__name">Airbnb & Villas</h3>
            <p className="industry-card__desc">Small-batch orders. Impress every guest with intention.</p>
          </div>

          {/* Corporate */}
          <div className="industry-card" data-reveal data-delay="100">
            <div className="industry-card__icon" aria-hidden={true}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3 className="industry-card__name">Corporate Offices</h3>
            <p className="industry-card__desc">Employee wellness kits and conference welcome hampers.</p>
          </div>

          {/* Wellness */}
          <div className="industry-card" data-reveal data-delay="200">
            <div className="industry-card__icon" aria-hidden={true}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="industry-card__name">Wellness Retreats</h3>
            <p className="industry-card__desc">Spa-grade natural products that match your philosophy.</p>
          </div>

          {/* Restaurants */}
          <div className="industry-card" data-reveal data-delay="300">
            <div className="industry-card__icon" aria-hidden={true}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <h3 className="industry-card__name">Cafés & Restaurants</h3>
            <p className="industry-card__desc">Restroom amenities that signal care and quality.</p>
          </div>
        </div>

        <div style={{marginTop: 'var(--space-12)', }} data-reveal>
          <Link href="/hospitality" className="btn btn--light btn--lg">
            Explore Hospitality Solutions <span className="btn-arrow" aria-hidden={true}>→</span>
          </Link>
        </div>
      </div>
    </section>

    {/* ── SECTION 6: CUSTOM KITS ── */}
    <section className="kits-section section" aria-labelledby="kits-heading">
      <div className="container">
        <div className="kit-showcase">
          <div className="kit-showcase__image" data-reveal="left">
            <Image
              src="/images/hotel-kit-flatlay.png"
              alt="EcoKit personalised hotel welcome kit laid out on warm wood with kraft paper packaging and dried eucalyptus"
              width={700}
              height={875} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div data-reveal="right">
            <span className="section-label">Custom Kits</span>
            <h2 id="kits-heading" style={{marginBottom: 'var(--space-4)', }}>
              Every Business Is Different.<br />
              Your Kit Should Be Too.
            </h2>
            <p style={{marginBottom: 'var(--space-6)', maxWidth: '420px', color: 'var(--color-charcoal-soft)', }}>
              We build kits around your identity — your logo, your colour story, your guest promise. Whether you run a 10-room boutique or a 500-key resort, we craft each kit to feel intentional.
            </p>

            <div className="kit-options">
              <Link href="/custom-kits" className="kit-option">
                <div className="kit-option__icon" aria-hidden={true}>🏨</div>
                <div>
                  <p className="kit-option__name">Hotel Welcome Kit</p>
                  <p className="kit-option__desc">6 essentials · Custom branding · Kraft packaging</p>
                </div>
              </Link>
              <Link href="/custom-kits" className="kit-option">
                <div className="kit-option__icon" aria-hidden={true}>💼</div>
                <div>
                  <p className="kit-option__name">Corporate Joining Kit</p>
                  <p className="kit-option__desc">Welcome new employees with conscious care</p>
                </div>
              </Link>
              <Link href="/custom-kits" className="kit-option">
                <div className="kit-option__icon" aria-hidden={true}>🌿</div>
                <div>
                  <p className="kit-option__name">Spa & Wellness Kit</p>
                  <p className="kit-option__desc">Natural products curated for wellness spaces</p>
                </div>
              </Link>
              <Link href="/custom-kits" className="kit-option">
                <div className="kit-option__icon" aria-hidden={true}>✈️</div>
                <div>
                  <p className="kit-option__name">Compact Travel Kit</p>
                  <p className="kit-option__desc">Jute bag with bamboo essentials for the road</p>
                </div>
              </Link>
            </div>

            <div style={{marginTop: 'var(--space-6)', }}>
              <Link href="/custom-kits" className="btn btn--primary btn--lg">
                Build Your Kit <span className="btn-arrow" aria-hidden={true}>→</span>
              </Link>
              <Link href="/quote" className="btn btn--ghost" style={{marginLeft: 'var(--space-4)', }}>
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── SECTION 7: ENGRAVING ── */}
    <section className="engraving-section section" aria-labelledby="engraving-heading">
      <div className="container">
        <div className="engraving-grid">
          <div data-reveal="left">
            <span className="section-label" style={{color: 'var(--color-gold-light)', }}>Laser Engraving</span>
            <h2 id="engraving-heading" style={{color: 'white', marginBottom: 'var(--space-4)', }}>
              Your Brand,<br />Carved in Bamboo.
            </h2>
            <p style={{marginBottom: 'var(--space-6)', color: 'rgba(255,255,255,0.65)', maxWidth: '400px', }}>
              Each comb, toothbrush and kit can carry your logo, etched with precision into the bamboo. Not a label that peels. Not ink that fades. Something more permanent than that.
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', }}>
              <div style={{display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start', }}>
                <span style={{color: 'var(--color-gold)', fontSize: '1.2rem', marginTop: '2px', }} aria-hidden={true}>—</span>
                <div>
                  <p style={{fontWeight: '600', color: 'white', fontSize: 'var(--text-sm)', }}>Minimum 500 units</p>
                  <p style={{color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-xs)', }}>Competitive bulk pricing available</p>
                </div>
              </div>
              <div style={{display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start', }}>
                <span style={{color: 'var(--color-gold)', fontSize: '1.2rem', marginTop: '2px', }} aria-hidden={true}>—</span>
                <div>
                  <p style={{fontWeight: '600', color: 'white', fontSize: 'var(--text-sm)', }}>15-day production turnaround</p>
                  <p style={{color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-xs)', }}>Rush orders available on request</p>
                </div>
              </div>
              <div style={{display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start', }}>
                <span style={{color: 'var(--color-gold)', fontSize: '1.2rem', marginTop: '2px', }} aria-hidden={true}>—</span>
                <div>
                  <p style={{fontWeight: '600', color: 'white', fontSize: 'var(--text-sm)', }}>Free design support included</p>
                  <p style={{color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-xs)', }}>Our team refines your artwork for bamboo</p>
                </div>
              </div>
            </div>

            <Link href="/quote" className="btn btn--light btn--lg">
              Start Your Enquiry <span className="btn-arrow" aria-hidden={true}>→</span>
            </Link>
          </div>

          <div className="engraving-image" data-reveal="right">
            <Image
              src="/images/engraving-closeup.png"
              alt="Close-up macro photograph of precision laser engraving on a bamboo comb showing crisp brand detail"
              width={700}
              height={700}
              style={{width: '100%', height: '100%', objectFit: 'cover', }} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>

    {/* ── SECTION 8: SUSTAINABILITY FLOW ── */}
    <section className="sustainability-section section" aria-labelledby="sustainability-heading">
      <div className="container">
        <div className="text-center" style={{maxWidth: '560px', marginInline: 'auto', marginBottom: 'var(--space-6)', }} data-reveal>
          <span className="section-label" style={{justifyContent: 'center', }}>How It Works</span>
          <h2 id="sustainability-heading">From Forest to<br />Your Guest’s Hands.</h2>
        </div>
        <p className="text-center" style={{color: 'var(--color-charcoal-soft)', maxWidth: '480px', marginInline: 'auto', marginBottom: 'var(--space-12)', }} data-reveal data-delay="100">
          Bamboo is one of the most renewable materials on the planet. It grows without irrigation, without pesticides, and regenerates after harvest — making it the right foundation for every EcoKit product.
        </p>

        <div className="sustainability-flow">
          <div className="flow-step" data-reveal data-delay="0">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2C8 6 6 10 6 14s2 6 6 8"/></svg>
            </div>
            <p className="flow-step__label">Bamboo Forest</p>
            <p className="flow-step__desc">Responsibly harvested, fast-growing</p>
          </div>
          <div className="flow-step" data-reveal data-delay="100">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
            </div>
            <p className="flow-step__label">Sourcing</p>
            <p className="flow-step__desc">Verified ethical supply chains</p>
          </div>
          <div className="flow-step" data-reveal data-delay="200">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/></svg>
            </div>
            <p className="flow-step__label">Crafting</p>
            <p className="flow-step__desc">Artisan manufacturing</p>
          </div>
          <div className="flow-step" data-reveal data-delay="300">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            </div>
            <p className="flow-step__label">Quality Check</p>
            <p className="flow-step__desc">Every product inspected</p>
          </div>
          <div className="flow-step" data-reveal data-delay="400">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p className="flow-step__label">Branding</p>
            <p className="flow-step__desc">Laser engraving & packaging</p>
          </div>
          <div className="flow-step" data-reveal data-delay="500">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <p className="flow-step__label">Delivery</p>
            <p className="flow-step__desc">Pan-India logistics</p>
          </div>
          <div className="flow-step" data-reveal data-delay="600">
            <div className="flow-step__icon" aria-hidden={true}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <p className="flow-step__label">Guest Experience</p>
            <p className="flow-step__desc">A moment that matters</p>
          </div>
        </div>

        <div className="text-center" style={{marginTop: 'var(--space-12)', }} data-reveal>
          <Link href="/about#sustainability" className="btn btn--secondary btn--lg">
            Our Sustainability Commitment <span className="btn-arrow" aria-hidden={true}>→</span>
          </Link>
        </div>
      </div>
    </section>

    {/* ── SECTION 9: STATS ── */}
    <section className="section--sm bg-beige" aria-label="EcoKit by the numbers">
      <div className="container">
        <div className="stats-row" data-reveal>
          <div className="stat-item">
            <p className="stat-item__number">200+</p>
            <p className="stat-item__label">Properties Served</p>
          </div>
          <div className="stat-item">
            <p className="stat-item__number">16</p>
            <p className="stat-item__label">Product Categories</p>
          </div>
          <div className="stat-item">
            <p className="stat-item__number">0%</p>
            <p className="stat-item__label">Plastic in Packaging</p>
          </div>
          <div className="stat-item">
            <p className="stat-item__number">15</p>
            <p className="stat-item__label">Days to Production</p>
          </div>
        </div>
      </div>
    </section>

    {/* ── SECTION 10: TESTIMONIALS ── */}
    {/* Testimonials intentionally omitted until real, attributable customer quotes are supplied. */}

    {/* ── SECTION 11: FINAL CTA ── */}
    <section className="final-cta" aria-labelledby="cta-heading">
      <div className="container" style={{position: 'relative', zIndex: '1', }}>
        <span className="section-label" style={{justifyContent: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-4)', }}>
          <span style={{background: 'rgba(255,255,255,0.2)', width: '20px', height: '1px', display: 'inline-block', marginRight: '0.5rem', }}></span>
          Ready When You Are
        </span>
        <h2 id="cta-heading" data-reveal>Ready to Build Sustainable<br />Hospitality Experiences?</h2>
        <p data-reveal data-delay="100">
          Tell us about your property and we’ll put together a kit that feels exactly right — for your guests, your brand, and the world they’ll go back to.
        </p>
        <div style={{display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', }} data-reveal data-delay="200">
          <Link href="/quote" className="btn btn--light btn--lg">
            Request a Quote <span className="btn-arrow" aria-hidden={true}>→</span>
          </Link>
          <Link href="/products" className="btn btn--secondary btn--lg" style={{borderColor: 'rgba(255,255,255,0.4)', color: 'white', }}>
            Browse Products
          </Link>
        </div>
      </div>
    </section>

  
    </main>
  );
}






