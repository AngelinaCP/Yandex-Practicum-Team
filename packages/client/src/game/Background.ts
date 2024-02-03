import { Game } from './Game'

class Layer {
  game: Game
  speedModifier: number
  width: number
  image: HTMLImageElement
  height: number
  x: number
  y: number
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
  }

  update() {
    if (this.x < -this.width) {
      this.x = 0
    } else {
      this.x -= this.game.obstaclesSpeed * this.speedModifier
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
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
