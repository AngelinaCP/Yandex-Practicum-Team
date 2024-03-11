import type { RootState } from '../states'

export const getGameState = async (): Promise<Partial<RootState>> =>
  Promise.resolve({
    game: { player: 'archer', background: 'city', score: 15 },
  })
