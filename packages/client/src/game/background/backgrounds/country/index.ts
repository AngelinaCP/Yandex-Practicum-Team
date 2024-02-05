import layer1 from './layers/layer1.png'
import layer2 from './layers/layer2.png'
import layer3 from './layers/layer3.png'
import thumbnail from './thumbnail.png'

const layers = {
  [layer1]: 0.4,
  // [layer2]: 0.4,
  [layer3]: 1,
}

export const country: GameBackgroundSkin = {
  layers,
  width: 384,
  height: 224,
  groundMarginMultiplier: 0.12,
  title: 'country',
  thumbnail,
}
