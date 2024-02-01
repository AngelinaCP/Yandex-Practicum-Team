import { Game } from '@/game/Game'
import { SpriteAnimation } from '@/game/SpriteAnimation'
import heart from './heart.png'

export class PowerUpHeart extends SpriteAnimation {
  x: number
  y: number
  speedX: number
  speedY: number
  width: number
  height: number
  size: number
  markedToDelete: boolean
  type: string
  game: Game
  angle: number

  constructor(game: Game, scale = 1) {
    super(game.ctx, 64, 64, 20, 7, heart, scale)
    this.game = game
    this.x = game.width
    this.markedToDelete = false
    this.type = 'life'
    this.speedX = this.game.speed
    this.speedY = 0
    this.width = 64
    this.height = 64
    this.size = 64
    const playArea = this.game.height - this.height - this.game.groundMargin
    this.y = Math.random() * (playArea * 0.5) + playArea * 0.25
    this.angle = 0
  }

  update(frameDelta = 16.67) {
    super.update(frameDelta)
    this.angle += 0.1
    this.x -= this.speedX
    this.y += Math.sin(this.angle) * 3
  }

  draw() {
    super.draw(this.x, this.y)
  }
}
