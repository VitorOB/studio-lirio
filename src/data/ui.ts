/** Textos fixos da interface (fora de site.ts), em português e inglês. */

export type Lang = "pt" | "en";

const pt = {
  skipLink: "Pular para o conteúdo",
  mainNav: "Principal",
  mobileNav: "Menu do celular",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  bookTime: "Agendar horário",
  book: "Agendar",
  whatsAppNote: "(abre o WhatsApp em nova aba)",
  newTab: "(abre em nova aba)",
  demo: "demonstrativo",
  hoursSr: "Horário",
  addressSr: "Endereço",
  faqLink: "Tirar dúvida no WhatsApp",
  faqMessage: "Olá! Tenho uma dúvida sobre o Studio Lírio.",
  learnMore: "Quero saber mais",
  aboutPackage: (name: string) => ` sobre o pacote ${name}`,
  servicesOf: (name: string) => `Serviços de ${name.toLowerCase()}`,
  bookService: (name: string) => `Agendar ${name.toLowerCase()}`,
  footerNav: "Rodapé",
  demoCreatedBy: "Site demonstrativo criado por",
  wantSite: "— quer um site assim para o seu salão?",
  talkToMe: "Fale comigo",
  /** Botão de idioma: mostra o idioma de destino. */
  langSwitch: { short: "EN", label: "View in English", target: "en" as Lang },
};

const en: typeof pt = {
  skipLink: "Skip to content",
  mainNav: "Main",
  mobileNav: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  bookTime: "Book an appointment",
  book: "Book",
  whatsAppNote: "(opens WhatsApp in a new tab)",
  newTab: "(opens in a new tab)",
  demo: "demo",
  hoursSr: "Hours",
  addressSr: "Address",
  faqLink: "Ask us on WhatsApp",
  faqMessage: "Hi! I have a question about Studio Lírio.",
  learnMore: "Learn more",
  aboutPackage: (name: string) => ` about the ${name} package`,
  servicesOf: (name: string) => `${name} services`,
  bookService: (name: string) => `Book ${name.toLowerCase()}`,
  footerNav: "Footer",
  demoCreatedBy: "Demo website created by",
  wantSite: "— want a website like this for your salon?",
  talkToMe: "Talk to me",
  langSwitch: { short: "PT", label: "Ver em português", target: "pt" },
};

export const ui = { pt, en };
export type UiText = typeof pt;
