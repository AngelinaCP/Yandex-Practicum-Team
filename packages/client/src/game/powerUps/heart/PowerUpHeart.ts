import { Game } from '@/game/Game'
import { SpriteAnimation } from '@/game/SpriteAnimation'

const heartSpriteInfo = {
  frameWidth: 64,
  frameHeight: 64,
  fps: 20,
  frameLimit: 7,
  path: '/game_powerups/heart.png',
}

/* y: [yBase * h; (yBase + yRand) * h] */
const yBase = 0.2
const yRand = 0.1
const amplitudeMuliplier = 2

export class PowerUpHeart extends SpriteAnimation {
  x: number
  y: number
  speedX: number
  speedY: number
  markedToDelete: boolean
  game: Game
  angle: number
  playArea: number

  constructor(game: Game, scale = 1) {
    super(game.ctx, heartSpriteInfo, scale)
    this.game = game
    this.x = game.width
    this.markedToDelete = false
    this.speedX = this.game.gameSpeed
    this.speedY = 0
    this.playArea = this.game.height - this.height - this.game.groundMargin
    this.y = Math.random() * (this.playArea * yRand) + this.playArea * yBase
    this.angle = 0
  }

  update(frameDelta = 16.67) {
    super.update(frameDelta)
    this.angle += 0.1
    this.x -= this.speedX
    this.y += Math.sin(this.angle) * amplitudeMuliplier
    if (this.y < 0) this.y = 0
    if (this.y > this.playArea) this.y = this.playArea
  }

  draw() {
    super.draw(this.x, this.y)
  }
}
