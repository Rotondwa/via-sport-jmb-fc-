import { ArrowUpRight } from "lucide-react"
import { fixturePhases, seasonGlance } from "../data/content"

const club = "Via Sport JBM FC"

const sideMark = {
  Home: {
    badge: "bg-white text-black",
    button: "bg-via text-white",
  },
  Away: {
    badge: "border border-white/30 text-white",
    button: "bg-white text-black",
  },
}

export function Fixtures() {
  return (
    <section id="fixtures" className="bg-[#f3f1ec]">
      <div className="mx-auto grid max-w-[1440px] items-start gap-5 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <article className="overflow-hidden rounded-[28px] bg-[#121212] text-white">
          <div
            aria-hidden="true"
            className="h-7 bg-[#050505] bg-[url('/images/black-pattern.png')] bg-[length:28px] bg-repeat"
          />
          <div className="p-5 md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-white/45 uppercase">
                  Up next — first team
                </p>
                <h2 className="mt-2 text-[34px] leading-none font-black tracking-[-0.045em] uppercase md:text-[44px]">
                  Fixtures
                </h2>
              </div>
              <p className="flex items-center gap-2 pt-1 text-[11px] font-bold tracking-[0.12em] text-white/70 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-via" />
                ABC Motsepe • 2026/27
              </p>
            </div>
            <div className="mt-6 grid gap-6">
              {fixturePhases.map((phase) => (
                <div key={phase.id} className="grid gap-3">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.16em] text-[#EF0107] uppercase">
                      {phase.detail}
                    </p>
                    <p className="mt-1 text-[16px] font-black tracking-[-0.03em] uppercase">{phase.title}</p>
                    <p className="mt-1 text-[12px] font-bold tracking-[0.08em] text-white/50 uppercase">
                      {phase.summary} • {phase.note}
                    </p>
                  </div>
                  {phase.matches.map((match) => (
                    <div
                      key={match.week}
                      className="flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-4 md:px-5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-white/45 uppercase">
                          <span>
                            {match.date} • {match.time}
                          </span>
                          <span>{match.week}</span>
                          <span className={`rounded-full px-2 py-1 ${sideMark[match.side].badge}`}>
                            {match.side}
                          </span>
                        </div>
                        <p className="mt-2 text-[16px] font-black tracking-[-0.03em] uppercase md:text-[18px]">
                          <span className={match.home === club ? "text-white" : "text-white/70"}>{match.home}</span>
                          <span className="text-white/40"> vs </span>
                          <span className={match.away === club ? "text-white" : "text-white/70"}>{match.away}</span>
                        </p>
                        <p className="mt-1 text-[13px] text-white/50">{match.venue}</p>
                      </div>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${sideMark[match.side].button}`}
                      >
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  ))}
                </div>
              ))}
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-4 md:px-5">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-white/45 uppercase">
                    <span>After week 11</span>
                    <span className="rounded-full bg-white/15 px-2 py-1">Break</span>
                  </div>
                  <p className="mt-2 text-[18px] font-black tracking-[-0.03em] uppercase md:text-[20px]">
                    Team Break
                  </p>
                  <p className="mt-1 text-[13px] text-white/55">05 December 2026 — 15 January 2027</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-via text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
            <p className="mt-6 text-center text-[11px] font-bold tracking-[0.14em] text-white/35 uppercase">
              Via Sport JBM FC • ABC Motsepe League Gauteng Stream A
            </p>
          </div>
        </article>
        <aside className="rounded-[28px] bg-white p-5 text-ink md:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase opacity-45">Season at a glance</p>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase opacity-45">2026/27</p>
          </div>
          <div className="mt-4">
            {seasonGlance.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 px-3 py-3 ${index === 0 ? "rounded-full bg-[#f4f4f2]" : "border-t border-black/6"}`}
              >
                <span className="w-4 text-[13px] font-bold opacity-40">{index + 1}</span>
                <span className="flex-1 text-[15px] font-semibold tracking-[-0.02em]">{item.label}</span>
                <span className="text-[15px] font-black tracking-[-0.03em]">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex h-1.5 overflow-hidden rounded-full">
            <span className="flex-1 bg-ink" />
            <span className="w-10 bg-via" />
            <span className="w-6 bg-sky" />
          </div>
          <p className="mt-4 text-[12px] leading-[1.5] text-ink/45">
            25 Sep 2026 → 27 Mar 2027. Weeks 1–11 through 4 Dec 2026, then the team break. 11 home at
            Nike Centre Soweto, 11 away across Gauteng.
          </p>
        </aside>
      </div>
    </section>
  )
}
