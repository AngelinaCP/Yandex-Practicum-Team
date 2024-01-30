import { GameSelector, GameSelectorProps } from './GameSelector'
import { themes } from './data/themes'
import { FC } from 'react'

const themeSelectorData = {
  title: 'Локация',
  content: Object.values(themes),
}

export const ThemeSelector: FC<Partial<GameSelectorProps>> = () => (
  <GameSelector selector={themeSelectorData} />
)
