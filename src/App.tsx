import { About } from "./components/about"
import { AbazingeliMark } from "./components/abazingeli-mark"
import { Contact } from "./components/contact"
import { CrestStudy } from "./components/crest-study"
import { Family } from "./components/family"
import { Fixtures } from "./components/fixtures"
import { Hero } from "./components/hero"
import { SiteFooter } from "./components/site-footer"
import { SiteHeader } from "./components/site-header"
import { Store } from "./components/store"

export function App() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased">
      <SiteHeader />
      <Hero />
      <About />
      <CrestStudy />
      <Family />
      <AbazingeliMark />
      <Fixtures />
      <Store />
      <Contact />
      <SiteFooter />
    </div>
  )
}
