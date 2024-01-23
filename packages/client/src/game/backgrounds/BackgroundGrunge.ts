import { Background } from '../Background'
import { Game } from '../Game'

import layer1 from './grunge/layer1.png'
// import layer2 from './grunge/layer2.png'

const images = {
  [layer1]: 1,
  // [layer2]: 2,
}

export class BackgroundGrunge extends Background {
  constructor(game: Game) {
    super(game, 576, 160, images)
    this.game.groundMargin = 0.18 * this.game.height
  }
}
