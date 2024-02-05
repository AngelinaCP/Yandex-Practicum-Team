import { setBackground, backgroundSelector } from '@/game/gameSlice'
import { backgrounds } from '@/game/background'
import { GameSelector, GameSelectorProps } from './GameSelector'
import { FC } from 'react'

export const BackgroundSelector: FC<Partial<GameSelectorProps>> = () => {
  const backgroundSelectorData = {
    title: 'Локация',
    content: backgrounds,
    storeSetter: setBackground,
    storeSelector: backgroundSelector,
  }

  return <GameSelector selector={backgroundSelectorData} />
}
