/**
 * Studio Lírio — todos os dados do site ficam aqui.
 *
 * Antes de publicar para um salão real, procure por "TROCAR" neste arquivo:
 * são os textos e dados que dependem do salão.
 */

/* ------------------------------------------------------------------ */
/* Contato                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  whatsappNumber: "", // 5531999999999 — preencher antes de publicar (só números, com DDI e DDD)
  whatsappMessage: "Olá! Gostaria de agendar um horário no Studio Lírio.",
  instagram: "", // ex.: "https://www.instagram.com/studiolirio" — vazio = aparece como demonstrativo
  creatorName: "", // nome de quem criou o site (crédito do portfólio)
  creatorWhatsapp: "", // número de quem criou o site, só números
};

/** Mensagem que vai pronta para quem criou o site. */
const creatorMessage =
  "Olá! Vi o site demonstrativo do Studio Lírio e quero um site assim para o meu salão.";

/**
 * Link do WhatsApp com a mensagem já escrita.
 * Sem número configurado, usa `wa.me/?text=`: o WhatsApp abre e a pessoa escolhe o contato.
 * Nunca inventamos números.
 */
export function whatsappLink(message: string = contact.whatsappMessage, number = contact.whatsappNumber) {
  const digits = number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const creatorLink = whatsappLink(creatorMessage, contact.creatorWhatsapp);

/* ------------------------------------------------------------------ */
/* Marca e navegação                                                   */
/* ------------------------------------------------------------------ */

export const brand = {
  /** Endereço publicado (sem barra no fim). Ao trocar, atualize também canonical e og:* no index.html. */
  url: "https://studio-lirio.vercel.app",
  name: "Studio Lírio",
  tagline: "Salão de beleza",
  description:
    "Cabelo, unhas, sobrancelhas e maquiagem com atendimento sem pressa, em um ambiente acolhedor. Agende pelo WhatsApp.",
};

export const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Dúvidas", href: "#duvidas" },
];

/* ------------------------------------------------------------------ */
/* Imagens                                                             */
/* ------------------------------------------------------------------ */

export type SiteImage = {
  /** Caminho sem sufixo: o site usa `${base}-600.webp` e `${base}-1200.webp`. */
  base: string;
  alt: string;
  width: number;
  height: number;
};

export const photo = (name: string, alt: string): SiteImage => ({
  base: `/images/${name}`,
  alt,
  width: 1200,
  height: 1600,
});

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

/** Nos títulos, a palavra entre *asteriscos* aparece em itálico vinho. */
export const hero = {
  eyebrow: "Cabelo · Unhas · Sobrancelhas · Maquiagem",
  title: "Um tempo só seu, do jeito que você *merece*.",
  subtitle:
    "Profissionais atenciosas, ambiente acolhedor e atendimento sem pressa, do corte à maquiagem para o grande dia.",
  primaryCta: { label: "Agendar pelo WhatsApp", href: whatsappLink() },
  secondaryCta: { label: "Ver serviços", href: "#servicos" },
  images: [
    photo("hero-unhas", "Mão com unhas em tom nude e delicados pontinhos, apoiada em um suéter de tricô bege."),
    photo("hero-cabelo", "Cliente de costas, com cabelo loiro longo e ondulado, sentada na cadeira do salão."),
    photo("hero-ambiente", "Salão claro e tranquilo, com lustre de cristal, espelhos grandes e poltronas de atendimento."),
  ],
};

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  name: string;
  items: string[];
  image: SiteImage;
};

export const servicesSection = {
  title: "Nossos *serviços*",
  intro: "Do cuidado rápido do dia a dia ao tratamento completo.",
};

export const services: Service[] = [
  {
    name: "Cabelo",
    items: ["Corte", "Escova", "Coloração", "Hidratação"],
    image: photo("servico-cabelo", "Mulher penteando o cabelo longo e escuro com uma escova de madeira, sob luz natural."),
  },
  {
    name: "Unhas",
    items: ["Manicure", "Pedicure", "Gel"],
    image: photo("servico-unhas", "Mãos com unhas amendoadas pintadas em tom nude rosado."),
  },
  {
    name: "Sobrancelhas",
    items: ["Design", "Henna", "Cílios"],
    image: photo("servico-sobrancelhas", "Profissional fazendo o design de sobrancelha de uma cliente deitada, de olhos fechados."),
  },
  {
    name: "Maquiagem",
    items: ["Social", "Festas", "Noivas"],
    image: photo("servico-maquiagem", "Pincel de maquiagem e sombras em tons de pêssego, terracota e nude sobre fundo rosado."),
  },
];

