import PageHero from '@/components/PageHero';
export default function Privacy() {
  return (
    <main id="main">
      <PageHero label="Legal" title="Privacy Policy" />
      
    <div className="container legal-content">
      <p>At EcoKit India (“we”, “our”, or “us”), we respect your privacy and are committed to protecting the personal and commercial data you share with us. This Privacy Policy explains how we collect, process, and safeguard your information when you visit our website or engage with our B2B procurement services.</p>
      
      <h2>1. Information We Collect</h2>
      <p>When you request a quote, submit a contact form, or subscribe to our newsletter, we collect information such as your full name, business or property name, professional email address, phone number, and specific amenity requirements. We do not collect or store sensitive financial details on our web servers.</p>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use the collected data strictly to respond to your product inquiries, prepare tailored B2B proposals, send sample amenity kits, coordinate logistics, and communicate updates regarding your ongoing supply schedules.</p>
      
      <h2>3. Data Sharing & Security</h2>
      <p>We never sell, rent, or trade your personal or business data to third-party marketers. Information is only shared with verified logistics partners solely for the purpose of delivering your orders to your hotel or office location across India.</p>
      
      <h2>4. Contact Us</h2>
      <p>If you have any questions or requests regarding your data, please reach out to our privacy team at <a href="mailto:hello@ecokit.in" style={{color: 'var(--color-forest)', }}>hello@ecokit.in</a>.</p>
    </div>
  
    </main>
  );
}






