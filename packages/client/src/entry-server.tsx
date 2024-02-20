import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router-dom/server'

type RenderFnProps = {
  path: string
}

export function render({ path }: RenderFnProps) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  )
  return { html }
}
