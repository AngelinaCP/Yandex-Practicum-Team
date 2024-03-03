import type { RootState } from 'client/src/store/store'

export const getGameState = async (): Promise<Partial<RootState>> =>
  Promise.resolve({
    game: { player: 'archer', background: 'city', score: 15 },
  })
