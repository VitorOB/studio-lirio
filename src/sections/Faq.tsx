import { Plus } from "lucide-react";
import { faqs, faqSection, whatsappLink } from "../data/site";
import { Accent } from "../components/Accent";
import { WhatsAppNote } from "../components/WhatsAppNote";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="pb-24 sm:pb-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div data-reveal="" className="lg:col-span-5">
          <h2 id="duvidas-title" className="text-[2.25rem] leading-[1.1] sm:text-5xl">
            <Accent text={faqSection.title} />
          </h2>
          <p className="mt-4 max-w-sm text-muted">{faqSection.intro}</p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre o Studio Lírio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link mt-3"
          >
            Tirar dúvida no WhatsApp
            <span className="arrow" aria-hidden="true">
              →
            </span>
            <WhatsAppNote />
          </a>
        </div>

        <div data-reveal="" className="border-t border-line lg:col-span-7">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item border-b border-line">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <span className="text-[1.125rem] font-medium leading-snug">{faq.question}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chip text-wine">
                  <Plus aria-hidden="true" size={18} strokeWidth={1.75} className="faq-icon" />
                </span>
              </summary>
              <p className="max-w-xl pr-14 pb-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
