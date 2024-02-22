import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

interface Props {
  path: string
}

export function render({ path }: Props) {
  //<Provider store={store}
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  )
}
