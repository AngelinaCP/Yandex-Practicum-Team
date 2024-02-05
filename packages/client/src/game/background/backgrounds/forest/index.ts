import layer1 from './layers/layer1.png'
import layer2 from './layers/layer2.png'
import layer3 from './layers/layer3.png'
import layer4 from './layers/layer4.png'
import layer5 from './layers/layer5.png'
import thumbnail from './thubmnail.png'

const layers = {
  [layer1]: 0,
  [layer2]: 0.2,
  [layer3]: 0.4,
  [layer4]: 0.8,
  [layer5]: 1,
}

export const forest: GameBackgroundSkin = {
  layers,
  width: 1667,
  height: 500,
  groundMarginMultiplier: 0.08,
  title: 'Forest',
  thumbnail,
}
