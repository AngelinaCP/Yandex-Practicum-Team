import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { createStoreWithInitial } from './src/store/store'
import type { RootState } from './src/store/store'

interface Props {
  path: string
  state?: RootState
}

export function render({ path, state }: Props) {
  const storeSSR = createStoreWithInitial(state ?? {})
  return renderToString(
    <StaticRouter location={path}>
      <Provider store={storeSSR}>
        <App />
      </Provider>
    </StaticRouter>
  )
}
