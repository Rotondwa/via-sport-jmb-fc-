const lines = ["BUILT", "For The", "Badge!"]

const spellLetters = (text: string, start: number) =>
  [...text].map((letter, index) => (
    <span
      key={`${text}-${index}`}
      className="spell-letter"
      style={{ animationDelay: `${(start + index) * 0.12}s` }}
    >
      {letter}
    </span>
  ))

export function SpellHeadline() {
  let start = 0

  return (
    <h1 className="w-full font-display text-[13vw] leading-[0.82] font-[800] tracking-[-0.045em] uppercase lg:text-[6.4vw]">
      {lines.map((line) => {
        const words = line.split(" ")
        return (
          <span key={line} className="block whitespace-nowrap">
            {words.map((word, wordIndex) => {
              const wordStart = start
              start += word.length
              const hasSpace = wordIndex < words.length - 1
              const spaceStart = start
              if (hasSpace) start += 1

              return (
                <span key={word} className="inline-block whitespace-nowrap">
                  {spellLetters(word, wordStart)}
                  {hasSpace ? (
                    <span className="spell-letter" style={{ animationDelay: `${spaceStart * 0.12}s` }}>
                      {"\u00A0"}
                    </span>
                  ) : null}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}
