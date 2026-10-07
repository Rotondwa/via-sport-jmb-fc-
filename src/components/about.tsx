import { communities } from "../data/content"

const pillars = [
  {
    index: "01",
    label: "Heritage",
    title: "In the roots",
    body: "The diamond comes from the formation. The formation comes from the way we play.",
  },
  {
    index: "02",
    label: "Grit",
    title: "In the game",
    body: "Heritage in the roots. Grit in the game. Streetwear in the DNA.",
  },
  {
    index: "03",
    label: "Community",
    title: "A place of healing",
    body: "Via Sport exists to give young players from South African townships a platform to step up to professional football. The partners give back to the communities, and want the club to be a place of healing for them.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-black text-white">
      <div
        aria-hidden="true"
        className="h-8 bg-[#050505] bg-[url('/images/black-pattern.png')] bg-[length:32px] bg-repeat"
      />
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.22em] text-white/55 uppercase">
          About / Via Sport
        </p>
        <h2 className="font-display mt-6 max-w-[12ch] text-[14vw] leading-[0.84] font-[800] tracking-[-0.045em] uppercase md:text-[88px]">
          The diamond comes from the formation.
        </h2>
        <p className="mt-8 max-w-[36ch] text-[16px] leading-[1.55] text-white/75 md:text-[18px]">
          The formation comes from the way we play. Heritage in the roots. Grit in the game.
          Streetwear in the DNA.
        </p>
        <div className="mt-16 grid border-t border-white/15 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.index}
              className="border-b border-white/15 py-8 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/45 uppercase">
                {pillar.index} / {pillar.label}
              </p>
              <h3 className="mt-5 text-[22px] font-black tracking-[-0.03em] uppercase md:text-[26px]">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-[34ch] text-[15px] leading-[1.6] text-white/70">{pillar.body}</p>
            </article>
          ))}
        </div>
        <ul className="mt-4 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((place) => (
            <li
              key={place}
              className="border-b border-white/15 py-4 text-[13px] font-bold tracking-[0.16em] uppercase"
            >
              {place}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
