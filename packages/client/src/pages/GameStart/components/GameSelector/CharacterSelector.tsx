import { GameSelector, GameSelectorProps } from './GameSelector'
import { characters } from './data/characters'
import { FC } from 'react'

const characterSelectorData = {
  title: 'Персонаж',
  content: Object.values(characters),
}

export const CharacterSelector: FC<Partial<GameSelectorProps>> = () => (
  <GameSelector selector={characterSelectorData} />
)
