import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { sitePt } from "../data/site";
import { siteEn } from "../data/site.en";
import { ui, type Lang } from "../data/ui";
import { SiteContext, saveLang } from "./lang";

const sites = { pt: sitePt, en: siteEn };

const seo = {
  pt: {
    title: "Studio Lírio — Salão de beleza | Cabelo, unhas, sobrancelhas e maquiagem",
    description: sitePt.brand.description,
  },
  en: {
    title: "Studio Lírio — Beauty salon | Hair, nails, brows and makeup",
    description: siteEn.brand.description,
  },
};

/**
 * `initialLang` vem de fora porque o HTML é pré-renderizado no build (sempre em português)
 * e o navegador decide o idioma em main.tsx antes de montar o React.
 */
export function LanguageProvider({ initialLang = "pt", children }: { initialLang?: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    saveLang(next);
    setLangState(next);
    // ?lang=en fica na URL para o link poder ser compartilhado já em inglês.
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
  }, []);

  // Idioma do documento, título e descrição acompanham a escolha.
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = seo[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo[lang].description);
  }, [lang]);

  const value = useMemo(() => ({ lang, site: sites[lang], t: ui[lang], setLang }), [lang, setLang]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
