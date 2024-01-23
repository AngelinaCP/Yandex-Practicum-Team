import { Game } from './Game'

export class Block {
  game: Game
  x = 0
  y = 0
  size = 0
  color = 'red'
  slideSpeed = 5
  ctx: CanvasRenderingContext2D

  constructor(size: number, game: Game) {
    this.game = game
    this.ctx = this.game.ctx
    this.x = this.game.width + size
    this.y = this.game.height - this.game.groundMargin - size
    this.size = size
    this.color = 'green'
    this.slideSpeed = this.game.enemySpeed
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
