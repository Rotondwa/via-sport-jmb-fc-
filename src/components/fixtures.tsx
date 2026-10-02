import { fixturePhases, seasonGlance } from "../data/content"

const phaseClass = {
  dust: "bg-[#041A34] text-white",
  paper: "bg-white text-ink border border-black/10",
}

export function Fixtures() {
  return (
    <section id="fixtures" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <p className="text-[12px] font-bold tracking-[0.18em] uppercase">
          Via Sport JBM FC • ABC Motsepe League Gauteng Stream A
        </p>
        <h2 className="font-display mt-4 max-w-[16ch] text-[10vw] leading-[0.88] font-[800] tracking-[-0.04em] uppercase md:text-[64px]">
          Via Sport JBM FC official fixtures 2026/27
        </h2>
        <h3 className="mt-12 text-[12px] font-bold tracking-[0.22em] uppercase opacity-50">
          Season at a Glance
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {seasonGlance.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white px-4 py-5">
              <div className="text-[18px] font-black tracking-[-0.03em]">{item.value}</div>
              <div className="mt-1 text-[11px] font-bold tracking-[0.12em] uppercase opacity-50">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6">
          {fixturePhases.map((phase) => (
            <article
              key={phase.id}
              className={`rounded-[28px] p-6 md:p-8 ${phase.tone === "dust" ? phaseClass.dust : phaseClass.paper}`}
            >
              <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#EF0107]">
                {phase.detail}
              </div>
              <h3 className="mt-2 text-[28px] font-black tracking-[-0.03em] uppercase md:text-[36px]">
                {phase.title}
              </h3>
              <p className="mt-2 text-[13px] font-bold tracking-[0.08em] uppercase opacity-70">
                {phase.summary}
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {phase.weeks.map((week) => (
                  <div
                    key={week}
                    className={`rounded-2xl px-4 py-4 text-[18px] font-black tracking-[-0.03em] ${phase.tone === "dust" ? "bg-white/10" : "bg-paper"}`}
                  >
                    {week}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-[28px] bg-[#EF0107] px-6 py-12 text-center text-white md:py-16">
          <div className="text-[12px] font-bold tracking-[0.28em] uppercase">After week 11</div>
          <h3 className="font-display mt-3 text-[12vw] leading-[0.86] font-[800] tracking-[-0.04em] uppercase md:text-[72px]">
            Team Break
          </h3>
          <p className="mt-4 text-[16px] font-bold tracking-[0.14em] uppercase md:text-[20px]">
            05 December 2026 — 15 January 2027
          </p>
        </div>
      </div>
    </section>
  )
}
