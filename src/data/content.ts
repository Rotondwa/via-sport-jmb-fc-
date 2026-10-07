export const images = {
  crestBlack: "/images/crest-black.jpg",
  crestRed: "/images/crest-red.jpg",
  pattern: "/images/black-pattern.png",
  kitSky: "/images/kit-sky.jpg",
  kitPink: "/images/kit-pink.jpg",
  kitBlack: "/images/kit-black.jpg",
  kitRed: "/images/kit-red.jpg",
  feature: "/images/kit-pink.jpg",
}

export const contactEmail = "club@viasportjbmfc.co.za"

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Family", href: "#family" },
  { label: "Abazingeli", href: "#abazingeli" },
  { label: "Fixtures", href: "#fixtures" },
  { label: "Store", href: "#store" },
  { label: "Contact", href: "#contact" },
]

export const kits = [
  {
    image: images.kitSky,
    title: "Sky shirt",
    colorway: "Sky",
    hideTitle: true,
  },
  {
    image: images.kitPink,
    title: "Pink shirt",
    colorway: "Pink",
    hideTitle: false,
  },
  {
    image: images.kitBlack,
    title: "Black shirt",
    colorway: "JBM Black",
    hideTitle: false,
  },
  {
    image: images.kitRed,
    title: "Red shirt",
    colorway: "Via Red",
    hideTitle: false,
  },
]

export const storePieces = [
  { image: "/images/store-hoodie-black.jpg", title: "Black hoodie" },
  { image: "/images/store-tee-white.jpg", title: "White spear tee" },
  { image: "/images/store-tee-black.jpg", title: "Black spear tee" },
  { image: "/images/store-jacket-white.jpg", title: "White diamond jacket" },
  { image: "/images/store-bomber-black.jpg", title: "Black bomber" },
  { image: "/images/store-overalls.jpg", title: "Abazingeli overalls" },
  { image: "/images/store-jacket-chairman.jpg", title: "Chairman jacket" },
  { image: "/images/store-cap-red.jpg", title: "Abazingeli cap — Via Red" },
  { image: "/images/store-cap-sky.jpg", title: "Abazingeli cap — Sky" },
]

export const communities = [
  "Alexandra",
  "Katlehong",
  "Thokoza",
  "Vosloorus",
  "Soweto",
  "Thembisa",
]

export const familyGroups = [
  {
    id: "board",
    title: "The Board",
    members: [
      { id: "board-1", name: "Board member" },
      { id: "board-2", name: "Board member" },
      { id: "board-3", name: "Board member" },
    ],
  },
  {
    id: "management",
    title: "Management",
    members: [
      { id: "management-1", name: "Management" },
      { id: "management-2", name: "Management" },
      { id: "management-3", name: "Management" },
    ],
  },
  {
    id: "technical",
    title: "Technical Team",
    members: [
      { id: "technical-1", name: "Technical" },
      { id: "technical-2", name: "Technical" },
      { id: "technical-3", name: "Technical" },
    ],
  },
]

export const seasonGlance = [
  { value: "22", label: "Matchdays" },
  { value: "Only JBM", label: "Club focus" },
  { value: "22", label: "Total matches" },
  { value: "Sep 2026 – Mar 2027", label: "Season" },
  { value: "11 Home", label: "Nike Centre Soweto" },
  { value: "11 Away", label: "Across Gauteng" },
  { value: "Stream A", label: "ABC Motsepe League Gauteng" },
  { value: "25 Sep 2026 → 27 Mar 2027", label: "Window" },
]

type FixtureSide = "Home" | "Away"

export const fixturePhases: {
  id: string
  title: string
  detail: string
  summary: string
  note: string
  matches: {
    week: string
    date: string
    time: string
    home: string
    away: string
    venue: string
    side: FixtureSide
  }[]
}[] = [
  {
    id: "phase-1",
    title: "Phase 1 — Sep–Oct 2026",
    detail: "Weeks 1–6 — Only JBM fixtures",
    summary: "6 Matchdays • 3 Home at Nike Centre • 3 Away",
    note: "Season opening — Dust to Glory",
    matches: [
      {
        week: "W1",
        date: "Fri 25/09/2026",
        time: "14:00",
        home: "Via Sport JBM FC",
        away: "Boipatong FC",
        venue: "Nike Centre",
        side: "Home",
      },
      {
        week: "W2",
        date: "Sat 03/10/2026",
        time: "15:00",
        home: "Ben 10 FC",
        away: "Via Sport JBM FC",
        venue: "George Thabe Stadium",
        side: "Away",
      },
      {
        week: "W3",
        date: "Fri 09/10/2026",
        time: "14:00",
        home: "Via Sport JBM FC",
        away: "Dinoko City FC",
        venue: "Nike Centre",
        side: "Home",
      },
      {
        week: "W4",
        date: "Sat 17/10/2026",
        time: "15:00",
        home: "Tembisa Hollywood Thunder",
        away: "Via Sport JBM FC",
        venue: "Mehlareng Stadium",
        side: "Away",
      },
      {
        week: "W5",
        date: "Fri 23/10/2026",
        time: "14:00",
        home: "Via Sport JBM FC",
        away: "Tshwane South College FC",
        venue: "Nike Centre",
        side: "Home",
      },
      {
        week: "W6",
        date: "Sat 31/10/2026",
        time: "15:00",
        home: "Rrr Rams Football Club",
        away: "Via Sport JBM FC",
        venue: "Davidsonville Stadium",
        side: "Away",
      },
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2 — Nov–Dec 2026",
    detail: "Weeks 7–11 — Before the break",
    summary: "5 Matchdays • 3 Home at Nike Centre • 2 Away",
    note: "Last push before the break",
    matches: [
      {
        week: "W7",
        date: "Fri 06/11/2026",
        time: "14:00",
        home: "Via Sport JBM FC",
        away: "Free Agents FC",
        venue: "Nike Centre",
        side: "Home",
      },
      {
        week: "W8",
        date: "Sat 14/11/2026",
        time: "15:00",
        home: "Univ. of Johannesburg",
        away: "Via Sport JBM FC",
        venue: "UJ Auckland Park",
        side: "Away",
      },
      {
        week: "W9",
        date: "Fri 20/11/2026",
        time: "14:00",
        home: "Via Sport JBM FC",
        away: "La Masia FC",
        venue: "Nike Centre",
        side: "Home",
      },
      {
        week: "W10",
        date: "Sat 28/11/2026",
        time: "15:00",
        home: "Lesco FC",
        away: "Via Sport JBM FC",
        venue: "Lenasia Stadium",
        side: "Away",
      },
      {
        week: "W11",
        date: "Fri 04/12/2026",
        time: "14:00",
        home: "Via Sport JBM FC",
        away: "Ssu M-17 FC",
        venue: "Nike Centre",
        side: "Home",
      },
    ],
  },
]
