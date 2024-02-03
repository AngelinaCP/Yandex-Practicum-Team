import { Game } from './Game'

class Layer {
  game: Game
  speedModifier: number
  width: number
  image: HTMLImageElement
  height: number
  x: number
  y: number
  ratio: number
  scaledHeight: number
  scaledWidth: number

  constructor(
    game: Game,
    width: number,
    height: number,
    speedModifier: number,
    image: HTMLImageElement
  ) {
    this.game = game
    this.width = width
    this.height = height
    this.image = image
    this.speedModifier = speedModifier
    this.x = 0
    this.y = 0
    this.ratio = this.width / this.height
    this.scaledHeight = this.game.height
    this.scaledWidth = this.scaledHeight * this.ratio
  }

  update() {
    if (this.x < -this.scaledWidth + this.game.speed * this.speedModifier) {
      this.x = 0
    } else {
      this.x -= this.game.obstaclesSpeed * this.speedModifier
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.scaledWidth,
      this.scaledHeight
    )
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x + this.scaledWidth - this.game.speed * this.speedModifier,
      this.y,
      this.scaledWidth,
      this.scaledHeight
    )
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x + this.scaledWidth * 2 - this.game.speed * this.speedModifier,
      this.y,
      this.scaledWidth,
      this.scaledHeight
    )
  }
}

export class Background {
  game: Game
  backgroundLayers: Layer[]
  imageWidth: number
  imageHeight: number

  constructor(
    game: Game,
    imageWidth: number,
    imageHeight: number,
    images: { [imagePath: string]: number }
  ) {
    this.game = game
    this.imageWidth = imageWidth
    this.imageHeight = imageHeight
    this.backgroundLayers = Object.entries(images).map(
      ([imagePath, speedModifier]) => {
        const image = new Image()
        image.src = imagePath
        return new Layer(
          this.game,
          this.imageWidth,
          this.imageHeight,
          speedModifier,
          image
        )
      }
    )
  }

  update() {
    this.backgroundLayers.forEach(layer => {
      layer.update()
    })
  }

  draw(context: CanvasRenderingContext2D) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(context)
    })
  }
}
