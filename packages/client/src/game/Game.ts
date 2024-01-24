import { Player } from '@/game/Player'
import { Block } from '@/game/Block'
// import { BackgroundForest as Background} from './backgrounds/BackgroundForest'
import { BackgroundCity as Background } from './backgrounds/BackgroundCity'
import { UI } from './UI'

export class Game {
  player: Player
  score: number
  scoreIncrement: number
  arrayBlocks: Block[]
  enemySpeed: number
  canScore: boolean
  presetTime: number
  ctx: CanvasRenderingContext2D
  speed: number
  background_: Background
  height: number
  width: number
  groundMargin: number
  ui: UI

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this.arrayBlocks = []
    this.score = 0
    this.scoreIncrement = 0
    this.enemySpeed = 5
    this.canScore = true
    this.presetTime = 1000
    this.ctx = context
    this.speed = 3
    this.background_ = new Background(this)
    this.ui = new UI(this)
    this.width = width
    this.height = height
    this.groundMargin = 0
    this.player = new Player(context, this, 50, 'black')
  }

  addListener() {
    addEventListener('keydown', e => {
      if (e.code === 'Space') {
        if (!this.player.shouldJump) {
          this.player.jumpCounter = 0
          this.player.shouldJump = true
          this.canScore = true
        }
      }
    })
  }

  drawBackgroundLine() {
    this.ctx.beginPath()
    this.ctx.moveTo(0, 400)
    this.ctx.lineTo(600, 400)
    this.ctx.lineWidth = 1.9
    this.ctx.strokeStyle = 'black'
    this.ctx.stroke()
  }

  drawScore() {
    this.ctx.font = '80px Arial'
    this.ctx.fillStyle = 'black'
    const scoreString = this.score.toString()
    const xOffset = (scoreString.length - 1) * 20
    this.ctx.fillText(scoreString, 280 - xOffset, 100)
  }

  //Returns true if past player past block
  isPastBlock(block: Block) {
    return (
      this.player.x + this.player.size / 2 > block.x + block.size / 4 &&
      this.player.x + this.player.size / 2 < block.x + (block.size / 4) * 3
    )
  }

  generateBlocks() {
    const timeDelay = this.randomInterval(this.presetTime)
    this.arrayBlocks?.push(new Block(50, this.enemySpeed, this.ctx))

    setTimeout(() => this.generateBlocks(), timeDelay)
  }

  shouldIncreaseSpeed() {
    //Check to see if game speed should be increased
    if (this.scoreIncrement + 10 === this.score) {
      this.scoreIncrement = this.score
      this.enemySpeed++
      this.presetTime >= 100
        ? (this.presetTime -= 100)
        : (this.presetTime = this.presetTime / 2)
      //Update speed of existing blocks
      this.arrayBlocks.forEach(block => {
        block.slideSpeed = this.enemySpeed
      })
    }
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  randomInterval(timeInterval: number) {
    let returnTime = timeInterval
    if (Math.random() < 0.5) {
      returnTime += this.getRandomNumber(
        this.presetTime / 3,
        this.presetTime * 1.5
      )
    } else {
      returnTime -= this.getRandomNumber(
        this.presetTime / 5,
        this.presetTime / 2
      )
    }
    return returnTime
  }

  squaresColliding(player: Player, block: Block) {
    const s1 = Object.assign(
      Object.create(Object.getPrototypeOf(player)),
      player
    )
    const s2 = Object.assign(Object.create(Object.getPrototypeOf(block)), block)
    //Don't need pixel perfect collision detection
    s2.size = s2.size - 10
    s2.x = s2.x + 10
    s2.y = s2.y + 10
    return !(
      (
        s1.x > s2.x + s2.size || //R1 is to the right of R2
        s1.x + s1.size < s2.x || //R1 to the left of R2
        s1.y > s2.y + s2.size || //R1 is below R2
        s1.y + s1.size < s2.y
      ) //R1 is above R2
    )
  }

  start(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    this.background_.update()
    this.background_.draw(ctx)
    this.ui.draw(ctx)

    this.drawBackgroundLine()
    this.drawScore()

    this.player.draw()

    //Check to see if game speed should be increased
    this.shouldIncreaseSpeed()

    this.arrayBlocks.forEach((arrayBlock, index) => {
      arrayBlock.slide()
      //End game as player and enemy have collided
      if (this.squaresColliding(this.player, arrayBlock)) {
        // cardScore.textContent = score;
        // card.style.display = "block";
        // cancelAnimationFrame(animationId);
      }
      //User should score a point if this is the case
      if (this.isPastBlock(arrayBlock) && this.canScore) {
        this.canScore = false
        this.score++
      }

      //Delete block that has left the screen
      if (arrayBlock.x + arrayBlock.size <= 0) {
        setTimeout(() => {
          this.arrayBlocks.splice(index, 1)
        }, 0)
      }
    })
  }

  initGame() {
    this.addListener()
    setTimeout(
      () => this.generateBlocks(),
      this.randomInterval(this.presetTime)
    )
  }
}
