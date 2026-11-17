import { address, brand, contact, hours, services } from "./data/site";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { Header } from "./components/Header";
import { FloatingCta } from "./components/FloatingCta";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Packages } from "./sections/Packages";
import { Faq } from "./sections/Faq";
import { Booking } from "./sections/Booking";
import { Footer } from "./sections/Footer";

/** Dados estruturados (schema.org/BeautySalon), gerados a partir de site.ts. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: brand.name,
  description: brand.description,
  image: "/images/hero-ambiente.jpg",
  openingHours: hours.schema,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressCountry: "BR",
  },
  ...(contact.whatsappNumber ? { telephone: `+${contact.whatsappNumber.replace(/\D/g, "")}` } : {}),
  ...(contact.instagram ? { sameAs: [contact.instagram] } : {}),
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.name },
  })),
};

export default function App() {
  useRevealOnScroll();

  return (
    <div id="topo">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-wine px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <Packages />
        <Faq />
        <Booking />
      </main>

      <Footer />
      <FloatingCta />

      <script
        type="application/ld+json"
        // Conteúdo gerado por nós mesmos a partir de site.ts; "<" é escapado por segurança.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
