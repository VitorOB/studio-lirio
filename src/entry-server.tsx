import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/** Usado só no build, por scripts/prerender.mjs. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
