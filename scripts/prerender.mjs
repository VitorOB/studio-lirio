// Gera o HTML estático das seções dentro de dist/index.html.
// Assim o conteúdo aparece mesmo se o JavaScript falhar, e o hero pinta mais cedo.
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const htmlPath = resolve(root, "dist/index.html");
const serverEntry = resolve(root, "dist-ssr/entry-server.js");
const marker = "<!--app-html-->";

const { render } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(htmlPath, "utf8");

if (!template.includes(marker)) {
  throw new Error(`Marcador ${marker} não encontrado em dist/index.html`);
}

await writeFile(htmlPath, template.replace(marker, render()));
await rm(resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log("✓ dist/index.html pré-renderizado");
