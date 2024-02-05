import layer1 from './layers/layer1.png'
import layer2 from './layers/layer2.png'
import layer3 from './layers/layer3.png'
import layer4 from './layers/layer4.png'
// import layer5 from './layers/layer5.png'
import layer6 from './layers/layer6.png'
import thumbnail from './thubmnail.png'

const layers = {
  [layer1]: 0,
  [layer2]: 0.2,
  [layer3]: 0.4,
  [layer4]: 0.8,
  // [layer5]: 0.5,
  [layer6]: 1,
}

export const nightForest: GameBackgroundSkin = {
  layers,
  width: 620,
  height: 360,
  groundMarginMultiplier: 0.1,
  title: 'Night Forest',
  thumbnail,
}
