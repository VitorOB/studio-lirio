import { useSite } from "../i18n/lang";
import { DemoTag } from "../components/DemoTag";
import { WhatsAppNote } from "../components/WhatsAppNote";

export function Footer() {
  const { site, t } = useSite();
  const { brand, contact, creatorLink, navigation } = site;
  const year = new Date().getFullYear();

  return (
    <footer id="rodape" className="border-t border-line pt-14 pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#topo" className="inline-flex min-h-11 items-center font-display text-[1.875rem] leading-none text-ink">
              {brand.name}
            </a>
            <p className="mt-2 text-[0.95rem] text-muted">{brand.tagline}</p>
          </div>

          <nav aria-label={t.footerNav}>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-11 items-center text-ink hover:text-wine">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                {contact.instagram ? (
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-ink hover:text-wine"
                  >
                    Instagram
                    <span className="sr-only"> {t.newTab}</span>
                  </a>
                ) : (
                  /* Sem perfil configurado: não finge ser um link que funciona. */
                  <a
                    role="link"
                    aria-disabled="true"
                    className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 text-muted"
                  >
                    Instagram
                    <DemoTag />
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 text-[0.875rem] text-muted md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="shrink-0">
            © {year} {brand.name}
          </p>
          <p className="md:text-right">
            {t.demoCreatedBy} {contact.creatorName || "[NOME]"} {t.wantSite}{" "}
            <a
              href={creatorLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-medium text-wine underline underline-offset-4"
            >
              {t.talkToMe}
              <WhatsAppNote />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
