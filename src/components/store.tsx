import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { contactEmail, storePieces } from "../data/content"

const products = storePieces

const readPerView = () => {
  if (window.matchMedia("(min-width: 1280px)").matches) return 4
  if (window.matchMedia("(min-width: 768px)").matches) return 2
  return 1
}

export function Store() {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const maxIndex = Math.max(products.length - perView, 0)

  useEffect(() => {
    const handleResize = () => setPerView(readPerView())
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, 4200)
    return () => window.clearInterval(timer)
  }, [isPaused, maxIndex])

  const handlePrevious = () => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1))
  }

  const handleNext = () => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1))
  }

  const handlePause = () => setIsPaused(true)
  const handleResume = () => setIsPaused(false)

  return (
    <section id="store" className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-50">Hale Store</p>
          <h2 className="font-display mt-3 text-[12vw] leading-[0.88] font-[800] tracking-[-0.04em] uppercase md:text-[72px]">
            Coming soon
          </h2>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.6] opacity-70">
            The range is on show. It is not for sale yet. Price upon order / quote.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous pieces"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-black"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next pieces"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-black"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div
        aria-label="Hale Store pieces"
        aria-live="polite"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        className="mt-10 overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
        >
          {products.map((product) => (
            <Product key={product.image} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Product({ product }: Props) {
  return (
    <article className="flex w-full shrink-0 px-2.5 md:w-1/2 xl:w-1/4">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-black/10 bg-white">
        <div className="relative aspect-[4/5] shrink-0 bg-[#f4f4f2]">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 h-full w-full object-contain p-4"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="text-[10px] font-bold tracking-[0.18em] text-via uppercase">Coming soon</div>
          <h3 className="mt-2 min-h-[2.4em] text-[18px] leading-[1.2] font-black tracking-[-0.03em] uppercase">
            {product.title}
          </h3>
          <p className="mt-4 text-[13px] font-bold tracking-[0.08em] uppercase">Price upon order / quote</p>
          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Hale Store quote — ${product.title}`)}`}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-[12px] font-bold tracking-[0.12em] text-white uppercase"
          >
            Request a quote
          </a>
        </div>
      </div>
    </article>
  )
}

interface Props {
  product: (typeof products)[number]
}
