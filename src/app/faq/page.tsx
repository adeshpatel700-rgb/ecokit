import PageHero from '@/components/PageHero';
import type { Metadata } from 'next';
import FaqItem from '@/components/FaqItem';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers on minimum order quantities, custom laser engraving, sample kits, delivery and sustainability for EcoKit hospitality and business orders.',
  alternates: { canonical: '/faq' },
};

import Link from 'next/link';

export default function Faq() {
  return (
    <main id="main">
      <PageHero label="FAQ" title={<>Frequently Asked<br />Questions.</>} lead="Ordering, minimum quantities, customisation and delivery." />
      
    <div className="container faq-container">

      {/* Section 1: Ordering & MOQ */}
      <h2 className="faq-category-title" style={{marginTop: '0', }}>Ordering & Minimum Quantities</h2>
      
      <FaqItem question="What is the Minimum Order Quantity (MOQ) for hotels and businesses?" defaultOpen>For standard, unbranded products from our catalogue, the minimum order is just 100 units per item. For custom laser-engraved items or bespoke printed packaging boxes, the minimum order quantity is 500 units.</FaqItem>

      <FaqItem question="Can we request sample kits before placing a bulk order?">Absolutely. We strongly encourage procurement teams and general managers to test our amenities tactilely before deciding. You can order our sample evaluation pack (₹ 299 for a curated 6-piece kit) via our Contact page, and this fee is fully credited toward your first bulk order.</FaqItem>

      <FaqItem question="Do you offer standing monthly supply contracts?">Yes. Over 70% of our partner hotels operate on standing replenishment agreements. We lock in fixed tiered pricing for 6 to 12 months and reserve dedicated monthly production slots so your property never faces out-of-stock emergencies.</FaqItem>

      {/* Section 2: Customisation & Branding */}
      <h2 className="faq-category-title">Customisation & Laser Engraving</h2>

      <FaqItem question="How does the laser engraving process work?">Once you share your property logo (preferably in vector format like AI, SVG, or high-res PDF), our design team prepares a digital proof showing exactly how the mark will sit on the bamboo grain. Upon approval, we use high-precision CO₂ lasers to etch your brand permanently into the bamboo handle or wooden box.</FaqItem>

      <FaqItem question="Is there an extra charge for artwork preparation?">No. Free design support and artwork optimization for bamboo engraving is completely included when you order 500 units or more.</FaqItem>

      {/* Section 3: Shipping & Sustainability */}
      <h2 className="faq-category-title">Shipping & Sustainability</h2>

      <FaqItem question="How long does shipping take across India?">Standard unbranded orders dispatch within 3–5 business days. Custom branded orders take approximately 15 business days for production and QA. We ship pan-India via express surface logistics, delivering to most tier-1 cities in 3–4 days and remote resort locations (Goa, Himachal, Kerala, North-East) within 6–8 days.</FaqItem>

      <FaqItem question="Are your products truly 100% biodegradable?">Yes. Our bamboo handles, natural loofah sponges, cotton slippers, and unbleached kraft packaging boxes are completely natural and biodegrade within 4 to 6 months in commercial or home composting conditions. We avoid synthetic coatings, plastic laminates, and hidden polystyrene foams entirely.</FaqItem>

    </div>

    {/* Still Have Questions Banner */}
    <div className="container" style={{marginTop: 'var(--space-16)', }}>
      <div style={{background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-12)', textAlign: 'center', border: '1.5px solid var(--color-beige-dark)', }}>
        <h3 style={{fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)', }}>Still have a specific question?</h3>
        <p style={{color: 'var(--color-charcoal-soft)', maxWidth: '480px', marginInline: 'auto', marginBottom: 'var(--space-6)', }}>Our hospitality consultants are available to answer procurement inquiries or review your property’s custom amenity wishlist.</p>
        <div style={{display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap', }}>
          <Link href="/contact" className="btn btn--primary btn--lg">Contact Us <span className="btn-arrow" aria-hidden={true}>→</span></Link>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="btn btn--ghost">Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  
    </main>
  );
}






