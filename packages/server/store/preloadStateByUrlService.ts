import { stateSelector, Routes, isRoute } from './states'

export type RootState = Record<string, unknown>

export class PreloadStateByUrlService {
  private state: Partial<RootState> = {}

  constructor(private url: string) {}

  async getState() {
    await Promise.allSettled([
      this.getStateByUrl(Routes.DEFAULT),
      this.getStateByUrl(this.url),
    ])

    return this.state
  }

  private async getStateByUrl(url: string) {
    if (!isRoute(url)) {
      return
    }

    try {
      await this.stateGettersHanler(url)
    } catch (e) {
      console.error(
        `PreloadStateByUrlService: failed to get state for "${url}"`
      )
      console.error(e)
    }
  }

  private async stateGettersHanler(url: Routes) {
    const stateGetters = await Promise.allSettled(
      stateSelector[url].map(stateGetterPromise => stateGetterPromise())
    )

    const urlState = stateGetters.reduce((state, result, stateGetterIndex) => {
      const enum RESULT_STATUS {
        FULLFILLED = 'fulfilled',
        REJECTED = 'rejected',
      }

      if (result.status == RESULT_STATUS.FULLFILLED) {
        return { ...state, ...result.value }
      } else {
        console.error(
          `PreloadStateByUrlService: failed to resolve state getter "${stateSelector[url][stateGetterIndex].name}"`
        )
        return state
      }
    }, {})

    this.state = { ...this.state, ...urlState }
  }
}
