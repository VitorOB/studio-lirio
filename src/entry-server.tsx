import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageProvider";

/** Usado só no build, por scripts/prerender.mjs. O HTML estático sai em português. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <LanguageProvider initialLang="pt">
        <App />
      </LanguageProvider>
    </StrictMode>,
  );
}
