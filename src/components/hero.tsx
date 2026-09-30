import { ArrowRight } from "lucide-react"
import { images } from "../data/content"
import { DiamondStrip } from "./diamond-strip"

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
      <div className="grid gap-8 pt-8 pb-10 md:pt-12 md:pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-0 lg:pt-16">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-via" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
              Johannesburg • Est. JBM • Via Sport
            </span>
          </div>
          <h1 className="font-display mt-6 text-[14vw] leading-[0.84] font-[800] tracking-[-0.04em] uppercase md:mt-8 lg:text-[9.5vw]">
            <span className="block">Built</span>
            <span className="block">For The</span>
            <span className="relative block">
              Badge.
              <span className="absolute -top-1 -right-2 hidden md:block">
                <span className="inline-block translate-x-2 -rotate-3 rounded-full bg-via px-2 py-1 text-[10px] tracking-[0.2em] text-white">
                  2025/26
                </span>
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.55] font-medium opacity-80 md:mt-8 md:text-[17px]">
            From Johannesburg. For Africa. Via Sport JBM Football Club — heritage, grit, and that
            diamond trim. A streetwear-driven football identity engineered by HALE OUTDOOR.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#kits"
              className="inline-flex h-[48px] items-center gap-2 rounded-full bg-via px-7 text-[12px] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#b9090f]"
            >
              Shop CENTO Collection
              <ArrowRight size={16} />
            </a>
            <a
              href="#club"
              className="inline-flex h-[48px] items-center gap-2 rounded-full border border-black/15 bg-white px-7 text-[12px] font-bold tracking-[0.14em] uppercase transition-colors hover:bg-black hover:text-white"
            >
              Discover Club
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 border-t border-black/10 pt-6 md:mt-14">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">Worn with</div>
            <div className="flex items-center gap-5">
              <span className="text-[18px] font-black tracking-[-0.01em]">PUMA</span>
              <span className="h-4 w-px bg-black/15" />
              <span className="text-[13px] font-bold tracking-[0.14em] uppercase">HALE OUTDOOR</span>
              <span className="ml-2 hidden items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase opacity-60 sm:inline-flex">
                <span className="h-[18px] w-[18px] overflow-hidden rounded-full border border-black/10">
                  <img src={images.crestBlack} alt="" className="h-full w-full object-cover" />
                </span>
                CENTO
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 -bottom-10 left-0 hidden text-[7vw] leading-[0.85] font-black tracking-[-0.04em] uppercase opacity-[0.04] select-none lg:block">
            Via Sport
            <br />
            JBM FC
          </div>
        </div>
        <div className="relative">
          <div className="relative flex min-h-[560px] overflow-hidden rounded-[28px] border border-black/10 bg-white md:min-h-[680px] lg:min-h-[740px]">
            <DiamondStrip
              className="absolute top-0 right-0 left-0 z-10 h-[22px] opacity-90"
              size="220px"
            />
            <div className="absolute top-[22px] right-0 left-0 z-10 h-px bg-black/10" />
            <div className="absolute top-[54px] left-4 z-10 hidden flex-col gap-3 md:flex">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase opacity-40 [writing-mode:vertical-lr]">
                CENTO DIAMOND TRIM • 25/26
              </span>
            </div>
            <div className="relative grid flex-1 place-items-center p-6 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-b from-paper via-white to-paper" />
              <div className="absolute top-1/2 left-1/2 aspect-[3/4] h-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-via/10 blur-[60px]" />
              <div className="kit-float relative w-full max-w-[460px]">
                <img
                  src={images.kitHome}
                  alt="Via Sport JBM FC Home Kit 2025/26"
                  className="h-auto w-full object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.18)]"
                />
                <div className="absolute top-[14%] -right-2 flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-white shadow-xl">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white">
                    <img src={images.crestBlue} alt="" className="h-[14px] w-[14px] object-contain" />
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase">
                    HOME • AUTHENTIC
                  </span>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-4 bg-gradient-to-t from-white via-white/90 to-transparent p-5 md:p-6">
                <div className="min-w-0">
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase opacity-60">
                    Via Sport JBM FC Home Kit 2025/26
                  </div>
                  <div className="mt-1 text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
                    KIT 01 — HOME
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-via" />
                    <span className="text-[14px] font-bold">Via Red / Sky / Jet Black</span>
                  </div>
                  <div className="mt-1 text-[11px] font-medium opacity-60">
                    PUMA engineered, HALE OUTDOOR CENTO diamond neck tape, DON sleeve
                  </div>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                  <div className="h-[38px] w-[38px] overflow-hidden rounded-full border border-black/10">
                    <img src={images.kitAway} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-[38px] w-[38px] overflow-hidden rounded-full border border-black/10">
                    <img src={images.kitThird} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-3 flex max-w-[calc(100%-24px)] items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] md:left-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white">
              <span className="h-2.5 w-2.5 rounded-full bg-via" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase opacity-60">FOUNDED</div>
              <div className="text-[14px] font-bold">IN JOHANNESBURG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
