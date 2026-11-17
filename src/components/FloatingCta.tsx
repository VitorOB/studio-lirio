import { useEffect, useState } from "react";
import { CalendarHeart } from "lucide-react";
import { hero } from "../data/site";
import { WhatsAppNote } from "./WhatsAppNote";

/**
 * Botão "Agendar" fixo no canto inferior, só no celular.
 * Aparece depois do hero e some quando o bloco de agendamento ou o rodapé
 * entram na tela, para não cobrir o fim da página. Escondido, fica `inert`.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["inicio", "agendar", "rodape"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!("IntersectionObserver" in window) || targets.length === 0) return;

    const onScreen = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target.id);
        else onScreen.delete(entry.target.id);
      }
      setVisible(onScreen.size === 0);
    });

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="floating-cta fixed right-4 bottom-4 z-30 md:hidden"
      data-visible={visible}
      inert={!visible}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={hero.primaryCta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wine min-h-[3.25rem] gap-2.5 px-6 shadow-[0_6px_20px_-8px_rgba(46,30,34,0.45)]"
      >
        <CalendarHeart aria-hidden="true" size={19} strokeWidth={1.75} />
        Agendar
        <WhatsAppNote />
      </a>
    </div>
  );
}
