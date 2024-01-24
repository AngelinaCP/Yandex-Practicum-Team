import { Game } from './Game'

export class UI {
  game: Game
  fontSize: number
  fontFamily: string
  fontColor: string

  constructor(game: Game) {
    this.game = game
    this.fontSize = 30
    this.fontFamily = 'Helvetica'
    this.fontColor = '#000'
  }

  draw(context: CanvasRenderingContext2D) {
    context.save()
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowColor = '#fff'
    context.shadowBlur = 0
    context.font = this.fontSize + 'px ' + this.fontFamily
    context.textAlign = 'left'
    context.fillStyle = this.fontColor

    // score
    context.fillText('Очки: ' + this.game.score, 20, 50)

    context.restore()
  }
}
