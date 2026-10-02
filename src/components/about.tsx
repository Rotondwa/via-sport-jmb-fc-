import { communities } from "../data/content"

export function About() {
  return (
    <section id="about" className="border-y border-black/10 bg-white">
      <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-[12vw] leading-[0.88] font-[800] tracking-[-0.04em] uppercase md:text-[72px]">
          About Via Sport
        </h2>
        <div className="mt-8 max-w-[40ch] space-y-3 text-[22px] leading-[1.35] font-semibold tracking-[-0.03em] md:text-[28px]">
          <p>The diamond comes from the formation.</p>
          <p>The formation comes from the way we play.</p>
          <p>Heritage in the roots. Grit in the game. Streetwear in the DNA.</p>
        </div>
        <h3 className="font-display mt-14 text-[8vw] leading-[0.9] font-[800] tracking-[-0.03em] uppercase md:text-[42px]">
          A Place of Healing
        </h3>
        <div className="mt-5 max-w-[62ch] space-y-4 text-[17px] leading-[1.65]">
          <p>
            Via Sport exists to give young players from South African townships a platform to step
            up to professional football.
          </p>
          <p>
            The partners give back to the communities of Alexandra, Katlehong, Thokoza, Vosloorus,
            Soweto and Thembisa, and want the club to be a place of healing for them.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((place) => (
            <li
              key={place}
              className="border-t border-black/10 py-4 text-[16px] font-black tracking-[0.08em] uppercase"
            >
              {place}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
