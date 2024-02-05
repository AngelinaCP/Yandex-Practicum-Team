import { Game } from '@/game/Game'

export class Layer {
  game: Game
  speedModifier: number
  width: number
  image: HTMLImageElement
  height: number
  x: number
  y: number
  ratio: number
  scaledHeight: number
  scaledWidth: number

  constructor(
    game: Game,
    width: number,
    height: number,
    speedModifier: number,
    image: HTMLImageElement
  ) {
    this.game = game
    this.width = width
    this.height = height
    this.image = image
    this.speedModifier = speedModifier
    this.x = 0
    this.y = 0
    this.ratio = this.width / this.height
    this.scaledHeight = this.game.height
    this.scaledWidth = this.scaledHeight * this.ratio
  }

  update() {
    if (this.x < -this.scaledWidth + this.game.gameSpeed * this.speedModifier) {
      this.x = 0
    } else {
      this.x -= this.game.gameSpeed * this.speedModifier
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.scaledWidth,
      this.scaledHeight
    )
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x + this.scaledWidth - this.game.gameSpeed * this.speedModifier,
      this.y,
      this.scaledWidth,
      this.scaledHeight
    )
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x + this.scaledWidth * 2 - this.game.gameSpeed * this.speedModifier,
      this.y,
      this.scaledWidth,
      this.scaledHeight
    )
  }
}
