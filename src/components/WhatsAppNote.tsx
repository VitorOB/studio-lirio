import { useSite } from "../i18n/lang";

/** Aviso só para leitores de tela: o link sai do site e abre o WhatsApp. */
export function WhatsAppNote() {
  const { t } = useSite();
  return <span className="sr-only"> {t.whatsAppNote}</span>;
}
