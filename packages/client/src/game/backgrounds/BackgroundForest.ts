import { Background } from '../Background'
import { Game } from '../Game'

import layer1 from './forest/layer1.png'
import layer2 from './forest/layer2.png'
import layer3 from './forest/layer3.png'
import layer4 from './forest/layer4.png'
import layer5 from './forest/layer5.png'

const images = {
  [layer1]: 0,
  [layer2]: 0.2,
  [layer3]: 0.4,
  [layer4]: 0.8,
  [layer5]: 1,
}

export class BackgroundForest extends Background {
  constructor(game: Game) {
    super(game, 1667, 500, images)
    this.game.groundMargin = 0.08 * this.game.height
  }
}
