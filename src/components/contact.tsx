import { contactEmail } from "../data/content"

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">Contact</p>
        <h2 className="font-display mt-3 text-[14vw] leading-[0.86] font-[800] tracking-[-0.045em] uppercase md:text-[88px]">
          Email
        </h2>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-8 inline-flex max-w-full text-[22px] font-black tracking-[-0.03em] break-all underline decoration-white/25 underline-offset-8 md:text-[40px]"
        >
          {contactEmail}
        </a>
      </div>
    </section>
  )
}
