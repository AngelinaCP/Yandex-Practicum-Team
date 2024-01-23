import { Background } from '../Background'
import { Game } from '../Game'

import layer1 from './city/layer1.png'
import layer2 from './city/layer2.png'
import layer3 from './city/layer3.png'
import layer4 from './city/layer4.png'
import layer5 from './city/layer5.png'

const images = {
  [layer1]: 0,
  [layer2]: 0.2,
  [layer3]: 0.4,
  [layer4]: 0.8,
  [layer5]: 1,
}

export class BackgroundCity extends Background {
  constructor(game: Game) {
    super(game, 1667, 500, images)
    this.game.groundMargin = 0.16 * this.game.height
  }
}
