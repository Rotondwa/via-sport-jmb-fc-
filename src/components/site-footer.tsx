import type { FormEvent } from "react"
import { footerColumns, images } from "../data/content"
import { DiamondStrip } from "./diamond-strip"

export function SiteFooter({ onJoin }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onJoin("Thanks — you’re on the diamond line list (local preview).")
  }

  return (
    <footer id="footer" className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full bg-white p-[3px]">
                <img src={images.crestRed} alt="crest" className="h-full w-full object-contain" />
              </div>
              <div className="leading-[0.9]">
                <div className="text-[18px] font-black tracking-[-0.02em]">VIA SPORT JBM FC</div>
                <div className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-60">
                  Built for the badge • Johannesburg
                </div>
              </div>
            </div>
            <h4 className="font-display mt-8 text-[9vw] leading-[0.9] font-[800] tracking-[-0.03em] uppercase md:text-[4.2vw]">
              Stay In The
              <br />
              Diamond Line.
            </h4>
            <p className="mt-4 max-w-[42ch] text-[13px] leading-[1.6] opacity-70">
              Collection drops, fixture alerts, academy news. No spam. Editorial only. Images will
              follow later — this build is ready to swap assets.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-[420px]">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="EMAIL ADDRESS"
                className="h-12 flex-1 rounded-l-full border border-r-0 border-white/15 bg-white/10 px-5 text-[12px] font-semibold tracking-[0.14em] uppercase placeholder:text-white/40 focus:bg-white/15 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 rounded-r-full bg-white px-6 text-[12px] font-bold tracking-[0.14em] text-black uppercase transition-colors hover:bg-paper"
              >
                Join
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className={column.title === "Connect" ? "col-span-2 md:col-span-1" : ""}>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-50">
                  {column.title}
                </div>
                <div className="mt-4 grid gap-2 text-[13px] opacity-80">
                  {column.links.map((link) => (
                    <a key={link.label} href={link.href} className="hover:opacity-100">
                      {link.label}
                    </a>
                  ))}
                </div>
                {column.title === "Connect" ? (
                  <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-white p-1">
                      <img src={images.crestBlack} alt="" className="h-full w-full object-contain" />
                    </div>
                    <div className="text-[11px] leading-[1.4]">
                      <span className="font-bold tracking-[0.14em] uppercase">Via Sport</span>
                      <br />
                      <span className="opacity-60">JHB • CENTO • PUMA • HALE</span>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-bold tracking-[0.16em] uppercase opacity-50 md:mt-16">
          <span>© 2025 Via Sport JBM FC — All rights reserved • Built for the Badge</span>
          <span className="flex items-center gap-3">
            <span className="hidden h-px w-6 bg-white/20 md:block" />
            Hale Outdoor × Via Sport — Editorial site ready for asset swap
          </span>
        </div>
      </div>
      <DiamondStrip className="h-[14px] w-full opacity-80" size="180px" filter="invert(1)" />
    </footer>
  )
}

interface Props {
  onJoin: (message: string) => void
}
