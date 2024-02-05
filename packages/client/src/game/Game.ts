import { Player } from '@/game/player/Player'
import { Obstacle } from '@/game/obstacle/Obstacle'
import { UI } from './UI'
import { PowerUpHeart } from './powerUps'
import { players } from './player'
import { backgrounds, Background } from './background'

export const gameProperties = {
  presetTime: 1500,
  gameSpeed: 6,
  lives: 2,
  speedIncrement: 5,
  playerCollisionExtraSize: 70,
  obstacleCollisionExtraSize: 50,
}

export class Game {
  player: Player
  score: number
  scoreIncrement: number
  obstacles: Obstacle[]
  powerUps: PowerUpHeart[]
  canScore: boolean
  presetTime: number
  ctx: CanvasRenderingContext2D
  gameSpeed: number
  background_: Background
  height: number
  width: number
  groundMargin: number
  ui: UI
  lives: number
  gameEnd: boolean

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    player: string,
    background: string
  ) {
    this.score = 0
    this.scoreIncrement = 0
    this.canScore = true
    this.presetTime = gameProperties.presetTime
    this.ctx = context
    this.gameSpeed = gameProperties.gameSpeed
    this.ui = new UI(this)
    this.width = width
    this.height = height
    this.groundMargin = 0
    this.lives = gameProperties.lives
    this.gameEnd = false
    const bacgroundInfo = backgrounds[background]
    this.background_ = new Background(this, bacgroundInfo)
    const playerInfo = players[player]
    this.player = new Player(context, this, playerInfo)
    this.obstacles = []
    this.powerUps = []
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

  //Returns true if past player past block
  isPastBlock(block: Obstacle) {
    return (
      this.player.x + this.player.size / 2 > block.x + block.size / 4 &&
      this.player.x + this.player.size / 2 < block.x + (block.size / 4) * 3
    )
  }

  generateBlocks() {
    const timeDelay = this.randomInterval(this.presetTime)
    this.obstacles?.push(new Obstacle(this.gameSpeed, this.ctx, this))
    setTimeout(() => this.generateBlocks(), timeDelay)
  }

  shouldIncreaseSpeed() {
    //Check to see if game speed should be increased
    if (this.scoreIncrement + gameProperties.speedIncrement === this.score) {
      this.scoreIncrement = this.score
      this.gameSpeed++
      this.presetTime >= 100
        ? (this.presetTime -= 100)
        : (this.presetTime = this.presetTime / 2)
      //Update speed of existing blocks
      this.obstacles.forEach(obstacle => {
        obstacle.slideSpeed = this.gameSpeed
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

  squaresColliding(player: Player, block: Obstacle | PowerUpHeart) {
    const s1 = Object.assign(
      Object.create(Object.getPrototypeOf(player)),
      player
    )
    const s2 = Object.assign(Object.create(Object.getPrototypeOf(block)), block)
    //Don't need pixel perfect collision detection
    s2.size = s2.size - gameProperties.playerCollisionExtraSize
    s2.x = s2.x + gameProperties.obstacleCollisionExtraSize
    s2.y = s2.y + gameProperties.obstacleCollisionExtraSize

    return !(
      (
        s1.x > s2.x + s2.size || //R1 is to the right of R2
        s1.x + s1.size < s2.x || //R1 to the left of R2
        s1.y > s2.y + s2.size || //R1 is below R2
        s1.y + s1.size < s2.y
      ) //R1 is above R2
    )
  }

  start = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    this.background_.update()
    this.background_.draw(ctx)
    this.ui.draw(ctx)

    this.player.draw()

    if (Math.random() < 0.1 && this.powerUps.length < 1) {
      this.powerUps.push(new PowerUpHeart(this))
    }

    this.powerUps.forEach(powerUp => {
      powerUp.update()
      powerUp.draw()
      if (powerUp.x < -powerUp.width) {
        powerUp.markedToDelete = true
      }

      if (this.squaresColliding(this.player, powerUp)) {
        powerUp.markedToDelete = true
        this.lives += 1
      }
    })

    //Check to see if game speed should be increased
    this.shouldIncreaseSpeed()

    this.obstacles.forEach(obstacle => {
      obstacle.slide()
      //End game as player and enemy have collided
      if (this.squaresColliding(this.player, obstacle)) {
        this.lives -= 1
        obstacle.markedToDelete = true
      }
      //User should score a point if this is the case
      if (this.isPastBlock(obstacle) && this.canScore) {
        this.canScore = false
        this.score++
      }

      //Delete block that has left the screen
      if (obstacle.x + obstacle.size <= 0) {
        obstacle.markedToDelete = true
      }
    })

    this.obstacles = this.obstacles.filter(obstacle => !obstacle.markedToDelete)
    this.powerUps = this.powerUps.filter(powerUp => !powerUp.markedToDelete)

    if (this.lives <= 0) {
      this.obstacles.length = 0
      this.ui.draw(ctx)
      this.ui.gameEndMessage(this.ctx)
      this.gameEnd = true
    }
  }

  initGame() {
    this.addListener()
    setTimeout(
      () => this.generateBlocks(),
      this.randomInterval(this.presetTime)
    )
  }
}
