import { gameSelectorGenerator } from './gameSelectorGenerator'

import { characters } from './data/characters'
import { themes } from './data/themes'

const selectors = {
  character: {
    title: 'Персонаж',
    content: characters,
  },
  theme: {
    title: 'Локация',
    content: themes,
  },
}

export const CharacterSelector = gameSelectorGenerator(selectors.character)
export const ThemeSelector = gameSelectorGenerator(selectors.theme)
