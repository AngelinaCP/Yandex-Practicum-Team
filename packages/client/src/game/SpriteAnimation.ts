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
  scale: number

  constructor(
    context: CanvasRenderingContext2D,
    frameWidth: number,
    frameHeight: number,
    fps: number,
    frameLimit: number,
    image: string,
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
    this.image.src = image
    this.frameLimit = frameLimit
    this.scale = scale
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
      this.frameWidth * this.scale,
      this.frameHeight * this.scale
    )
  }
}
