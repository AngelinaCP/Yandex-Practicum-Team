import { Game } from '@/game/Game'
import { Layer } from './Layer'

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
