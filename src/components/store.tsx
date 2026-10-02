import { contactEmail, kits } from "../data/content"

export function Store() {
  return (
    <section id="store" className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <p className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-50">Hale Store</p>
      <h2 className="font-display mt-3 text-[12vw] leading-[0.88] font-[800] tracking-[-0.04em] uppercase md:text-[72px]">
        Coming soon
      </h2>
      <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.6] opacity-70">
        The shirts are on show. They are not for sale yet. Price upon order / quote.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {kits.map((kit) => (
          <article key={kit.image} className="overflow-hidden rounded-[22px] border border-black/10 bg-white">
            <div className="pattern-bg grid aspect-[4/5] place-items-center p-6">
              <img src={kit.image} alt={kit.title} className="h-auto w-full object-contain" />
            </div>
            <div className="p-5">
              <div className="text-[10px] font-bold tracking-[0.18em] text-via uppercase">Coming soon</div>
              <h3 className="mt-2 text-[18px] font-black tracking-[-0.03em] uppercase">{kit.title}</h3>
              <p className="mt-4 text-[13px] font-bold tracking-[0.08em] uppercase">
                Price upon order / quote
              </p>
              <a
                href={`mailto:${contactEmail}?subject=Hale Store quote`}
                className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-[12px] font-bold tracking-[0.12em] text-white uppercase"
              >
                Request a quote
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
