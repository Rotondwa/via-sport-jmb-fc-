import { images } from "../data/content"

export function DiamondStrip({ className, size, filter }: Props) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${images.diamond})`,
        backgroundSize: size,
        backgroundRepeat: "repeat",
        filter,
      }}
    />
  )
}

interface Props {
  className: string
  size: string
  filter?: string
}
