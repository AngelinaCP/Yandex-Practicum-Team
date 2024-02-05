import { Game } from '@/game'
import { SpriteAnimation } from '@/game/SpriteAnimation'

type PlayerInfo = Omit<GamePlayerSkin, 'title' | 'thumbnail'>

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

  constructor(
    ctx: CanvasRenderingContext2D,
    game: Game,
    playerSpriteInfo: PlayerInfo
  ) {
    super(game.ctx, playerSpriteInfo, 70 / 400)
    this.game = game
    this.x = 50
    this.jumpHeight = playerSpriteInfo.jumpHeight
    this.shouldJump = false
    this.jumpCounter = 0
    this.jumpUp = true
    this.image = new Image()
    this.image.src = playerSpriteInfo.path
    this.width = this.frameWidth * playerSpriteInfo.scale
    this.height = this.frameHeight * playerSpriteInfo.scale
    this.size = this.width
    this.y = this.game.height - this.height - this.game.groundMargin
  }

  update() {
    super.update()
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
