import { useSite } from "../i18n/lang";

/** Botão PT/EN: mostra o idioma de destino. */
export function LanguageSwitch() {
  const { t, setLang } = useSite();
  const { short, label, target } = t.langSwitch;
  return (
    <button
      type="button"
      onClick={() => setLang(target)}
      className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-line px-3 text-[0.875rem] font-medium tracking-[0.08em] text-ink transition-colors hover:border-wine hover:text-wine"
    >
      <span lang={target === "en" ? "en" : "pt-BR"}>
        {short}
        <span className="sr-only"> — {label}</span>
      </span>
    </button>
  );
}
