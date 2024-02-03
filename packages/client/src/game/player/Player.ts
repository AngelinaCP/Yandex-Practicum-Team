import { Game } from '@/game'
import { SpriteAnimation } from '@/game/SpriteAnimation'
import player from './player.png'

const playerSpriteInfo = {
  frameWidth: 128,
  frameHeight: 130,
  fps: 20,
  frameLimit: 4,
  path: player,
  frameDelta: 16.67,
  width: 130,
  height: 130,
  jumpHeight: 12,
}

export class Player extends SpriteAnimation {
  x: number
  y: number
  size: number
  jumpHeight: number
  shouldJump: boolean
  jumpCounter: number
  jumpUp: boolean
  game: Game
  image: HTMLImageElement
  width: number
  height: number

  constructor(ctx: CanvasRenderingContext2D, game: Game) {
    super(game.ctx, playerSpriteInfo, 70 / 400)
    this.game = game
    this.x = 50
    this.jumpHeight = playerSpriteInfo.jumpHeight
    this.shouldJump = false
    this.jumpCounter = 0
    this.jumpUp = true
    this.image = new Image()
    this.image.src = player
    this.width = playerSpriteInfo.width
    this.height = playerSpriteInfo.height
    this.size = this.width
    this.y = this.game.height - this.height - this.game.groundMargin
  }

  update() {
    super.update(playerSpriteInfo.frameDelta)
  }

  draw() {
    super.draw(this.x, this.y)
    this.update()
    this.jump()
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
