import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { kits } from "../data/content"

const patternBand =
  "h-3.5 bg-[#050505] bg-[url('/images/black-pattern.png')] bg-[length:14px] bg-repeat"

export function KitCarousel() {
  const [index, setIndex] = useState(0)
  const kit = kits[index]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % kits.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  const handlePrevious = () => {
    setIndex((current) => (current - 1 + kits.length) % kits.length)
  }

  const handleNext = () => {
    setIndex((current) => (current + 1) % kits.length)
  }

  const handleSelect = (nextIndex: number) => () => setIndex(nextIndex)

  if (!kit) return null

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white">
      <div aria-hidden="true" className={patternBand} />
      <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-8 md:min-h-[560px] md:px-8">
        <img
          key={kit.image}
          src={kit.image}
          alt={kit.title}
          className="kit-float h-auto max-h-[380px] w-full max-w-[380px] object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)] md:max-h-[460px] md:max-w-[420px]"
        />
        <div className="mt-5 w-full max-w-[420px] pr-24 text-ink">
          <div className="text-[18px] font-black tracking-[-0.03em]">
            Via Sport JBM FC Home Kit 2025/26
          </div>
          <div className="mt-1 text-[12px] font-bold tracking-[0.16em] text-ink/60">KIT 01 — HOME</div>
          <div className="mt-2 text-[13px] font-bold tracking-[-0.01em]">Via Red / Sky / Jet Black</div>
          <p className="mt-1 text-[12px] leading-[1.45] font-medium text-ink/60">
            HALE OUTDOOR CENTO diamond neck tape, DON sleeve
          </p>
        </div>
        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous shirt"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-black"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next shirt"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-black"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-4">
        {kits.map((item, itemIndex) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={handleSelect(itemIndex)}
            className={`h-1.5 rounded-full ${itemIndex === index ? "w-8 bg-ink" : "w-3 bg-ink/25"}`}
          />
        ))}
      </div>
      <div aria-hidden="true" className={patternBand} />
    </div>
  )
}
