import { KitCarousel } from "./kit-carousel"
import { SpellHeadline } from "./spell-headline"

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-8 pb-14 md:px-8 md:pt-12 lg:px-10">
      <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white py-1.5 pr-4 pl-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-via" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
              Johannesburg • Est. JBM • Via Sport
            </span>
          </p>
          <div className="mt-6">
            <SpellHeadline />
          </div>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.6] font-medium opacity-80 md:text-[18px]">
            From Johannesburg. For Africa. Heritage, grit, and the diamond trim — a football club
            with streetwear in the cut.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#store"
              className="inline-flex h-12 items-center rounded-full bg-ink px-7 text-[12px] font-bold tracking-[0.14em] text-white uppercase"
            >
              Via Store
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center rounded-full border border-black/15 bg-white px-7 text-[12px] font-bold tracking-[0.14em] uppercase"
            >
              About Via Sport
            </a>
          </div>
        </div>
        <KitCarousel />
      </div>
    </section>
  )
}
