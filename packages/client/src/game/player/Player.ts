import { Game } from '@/game'
import { SpriteAnimation } from '@/game/SpriteAnimation'
import player from '@/game/player/player.png'

const playerSpriteInfo = {
  frameWidth: 128,
  frameHeight: 130,
  fps: 20,
  frameLimit: 4,
  path: player,
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
    super(game.ctx, playerSpriteInfo, 1)
    this.game = game
    this.x = 50
    this.jumpHeight = 12
    this.shouldJump = false
    this.jumpCounter = 0
    this.jumpUp = true
    this.image = new Image()
    this.image.src = player
    this.width = 130
    this.height = 130
    this.size = this.width
    this.y = this.game.height - this.height - this.game.groundMargin
  }

  update(frameDelta = 16.67) {
    super.update(frameDelta)
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
