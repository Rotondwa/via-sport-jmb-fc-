import { ArrowUpRight } from "lucide-react"
import { kits } from "../data/content"
import { DiamondStrip } from "./diamond-strip"

export function KitCollection({ onShop }: Props) {
  const handleShop = (title: string) => () => {
    onShop(`${title} — coming soon. Draft added to your view.`)
  }

  return (
    <section id="kits" className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-24 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-via" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase">
              Collection 2025/26 — CENTO
            </span>
          </div>
          <h2 className="font-display mt-4 text-[11vw] leading-[0.88] font-[800] tracking-[-0.04em] uppercase md:text-[6.5vw]">
            Three Shirts. One System.
          </h2>
        </div>
        <div className="max-w-[30ch] text-[12px] font-semibold tracking-[0.12em] uppercase opacity-60">
          Home, Away, Third — engineered by PUMA, identity by HALE OUTDOOR. Diamond trim on every
          collar.
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
        {kits.map((kit) => (
          <article
            key={kit.label}
            className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-white transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <DiamondStrip className="absolute top-0 right-0 left-0 h-[18px] opacity-80" size="180px" />
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden bg-paper p-6 pt-10">
              <div
                className={`absolute top-1/2 left-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[50px] ${kit.accent}`}
              />
              <img
                src={kit.image}
                alt={kit.title}
                className="relative h-auto w-full max-w-[360px] object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-8 left-4 rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase">
                {kit.eyebrow}
              </div>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-[10px] font-bold tracking-[0.18em] uppercase opacity-60">
                    {kit.label}
                  </div>
                  <div className="mt-1 text-[15px] leading-[1.1] font-black tracking-[-0.02em] uppercase">
                    {kit.title}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${kit.accent}`} />
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase opacity-70">
                      {kit.colorway}
                    </span>
                  </div>
                </div>
                <div className="grid h-8 w-8 place-items-center rounded-full border border-black/15 transition-colors group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <p className="mt-3 text-[13px] leading-[1.5] opacity-70">{kit.description}</p>
              <button
                type="button"
                onClick={handleShop(kit.title)}
                className="mt-5 h-11 w-full rounded-full bg-ink text-[12px] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-black"
              >
                Shop Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

interface Props {
  onShop: (message: string) => void
}
