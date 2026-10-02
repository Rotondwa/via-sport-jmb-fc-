const built = "BUILT!"

export function SpellHeadline() {
  return (
    <h1 className="font-display text-[16vw] leading-[0.82] font-[800] tracking-[-0.045em] uppercase lg:text-[7.2vw]">
      <span className="block">
        {[...built].map((letter, index) => (
          <span key={`${letter}-${index}`} className="spell-letter" style={{ animationDelay: `${index * 0.12}s` }}>
            {letter}
          </span>
        ))}
      </span>
      <span className="block">For The</span>
      <span className="block">Badge.</span>
    </h1>
  )
}
