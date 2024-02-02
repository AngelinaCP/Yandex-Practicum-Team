import { SpriteAnimation } from '@/game/SpriteAnimation'
import { Game } from '@/game/Game'
import obstacle from './obstacle.png'

const blockSpriteInfo = {
  frameWidth: 400,
  frameHeight: 400,
  fps: 20,
  frameLimit: 4,
  path: obstacle,
}

export class Obstacle extends SpriteAnimation {
  x: number
  y: number
  size: number
  slideSpeed: number
  ctx: CanvasRenderingContext2D
  markedToDelete: boolean
  game: Game

  constructor(speed: number, ctx: CanvasRenderingContext2D, game: Game) {
    super(ctx, blockSpriteInfo, 70 / 400)

    this.width = 70
    this.x = ctx?.canvas.width + this.width
    this.size = this.width
    this.height = 70
    this.game = game
    this.y = this.game.height - this.height - this.game.groundMargin
    this.slideSpeed = speed
    this.ctx = ctx
    this.markedToDelete = false
  }

  update(frameDelta = 16.67) {
    super.update(frameDelta)
  }

  slide() {
    super.draw(this.x, this.y)
    this.update()
    this.x -= this.slideSpeed
  }
}
