import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { kits } from "../data/content"

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
    <div className="pattern-bg relative overflow-hidden rounded-[28px] border border-white/10">
      <div className="relative grid min-h-[520px] place-items-center p-6 md:min-h-[680px] md:p-10">
        <img
          key={kit.image}
          src={kit.image}
          alt={kit.hideTitle ? "Sky shirt" : kit.title}
          className="kit-float h-auto w-full max-w-[440px] object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
        />
        {kit.hideTitle ? null : (
          <div className="absolute right-5 bottom-16 left-5 text-white">
            <div className="text-[18px] font-black tracking-[-0.03em] uppercase">{kit.title}</div>
            <div className="mt-1 text-[12px] font-bold tracking-[0.16em] uppercase text-white/70">
              {kit.colorway}
            </div>
          </div>
        )}
        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous shirt"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-black"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next shirt"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-black"
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
            className={`h-1.5 rounded-full ${itemIndex === index ? "w-8 bg-white" : "w-3 bg-white/35"}`}
          />
        ))}
      </div>
    </div>
  )
}
