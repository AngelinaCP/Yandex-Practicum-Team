import { Game } from './Game'

export class UI {
  game: Game
  fontSize: number
  fontFamily: string
  fontColor: string

  constructor(game: Game) {
    this.game = game
    this.fontSize = 30
    this.fontFamily = 'horror'
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
    let dy = 50
    context.fillText('Очки: ' + this.game.score, 20, dy)
    context.fillText('Жизни: ' + this.game.lives, 20, (dy *= 2))
    context.restore()
  }

  gameEndMessage(context: CanvasRenderingContext2D) {
    context.save()
    context.fillStyle = `rgba(0,0,0,.7)`
    context.fillRect(0, 0, this.game.width, this.game.height)
    context.textAlign = 'center'
    context.font = this.fontSize * 2 + 'px ' + this.fontFamily
    context.fillStyle = 'white'
    context.fillText(
      'Game end',
      this.game.width / 2 - 2,
      this.game.height / 2 - 2
    )
    context.fillStyle = 'black'
    context.fillText('Game end', this.game.width / 2, this.game.height / 2)
    context.restore()
  }
}
