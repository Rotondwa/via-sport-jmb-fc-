import { contactEmail } from "../data/content"

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-8 lg:px-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.22em] text-white/50 uppercase">Contact</p>
          <h2 className="font-display mt-1.5 text-[28px] leading-none font-[800] tracking-[-0.045em] uppercase md:text-[36px]">
            Email
          </h2>
        </div>
        <a
          href={`mailto:${contactEmail}`}
          className="max-w-full text-[16px] font-bold tracking-[-0.02em] break-all underline decoration-white/25 underline-offset-4 md:text-[18px]"
        >
          {contactEmail}
        </a>
      </div>
    </section>
  )
}
