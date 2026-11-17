import { useSite } from "../i18n/lang";

type DemoTagProps = {
  /** Versão para o bloco escuro. */
  onDark?: boolean;
};

/** Etiqueta "demonstrativo" para dados fictícios e links que ainda não funcionam. */
export function DemoTag({ onDark = false }: DemoTagProps) {
  const { t } = useSite();
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] ${
        onDark ? "bg-white/10 text-dark-muted" : "bg-chip text-muted"
      }`}
    >
      {t.demo}
    </span>
  );
}
