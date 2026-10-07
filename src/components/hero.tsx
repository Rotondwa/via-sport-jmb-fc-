import { images } from "../data/content"
import { KitCarousel } from "./kit-carousel"
import { SpellHeadline } from "./spell-headline"

export function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pt-8 pb-14 md:px-8 md:pt-12 lg:px-10">
      <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div>
          <div className="inline-flex items-center gap-3">
            <img
              src={images.crestBlack}
              alt="Via Sport JBM black crest"
              className="h-14 w-14 rounded-full bg-white object-contain p-1"
            />
            <div className="leading-[0.95]">
              <div className="text-[15px] font-black tracking-[-0.02em]">VIA SPORT JBM</div>
              <div className="mt-1 text-[10px] font-bold tracking-[0.22em] uppercase opacity-50">
                JBM Black
              </div>
            </div>
          </div>
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
              Hale Store
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
