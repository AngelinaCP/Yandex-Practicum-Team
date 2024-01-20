export class Block {
  x = 0
  y = 0
  size = 0
  color = 'red'
  slideSpeed = 5
  ctx: CanvasRenderingContext2D

  constructor(size: number, speed: number, ctx: CanvasRenderingContext2D) {
    this.x = ctx?.canvas.width + size
    this.y = 400 - size
    this.size = size
    this.color = 'green'
    this.slideSpeed = speed
    this.ctx = ctx
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }

  slide() {
    this.draw()
    this.x -= this.slideSpeed
  }
}
