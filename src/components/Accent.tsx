import { Fragment } from "react";

/**
 * Converte "Um tempo só seu, do jeito que você *merece*." em texto com
 * a palavra entre asteriscos em itálico vinho.
 */
export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? (
          <em key={index} className="accent">
            {part}
          </em>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
