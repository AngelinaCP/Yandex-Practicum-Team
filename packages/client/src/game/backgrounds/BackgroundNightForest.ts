import { Background } from '../Background'
import { Game } from '../Game'

import layer1 from './nightForest/layer1.png'
import layer2 from './nightForest/layer2.png'
import layer3 from './nightForest/layer3.png'
import layer4 from './nightForest/layer4.png'
// import layer5 from './nightForest/layer5.png'
import layer6 from './nightForest/layer6.png'

const images = {
  [layer1]: 0,
  [layer2]: 0.2,
  [layer3]: 0.4,
  [layer4]: 0.8,
  // [layer5]: 0.5,
  [layer6]: 1,
}

export class BackgroundNightForest extends Background {
  constructor(game: Game) {
    super(game, 620, 360, images)
    this.game.groundMargin = 0.1 * this.game.height
  }
}
