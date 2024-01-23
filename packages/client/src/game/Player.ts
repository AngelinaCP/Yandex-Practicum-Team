import { Game } from './Game'

export class Player {
  x = 0
  y = 0
  size = 0
  color = 'black'
  jumpHeight = 12
  shouldJump = false
  jumpCounter = 0
  jumpUp = true
  ctx: CanvasRenderingContext2D
  image: CanvasImageSource
  game: Game

  constructor(
    ctx: CanvasRenderingContext2D,
    game: Game,
    size: number,
    color: string
  ) {
    this.game = game
    this.x = 50
    this.size = size
    this.y = this.game.height - this.size - this.game.groundMargin
    this.color = color
    this.jumpHeight = 12
    this.shouldJump = false
    this.jumpCounter = 0
    this.jumpUp = true
    this.ctx = ctx
    this.image = new Image()
    this.image.src = `https://i.ibb.co/HHBFJdH/char.png`
  }

  draw() {
    this.jump()
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
  }

  jump() {
    if (this.shouldJump) {
      this.jumpCounter++

      if (this.jumpCounter < 15) {
        this.y -= this.jumpHeight
      } else if (this.jumpCounter > 14 && this.jumpCounter < 19) {
        this.y += 0
      } else if (this.jumpCounter < 33) {
        this.y += this.jumpHeight
      }
      if (this.jumpCounter >= 32) {
        this.shouldJump = false
      }
    }
  }
}
