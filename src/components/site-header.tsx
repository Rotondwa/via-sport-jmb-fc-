import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { images, navLinks } from "../data/content"

const headerStyles = {
  scrolled: "bg-white/90 backdrop-blur-xl border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
  resting: "bg-paper border-black/10",
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleToggleMenu = () => setIsMenuOpen((open) => !open)
  const handleCloseMenu = () => setIsMenuOpen(false)
  const headerClass = isScrolled ? headerStyles.scrolled : headerStyles.resting
  const MenuIcon = isMenuOpen ? X : Menu

  return (
    <header className={`sticky top-0 z-40 border-b transition-all ${headerClass}`}>
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-[80px] md:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={images.crestBlack}
            alt="Via Sport JBM black crest"
            className="h-[42px] w-[42px] rounded-full bg-white object-contain p-[3px]"
          />
          <div className="hidden leading-[0.9] sm:block">
            <div className="text-[16px] font-black tracking-[-0.02em]">VIA SPORT JBM</div>
            <div className="mt-[2px] text-[10px] font-semibold tracking-[0.28em] uppercase opacity-60">
              Football Club • JHB
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-semibold tracking-[0.14em] uppercase opacity-70 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-ink px-5 text-[12px] font-bold tracking-[0.12em] text-white uppercase md:inline-flex"
          >
            Email the club
          </a>
          <button
            type="button"
            onClick={handleToggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white lg:hidden"
          >
            <MenuIcon size={16} />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-black/10 bg-white px-5 py-6 lg:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleCloseMenu}
                className="text-[22px] font-black tracking-[-0.02em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
