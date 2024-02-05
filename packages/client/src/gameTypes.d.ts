declare type GameBackgroundSkin = {
  layers: Record<string, number>
  width: number
  height: number
  groundMarginMultiplier: number
  title: string
  thumbnail: string
}

declare type GamePlayerSkin = {
  frameWidth: number
  frameHeight: number
  fps: number
  frameLimit: number
  jumpHeight: number
  scale: number
  path: string
  thumbnail: string
  title: string
}
