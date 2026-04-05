export type BrandLogoSize = 'sm' | 'md' | 'lg'

/** Tuned heights: header/footer stay within the bar; hero is prominent but not oversized. */
const sizeClass: Record<BrandLogoSize, { wrap: string; img: string }> = {
  sm: {
    wrap: 'rounded-md px-1.5 py-1 ring-1 ring-slate-900/10',
    img: 'max-h-8 sm:max-h-9',
  },
  md: {
    wrap: 'rounded-lg px-2 py-1 ring-1 ring-slate-900/10',
    img: 'max-h-9 sm:max-h-10',
  },
  lg: {
    wrap: 'rounded-xl px-3 py-2 ring-1 ring-slate-900/10 shadow-sm',
    img: 'max-h-32 w-auto sm:max-h-36 md:max-h-40 lg:max-h-44 xl:max-h-48',
  },
}

export interface BrandLogoProps {
  src: string
  alt: string
  size?: BrandLogoSize
  className?: string
}

export function BrandLogo({
  src,
  alt,
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const s = sizeClass[size]
  return (
    <span
      className={`inline-flex min-w-0 max-w-full items-center justify-center bg-white shadow-sm ${s.wrap} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-auto w-auto max-w-full object-contain object-left ${s.img}`}
        decoding="async"
      />
    </span>
  )
}
