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

export const fixturePhases = [
  {
    id: "phase-1",
    title: "Phase 1 — Sep–Oct 2026",
    detail: "Weeks 1–6",
    summary: "6 Matchdays • 3 Home • 3 Away",
    tone: "dust",
    weeks: ["W1", "W2", "W3", "W4", "W5", "W6"],
  },
  {
    id: "phase-2",
    title: "Phase 2 — Nov–Dec 2026",
    detail: "Weeks 7–11 • Before Break",
    summary: "5 Matchdays • 3 Home • 2 Away",
    tone: "paper",
    weeks: ["W7", "W8", "W9", "W10", "W11"],
  },
]
