import { Background } from '../Background'
import { Game } from '../Game'

import layer1 from './country/layer1.png'
import layer2 from './country/layer2.png'
import layer3 from './country/layer3.png'

const images = {
  [layer1]: 0.4,
  // [layer2]: 0.4,
  [layer3]: 1,
}

export class BackgroundCountry extends Background {
  constructor(game: Game) {
    super(game, 384, 224, images)
    this.game.groundMargin = 0.12 * this.game.height
  }
}
