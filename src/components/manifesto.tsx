import { manifestoPoints } from "../data/content"
import { DiamondStrip } from "./diamond-strip"

export function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-ink text-white">
      <DiamondStrip className="h-[26px] w-full" size="260px" filter="invert(1) brightness(1.2)" />
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-60">
              Manifesto / 001
            </div>
            <h2 className="font-display mt-3 text-[10vw] leading-[0.9] font-[800] tracking-[-0.03em] uppercase md:text-[6vw] lg:text-[5vw]">
              The Badge Is The Brief.
            </h2>
          </div>
          <p className="max-w-[38ch] text-[14px] leading-[1.6] font-medium opacity-70">
            Not a fashion club. Not a hype project. A proper football club with a streetwear
            discipline — cut sharp, built to last.
          </p>
        </div>
        <div className="grid gap-8 pt-10 md:grid-cols-3 md:gap-10">
          {manifestoPoints.map((point) => (
            <div key={point.key} className="group">
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-50">
                {point.key}
              </div>
              <div className="mt-4 text-[22px] font-black tracking-[-0.02em] uppercase">
                {point.title}
              </div>
              <div className="mt-3 max-w-[34ch] text-[13px] leading-[1.6] opacity-70">
                {point.description}
              </div>
              <div className="mt-6 h-px w-full bg-white/10 transition-colors group-hover:bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
