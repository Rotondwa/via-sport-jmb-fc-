export const images = {
  crestRed: "/images/crest-red.jpg",
  crestBlack: "/images/crest-black.jpg",
  crestBlue: "/images/crest-blue.jpg",
  kitHome: "/images/kit-home.jpg",
  kitAway: "/images/kit-away.jpg",
  kitThird: "/images/kit-third.jpg",
  diamond: "/images/diamond.jpg",
}

export const navLinks = [
  { label: "Club", href: "#club" },
  { label: "First Team", href: "#fixtures" },
  { label: "Kits", href: "#kits" },
  { label: "Fixtures", href: "#fixtures" },
  { label: "Academy", href: "#manifesto" },
  { label: "Shop", href: "#kits" },
  { label: "Contact", href: "#footer" },
]

export const manifestoPoints = [
  {
    key: "01 / HERITAGE",
    title: "Spear Bearer",
    description:
      "The crest warrior stands upright — rooted in JBM, reaching for the continent. Red for blood, sky for open skyline, black for grit.",
  },
  {
    key: "02 / GRIT",
    title: "Diamond Standard",
    description:
      "That CENTO diamond collar isn’t decoration. It’s tape from the touchline — repeated, aligned, earned. Every seam carries it.",
  },
  {
    key: "03 / COMMUNITY",
    title: "Via Sport",
    description:
      "Johannesburg-built, academy-first. Via means through — we play through pressure, through community, through generations.",
  },
]

export const kits = [
  {
    image: images.kitHome,
    title: "Via Sport JBM FC Home Kit 2025/26",
    eyebrow: "HOME • AUTHENTIC",
    label: "KIT 01 — HOME",
    colorway: "Via Red / Sky / Jet Black",
    description:
      "PUMA engineered, HALE OUTDOOR CENTO diamond neck tape, DON sleeve",
    accent: "bg-via",
  },
  {
    image: images.kitAway,
    title: "Away Shirt 25/26",
    eyebrow: "AWAY • AUTHENTIC",
    label: "KIT 02 — AWAY",
    colorway: "Sky Blue / Black / White",
    description:
      "Skyline away. Black diamond detail. Worn for big away days across Africa.",
    accent: "bg-sky",
  },
  {
    image: images.kitThird,
    title: "Third Shirt 25/26",
    eyebrow: "THIRD • AUTHENTIC",
    label: "KIT 03 — THIRD",
    colorway: "Jet Black / White / Red",
    description:
      "Night mode. White diamond tape. The streetwear cut — for after full-time.",
    accent: "bg-ink",
  },
]

export const fixtures = [
  {
    date: "SAT 17 MAY • 15:00",
    home: "VIA SPORT JBM FC",
    away: "JHB City FC",
    competition: "Gauteng Premier",
    status: "NEXT",
    ground: "Via Park",
  },
  {
    date: "WED 21 MAY • 19:30",
    home: "Soweto United",
    away: "VIA SPORT JBM FC",
    competition: "Cento Cup QF",
    status: "AWAY",
    ground: "Dobsonville",
  },
  {
    date: "SAT 24 MAY • 15:00",
    home: "VIA SPORT JBM FC",
    away: "Pretoria Stars",
    competition: "Gauteng Premier",
    status: "HOME",
    ground: "Via Park",
  },
]

export const leagueTable = [
  { position: 1, club: "Via Sport JBM FC", played: 8, goalDifference: "+12", points: 19, isUs: true },
  { position: 2, club: "JHB City FC", played: 8, goalDifference: "+7", points: 17, isUs: false },
  { position: 3, club: "Soweto United", played: 8, goalDifference: "+5", points: 16, isUs: false },
  { position: 4, club: "Pretoria Stars", played: 8, goalDifference: "+2", points: 14, isUs: false },
  { position: 5, club: "Alexandra FC", played: 8, goalDifference: "-1", points: 11, isUs: false },
]

export const footerColumns = [
  {
    title: "Club",
    links: [
      { label: "Our Story", href: "#club" },
      { label: "First Team", href: "#fixtures" },
      { label: "Academy", href: "#manifesto" },
      { label: "Via Park", href: "#fixtures" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "CENTO 25/26", href: "#kits" },
      { label: "Home Shirt", href: "#kits" },
      { label: "Away Shirt", href: "#kits" },
      { label: "Third Shirt", href: "#kits" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#footer" },
      { label: "TikTok", href: "#footer" },
      { label: "YouTube", href: "#footer" },
      { label: "Contact", href: "#footer" },
    ],
  },
]
