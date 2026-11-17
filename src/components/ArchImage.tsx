import type { CSSProperties } from "react";
import type { SiteImage } from "../data/site";

type ArchImageProps = {
  image: SiteImage;
  /** Atributo `sizes`: a largura que a foto ocupa em cada tamanho de tela. */
  sizes: string;
  /** Classes do contorno em arco (largura, proporção, animação). */
  className?: string;
  style?: CSSProperties;
  /** Só na foto central do hero: carrega já, com prioridade alta. */
  priority?: boolean;
  /** Fotos acima da dobra (arcos laterais do hero): sem lazy, mas sem prioridade alta. */
  eager?: boolean;
};

/** Foto com topo em arco, em WebP 600 e 1200 px, com dimensões declaradas. */
export function ArchImage({
  image,
  sizes,
  className = "",
  style,
  priority = false,
  eager = false,
}: ArchImageProps) {
  return (
    <div className={`arch ${className}`} style={style}>
      <img
        src={`${image.base}-600.webp`}
        srcSet={`${image.base}-600.webp 600w, ${image.base}-1200.webp 1200w`}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority || eager ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
      />
    </div>
  );
}
