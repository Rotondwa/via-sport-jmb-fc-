import { images } from "../data/content"

export function Partners() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 py-8 md:px-8 md:py-10 lg:px-10">
        <div className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-50">
          Official Partners
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-black tracking-[0.14em] uppercase">HALE OUTDOOR</span>
            <span className="-translate-y-1 rounded bg-via px-1.5 py-0.5 text-[9px] font-bold tracking-[0.16em] text-white uppercase">
              Primary
            </span>
          </div>
          <span className="hidden h-5 w-px bg-black/10 md:block" />
          <span className="text-[20px] font-black tracking-[-0.02em]">PUMA</span>
          <span className="hidden h-5 w-px bg-black/10 md:block" />
          <span className="flex items-center gap-2 text-[14px] font-bold tracking-[0.18em] uppercase">
            <span className="h-5 w-5 overflow-hidden rounded-full border border-black/10">
              <img src={images.diamond} alt="" className="h-full w-full object-cover" />
            </span>
            CENTO
          </span>
          <span className="hidden h-5 w-px bg-black/10 md:block" />
          <span className="text-[14px] font-black tracking-[0.12em] uppercase">DON</span>
        </div>
      </div>
    </section>
  )
}
