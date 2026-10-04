import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import Link from 'next/link';
import EnquiryForm from '@/components/EnquiryForm';
import { getProduct } from '@/lib/products';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: 'Request a quote for bulk, hospitality or custom-branded EcoKit orders. No obligation — we respond within 24 hours.',
  alternates: { canonical: '/quote' },
};

export default async function Quote({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product } = await searchParams;
  const selected = product ? getProduct(product) : undefined;
  const initialValues: Record<string, string> = selected ? { products: selected.name } : {};
  return (
    <main id="main">
      <PageHero
        label="Request a Quote"
        title={<>Tell Us What<br />You Need.</>}
        lead="Share your property and requirements. No obligation — just a conversation starter."
      />
      
    <section className="section bg-cream" aria-label="Quote form">
      <div className="container">
        <div className="quote-layout">

          {/* Why EcoKit */}
          <div data-reveal="left">
            <h2 style={{fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', }}>Why Properties<br />Choose EcoKit.</h2>
            <div>
              <div className="quote-why-item" style={{borderBottomColor: 'var(--color-beige-dark)', }}>
                <div className="quote-why-item__icon" style={{background: 'var(--color-forest-mist)', color: 'var(--color-forest)', }} aria-hidden={true}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                <div>
                  <p className="quote-why-item__title" style={{color: 'var(--color-charcoal)', }}>Custom branding at no extra cost</p>
                  <p className="quote-why-item__desc" style={{color: 'var(--color-charcoal-soft)', }}>Laser engraving and branded packaging included in bulk orders.</p>
                </div>
              </div>
              <div className="quote-why-item" style={{borderBottomColor: 'var(--color-beige-dark)', }}>
                <div className="quote-why-item__icon" style={{background: 'var(--color-forest-mist)', color: 'var(--color-forest)', }} aria-hidden={true}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
                <div>
                  <p className="quote-why-item__title" style={{color: 'var(--color-charcoal)', }}>Pan-India delivery, any property</p>
                  <p className="quote-why-item__desc" style={{color: 'var(--color-charcoal-soft)', }}>City hotel or remote resort — we’ve handled both.</p>
                </div>
              </div>
              <div className="quote-why-item" style={{borderBottomColor: 'var(--color-beige-dark)', }}>
                <div className="quote-why-item__icon" style={{background: 'var(--color-forest-mist)', color: 'var(--color-forest)', }} aria-hidden={true}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <div>
                  <p className="quote-why-item__title" style={{color: 'var(--color-charcoal)', }}>15-day production turnaround</p>
                  <p className="quote-why-item__desc" style={{color: 'var(--color-charcoal-soft)', }}>Reliable timelines. Rush orders available on request.</p>
                </div>
              </div>
              <div className="quote-why-item" style={{borderBottom: 'none', marginBottom: '0', }}>
                <div className="quote-why-item__icon" style={{background: 'var(--color-forest-mist)', color: 'var(--color-forest)', }} aria-hidden={true}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div>
                  <p className="quote-why-item__title" style={{color: 'var(--color-charcoal)', }}>Dedicated account manager</p>
                  <p className="quote-why-item__desc" style={{color: 'var(--color-charcoal-soft)', }}>A real person who knows your property and handles your account.</p>
                </div>
              </div>
            </div>

            <div style={{marginTop: 'var(--space-8)', padding: 'var(--space-4)', background: 'var(--color-beige)', borderRadius: 'var(--radius-md)', }}>
              <p style={{fontWeight: '600', fontSize: 'var(--text-sm)', color: 'var(--color-charcoal)', marginBottom: '0.5rem', }}>Prefer to talk first?</p>
              <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-soft)', marginBottom: 'var(--space-3)', }}>We’re available on WhatsApp for a quick conversation.</p>
              <a href={SITE.whatsappHref} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>

          {/* Quote Form */}
          <div className="quote-form-card" data-reveal="right">
            <div className="step-indicator" aria-hidden={true}>
              <div className="step-dot active"></div>
              <div className="step-dot"></div>
              <div className="step-dot"></div>
            </div>

            <h2 style={{fontSize: 'var(--text-2xl)', marginBottom: '0.5rem', }}>Your Enquiry.</h2>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', }}>No obligation. Just a conversation starter.</p>

            <EnquiryForm kind="quote" submitLabel="Submit Enquiry" successMessage="Our team will get back to you within 24 hours." initialValues={initialValues} />
            <p style={{fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-mute)', marginTop: 'var(--space-3)', textAlign: 'center', }}>
              By submitting, you agree to our <Link href="/privacy" style={{color: 'var(--color-forest)', }}>Privacy Policy</Link>. We respond within 24 hours. No spam. Ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  
    </main>
  );
}






