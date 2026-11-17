import type { CSSProperties } from "react";
import { useSite } from "../i18n/lang";
import { Accent } from "../components/Accent";
import { ArchImage } from "../components/ArchImage";
import { WhatsAppNote } from "../components/WhatsAppNote";

const delay = (ms: number, rise?: number): CSSProperties =>
  ({ "--delay": `${ms}ms`, ...(rise ? { "--rise": `${rise}px` } : {}) }) as CSSProperties;

/** Atraso de cada arco: o título entra antes, depois os arcos a cada 120 ms. */
const ARCH_START = 220;
const ARCH_STEP = 120;

export function Hero() {
  const { hero } = useSite().site;
  const [nails, hair, room] = hero.images;
  // No celular, o rótulo quebra em duas linhas de dois itens, sem "·" sobrando no começo.
  const eyebrowItems = hero.eyebrow.split(" · ");
  const half = Math.ceil(eyebrowItems.length / 2);
  const eyebrowLines = [eyebrowItems.slice(0, half), eyebrowItems.slice(half)];

  return (
    <section id="inicio" aria-labelledby="hero-title" className="overflow-hidden pt-12 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow hero-in" style={delay(0, 12)}>
            {eyebrowLines.map((line, index) => (
              <span key={index} className="block whitespace-nowrap sm:inline">
                {index > 0 && <span className="hidden sm:inline"> · </span>}
                {line.join(" · ")}
              </span>
            ))}
          </p>

          <h1
            id="hero-title"
            className="hero-in mt-5 text-[2.5rem] leading-[1.06] min-[380px]:text-[2.75rem] sm:text-6xl lg:text-[4.5rem]"
            style={delay(40, 12)}
          >
            <Accent text={hero.title} />
          </h1>

          <p
            className="hero-in mx-auto mt-6 max-w-xl text-[1.0625rem] text-muted sm:text-lg"
            style={delay(100, 12)}
          >
            {hero.subtitle}
          </p>

          <div
            className="hero-in mt-9 flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center"
            style={delay(160, 12)}
          >
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wine"
            >
              {hero.primaryCta.label}
              <WhatsAppNote />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Três arcos: unhas, cabelo (o do meio, mais alto) e ambiente */}
        <div className="mx-auto mt-14 grid max-w-[61rem] grid-cols-[1fr_1.18fr_1fr] items-end gap-2.5 min-[380px]:gap-3 sm:mt-16 sm:gap-5 lg:gap-7">
          <ArchImage
            image={nails}
            sizes="(min-width: 1024px) 300px, 28vw"
            className="hero-in aspect-[3/4]"
            eager
            style={delay(ARCH_START)}
          />
          <ArchImage
            image={hair}
            sizes="(min-width: 1024px) 360px, 34vw"
            className="hero-in aspect-[3/4.2]"
            style={delay(ARCH_START + ARCH_STEP)}
            priority
          />
          <ArchImage
            image={room}
            sizes="(min-width: 1024px) 300px, 28vw"
            className="hero-in aspect-[3/4]"
            eager
            style={delay(ARCH_START + ARCH_STEP * 2)}
          />
        </div>
      </div>
    </section>
  );
}
