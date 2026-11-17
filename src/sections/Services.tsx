import { services, servicesSection, serviceMessage, whatsappLink } from "../data/site";
import { ArchImage } from "../components/ArchImage";
import { SectionHeading } from "../components/SectionHeading";
import { WhatsAppNote } from "../components/WhatsAppNote";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="servicos-title" title={servicesSection.title} intro={servicesSection.intro} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <li
              key={service.name}
              data-reveal=""
              style={{ transitionDelay: `${index * 80}ms` }}
              className="flex"
            >
              <article className="service-card flex w-full flex-col rounded-[28px] bg-card p-3 pb-6">
                <ArchImage
                  image={service.image}
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 92vw"
                  className="aspect-[4/5] sm:aspect-[3/4]"
                />

                <div className="flex flex-1 flex-col px-3 pt-6">
                  <h3 className="text-[1.75rem] leading-tight">{service.name}</h3>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Serviços de ${service.name.toLowerCase()}`}>
                    {service.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(serviceMessage(service))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link mt-auto self-start pt-5 text-[0.95rem]"
                  >
                    Agendar {service.name.toLowerCase()}
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <WhatsAppNote />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
