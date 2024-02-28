import type { RootState } from 'client/src/store/store'

type PreloadedStateMock = Partial<RootState>

export function preloadedStateFromURL(
  url: string
): Promise<PreloadedStateMock> {
  let state: PreloadedStateMock = {
    userState: {
      user: {
        id: 15,
        avatar: '',
        display_name: 'rick',
        email: 'rick@raft.nl',
        first_name: 'Ricardo',
        login: 'rickl',
        phone: '123123123123',
        second_name: 'Linus',
      },
    },
  }
  if (url.includes('game-start'))
    state = {
      ...state,
      game: { player: 'archer', background: 'city', score: 15 },
    }

  return Promise.resolve(state)
}
