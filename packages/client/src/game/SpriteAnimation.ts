type SpriteInfo = {
  frameWidth: number
  frameHeight: number
  fps: number
  frameLimit: number
  path: string
}

export class SpriteAnimation {
  context: CanvasRenderingContext2D
  frameWidth: number
  frameHeight: number
  fps: number
  frameInterval: number
  frameX: number
  frameCounter: number
  image: HTMLImageElement
  frameLimit: number
  width: number
  height: number
  size: number

  constructor(
    context: CanvasRenderingContext2D,
    { frameWidth, frameHeight, fps, path, frameLimit }: SpriteInfo,
    scale = 1
  ) {
    this.context = context
    this.frameWidth = frameWidth
    this.frameHeight = frameHeight
    this.frameX = 0
    this.fps = fps
    this.frameInterval = 1000 / this.fps
    this.frameCounter = 0
    this.image = new Image()
    this.image.src = path
    this.frameLimit = frameLimit
    this.width = frameWidth * scale
    this.height = frameHeight * scale
    this.size = this.width
  }

  update(frameDelta = 16.67) {
    if (this.frameCounter < this.frameInterval) {
      this.frameCounter += frameDelta
    } else {
      if (this.frameX < this.frameLimit) {
        this.frameX += 1
      } else {
        this.frameX = 0
      }
      this.frameCounter = 0
    }
  }

  draw(x: number, y: number) {
    this.context.drawImage(
      this.image,
      this.frameX * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      x,
      y,
      this.width,
      this.height
    )
  }
}
