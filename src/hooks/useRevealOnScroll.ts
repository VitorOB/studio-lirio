import { useEffect } from "react";

declare global {
  interface Window {
    __lirioReady?: boolean;
  }
}

/**
 * Observa todos os elementos com `data-reveal` e marca `data-shown`
 * na primeira vez que entram na tela. Não repete ao voltar.
 * `refresh` (o idioma atual) faz observar de novo os elementos recriados na troca de idioma.
 */
export function useRevealOnScroll(refresh?: unknown) {
  useEffect(() => {
    window.__lirioReady = true;
    // Caso o tempo de segurança do index.html já tenha removido a classe.
    document.documentElement.classList.add("js");

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])");
    const show = (el: HTMLElement) => el.setAttribute("data-shown", "");

    if (!("IntersectionObserver" in window)) {
      targets.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [refresh]);
}
