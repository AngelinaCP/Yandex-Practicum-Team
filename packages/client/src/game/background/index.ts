import { city } from './backgrounds/city'
import { country } from './backgrounds/country'
import { forest } from './backgrounds/forest'
import { grunge } from './backgrounds/grunge'
import { nightForest } from './backgrounds/nightForest'
import { Background as BackgroundDefault } from './Background'
import type { Game } from '@/game/Game'

export const backgrounds: Record<string, GameBackgroundSkin> = {
  city,
  country,
  forest,
  grunge,
  nightForest,
}

export class Background extends BackgroundDefault {
  constructor(game: Game, backgroundInfo: GameBackgroundSkin) {
    super(
      game,
      backgroundInfo.width,
      backgroundInfo.height,
      backgroundInfo.layers
    )
    this.game.groundMargin =
      backgroundInfo.groundMarginMultiplier * this.game.height
  }
}
