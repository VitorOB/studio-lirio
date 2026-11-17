import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { detectLang } from "./i18n/lang";
import "./index.css";

const container = document.getElementById("root")!;
const lang = detectLang();
const app = (
  <StrictMode>
    <LanguageProvider initialLang={lang}>
      <App />
    </LanguageProvider>
  </StrictMode>
);

// No build, o HTML já vem pré-renderizado em português e é só hidratado.
// Em inglês (ou no `npm run dev`, com a raiz vazia), o React monta do zero no idioma certo.
if (container.firstElementChild && lang === "pt") {
  hydrateRoot(container, app);
} else {
  container.replaceChildren();
  createRoot(container).render(app);
}
