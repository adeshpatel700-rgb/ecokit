import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact EcoKit',
  description: 'Talk to EcoKit about hospitality amenities, custom kits, laser engraving or product information. We reply within 24 hours on business days.',
  alternates: { canonical: '/contact' },
};
import Link from 'next/link';

export default function Contact() {
  return (
    <main id="main">
      <PageHero
        label="Contact"
        title={<>Let’s Talk.</>}
        lead="Questions about products, bulk orders or custom kits? Send us a message and we’ll get back to you."
        image={{ src: '/images/contact-hero.jpg', alt: 'A sunlit desk with a plant and an open notebook', width: 1376, height: 768 }}
      />
      
    <section className="section bg-cream" aria-label="Contact form and details">
      <div className="container">
        <div className="contact-layout">

          {/* Contact Details */}
          <div data-reveal="left">
            <h2 style={{fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)', }}>Reach Us Directly.</h2>

            <div className="contact-detail">
              <div className="contact-detail__icon" aria-hidden={true}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <p className="contact-detail__label">Email</p>
                <a href={`mailto:${SITE.email}`} className="contact-detail__value">{SITE.email}</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail__icon" aria-hidden={true}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.5 19.79 19.79 0 0 1 1.65 3.9 2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="contact-detail__label">Phone</p>
                <a href={SITE.phoneHref} className="contact-detail__value">{SITE.phone}</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail__icon" aria-hidden={true}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <div>
                <p className="contact-detail__label">WhatsApp</p>
                <a href={SITE.whatsappHref} className="contact-detail__value" target="_blank" rel="noopener noreferrer">Chat With Us →</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail__icon" aria-hidden={true}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <p className="contact-detail__label">Business Hours</p>
                <p className="contact-detail__value">{SITE.hours}</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail__icon" aria-hidden={true}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="contact-detail__label">Based In</p>
                <p className="contact-detail__value">India · Pan-India Delivery</p>
              </div>
            </div>

            <div style={{marginTop: 'var(--space-8)', padding: 'var(--space-4)', background: 'var(--color-forest-mist)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-forest)', }}>
              <p style={{fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--color-forest)', marginBottom: '0.25rem', }}>Quick Response Promise</p>
              <p style={{fontSize: 'var(--text-sm)', color: 'var(--color-charcoal-soft)', }}>We respond to all enquiries within 24 hours on business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card" data-reveal="right">
            <h2 style={{fontSize: 'var(--text-2xl)', marginBottom: '0.5rem', }}>Send Us a Message.</h2>
            <p style={{color: 'var(--color-charcoal-soft)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', }}>Fill in the form and we’ll get back to you within 24 hours.</p>

            <EnquiryForm kind="contact" submitLabel="Send Message" successMessage="We reply to every enquiry within 24 hours on business days." />
            <p style={{fontSize: 'var(--text-xs)', color: 'var(--color-charcoal-mute)', marginTop: 'var(--space-3)', textAlign: 'center', }}>
              By submitting, you agree to our <Link href="/privacy" style={{color: 'var(--color-forest)', }}>Privacy Policy</Link>. We never share your data.
            </p>
          </div>

        </div>
      </div>
    </section>
  
    </main>
  );
}






