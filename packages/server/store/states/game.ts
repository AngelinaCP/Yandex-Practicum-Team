import type { RootState } from './index'

export const getGameState = async (): Promise<Partial<RootState>> =>
  Promise.resolve({
    game: { player: 'archer', background: 'city', score: 15 },
  })
