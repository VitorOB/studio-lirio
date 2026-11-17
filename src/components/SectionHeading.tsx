import { Accent } from "./Accent";

type SectionHeadingProps = {
  id: string;
  title: string;
  intro?: string;
  /** "side": título à esquerda e texto ao lado (desktop). "stack": um embaixo do outro. */
  layout?: "side" | "stack";
};

export function SectionHeading({ id, title, intro, layout = "side" }: SectionHeadingProps) {
  const side = layout === "side";
  return (
    <div
      data-reveal=""
      className={
        side
          ? "flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10"
          : "flex flex-col gap-4"
      }
    >
      <h2 id={id} className="text-[2.25rem] leading-[1.1] sm:text-5xl">
        <Accent text={title} />
      </h2>
      {intro && (
        <p className={`text-muted ${side ? "max-w-sm md:pb-1.5 md:text-right" : "max-w-sm"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
