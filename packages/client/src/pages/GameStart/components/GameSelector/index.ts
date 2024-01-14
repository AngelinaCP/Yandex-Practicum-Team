import GameSelector from './GameSelector'

import { characters } from './data/characters'
import { themes } from './data/themes'

const selectors = {
  character: {
    title: 'Персонаж',
    content: characters,
  },
  theme: {
    title: 'Тема',
    content: themes,
  },
}

export const CharacterSelector = GameSelector(selectors.character)
export const ThemeSelector = GameSelector(selectors.theme)
