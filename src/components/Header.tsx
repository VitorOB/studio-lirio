import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, hero, navigation } from "../data/site";
import { WhatsAppNote } from "./WhatsAppNote";

const MENU_ID = "menu-mobile";

/**
 * Cabeçalho fixo. No celular, o menu abre como um painel logo abaixo:
 * - o botão informa o estado com `aria-expanded`;
 * - ao abrir, o foco vai para o primeiro link;
 * - Esc fecha e devolve o foco ao botão;
 * - Tab ao sair do painel também fecha.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggle.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    panel.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    // Fecha se o foco sair do cabeçalho (Tab depois do último item) ou se clicar fora.
    const onFocusIn = (event: FocusEvent) => {
      const header = toggle.current?.closest("header");
      if (header && !header.contains(event.target as Node)) close(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      const header = toggle.current?.closest("header");
      if (header && !header.contains(event.target as Node)) close(false);
    };
    // Volta ao layout de desktop: fecha.
    const desktop = window.matchMedia("(min-width: 768px)");
    const onDesktop = () => desktop.matches && close(false);

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open, close]);

  return (
    <header
      className={`sticky top-0 z-40 bg-nude transition-[border-color] duration-300 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#topo" className="inline-flex min-h-11 items-center font-display text-[1.625rem] leading-none text-ink">
          {brand.name}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-[0.975rem] text-ink transition-colors hover:text-wine"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wine hidden min-h-11 px-5 text-[0.925rem] sm:inline-flex"
          >
            Agendar horário
            <WhatsAppNote />
          </a>

          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
          >
            {open ? (
              <X aria-hidden="true" size={24} strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden="true" size={24} strokeWidth={1.5} />
            )}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      <div
        ref={panel}
        id={MENU_ID}
        hidden={!open}
        className="border-t border-line bg-nude px-4 pt-2 pb-6 sm:px-6 md:hidden"
      >
        <nav aria-label="Menu do celular">
          <ul>
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => close(false)}
                  className="flex min-h-14 items-center font-display text-[1.625rem] text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={hero.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => close(false)}
          className="btn btn-wine mt-6 w-full"
        >
          Agendar horário
          <WhatsAppNote />
        </a>
      </div>
    </header>
  );
}
