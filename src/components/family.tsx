import { useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react"
import { familyGroups } from "../data/content"

type PortraitMap = Record<string, string>

const tabClass = {
  active: "bg-ink text-white",
  idle: "border border-black/15 text-ink/55 hover:text-ink",
}

export function Family() {
  const [groupId, setGroupId] = useState(familyGroups[0]?.id ?? "")
  const [portraits, setPortraits] = useState<PortraitMap>({})
  const group = familyGroups.find((item) => item.id === groupId) ?? familyGroups[0]

  const handleSelectGroup = (id: string) => () => setGroupId(id)

  if (!group) return null

  return (
    <section id="family" className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <h2 className="font-display text-[12vw] leading-[0.88] font-[800] tracking-[-0.04em] uppercase md:text-[72px]">
        The Family
      </h2>
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="The Family">
        {familyGroups.map((item) => {
          const isActive = item.id === group.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`family-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`family-panel-${item.id}`}
              onClick={handleSelectGroup(item.id)}
              className={`rounded-full px-5 py-3 text-[12px] font-bold tracking-[0.16em] uppercase transition-colors ${isActive ? tabClass.active : tabClass.idle}`}
            >
              {item.title}
            </button>
          )
        })}
      </div>
      <FamilyGroup key={group.id} group={group} portraits={portraits} onPortraitsChange={setPortraits} />
    </section>
  )
}

function FamilyGroup({ group, portraits, onPortraitsChange }: Props) {
  const [activeId, setActiveId] = useState(group.members[0]?.id ?? "")
  const activeMember = group.members.find((member) => member.id === activeId) ?? group.members[0]
  const portrait = activeMember ? portraits[activeMember.id] : undefined

  useEffect(() => {
    if (group.members.length < 2) return
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const index = group.members.findIndex((member) => member.id === current)
        const next = group.members[(index + 1) % group.members.length]
        return next?.id ?? current
      })
    }, 3200)
    return () => window.clearInterval(timer)
  }, [group.members, activeId])

  const handleSelect = (id: string) => () => setActiveId(id)

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !activeMember) return
    const nextUrl = URL.createObjectURL(file)
    onPortraitsChange((current) => {
      const previous = current[activeMember.id]
      if (previous) URL.revokeObjectURL(previous)
      return { ...current, [activeMember.id]: nextUrl }
    })
  }

  if (!activeMember) return null

  return (
    <div
      id={`family-panel-${group.id}`}
      role="tabpanel"
      aria-labelledby={`family-tab-${group.id}`}
      className="mt-8 grid items-stretch gap-8 lg:grid-cols-[0.72fr_1.28fr]"
    >
      <div className="grid content-start gap-2" role="listbox" aria-label={group.title}>
        {group.members.map((member, index) => {
          const isActive = member.id === activeMember.id
          const nameClass = isActive ? "bg-ink text-white" : "text-ink/40 hover:text-ink"
          return (
            <button
              key={member.id}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={handleSelect(member.id)}
              className={`rounded-full px-4 py-3 text-left text-[22px] font-black tracking-[-0.03em] uppercase transition-colors ${nameClass}`}
            >
              {member.name} {index + 1}
            </button>
          )
        })}
      </div>
      <div className="relative grid min-h-[420px] place-items-center overflow-hidden rounded-[28px] border border-dashed border-black/20 bg-paper">
        <div key={activeMember.id} className="family-in absolute inset-0 grid place-items-center">
          {portrait ? (
            <img src={portrait} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="px-6 text-center">
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-40">Portrait</div>
              <div className="mt-2 text-[22px] font-black tracking-[-0.03em] uppercase">
                {activeMember.name} {group.members.findIndex((member) => member.id === activeMember.id) + 1}
              </div>
            </div>
          )}
        </div>
        <label className="absolute right-4 bottom-4 cursor-pointer rounded-full bg-ink px-4 py-2 text-[11px] font-bold tracking-[0.14em] text-white uppercase">
          Upload image
          <input type="file" accept="image/*" className="sr-only" onChange={handleUpload} />
        </label>
      </div>
    </div>
  )
}

interface Props {
  group: (typeof familyGroups)[number]
  portraits: PortraitMap
  onPortraitsChange: Dispatch<SetStateAction<PortraitMap>>
}
