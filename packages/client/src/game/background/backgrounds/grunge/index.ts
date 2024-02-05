import layer1 from './layers/layer1.png'
import thumbnail from './thumbnail.png'

const layers = {
  [layer1]: 1,
  // [layer2]: 2,
}

export const grunge: GameBackgroundSkin = {
  layers,
  width: 576,
  height: 160,
  groundMarginMultiplier: 0.18,
  title: 'Grunge',
  thumbnail,
}
