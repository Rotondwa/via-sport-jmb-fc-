import { ArrowUpRight } from "lucide-react"
import { fixtures, leagueTable } from "../data/content"
import { DiamondStrip } from "./diamond-strip"

const sideClass = {
  us: "text-white",
  opponent: "opacity-60",
}

const rowClass = {
  us: "font-black bg-paper -mx-2 px-2 rounded-full",
  other: "opacity-80",
}

export function Fixtures() {
  return (
    <section id="fixtures" className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-20 lg:px-10">
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-ink p-6 text-white md:p-8">
          <DiamondStrip
            className="absolute top-0 right-0 left-0 h-[18px] opacity-40"
            size="200px"
            filter="invert(1)"
          />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-60">
                Up Next — First Team
              </div>
              <div className="mt-2 text-[28px] leading-[0.9] font-black tracking-[-0.02em] uppercase md:text-[34px]">
                Fixtures / Results
              </div>
            </div>
            <div className="hidden items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase opacity-60 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-via" />
              Gauteng Premier • 25/26
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            {fixtures.map((fixture) => (
              <div
                key={`${fixture.date}-${fixture.home}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 transition-colors hover:bg-white/[0.09] md:px-5"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] uppercase opacity-60">
                    <span>{fixture.date}</span>
                    <span className="h-3 w-px bg-white/15" />
                    <span>{fixture.competition}</span>
                    <span className="ml-2 hidden rounded-full bg-white px-2 py-0.5 text-[9px] tracking-[0.12em] text-black sm:inline-flex">
                      {fixture.status}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[15px] font-bold tracking-[-0.01em] md:text-[16px]">
                    <span className={fixture.home.includes("VIA") ? sideClass.us : sideClass.opponent}>
                      {fixture.home}
                    </span>
                    <span className="text-[12px] opacity-30">vs</span>
                    <span className={fixture.away.includes("VIA") ? sideClass.us : sideClass.opponent}>
                      {fixture.away}
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] opacity-50">{fixture.ground}</div>
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition-colors group-hover:bg-via group-hover:text-white">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.14em] uppercase opacity-60">
            <span className="h-px flex-1 bg-white/15" />
            Full fixture list available in app — images to follow
          </div>
        </div>
        <div className="rounded-[24px] border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-baseline justify-between">
            <div className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-60">
              League Table — Teaser
            </div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase">GP • 25/26</div>
          </div>
          <div className="mt-6 border-t border-black/10">
            {leagueTable.map((row) => (
              <div
                key={row.position}
                className={`grid grid-cols-[28px_1fr_36px_36px_36px] items-center border-b border-black/10 py-3 text-[13px] ${row.isUs ? rowClass.us : rowClass.other}`}
              >
                <span className="font-bold">{row.position}</span>
                <span className="truncate">{row.club}</span>
                <span className="text-center opacity-60">{row.played}</span>
                <span className="text-center opacity-60">{row.goalDifference}</span>
                <span className="text-center">{row.points}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            <div className="h-[6px] flex-1 rounded-full bg-black" />
            <div className="h-[6px] w-6 rounded-full bg-via" />
            <div className="h-[6px] w-6 rounded-full bg-sky" />
          </div>
          <div className="mt-4 text-[11px] leading-[1.5] opacity-60">
            Table shows editorial preview. Real data will plug in when feed is connected. No
            persistence.
          </div>
        </div>
      </div>
    </section>
  )
}
