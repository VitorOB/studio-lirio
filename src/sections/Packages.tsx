import { packages, packagesSection, packageMessage, whatsappLink } from "../data/site";
import { SectionHeading } from "../components/SectionHeading";
import { WhatsAppNote } from "../components/WhatsAppNote";

export function Packages() {
  return (
    <section id="pacotes" aria-labelledby="pacotes-title" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="pacotes-title" title={packagesSection.title} intro={packagesSection.intro} />

        <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((item, index) => {
            const featured = Boolean(item.featured);
            return (
              <li
                key={item.name}
                data-reveal=""
                style={{ transitionDelay: `${index * 80}ms` }}
                className="flex"
              >
                <article
                  className={`flex w-full flex-col rounded-[28px] p-7 sm:p-9 ${
                    featured ? "on-dark bg-wine text-white" : "bg-card text-ink"
                  }`}
                >
                  <p className={`eyebrow ${featured ? "text-wine-soft" : ""}`}>{item.label}</p>
                  <h3 className="mt-4 text-[2rem] leading-[1.1]">{item.name}</h3>
                  <p className={`mt-4 ${featured ? "text-wine-soft" : "text-muted"}`}>{item.description}</p>

                  <a
                    href={whatsappLink(packageMessage(item))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-link mt-auto self-start pt-7 ${featured ? "text-white" : ""}`}
                  >
                    Quero saber mais
                    <span className="sr-only"> sobre o pacote {item.name}</span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <WhatsAppNote />
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
