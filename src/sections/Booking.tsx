import { Clock, MapPin } from "lucide-react";
import { address, bookingSection, hours } from "../data/site";
import { Accent } from "../components/Accent";
import { DemoTag } from "../components/DemoTag";
import { WhatsAppNote } from "../components/WhatsAppNote";

export function Booking() {
  return (
    <section id="agendar" aria-labelledby="agendar-title" className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      <div
        data-reveal=""
        className="on-dark mx-auto grid max-w-6xl gap-12 rounded-[32px] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:p-20"
      >
        <div className="lg:col-span-5">
          <h2 id="agendar-title" className="text-[2.25rem] leading-[1.1] sm:text-5xl">
            <Accent text={bookingSection.title} />
          </h2>

          <dl className="mt-8 space-y-4 text-dark-muted">
            <div className="flex items-start gap-3">
              <dt>
                <Clock aria-hidden="true" size={20} strokeWidth={1.5} className="mt-[3px] text-sand" />
                <span className="sr-only">Horário</span>
              </dt>
              <dd>{hours.label}</dd>
            </div>
            <div className="flex items-start gap-3">
              <dt>
                <MapPin aria-hidden="true" size={20} strokeWidth={1.5} className="mt-[3px] text-sand" />
                <span className="sr-only">Endereço</span>
              </dt>
              <dd className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>
                  {address.street} · {address.district}
                </span>
                {address.demo && <DemoTag onDark />}
              </dd>
            </div>
          </dl>

          <a
            href={bookingSection.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white mt-10 w-full min-[420px]:w-auto"
          >
            {bookingSection.cta.label}
            <WhatsAppNote />
          </a>
        </div>

        <ol className="lg:col-span-7">
          {bookingSection.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-6 border-t border-white/15 py-7 first:border-0 first:pt-0 last:pb-0 sm:gap-8 lg:first:border-t lg:first:pt-7"
            >
              <span
                aria-hidden="true"
                className="w-14 shrink-0 font-display text-[3.25rem] leading-none text-sand sm:w-20 sm:text-[4rem]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-dark-muted sm:pt-2">
                <strong className="block font-display text-[1.625rem] font-normal leading-tight text-white">
                  {step.title}
                </strong>
                <span className="mt-1 block">{step.text}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
