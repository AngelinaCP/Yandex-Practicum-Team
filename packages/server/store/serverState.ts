import type { RootState } from 'client/src/store/store'

type AppState = Partial<RootState>
export enum AppRoutes {
  default = 'default',
  gameStart = '/game-start',
}
type StateURLConfig = { [key in AppRoutes]: () => Promise<AppState> }

const stateConfig: StateURLConfig = {
  default: async () =>
    Promise.resolve({
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
    }),
  '/game-start': async () =>
    Promise.resolve({
      game: { player: 'archer', background: 'city', score: 15 },
    }),
}

class ServerState {
  urlConfig: StateURLConfig
  state: AppState

  constructor(
    urlConfig: StateURLConfig = stateConfig,
    initialState: AppState = {}
  ) {
    this.state = initialState
    this.urlConfig = urlConfig
    if (this.urlConfig.default)
      this.urlConfig.default().then(s => this.addToState(s))
  }

  addToState(obj: Partial<AppState>) {
    this.state = { ...this.state, ...obj }
    return this
  }

  async addToStateIfURL(url: string) {
    if (this.urlConfig != null && isURL(url)) {
      const urlState = await this.urlConfig[url]()
      this.addToState(urlState)
    }
  }
}

export default new ServerState()

function isURL(url: string): url is AppRoutes {
  return Object.values(AppRoutes).includes(url as unknown as AppRoutes)
}
