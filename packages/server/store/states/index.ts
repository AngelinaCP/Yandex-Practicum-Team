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

export function isRoute(url: string): url is Routes {
  return url in stateSelector
}

export type RootState = {
  userState: {
    user: {
      id: number
      avatar: string
      display_name: string
      email: string
      first_name: string
      login: string
      phone: string
      second_name: string
    }
  }
  game: { player: string; background: string; score: number }
}
