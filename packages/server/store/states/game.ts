import type { RootState } from '../preloadStateByUrlService'

export const getGameState = async (): Promise<Partial<RootState>> =>
  Promise.resolve({
    game: { player: 'archer', background: 'city', score: 15 },
  })