/** Mensagem gerada a partir do nome do serviço. */
export const serviceMessage = (service: Service) =>
  `Olá! Gostaria de agendar um horário de ${service.name.toLowerCase()}.`;

/* ------------------------------------------------------------------ */
/* Pacotes                                                             */
/* ------------------------------------------------------------------ */

export type CarePackage = {
  name: string;
  description: string;
  /** Rótulo pequeno acima do nome. */
  label: string;
  featured?: boolean;
};

export const packagesSection = {
  title: "Pacotes de *cuidado*",
  intro: "Combinações pensadas para momentos especiais.",
};

export const packages: CarePackage[] = [
  {
    name: "Dia da noiva",
    label: "Para o grande dia",
    description:
      "Cabelo, maquiagem, unhas e um café da manhã para começar o grande dia com calma.",
    featured: true,
  },
  {
    name: "Pausa de cuidado",
    label: "Em uma só visita",
    description: "Hidratação capilar, manicure e pedicure em uma única visita.",
  },
  {
    name: "Mãe e filha",
    label: "Para ir junto",
    description: "Um momento juntas, com unhas e escova para as duas.",
  },
];

/** Mensagem gerada a partir do nome do pacote. */
export const packageMessage = (item: CarePackage) =>
  `Olá! Quero saber mais sobre o pacote ${item.name}.`;

/* ------------------------------------------------------------------ */
/* Dúvidas frequentes                                                  */
/* ------------------------------------------------------------------ */

export type Faq = {
  question: string;
  answer: string;
  /** true = resposta genérica, TROCAR pelos dados do salão real. */
  placeholder?: boolean;
};

export const faqSection = {
  title: "Dúvidas *frequentes*",
  intro: "Não achou o que procurava? Chame no WhatsApp, a gente responde rapidinho.",
};

export const faqs: Faq[] = [
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Recomendamos agendar com alguns dias de antecedência, principalmente para sextas e sábados. Para noivas e festas, o ideal é reservar com algumas semanas. Se abrir um horário no mesmo dia, avisamos pelo WhatsApp.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos Pix, cartões de débito e crédito e dinheiro.",
    placeholder: true, // TROCAR: formas de pagamento do salão
  },
  {
    question: "Vocês atendem noivas fora do salão?",
    answer:
      "Sim. Atendemos a noiva e quem estiver com ela no local do making of, com agendamento prévio. Conte para a gente a data e o endereço pelo WhatsApp.",
    placeholder: true, // TROCAR: confirmar se o salão atende fora
  },
  {
    question: "Tem estacionamento?",
    answer:
      "Há opções de estacionamento perto do salão. Quando você agendar, enviamos a localização e as dicas de como chegar.",
    placeholder: true, // TROCAR: estacionamento próprio, conveniado ou na rua
  },
];

/* ------------------------------------------------------------------ */
/* Agendamento, horários e endereço                                    */
/* ------------------------------------------------------------------ */

export const bookingSection = {
  title: "Agende em *três passos*",
  steps: [
    { title: "Escolha o serviço.", text: "Ou um dos nossos pacotes." },
    { title: "Chame no WhatsApp.", text: "A mensagem já vai pronta, é só enviar." },
    { title: "Confirme o horário.", text: "A gente responde com os horários livres." },
  ],
  cta: { label: "Agendar pelo WhatsApp", href: whatsappLink() },
};

export const hours = {
  label: "Terça a sábado, das 9h às 19h", // TROCAR
  /** Formato schema.org, usado no JSON-LD. */
  schema: ["Tu-Sa 09:00-19:00"], // TROCAR junto com o texto acima
};

export const address = {
  street: "Rua das Magnólias, 120", // TROCAR — endereço fictício
  district: "Centro", // TROCAR
  city: "Sua cidade", // TROCAR
  demo: true, // false quando o endereço for real
};

/* ------------------------------------------------------------------ */
/* Conjunto completo, usado pela troca de idioma (src/i18n).           */
/* A versão em inglês fica em site.en.ts, com este mesmo formato.      */
/* ------------------------------------------------------------------ */

export const sitePt = {
  contact,
  creatorLink,
  brand,
  navigation,
  hero,
  servicesSection,
  services,
  serviceMessage,
  packagesSection,
  packages,
  packageMessage,
  faqSection,
  faqs,
  bookingSection,
  hours,
  address,
};
export type SiteData = typeof sitePt;
