import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState, type FocusEvent, type TransitionEvent } from "react"
import { flushSync } from "react-dom"
import { contactEmail, storePieces } from "../data/content"

const products = storePieces

const readPerView = () => {
  if (window.matchMedia("(min-width: 1280px)").matches) return 4
  if (window.matchMedia("(min-width: 768px)").matches) return 2
  return 1
}

const trackMotion = {
  moving: "flex transition-transform duration-700 ease-in-out",
  still: "flex",
}

export function Store() {
  const [perView, setPerView] = useState(readPerView)
  const [trackIndex, setTrackIndex] = useState(readPerView)
  const [isPaused, setIsPaused] = useState(false)
  const [isMoving, setIsMoving] = useState(true)
  const trackRef = useRef<HTMLDivElement>(null)
  const trackIndexRef = useRef(trackIndex)
  const canLoop = products.length > perView
  const origin = canLoop ? perView : 0
  const slides = canLoop
    ? [...products.slice(-perView), ...products, ...products.slice(0, perView)]
    : products

  useEffect(() => {
    const handleResize = () => setPerView(readPerView())
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setIsMoving(false)
    setTrackIndex(origin)
    const frame = window.requestAnimationFrame(() => setIsMoving(true))
    return () => window.cancelAnimationFrame(frame)
  }, [origin])

  useEffect(() => {
    if (isPaused || !canLoop) return
    const timer = window.setInterval(() => {
      setIsMoving(true)
      setTrackIndex((current) => current + 1)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [isPaused, canLoop])

  const handlePrevious = () => {
    if (!canLoop) return
    setIsMoving(true)
    setTrackIndex((current) => current - 1)
  }

  const handleNext = () => {
    if (!canLoop) return
    setIsMoving(true)
    setTrackIndex((current) => current + 1)
  }

  trackIndexRef.current = trackIndex

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return
    if (event.propertyName !== "transform") return
    if (!canLoop) return

    let next = trackIndexRef.current
    while (next >= origin + products.length) next -= products.length
    while (next < origin) next += products.length
    if (next === trackIndexRef.current) return

    flushSync(() => {
      setIsMoving(false)
      setTrackIndex(next)
    })
    trackRef.current?.getBoundingClientRect()
    setIsMoving(true)
  }

  const handlePause = () => setIsPaused(true)

  const handleResume = () => setIsPaused(false)

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return
    setIsPaused(false)
  }

  return (
    <section id="store" className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-50">Via Store</p>
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
        aria-label="Via Store pieces"
        aria-live="off"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleBlur}
        className="mt-10 overflow-hidden"
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={isMoving ? trackMotion.moving : trackMotion.still}
          style={{ transform: `translateX(${(-trackIndex * 100) / perView}%)` }}
        >
          {slides.map((product, slideIndex) => (
            <Product
              key={`${product.image}-${slideIndex}`}
              product={product}
              isClone={canLoop && (slideIndex < origin || slideIndex >= origin + products.length)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Product({ product, isClone }: Props) {
  return (
    <article
      aria-hidden={isClone || undefined}
      className="flex w-full shrink-0 px-2.5 md:w-1/2 xl:w-1/4"
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-black/10 bg-white">
        <div className="relative aspect-[4/5] shrink-0 bg-[#f4f4f2]">
          <img
            src={product.image}
            alt={isClone ? "" : product.title}
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
            href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Via Store quote — ${product.title}`)}`}
            tabIndex={isClone ? -1 : 0}
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
  isClone: boolean
}
