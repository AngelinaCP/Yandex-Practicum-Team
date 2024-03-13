import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { createStoreWithInitial } from './src/store/store'
import type { RootState } from './src/store/store'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface Props {
  path: string
  state?: RootState
}

export function getHtmlAndStyleTags({ path, state }: Props) {
  let html = ''
  let styleTags = ''
  const storeSSR = createStoreWithInitial(state ?? {})
  const sheet = new ServerStyleSheet()
  try {
    html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={path}>
          <Provider store={storeSSR}>
            <App />
          </Provider>
        </StaticRouter>
      </StyleSheetManager>
    )
    styleTags = sheet.getStyleTags()
  } catch (error) {
    console.error('ssr css error')
    console.error(error)
  } finally {
    sheet.seal()
  }
  return { html, styleTags }
}
