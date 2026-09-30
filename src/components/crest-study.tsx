import { images } from "../data/content"
import { DiamondStrip } from "./diamond-strip"

const constructionPoints = [
  "Shield geometry = protection + progression",
  "Negative space spear = forward motion",
  "Diamond tape = CENTO system repeat",
]

export function CrestStudy() {
  return (
    <section id="club" className="border-y border-black/10 bg-white">
      <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-5 py-14 md:gap-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex aspect-square flex-col items-center justify-center rounded-[20px] border border-black/10 bg-paper p-4 md:p-6">
              <img
                src={images.crestRed}
                alt="Via Sport JBM FC badge red version"
                className="h-auto w-[84%] object-contain"
              />
              <div className="mt-3 text-[10px] font-bold tracking-[0.18em] uppercase opacity-60">
                Primary — Via Red
              </div>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-[20px] border border-black/10 bg-ink p-4 md:p-6">
              <img
                src={images.crestBlack}
                alt="Via Sport JBM FC badge black version"
                className="h-auto w-[84%] object-contain"
              />
              <div className="mt-3 text-[10px] font-bold tracking-[0.18em] text-white/60 uppercase">
                Alternate — Jet Black
              </div>
            </div>
          </div>
          <DiamondStrip
            className="mt-4 h-[18px] overflow-hidden rounded-[14px] border border-black/10"
            size="160px"
          />
        </div>
        <div>
          <div className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-60">
            Crest Study / JBM Spear Bearer
          </div>
          <h3 className="font-display mt-3 text-[8vw] leading-[0.9] font-[800] tracking-[-0.03em] uppercase md:text-[4.2vw]">
            Warrior In Full Stride.
          </h3>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.6] font-medium opacity-80">
            The Via Sport JBM FC badge is a runner, not a monument. A spear-bearer mid-stride —
            shield forward, spear back — moving via sport. JBM anchors the base, African outline
            hints at the pitch continent. Red for conviction, sky for the Highveld, black for the
            streets that raised us.
          </p>
          <div className="mt-8 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-2">
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase">Construction</div>
              <ul className="mt-3 space-y-2 text-[13px] leading-[1.5] opacity-75">
                {constructionPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-paper p-4">
              <img
                src={images.crestBlue}
                alt="Via Sport JBM blue badge"
                className="h-14 w-14 rounded-full border border-black/10 bg-white object-contain p-1"
              />
              <div className="leading-tight">
                <div className="text-[11px] font-bold tracking-[0.18em] uppercase opacity-60">
                  Alternate mark
                </div>
                <div className="text-[13px] font-bold">Blue / White — community & away</div>
                <div className="mt-1 text-[11px] opacity-60">Used for academy, social, and sky kits</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase">
              <span className="h-2 w-2 rounded-full bg-via" />
              Via Red #D10A11
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase">
              <span className="h-2 w-2 rounded-full bg-sky" />
              Sky #6CB4E5
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
