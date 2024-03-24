import { playerSelector, setPlayer } from '@/game/gameSlice'
import { players } from '@/game/player'
import { GameSelector, GameSelectorProps } from './GameSelector'
import { FC } from 'react'

export const PlayerSelector: FC<Partial<GameSelectorProps>> = () => {
  const playerSelectorData = {
    title: 'Персонаж',
    content: players,
    storeSetter: setPlayer,
    storeSelector: playerSelector,
  }

  return <GameSelector selector={playerSelectorData} />
}
