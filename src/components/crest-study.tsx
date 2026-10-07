const crests = [
  {
    image: "/images/crest-via-red.png",
    label: "Primary — Via Red",
    frame: "bg-[#f4f1ea] text-ink/55",
  },
  {
    image: "/images/crest-jet-black.jpg",
    label: "Alternate — Jet Black",
    frame: "bg-black text-white/55",
  },
]

const points = [
  "Shield geometry = protection + progression",
  "Negative space spear = forward motion",
  "Diamond tape = CENTO system repeat",
]

const colors = [
  { name: "Via Red", hex: "#D10A11" },
  { name: "Sky", hex: "#6CB4E5" },
]

export function CrestStudy() {
  return (
    <section id="crest" className="bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <div className="grid grid-cols-2 gap-4">
            {crests.map((crest) => (
              <figure key={crest.label} className={`overflow-hidden rounded-[28px] p-4 ${crest.frame}`}>
                <div className="grid aspect-square place-items-center">
                  <img src={crest.image} alt={crest.label} className="h-full w-full object-contain" />
                </div>
                <figcaption className="mt-4 text-center text-[11px] font-bold tracking-[0.16em] uppercase">
                  {crest.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="mt-4 h-3.5 bg-[#050505] bg-[url('/images/black-pattern.png')] bg-[length:14px] bg-repeat"
          />
        </div>
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-ink/45 uppercase">
            Crest Study / JBM Spear Bearer
          </p>
          <h2 className="font-display mt-4 max-w-[12ch] text-[12vw] leading-[0.86] font-[800] tracking-[-0.045em] uppercase md:text-[76px]">
            Warrior in full stride.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-ink/75">
            The Via Sport JBM FC badge is a runner, not a monument. A spear-bearer mid-stride — shield
            forward, spear back — moving via sport. JBM anchors the base, African outline hints at the
            pitch continent. Red for conviction, sky for the Highveld, black for the streets that raised
            us.
          </p>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] text-ink/45 uppercase">Construction</p>
              <ul className="mt-4 grid gap-2">
                {points.map((point) => (
                  <li key={point} className="flex gap-2 text-[14px] font-medium text-ink/80">
                    <span aria-hidden="true">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {colors.map((color) => (
                  <span
                    key={color.hex}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase"
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color.hex }} />
                    {color.name} {color.hex}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex max-w-[320px] items-center gap-4 rounded-[22px] bg-[#f4f4f2] p-4">
              <img
                src="/images/crest-sky.png"
                alt="Via Sport JBM blue badge"
                className="h-16 w-16 shrink-0 object-contain"
              />
              <div>
                <p className="text-[11px] font-bold tracking-[0.16em] text-ink/45 uppercase">Alternate mark</p>
                <p className="mt-1 text-[15px] font-black tracking-[-0.03em]">
                  Blue / White — community & away
                </p>
                <p className="mt-1 text-[13px] leading-[1.4] text-ink/60">
                  Used for academy, social, and sky kits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
