import { contactEmail, images, navLinks } from "../data/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 py-8 md:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <img
            src={images.crestBlack}
            alt=""
            className="h-10 w-10 rounded-full bg-white object-contain p-1"
          />
          <div className="text-[13px] font-black tracking-[-0.02em]">VIA SPORT JBM FC</div>
        </div>
        <div className="flex flex-wrap gap-4 text-[11px] font-bold tracking-[0.14em] uppercase text-white/60">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <a href={`mailto:${contactEmail}`} className="text-[13px] font-bold underline underline-offset-4">
          {contactEmail}
        </a>
      </div>
    </footer>
  )
}
