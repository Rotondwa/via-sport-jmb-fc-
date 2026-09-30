import { useEffect, useState } from "react"
import { CrestStudy } from "./components/crest-study"
import { Fixtures } from "./components/fixtures"
import { Hero } from "./components/hero"
import { KitCollection } from "./components/kit-collection"
import { Manifesto } from "./components/manifesto"
import { Partners } from "./components/partners"
import { SiteFooter } from "./components/site-footer"
import { SiteHeader } from "./components/site-header"

const marqueeItems = Array.from({ length: 8 }, (_, index) => index)

export function App() {
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    if (!notice) return
    const timeout = setTimeout(() => setNotice(null), 2800)
    return () => clearTimeout(timeout)
  }, [notice])

  const handleNotify = (message: string) => setNotice(message)

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased selection:bg-via selection:text-white"
    >
      <div className="relative z-50 max-w-full overflow-hidden bg-ink text-white">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="marquee-track flex items-center gap-8 py-[9px] pr-8">
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-8 text-[11px] font-semibold tracking-[0.18em] uppercase"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-via" />
                  HALE OUTDOOR × VIA SPORT JBM FC — 2025/26 CENTO Collection Out Now
                </span>
                <span className="opacity-30">—</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <SiteHeader />
      <Hero />
      <Manifesto />
      <KitCollection onShop={handleNotify} />
      <CrestStudy />
      <Fixtures />
      <Partners />
      <SiteFooter onJoin={handleNotify} />
      {notice ? (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[100] max-w-[90vw] -translate-x-1/2 rounded-full border border-white/10 bg-ink px-5 py-3 text-center text-[12px] font-bold tracking-[0.04em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
        >
          {notice}
        </div>
      ) : null}
    </div>
  )
}
