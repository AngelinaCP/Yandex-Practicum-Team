import { getUserState } from './user'
import { getGameState } from './game'

export const enum Routes {
  DEFAULT = '*',
  GAME_START = '/game-start',
}

export const stateSelector = {
  [Routes.DEFAULT]: [getUserState],
  [Routes.GAME_START]: [getGameState],
}
