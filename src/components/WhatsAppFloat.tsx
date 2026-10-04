import { SITE } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`${SITE.whatsappHref}?text=${encodeURIComponent("Hi EcoKit, I have a question.")}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EcoKit on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.6 16.8L2 22l5.3-1.4A11 11 0 1 0 20.5 3.5zM12 20.2a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9 9 0 1 1 12 20.2zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.5-.1-.7.1-.8.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-3.7-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.300.9 2.500 1 2.700s1.800 2.800 4.400 3.900c1.600.7 2.200.7 3 .6.5-.1 1.600-.7 1.800-1.300s.2-1.200.2-1.300-.2-.2-.5-.3z" /></svg>
    </a>
  );
}
