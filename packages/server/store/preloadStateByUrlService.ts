import type { RootState } from 'client/src/store/store'
import { stateSelector, Routes } from './states'

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
    if (!isValidUrl(url)) {
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

    const urlState = stateGetters.reduce((state, result, i) => {
      if (result.status == 'fulfilled') {
        return { ...state, ...result.value }
      } else {
        console.error(
          `PreloadStateByUrlService: failed to resolve state getter "${stateSelector[url][i].name}"`
        )
        return state
      }
    }, {})

    this.state = { ...this.state, ...urlState }
  }
}

function isValidUrl(url: string): url is Routes {
  return url in stateSelector
}
