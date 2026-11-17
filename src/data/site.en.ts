/**
 * Versão em inglês dos textos de site.ts (mesmo formato).
 * Contatos, endereço e arquivos de imagem vêm da versão em português; aqui só muda o texto.
 */
import { photo, sitePt, whatsappLink, type CarePackage, type Service, type SiteData } from "./site";

const whatsappMessage = "Hi! I'd like to book an appointment at Studio Lírio.";
const creatorMessage = "Hi! I saw the Studio Lírio demo website and I'd like a website like this for my salon.";

export const siteEn: SiteData = {
  ...sitePt,

  contact: { ...sitePt.contact, whatsappMessage },

  creatorLink: whatsappLink(creatorMessage, sitePt.contact.creatorWhatsapp),

  brand: {
    ...sitePt.brand,
    tagline: "Beauty salon",
    description: "Hair, nails, brows and makeup with unhurried service, in a welcoming space. Book on WhatsApp.",
  },

  navigation: [
    { label: "Services", href: "#servicos" },
    { label: "Packages", href: "#pacotes" },
    { label: "FAQ", href: "#duvidas" },
  ],

  hero: {
    eyebrow: "Hair · Nails · Brows · Makeup",
    title: "Time just for you, the way you *deserve*.",
    subtitle:
      "Attentive professionals, a welcoming space and unhurried service, from a haircut to makeup for the big day.",
    primaryCta: { label: "Book on WhatsApp", href: whatsappLink(whatsappMessage) },
    secondaryCta: { label: "See services", href: "#servicos" },
    images: [
      photo("hero-unhas", "Hand with nude nails and delicate dots, resting on a beige knit sweater."),
      photo("hero-cabelo", "Client seen from behind, with long wavy blonde hair, sitting in the salon chair."),
      photo("hero-ambiente", "Bright, calm salon with a crystal chandelier, large mirrors and styling chairs."),
    ],
  },

  servicesSection: {
    title: "Our *services*",
    intro: "From quick everyday care to the full treatment.",
  },

  services: [
    {
      name: "Hair",
      items: ["Haircut", "Blow-dry", "Coloring", "Deep conditioning"],
      image: photo("servico-cabelo", "Woman brushing her long dark hair with a wooden brush, in natural light."),
    },
    {
      name: "Nails",
      items: ["Manicure", "Pedicure", "Gel"],
      image: photo("servico-unhas", "Hands with almond-shaped nails painted in a rosy nude shade."),
    },
    {
      name: "Brows",
      items: ["Brow design", "Henna", "Lashes"],
      image: photo("servico-sobrancelhas", "Professional shaping the eyebrows of a client lying down with her eyes closed."),
    },
    {
      name: "Makeup",
      items: ["Occasion", "Party", "Bridal"],
      image: photo("servico-maquiagem", "Makeup brush and eyeshadows in peach, terracotta and nude tones on a pink background."),
    },
  ],

  serviceMessage: (service: Service) => `Hi! I'd like to book an appointment for ${service.name.toLowerCase()}.`,

  packagesSection: {
    title: "Care *packages*",
    intro: "Combinations designed for special moments.",
  },

  packages: [
    {
      name: "Bridal day",
      label: "For the big day",
      description: "Hair, makeup, nails and breakfast, to start the big day calmly.",
      featured: true,
    },
    {
      name: "Self-care break",
      label: "In a single visit",
      description: "Deep conditioning, manicure and pedicure in a single visit.",
    },
    {
      name: "Mother and daughter",
      label: "To enjoy together",
      description: "A moment together, with nails and a blow-dry for both of you.",
    },
  ],

  packageMessage: (item: CarePackage) => `Hi! I'd like to know more about the ${item.name} package.`,

  faqSection: {
    title: "Frequently asked *questions*",
    intro: "Didn't find what you were looking for? Message us on WhatsApp, we reply quickly.",
  },

  faqs: [
    {
      question: "Do I need to book in advance?",
      answer:
        "We recommend booking a few days in advance, especially for Fridays and Saturdays. For brides and parties, it's best to book a few weeks ahead. If a same-day slot opens up, we'll let you know on WhatsApp.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Pix, debit and credit cards, and cash.",
      placeholder: true,
    },
    {
      question: "Do you offer bridal services outside the salon?",
      answer:
        "Yes. We attend to the bride and her party wherever they're getting ready, by appointment. Send us the date and address on WhatsApp.",
      placeholder: true,
    },
    {
      question: "Is there parking?",
      answer:
        "There are parking options near the salon. When you book, we'll send you the location and tips on how to get here.",
      placeholder: true,
    },
  ],

  bookingSection: {
    title: "Book in *three steps*",
    steps: [
      { title: "Choose the service.", text: "Or one of our packages." },
      { title: "Message us on WhatsApp.", text: "The message is already written, just send it." },
      { title: "Confirm the time.", text: "We'll reply with the available times." },
    ],
    cta: { label: "Book on WhatsApp", href: whatsappLink(whatsappMessage) },
  },

  hours: {
    ...sitePt.hours,
    label: "Tuesday to Saturday, 9 am to 7 pm",
  },

  address: {
    ...sitePt.address,
    district: "Downtown",
    city: "Your city",
  },
};
